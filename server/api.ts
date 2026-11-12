import { z } from "zod";
import {
  chartSchema,
  generationSchema,
  validProgress,
  validateOutput,
  type Chart,
  type Generation,
} from "../src/domain.ts";
import { completeStructured, type ModelEnv } from "./llm.ts";
export type Job = {
  requestId: string;
  state: "pending" | "succeeded" | "failed";
  payload?: unknown;
  error?: string;
  createdAt: number;
};
export interface Store {
  list(owner: string): Promise<Chart[]>;
  get(owner: string, id: string): Promise<Chart | null>;
  put(owner: string, c: Chart, expected: number | null): Promise<boolean>;
  delete(owner: string, id: string, expected: number): Promise<boolean>;
  job(owner: string, id: string): Promise<Job | null>;
  reserve(owner: string, j: Job): Promise<boolean>;
  finish(owner: string, j: Job): Promise<void>;
}
export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
export async function api(
  request: Request,
  env: ModelEnv,
  store: Store,
  owner: string | null,
  generate: (
    g: Generation,
    e: ModelEnv,
  ) => Promise<unknown> = completeStructured,
) {
  const url = new URL(request.url),
    path = url.pathname;
  if (!owner) return json({ error: "請先登入後再使用。" }, 401);
  const origin = request.headers.get("Origin");
  if (request.method !== "GET" && origin && origin !== url.origin)
    return json({ error: "不允許跨來源操作。" }, 403);
  try {
    if (path === "/api/config")
      return json({
        modelReady: !!(env.OPENAI_API_KEY && env.OPENAI_MODEL),
        storage: "cloud",
      });
    if (path === "/api/charts" && request.method === "GET")
      return json({ charts: await store.list(owner) });
    if (path === "/api/charts" && request.method === "PUT") {
      const body = z
        .object({
          chart: chartSchema,
          expected: z.number().int().nonnegative().nullable(),
        })
        .parse(await boundedBody(request));
      const existing = await store.get(owner, body.chart.id);
      if (body.expected === null && existing)
        return json({ error: "這張表已存在，請重新載入。" }, 409);
      if (
        body.expected !== null &&
        (!existing || existing.revision !== body.expected)
      )
        return json(
          { error: "內容已在另一個視窗更新。請重新載入後再試。" },
          409,
        );
      const now = new Date().toISOString(),
        c = validProgress({
          ...body.chart,
          revision: body.expected === null ? 0 : body.expected + 1,
          createdAt: existing?.createdAt ?? now,
          updatedAt: now,
        });
      if (!(await store.put(owner, c, body.expected)))
        return json({ error: "內容已更新，請重新載入。" }, 409);
      return json({ chart: c });
    }
    const chartMatch = path.match(/^\/api\/charts\/([a-f0-9-]+)$/);
    if (chartMatch) {
      const id = z.string().uuid().parse(chartMatch[1]);
      if (request.method === "GET") {
        const chart = await store.get(owner, id);
        return chart ? json({ chart }) : json({ error: "找不到這張表。" }, 404);
      }
      if (request.method === "DELETE") {
        const rev = z.coerce
          .number()
          .int()
          .nonnegative()
          .parse(url.searchParams.get("revision"));
        return (await store.delete(owner, id, rev))
          ? json({ ok: true })
          : json({ error: "內容已更新或已刪除，請重新載入。" }, 409);
      }
    }
    const jobMatch = path.match(/^\/api\/generations\/([a-f0-9-]+)$/);
    if (jobMatch && request.method === "GET") {
      const job = await store.job(owner, z.string().uuid().parse(jobMatch[1]));
      if (!job) return json({ error: "找不到這次生成。" }, 404);
      if (job.state === "pending" && Date.now() - job.createdAt > 240_000)
        return json({
          ...job,
          state: "failed",
          error: "生成已逾時，原內容仍保留，請重新發起。",
        });
      return json(job);
    }
    if (path === "/api/generations" && request.method === "POST") {
      const input = generationSchema.parse(await boundedBody(request));
      const known = await store.job(owner, input.requestId);
      if (known) return json(known, known.state === "pending" ? 202 : 200);
      if (!env.OPENAI_API_KEY || !env.OPENAI_MODEL)
        return json(
          {
            error:
              "尚未完成模型設定。你可以先使用範例、手動填表，或複製 Prompt 至外部模型，再匯入結果。",
            code: "MODEL_NOT_CONFIGURED",
          },
          503,
        );
      const job: Job = {
        requestId: input.requestId,
        state: "pending",
        createdAt: Date.now(),
      };
      if (!(await store.reserve(owner, job)))
        return json(
          {
            error: "生成頻率較高，請稍候再試（每分鐘最多 6 次、每天 60 次）。",
          },
          429,
        );
      try {
        job.payload = validateOutput(
          input.operation,
          await generate(input, env),
        );
        job.state = "succeeded";
      } catch {
        job.state = "failed";
        job.error =
          "模型生成失敗或逾時，原內容沒有被替換。請稍後重試，或檢查後端模型設定。";
      }
      await store.finish(owner, job);
      return json(job);
    }
    return json({ error: "找不到此操作。" }, 404);
  } catch (e) {
    if (e instanceof z.ZodError)
      return json(
        { error: "資料格式不符，請檢查必填內容、長度與八項結構。" },
        400,
      );
    return json({ error: "服務暫時無法完成操作，請稍後重試。" }, 500);
  }
}
async function boundedBody(request: Request) {
  if (Number(request.headers.get("Content-Length") || 0) > 300_000)
    throw new z.ZodError([]);
  const reader = request.body?.getReader();
  if (!reader) return {};
  let n = 0,
    s = "";
  const decoder = new TextDecoder();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    n += value.byteLength;
    if (n > 300_000) {
      await reader.cancel();
      throw new z.ZodError([]);
    }
    s += decoder.decode(value, { stream: true });
  }
  s += decoder.decode();
  try {
    return JSON.parse(s);
  } catch {
    throw new z.ZodError([]);
  }
}
