import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { Window } from "happy-dom";
import { demoChart } from "../src/demo.ts";
import { chartSchema } from "../src/domain.ts";
const pause = () => new Promise((r) => setTimeout(r, 20));
test("DOM 流程：建立目標→Prompt→匯入候選→採用→展開→編輯→檢核→匯出→3D", async () => {
  const w = new Window({ url: "https://test.example/" }),
    charts: any[] = [];
  w.fetch = (async (url: any, init: any = {}) => {
    const path = typeof url === "string" ? url : url.url;
    let body: any = {},
      status = 200;
    if (path === "/api/config") body = { modelReady: false };
    else if (path === "/api/charts" && init.method === "PUT") {
      const { chart, expected } = JSON.parse(init.body);
      const existing = charts.find((c) => c.id === chart.id);
      if (expected !== null && (!existing || existing.revision !== expected)) {
        status = 409;
        body = { error: "版本衝突" };
      } else {
        const saved = chartSchema.parse({
          ...chart,
          revision: expected === null ? 0 : expected + 1,
        });
        const i = charts.findIndex((c) => c.id === saved.id);
        if (i >= 0) charts[i] = saved;
        else charts.push(saved);
        body = { chart: saved };
      }
    } else if (path === "/api/charts") body = { charts };
    else if (path.includes("/export.pdf") && init.method === "POST") {
      assert.equal(init.headers["Content-Type"], "image/png");
      assert.ok(init.body.size > 0);
      body = { url: path };
    } else if (path.startsWith("/api/charts/"))
      body = { chart: charts.find((c) => c.id === path.split("/").pop()) };
    else throw Error("Unexpected fetch " + path);
    return new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  }) as any;
  (w as any).structuredClone = structuredClone;
  w.matchMedia = (() => ({
    matches: true,
    addListener() {},
    removeListener() {},
  })) as any;
  w.HTMLElement.prototype.scrollIntoView = function () {};
  w.scrollTo = () => {};
  w.HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  w.HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
  w.document.write(
    readFileSync("public/index.html", "utf8").replace(
      /<script[^>]*>.*?<\/script>/gs,
      "",
    ),
  );
  Object.defineProperty(w.document, "fonts", {
    value: { ready: Promise.resolve() },
  });
  (w as any).Image = class {
    src = "";
    async decode() {}
  };
  w.HTMLCanvasElement.prototype.getContext = (() => ({
    fillStyle: "",
    fillRect() {},
    drawImage() {},
  })) as any;
  w.HTMLCanvasElement.prototype.toBlob = ((callback: any) =>
    callback(new w.Blob(["rendered-png"], { type: "image/png" }))) as any;
  w.eval(readFileSync("dist/client/app.js", "utf8"));
  await pause();
  const q = (s: string) => {
    const el = w.document.querySelector<any>(s);
    assert.ok(
      el,
      "Missing " +
        s +
        "; toast=" +
        w.document.querySelector("#toast")?.textContent +
        "; dialog=" +
        w.document.querySelector("#dialogContent")?.textContent?.slice(0, 150),
    );
    return el;
  };
  const click = async (a: string) => {
    q(`[data-action="${a}"]`).click();
    await pause();
  };
  assert.match(q("#connection").textContent, /尚待連線/);
  q("#goalInput").value = "一年內能用日文獨立旅行";
  q("#homeDeadline").value = "一年內";
  q("#homeState").value = "初學者";
  q("#homeConstraints").value = "每週一小時";
  q("#createForm").dispatchEvent(
    new w.Event("submit", { bubbles: true, cancelable: true }),
  );
  await pause();
  assert.match(q("#userPrompt").value, /每週一小時/);
  assert.equal(q('[data-action="runGeneration"]').disabled, true);
  q("#externalJson").value = JSON.stringify({ subGoals: demoChart().subGoals });
  await click("externalResult");
  assert.equal(charts.length, 0);
  assert.equal(w.document.querySelectorAll(".candidate-card").length, 8);
  await click("applyCandidate");
  assert.equal(charts.length, 1);
  assert.equal(w.document.querySelectorAll(".grid>.cell").length, 9);
  assert.equal(q('[data-action="worlds"]').disabled, true);
  await click("selectPillar");
  q("#pillarDeadline").value = "兩個月";
  q("#pillarState").value = "完全不會";
  await click("expand");
  assert.match(q("#userPrompt").value, /兩個月/);
  assert.match(q("#userPrompt").value, /每週一小時/);
  q("#externalJson").value = JSON.stringify({
    actions: demoChart().expansions[0],
  });
  await click("externalResult");
  assert.equal(Object.keys(charts[0].expansions).length, 0);
  await click("applyCandidate");
  assert.equal(charts[0].expansions[0].length, 8);
  assert.equal(charts[0].pillarContexts[0].deadline, "兩個月");
  await click("toggleDone");
  assert.equal(charts[0].doneActions["0:0"], true);
  await click("editAtom");
  q("#editTitle").value = "每天練習日文五分鐘";
  q("#editForm").dispatchEvent(
    new w.Event("submit", { bubbles: true, cancelable: true }),
  );
  await pause();
  assert.equal(charts[0].expansions[0][0].title, "每天練習日文五分鐘");
  assert.equal(charts[0].doneActions["0:0"], undefined);
  await click("editMeta");
  q("#editGoal").value = "新的日文旅行目標";
  q("#editForm").dispatchEvent(
    new w.Event("submit", { bubbles: true, cancelable: true }),
  );
  await pause();
  assert.deepEqual(charts[0].stale, [0]);
  assert.match(q(".stale-warning").textContent, /修改/);
  await click("export");
  assert.equal(
    w.document.querySelectorAll(".export-preview svg rect").length,
    82,
  );
  assert.match(q(".export-preview").textContent, /尚未展開/);
  assert.equal(q('a[href$="/export.json"]').target, "_blank");
  assert.equal(q('a[href$="/export.svg"]').target, "_blank");
  await click("preparePdf");
  const pdfLink = q("#pdfResult a");
  assert.match(pdfLink.href, /export\.pdf\?revision=/);
  assert.equal(pdfLink.target, "_blank");
  assert.equal(pdfLink.textContent, "下載 PDF ↓");
  await click("close");
  await click("home");
  assert.equal(w.document.querySelectorAll(".saved-card").length, 1);
  await click("demo");
  assert.equal(charts.length, 2);
  assert.equal(q('[data-action="worlds"]').disabled, false);
  await click("worlds");
  assert.match(q(".world-frame").src, /\/worlds\//);
  assert.equal(
    JSON.parse(w.sessionStorage.getItem("mandala-world-view")!).pillars.length,
    8,
  );
  w.happyDOM.abort();
});
