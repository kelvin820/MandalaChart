import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createClient } from "@libsql/client";
import { Webhook } from "standardwebhooks";
import { cloudHandler } from "../server/cloud.ts";
import { demoChart } from "../src/demo.ts";
import { makePrompt } from "../src/domain.ts";

test("公開試用無須登入，不能寫入會員資料或收款，達到全站上限後不再呼叫 AI", async (t) => {
  const db = createClient({ url: ":memory:" });
  t.after(() => db.close());
  for (const path of ["drizzle/0000_mandala.sql", "drizzle/vercel.sql"])
    await db.executeMultiple(await readFile(path, "utf8"));
  const origin = "https://wishlands.vercel.app";
  let modelCalls = 0;
  const app = cloudHandler({
    db, origin, trialSecret: "test-trial-signing-key-for-public-mode",
    env: {
      NVIDIA_API_KEY: "fake-key",
      POLAR_SERVER: "production",
      POLAR_ACCESS_TOKEN: "mock-token",
      POLAR_PRODUCT_ID: "mock-product",
      POLAR_WEBHOOK_SECRET: "mock-secret",
    },
    generate: async () => {
      modelCalls++;
      const { subGoals, expansions } = demoChart();
      return { subGoals, branches: Object.values(expansions).map((actions) => ({ actions })) };
    },
  });
  const session = async () => {
    const response = await app(new Request(origin + "/api/config"));
    const config = await response.json() as Record<string, unknown>;
    assert.equal(config.signedIn, false);
    assert.equal(config.publishableKey, undefined);
    assert.equal(config.checkoutReady, false);
    assert.equal(config.modelReady, true);
    return response.headers.get("set-cookie")!.split(";")[0];
  };
  const cookie = await session();
  const generation = (guestCookie: string, source = origin) => {
    const chart = demoChart();
    return app(new Request(origin + "/api/generations", {
      method: "POST",
      headers: { cookie: guestCookie, origin: source, "Content-Type": "application/json" },
      body: JSON.stringify({ requestId: chart.id, operation: "create", full: true, goal: chart.goal, ...makePrompt("create", chart) }),
    }));
  };
  assert.equal((await generation(cookie, "https://other.example")).status, 403);
  const trial = await generation(cookie);
  assert.equal(trial.status, 200);
  const { payload } = await trial.json() as { payload: { branches: { actions: unknown[] }[] } };
  assert.equal(payload.branches.flatMap(({ actions }) => actions).length, 64);
  assert.equal((await generation(cookie)).status, 409);
  assert.equal((await app(new Request(origin + "/api/charts", {
    method: "PUT", headers: { cookie, origin, Authorization: "Bearer fake-session" },
    body: JSON.stringify({ chart: demoChart(), expected: null }),
  }))).status, 401);
  assert.equal((await app(new Request(origin + "/api/billing/checkout", { method: "POST", headers: { cookie, origin } }))).status, 401);
  assert.equal((await app(new Request(origin + "/api/billing/webhook", { method: "POST" }))).status, 503);
  await db.batch(Array.from({ length: 29 }, (_, i) => ({
    sql: "INSERT INTO mandala_trial_jobs VALUES (?,?,?,?,?,?)",
    args: [crypto.randomUUID(), `guest-${i}`, `network-${i}`, Date.now(), "succeeded", null],
  })), "write");
  assert.equal((await generation(await session())).status, 429);
  assert.equal(modelCalls, 1);
});

