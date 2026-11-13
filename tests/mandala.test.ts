import { test } from "node:test";
import assert from "node:assert/strict";
import { api } from "../server/api.ts";
import { fixture } from "./support.ts";
import { demoChart } from "../src/demo.ts";
import {
  applyCandidate,
  makePrompt,
  pillarsOutput,
  atomsOutput,
  chartSchema,
} from "../src/domain.ts";
function req(path: string, method = "GET", body?: unknown, origin?: string) {
  return new Request("https://test.example" + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(origin ? { Origin: origin } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
}
const env = {
  OPENAI_API_KEY: "test-only-not-a-real-key",
  OPENAI_MODEL: "test-model",
};
function gen() {
  const c = demoChart();
  return {
    requestId: crypto.randomUUID(),
    operation: "create" as const,
    goal: c.goal,
    deadline: c.deadline,
    currentState: c.currentState,
    constraints: c.constraints,
    system: "測試用指引",
    user: "測試用任務",
  };
}
test("第一層與第二層都強制恰好八項", () => {
  const c = demoChart();
  assert.throws(() => pillarsOutput.parse({ subGoals: c.subGoals.slice(1) }));
  assert.throws(() =>
    atomsOutput.parse({ actions: c.expansions[0].concat(c.expansions[0][0]) }),
  );
  assert.equal(chartSchema.parse(c).subGoals.length, 8);
});
test("第二層 Prompt 保留整體與局部條件及其他支柱", () => {
  const c = demoChart();
  const p = makePrompt("expand", c, c.subGoals, 0, {
    deadline: "兩個月",
    currentState: "無基礎",
    constraints: "每天五分鐘",
  });
  assert.match(p.user, /一年內/);
  assert.match(p.user, /兩個月/);
  assert.match(p.user, /每天五分鐘/);
  assert.match(p.user, /旅行詞彙/);
  assert.match(p.system, /總時間與成本/);
});
test("生成候選不會修改原表", () => {
  const c = demoChart(),
    before = structuredClone(c);
  applyCandidate(c, "all", {
    subGoals: c.subGoals.map((p) => ({ ...p, title: "新" + p.title })),
  });
  assert.deepEqual(c, before);
});
test("採用單格替換只清該分支並移除該分支條件", () => {
  const c = demoChart();
  c.doneActions = { "0:0": true, "1:0": true };
  c.pillarContexts[0] = { deadline: "一月", currentState: "", constraints: "" };
  const next = applyCandidate(
    c,
    "pillar",
    { subGoal: { title: "新支柱", description: "說明", actionHint: "做法" } },
    0,
  );
  assert.equal(next.expansions[0], undefined);
  assert.deepEqual(next.expansions[1], c.expansions[1]);
  assert.equal(next.doneActions["1:0"], true);
  assert.equal(next.doneActions["0:0"], undefined);
  assert.equal(next.pillarContexts[0], undefined);
  assert.deepEqual(next.subGoals[1], c.subGoals[1]);
});
test("採用整張重生才清除原子內容與檢核", () => {
  const c = demoChart();
  c.doneActions["0:0"] = true;
  const next = applyCandidate(c, "all", { subGoals: c.subGoals });
  assert.equal(Object.keys(next.expansions).length, 0);
  assert.equal(Object.keys(next.doneActions).length, 0);
  assert.equal(Object.keys(c.expansions).length, 8);
});
test("採用單分支展開保留其他分支、儲存局部條件", () => {
  const c = demoChart();
  c.stale = [0, 1];
  c.doneActions = { "0:0": true, "1:0": true };
  const ctx = { deadline: "兩個月", currentState: "新手", constraints: "" };
  const next = applyCandidate(
    c,
    "expand",
    { actions: c.expansions[0] },
    0,
    ctx,
  );
  assert.deepEqual(next.pillarContexts[0], ctx);
  assert.deepEqual(next.stale, [1]);
  assert.equal(next.doneActions["1:0"], true);
  assert.equal(next.doneActions["0:0"], undefined);
});
test("未登入拒絕讀取與生成；跨來源寫入拒絕", async () => {
  const s = fixture();
  assert.equal((await api(req("/api/charts"), env, s, null)).status, 401);
  assert.equal(
    (
      await api(
        req("/api/charts", "PUT", {}, "https://other.example"),
        env,
        s,
        "a",
      )
    ).status,
    403,
  );
});
test("儲存、重新讀取與使用者資料隔離", async () => {
  const s = fixture(),
    c = demoChart();
  let r = await api(
    req("/api/charts", "PUT", { chart: c, expected: null }),
    {},
    s,
    "a",
  );
  assert.equal(r.status, 200);
  c.doneActions["0:0"] = true;
  r = await api(
    req("/api/charts", "PUT", { chart: c, expected: 0 }),
    {},
    s,
    "a",
  );
  assert.equal(r.status, 200);
  const after = (await (
    await api(req("/api/charts/" + c.id), {}, s, "a")
  ).json()) as any;
  assert.equal(after.chart.doneActions["0:0"], true);
  const other = (await (
    await api(req("/api/charts"), {}, s, "b")
  ).json()) as any;
  assert.equal(other.charts.length, 0);
  assert.equal((await api(req("/api/charts/" + c.id), {}, s, "b")).status, 404);
});
test("版本檢查避免兩個視窗互蓋，舊版不能刪除", async () => {
  const s = fixture(),
    c = demoChart();
  await api(
    req("/api/charts", "PUT", { chart: c, expected: null }),
    {},
    s,
    "a",
  );
  await api(
    req("/api/charts", "PUT", { chart: { ...c, goal: "新目標" }, expected: 0 }),
    {},
    s,
    "a",
  );
  assert.equal(
    (
      await api(
        req("/api/charts", "PUT", { chart: c, expected: 0 }),
        {},
        s,
        "a",
      )
    ).status,
    409,
  );
  assert.equal(
    (
      await api(
        req("/api/charts/" + c.id + "?revision=0", "DELETE"),
        {},
        s,
        "a",
      )
    ).status,
    409,
  );
  assert.equal(
    (
      await api(
        req("/api/charts/" + c.id + "?revision=1", "DELETE"),
        {},
        s,
        "a",
      )
    ).status,
    200,
  );
});
test("模型尚未設定明確回報，不以假資料冒充生成", async () => {
  const s = fixture();
  let called = false;
  const r = await api(
    req("/api/generations", "POST", gen()),
    {},
    s,
    "a",
    async () => {
      called = true;
      return {};
    },
  );
  assert.equal(r.status, 503);
  assert.equal(called, false);
  assert.equal((await s.list("a")).length, 0);
});
test("真實 API 路徑使用注入模型驗證：結果可查詢、同請求不重複呼叫且不覆蓋表", async () => {
  const s = fixture(),
    c = demoChart(),
    g = gen();
  let calls = 0;
  const model = async () => {
    calls++;
    return { subGoals: c.subGoals };
  };
  const r = await api(req("/api/generations", "POST", g), env, s, "a", model);
  assert.equal(r.status, 200);
  const job = (await r.json()) as any;
  assert.equal(job.state, "succeeded");
  assert.equal(job.payload.subGoals.length, 8);
  await api(req("/api/generations", "POST", g), env, s, "a", model);
  assert.equal(calls, 1);
  assert.equal((await s.list("a")).length, 0);
  assert.equal(
    (await api(req("/api/generations/" + g.requestId), env, s, "b")).status,
    404,
  );
});
test("模型錯誤項目數會失敗，不保存不合格候選", async () => {
  const s = fixture();
  const r = await api(
    req("/api/generations", "POST", gen()),
    env,
    s,
    "a",
    async () => ({ subGoals: demoChart().subGoals.slice(0, 7) }),
  );
  const job = (await r.json()) as any;
  assert.equal(job.state, "failed");
  assert.equal((await s.list("a")).length, 0);
});
test("持久化生成限流每分鐘最多六次", async () => {
  const s = fixture(),
    model = async () => ({ subGoals: demoChart().subGoals });
  for (let i = 0; i < 6; i++)
    assert.equal(
      (await api(req("/api/generations", "POST", gen()), env, s, "a", model))
        .status,
      200,
    );
  assert.equal(
    (await api(req("/api/generations", "POST", gen()), env, s, "a", model))
      .status,
    429,
  );
});
test("只允許有效索引與非空白標題，移除沒有實際行動的檢核鍵", async () => {
  const s = fixture(),
    c = demoChart();
  const bad = structuredClone(c);
  bad.subGoals[0].title = "   ";
  assert.equal(
    (
      await api(
        req("/api/charts", "PUT", { chart: bad, expected: null }),
        {},
        s,
        "a",
      )
    ).status,
    400,
  );
  delete c.expansions[0];
  c.doneActions["0:0"] = true;
  const r = await api(
    req("/api/charts", "PUT", { chart: c, expected: null }),
    {},
    s,
    "a",
  );
  const result = (await r.json()) as any;
  assert.equal(result.chart.doneActions["0:0"], undefined);
});
