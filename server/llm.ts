import { generateText, Output } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";
import {
  pillarsOutput,
  pillarOutput,
  atomsOutput,
  validateOutput,
  type Generation,
} from "../src/domain.ts";
export type ModelEnv = {
  NVIDIA_API_KEY?: string;
  NGC_API_KEY?: string;
  NVIDIA_MODEL?: string;
  OPENAI_API_KEY?: string;
  OPENAI_MODEL?: string;
};
const defaultNvidiaModel = "nvidia/nemotron-3.5-super-vl-120b-a12b";

export function nvidiaConfig(env: ModelEnv) {
  const apiKey = env.NVIDIA_API_KEY?.trim() || env.NGC_API_KEY?.trim();
  return apiKey
    ? {
        provider: "nvidia" as const,
        apiKey,
        model: env.NVIDIA_MODEL?.trim() || defaultNvidiaModel,
      }
    : null;
}

export function modelConfig(env: ModelEnv) {
  const nvidia = nvidiaConfig(env);
  if (nvidia) return nvidia;
  const apiKey = env.OPENAI_API_KEY?.trim();
  const model = env.OPENAI_MODEL?.trim();
  return apiKey && model
    ? { provider: "openai" as const, apiKey, model }
    : null;
}

export class NvidiaGenerationError extends Error {}

const nvidiaErrors: Record<number, string> = {
  202: "NVIDIA 尚未完成這次生成，請稍後再試。",
  401: "NVIDIA 金鑰未通過驗證，請確認是否有效。",
  403: "NVIDIA 金鑰沒有此模型的推論權限，請確認金鑰的 Public API Endpoints 權限。",
  404: "找不到設定的 NVIDIA 模型，請確認模型是否仍可使用。",
  429: "NVIDIA 暫時限制了請求頻率或已達使用額度，請稍後再試。",
  400: "NVIDIA 拒絕了生成請求，請確認模型支援 JSON Schema。",
  422: "NVIDIA 拒絕了生成請求，請確認模型支援 JSON Schema。",
};
const nvidiaResponse = z.object({
  choices: z
    .array(
      z.object({
        finish_reason: z.literal("stop"),
        message: z.object({ content: z.string() }),
      }),
    )
    .min(1),
});

async function completeNvidia(
  input: Generation,
  config: NonNullable<ReturnType<typeof nvidiaConfig>>,
  schema: typeof pillarsOutput | typeof pillarOutput | typeof atomsOutput,
) {
  const { apiKey, model } = config;
  const signal = AbortSignal.timeout(90_000);
  let response: Response;
  try {
    response = await fetch(
      "https://integrate.api.nvidia.com/v1/chat/completions",
      {
        method: "POST",
        redirect: "error",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: input.system },
            { role: "user", content: input.user },
          ],
          stream: false,
          temperature: 0.3,
          max_tokens: 4096,
          ...(model === defaultNvidiaModel ? { reasoning_effort: "none" } : {}),
          response_format: {
            type: "json_schema",
            json_schema: {
              name: `mandala_${input.operation}`,
              schema: z.toJSONSchema(schema, { io: "input" }),
            },
          },
        }),
        signal,
      },
    );
  } catch {
    throw new NvidiaGenerationError(
      signal.aborted
        ? "NVIDIA 生成逾時，請稍後再試。"
        : "暫時無法連線至 NVIDIA，請稍後再試。",
    );
  }
  if (response.status !== 200)
    throw new NvidiaGenerationError(
      nvidiaErrors[response.status] ??
        `NVIDIA 生成失敗（HTTP ${response.status}），請稍後再試。`,
    );

  const result = nvidiaResponse.safeParse(
    await response.json().catch(() => null),
  );
  if (!result.success)
    throw new NvidiaGenerationError("NVIDIA 沒有回傳完整的結果，請再試一次。");
  try {
    return validateOutput(
      input.operation,
      JSON.parse(result.data.choices[0].message.content),
    );
  } catch {
    throw new NvidiaGenerationError(
      "NVIDIA 的回覆未通過曼陀羅表的格式驗證，請再試一次。",
    );
  }
}

export async function completeStructured(input: Generation, env: ModelEnv) {
  const config = modelConfig(env);
  if (!config) throw new Error("MODEL_NOT_CONFIGURED");
  const schema =
    input.operation === "pillar"
      ? pillarOutput
      : input.operation === "expand"
        ? atomsOutput
        : pillarsOutput;
  if (config.provider === "nvidia")
    return completeNvidia(input, config, schema);
  const provider = createOpenAI({ apiKey: config.apiKey });
  const result = await generateText({
    model: provider.responses(config.model),
    system: input.system,
    prompt: input.user,
    output: Output.object({ schema }),
    maxRetries: 0,
    abortSignal: AbortSignal.timeout(180_000),
  });
  return validateOutput(input.operation, result.output);
}