test("Vercel rules: private charts, free goals, guest trial and signed one-time credits", async (t) => {
  const db = createClient({ url: ":memory:" });
  t.after(() => db.close());
  for (const path of ["drizzle/0000_mandala.sql", "drizzle/vercel.sql"])
    await db.executeMultiple(await readFile(path, "utf8"));
  const product = crypto.randomUUID();
  const secret = "local-test-webhook-secret";
  const origin = "https://mandala.example";
  let modelCalls = 0;
  const app = cloudHandler({
    db, origin, trialSecret: "secret-used-only-for-the-test",
    env: {
      NVIDIA_API_KEY: "fake-key",
      POLAR_ACCESS_TOKEN: "mock-token",
      POLAR_PRODUCT_ID: product,
      POLAR_WEBHOOK_SECRET: secret,
      POLAR_SERVER: "sandbox",
    },
    members: {
      publishableKey: "pk_test_fake",
      identity: async (request) => {
        const user = request.headers.get("x-test-user");
        return user ? { id: user } : null;
      },
    },
    generate: async () => {
      modelCalls++;
      const { subGoals, expansions } = demoChart();
      return { subGoals, branches: Object.values(expansions).map((actions) => ({ actions })) };
    },
  });
  const request = (path: string, user = "", method = "GET", data?: unknown, cookie?: string) =>
    app(new Request(origin + path, {
      method,
      headers: {
        "x-test-user": user,
        "Content-Type": "application/json",
        ...(cookie ? { cookie } : {}),
      },
      body: data === undefined ? undefined : JSON.stringify(data),
    }));
  const newGoal = () => {
    const chart = demoChart();
    return {
      requestId: chart.id, operation: "create", full: true, goal: chart.goal,
      ...makePrompt("create", chart),
    };
  };
  const save = (chart = demoChart()) =>
    request("/api/charts", "member-a", "PUT", { chart, expected: null });
  const allowance = async (user: string) =>
    (await (await request("/api/config", user)).json() as {
      allowance: { total: number; used: number; remaining: number };
    }).allowance;

  const config = await request("/api/config");
  const guest = config.headers.get("set-cookie")!.split(";")[0];
  const trial = await request("/api/generations", "", "POST", newGoal(), guest);
  assert.equal(trial.status, 200);
  assert.equal((await trial.json() as { payload: { branches: unknown[] } }).payload.branches.length, 8);
  assert.equal((await request("/api/generations", "", "POST", newGoal(), guest)).status, 409);
  assert.equal((await request("/api/charts", "", "PUT", { chart: demoChart(), expected: null }, guest)).status, 401);
  assert.equal((await request("/api/generations", "", "POST", newGoal(), guest + "x")).status, 401);
  assert.equal(modelCalls, 1);

  const first = demoChart();
  const input = { ...newGoal(), requestId: first.id };
  const run = await request("/api/generations", "member-a", "POST", input);
  assert.equal(run.status, 200);
  assert.deepEqual(await allowance("member-a"), { total: 3, used: 0, remaining: 2 });
  assert.equal((await save(first)).status, 200);
  assert.equal((await request("/api/generations", "member-a", "POST", input)).status, 200);
  assert.equal(modelCalls, 2, "retries do not re-run the model");
  assert.equal((await request("/api/charts/" + first.id, "member-b")).status, 404);
  assert.equal((await save()).status, 200);
  assert.equal((await save()).status, 200);
  assert.equal((await request("/api/generations", "member-a", "POST", newGoal())).status, 409);
  assert.equal((await save()).status, 409);
  assert.equal(modelCalls, 2, "blocked generations never reach NVIDIA");
  assert.equal((await request("/api/charts/" + first.id + "?revision=0", "member-a", "DELETE")).status, 200);
  assert.deepEqual(await allowance("member-a"), { total: 3, used: 3, remaining: 0 });
  assert.deepEqual(await allowance("member-b"), { total: 3, used: 0, remaining: 3 });

  const checkoutId = crypto.randomUUID();
  const checkoutUrl = "https://sandbox.polar.sh/checkout/test";
  let purchaseId = "";
  let checkoutRequests = 0;
  t.mock.method(globalThis, "fetch", async (url: string, options: RequestInit) => {
    assert.equal(url, "https://sandbox-api.polar.sh/v1/checkouts/");
    checkoutRequests++;
    const body = JSON.parse(String(options.body));
    assert.deepEqual(body.products, [product]);
    assert.equal(body.external_customer_id, "member-a");
    purchaseId = body.metadata.mandala_purchase;
    return Response.json({
      id: checkoutId, url: checkoutUrl, expires_at: new Date(Date.now() + 3_600_000).toISOString(),
      amount: 300, product: { id: product, is_recurring: false },
    });
  });
  const pay = () => request("/api/billing/checkout", "member-a", "POST");
  assert.equal((await (await pay()).json() as { url: string }).url, checkoutUrl);
  assert.equal((await (await pay()).json() as { url: string }).url, checkoutUrl);
  assert.equal(checkoutRequests, 1, "avoid duplicate checkout sessions");
  assert.equal((await request("/api/billing/status?id=" + purchaseId, "member-b")).status, 404);
  assert.equal((await allowance("member-a")).remaining, 0);

  const webhook = new Webhook(Buffer.from(secret), { format: "raw" });
  const order = {
    id: crypto.randomUUID(), checkout_id: checkoutId, product_id: product,
    paid: true, status: "paid", billing_reason: "purchase", subtotal_amount: 300,
    metadata: { mandala_purchase: purchaseId }, customer: { external_id: "member-a" },
  };
  const event = (type: string, data: typeof order, signed = true) => {
    const body = JSON.stringify({ type, data });
    const eventId = crypto.randomUUID();
    const now = new Date();
    return app(new Request(origin + "/api/billing/webhook", {
      method: "POST",
      headers: {
        "webhook-id": eventId, "webhook-timestamp": String(Math.floor(now.getTime() / 1000)),
        "webhook-signature": signed ? webhook.sign(eventId, now, body) : "forged",
      },
      body,
    }));
  };
  assert.equal((await event("order.paid", order, false)).status, 401);
  await event("order.paid", { ...order, product_id: crypto.randomUUID() });
  assert.equal((await allowance("member-a")).remaining, 0);
  assert.equal((await event("order.paid", order)).status, 200);
  assert.equal((await event("order.paid", order)).status, 200);
  assert.deepEqual(await allowance("member-a"), { total: 4, used: 3, remaining: 1 });
  assert.equal((await save()).status, 200);
  assert.equal((await save()).status, 409);
  await event("order.refunded", { ...order, status: "refunded" });
  await event("order.paid", order);
  assert.deepEqual(await allowance("member-a"), { total: 3, used: 4, remaining: 0 });
});
