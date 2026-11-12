import { generateText, Output } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import {
  pillarsOutput,
  pillarOutput,
  atomsOutput,
  validateOutput,
  type Generation,
} from "../src/domain.ts";
export type ModelEnv = { OPENAI_API_KEY?: string; OPENAI_MODEL?: string };
export async function completeStructured(input: Generation, env: ModelEnv) {
  if (!env.OPENAI_API_KEY || !env.OPENAI_MODEL)
    throw new Error("MODEL_NOT_CONFIGURED");
  const provider = createOpenAI({ apiKey: env.OPENAI_API_KEY });
  const schema =
    input.operation === "pillar"
      ? pillarOutput
      : input.operation === "expand"
        ? atomsOutput
        : pillarsOutput;
  const result = await generateText({
    model: provider.responses(env.OPENAI_MODEL),
    system: input.system,
    prompt: input.user,
    output: Output.object({ schema }),
    maxRetries: 0,
    abortSignal: AbortSignal.timeout(180_000),
  });
  return validateOutput(input.operation, result.output);
}
