import { completeStructured, nvidiaConfig } from "../server/llm.ts";
import { makePrompt } from "../src/domain.ts";

const chart = {
  goal: "三個月後能在日本旅行時，用日文完成簡單的問路和點餐",
  deadline: "三個月",
  currentState: "初學者，已認識部分五十音",
  constraints: "每週可練習三次，每次二十分鐘",
};

async function generate(operation, subGoals) {
  const index = operation === "expand" ? 0 : undefined;
  const label = operation === "create" ? "第一層支柱" : "第二層行動";
  const started = performance.now();
  try {
    const result = await completeStructured(
      {
        ...chart,
        ...makePrompt(operation, chart, subGoals, index),
        requestId: crypto.randomUUID(),
        operation,
        subGoals,
        index,
      },
      process.env,
    );
    const seconds = ((performance.now() - started) / 1000).toFixed(1);
    console.log(`✓ ${label}：8 項通過格式驗證（${seconds} 秒）`);
    return result;
  } catch (error) {
    throw new Error(`${label}：${error.message}`);
  }
}

const config = nvidiaConfig(process.env);
if (!config) {
  console.error("找不到 NVIDIA_API_KEY 或 NGC_API_KEY。請先設定本機 .env。");
  process.exitCode = 1;
} else {
  console.log(`NVIDIA 測試模型：${config.model}`);
  try {
    const { subGoals } = await generate("create");
    const { actions } = await generate("expand", subGoals);
    console.log("支柱：", subGoals.map((item) => item.title).join("、"));
    console.log(
      `「${subGoals[0].title}」的行動：`,
      actions.map((item) => item.title).join("、"),
    );
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
