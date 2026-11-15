import { createHmac, timingSafeEqual } from "node:crypto";
import type { Client } from "@libsql/client";
import { z } from "zod";
import { ApiProblem, api, json } from "./api.ts";
import { billingConfig, checkout, paymentStatus, polarWebhook, type BillingEnv } from "./billing.ts";
import { CloudStore, goalAllowance } from "./cloud-store.ts";
import { modelConfig, type ModelEnv } from "./llm.ts";
import type { FileStore } from "./files.ts";
import { generationSchema } from "../src/domain.ts";

const trialCookie = "__Host-mandala-trial";
const trialSeconds = 24 * 60 * 60;
const publicDailyTrials = 30;
type Member = { id: string; email?: string };
type Options = {
  db: Client;
  env: BillingEnv & ModelEnv;
  origin: string;
  trialSecret: string;
  members?: { publishableKey: string; identity: (request: Request) => Promise<Member | null> };
  files?: FileStore;
  generate?: Parameters<typeof api>[4];
};

function digest(secret: string, value: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

function trialId(request: Request, secret: string) {
  const cookie = request.headers.get("cookie")?.split(/;\s*/).find((part) => part.startsWith(trialCookie + "="));
  const [id, expires, signed] = cookie?.slice(trialCookie.length + 1).split(".") ?? [];
  if (!z.uuid().safeParse(id).success || !/^\d{10}$/.test(expires ?? "") ||
      Number(expires) <= Date.now() / 1000 || !/^[0-9a-f]{64}$/.test(signed ?? "")) return null;
  const expected = digest(secret, `cookie:${id}.${expires}`);
  return timingSafeEqual(Buffer.from(expected, "hex"), Buffer.from(signed, "hex")) ? id : null;
}

function cookieFor(id: string, secret: string) {
  const expires = Math.floor(Date.now() / 1000) + trialSeconds;
  const value = `${id}.${expires}.${digest(secret, `cookie:${id}.${expires}`)}`;
  return `${trialCookie}=${value}; Path=/; Max-Age=${trialSeconds}; HttpOnly; Secure; SameSite=Lax`;
}

export function cloudHandler(options: Options) {
  return async (request: Request): Promise<Response> => {
    const { env, db, origin, trialSecret, members } = options;
    try {
      const { pathname, searchParams } = new URL(request.url);
      const billing = members ? billingConfig(env) : null;
      if (pathname === "/api/billing/webhook" && request.method === "POST")
        return billing ? await polarWebhook(request, db, billing) : json({ error: "Billing unavailable" }, 503);
      if (pathname === "/api/maintenance" && request.method === "GET") {
        const secret = (env as { CRON_SECRET?: string }).CRON_SECRET;
        if (!secret || request.headers.get("authorization") !== "Bearer " + secret)
          return json({ error: "Unauthorised" }, 401);
        await db.batch([
          { sql: "DELETE FROM mandala_trial_jobs WHERE created_at<=?", args: [Date.now() - trialSeconds * 1000] },
          { sql: "UPDATE mandala_trial_jobs SET payload=NULL WHERE created_at<=? AND payload IS NOT NULL", args: [Date.now() - 900_000] },
        ], "write");
        return json({ ok: true });
      }
      const source = request.headers.get("origin");
      if (request.method !== "GET" && source && source !== origin)
        return json({ error: "不允許跨來源操作。" }, 403);
      const member = await members?.identity(request);
      const visitor = member ? null : trialId(request, trialSecret);
      if (pathname === "/api/config" && request.method === "GET") {
        const config = modelConfig(env);
        const response = json({
          mode: "vercel",
          storage: members ? "cloud" : "session",
          modelReady: !!config,
          provider: config?.provider ?? null,
          signedIn: !!member,
          publishableKey: members?.publishableKey,
          allowance: member ? await goalAllowance(db, member.id) : null,
          checkoutReady: !!billing,
          sandboxPayments: billing?.sandbox ?? false,
        });
        if (!member && !visitor) response.headers.set("Set-Cookie", cookieFor(crypto.randomUUID(), trialSecret));
        return response;
      }

      let generation: z.infer<typeof generationSchema> | undefined;
      if (pathname === "/api/generations" && request.method === "POST") {
        const length = Number(request.headers.get("content-length") ?? 0);
        if (length > 300_000) return json({ error: "請求太大。" }, 413);
        const raw = await request.clone().text();
        if (Buffer.byteLength(raw) > 300_000) return json({ error: "請求太大。" }, 413);
        const parsed = generationSchema.safeParse(JSON.parse(raw));
        if (!parsed.success) return json({ error: "生成資料格式不符。" }, 400);
        generation = parsed.data;
      }
      if (!member) {
        const readTrial = /^\/api\/generations\/[a-f0-9-]{36}$/i.test(pathname) && request.method === "GET";
        const startTrial = generation?.full && generation.operation === "create";
        if (visitor && (startTrial || readTrial)) {
          const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() || "unknown";
          const store = new CloudStore(db, {
            trialNetwork: digest(trialSecret, "network:" + ip),
            dailyTrialLimit: members ? undefined : publicDailyTrials,
          });
          return await api(request, env, store, "trial:" + visitor, options.generate);
        }
        return json({ error: members ? "請登入後繼續。" : "公開試用版不提供此操作。", code: "SIGN_IN" }, 401);
      }
      if (pathname === "/api/billing/checkout" && request.method === "POST") {
        if (!billing) return json({ error: "付款尚未開放。" }, 503);
        return await checkout(db, member.id, origin, billing, member.email);
      }
      if (pathname === "/api/billing/status" && request.method === "GET") {
        const id = z.uuid().safeParse(searchParams.get("id"));
        return id.success ? await paymentStatus(db, member.id, id.data) : json({ error: "訂單無效。" }, 400);
      }
      const store = new CloudStore(db, { newGoal: generation?.operation === "create" ? generation.requestId : undefined });
      if (generation && generation.operation !== "create") {
        const chart = generation.chartId ? await store.get(member.id, generation.chartId) : null;
        if (!chart || chart.goal !== generation.goal)
          return json({ error: "請從已儲存的目標重新開啟這項操作。" }, 403);
      }
      return await api(request, env, store, member.id, options.generate, options.files);
    } catch (error) {
      if (error instanceof ApiProblem) return json({ error: error.message, code: error.code }, error.status);
      if (error instanceof SyntaxError) return json({ error: "請求格式不符。" }, 400);
      return json({ error: "雲端服務暫時無法完成操作，請稍後重試。" }, 500);
    }
  };
}
