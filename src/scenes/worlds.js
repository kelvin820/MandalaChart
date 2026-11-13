import { mountStage } from "./stage.js";
import { workshops, woods } from "./timber-islands.js";

const $ = (selector) => document.querySelector(selector);
const colors = [
  "#7e8eb5",
  "#bf9b6a",
  "#8f8abc",
  "#b98e8b",
  "#929fbe",
  "#bb96af",
  "#8da8c0",
  "#c1ad88",
];

const seed = {
  goal: "六個月後，自信完成英文工作簡報",
  pillars: [
    "口語表達",
    "簡報結構",
    "聽力理解",
    "專業詞彙",
    "發音節奏",
    "臨場應答",
    "練習習慣",
    "回饋與調整",
  ].map((name, i) => ({
    name,
    actions: [
      [
        "每週錄製三次三分鐘英文簡報",
        "每天描述一項工作內容",
        "週末練習五分鐘無稿表達",
        "每週和夥伴用英文對談一次",
        "每天用英文摘要一則新聞",
        "每週練習一次開場自我介紹",
        "練習用一句話說明核心觀點",
        "每週回聽錄音，記下三個卡點",
      ],
      [
        "拆解一份優秀簡報的結構",
        "寫出簡報的一句話主旨",
        "為簡報寫下三個關鍵訊息",
        "用一頁呈現問題與解法",
        "每週練習一次兩分鐘開場",
        "為各段落補上轉場句",
        "完成一張結論與建議投影片",
        "計時練習十分鐘完整簡報",
      ],
      [
        "每天聽十分鐘英文演講",
        "每週精聽一段兩分鐘音檔",
        "聽後口頭複述三個重點",
        "整理五個常見提問句型",
        "每週看一次不開字幕的短片",
        "記下聽不懂的連音片段",
        "每週和夥伴練習聽問答",
        "月底重聽第一週音檔",
      ],
      [
        "整理二十個工作常用名詞",
        "每天用三個新詞造句",
        "建立簡報常用動詞清單",
        "每週複習十個已學詞彙",
        "整理五種描述圖表的句型",
        "把一頁中文簡報改成英文",
        "建立個人例句卡片",
        "每週在口說中使用五個新詞",
      ],
      [
        "錄下自我介紹作為起點",
        "每天跟讀一分鐘原聲音檔",
        "標記一段稿件的重音",
        "每週練習五組容易混淆的音",
        "練習在句子重點前停頓",
        "把一段長句拆成短句",
        "每週比較原聲與自己的錄音",
        "請夥伴指出一個聽不清的詞",
      ],
      [
        "列出十個可能被問的問題",
        "為三個難題準備簡短答案",
        "練習一次請對方澄清問題",
        "建立五句爭取思考時間的話",
        "每週安排十分鐘模擬問答",
        "練習承認未知並提出後續步驟",
        "每週練習用例子解釋一個答案",
        "記錄每次問答後的一項改善",
      ],
      [
        "固定週一三五的練習時段",
        "把十分鐘練習排入行事曆",
        "準備一個安靜的錄音角落",
        "每次練習前打開同一份清單",
        "週日選出下一週練習主題",
        "為忙碌日準備兩分鐘版本",
        "每週安排一次完整排練",
        "每週回顧練習安排是否可持續",
      ],
      [
        "邀請一位夥伴提供回饋",
        "建立清晰度與流暢度評分表",
        "每週收集一次具體回饋",
        "每次只選一項問題修正",
        "比較本週與上週的錄音",
        "記錄一次表達順暢的片刻",
        "每月做一次十分鐘模擬簡報",
        "月底調整下一階段的練習計畫",
      ],
    ][i],
    checked: Array(8).fill(false),
  })),
};
function readWorld() {
  try {
    const saved = JSON.parse(sessionStorage.getItem("mandala-world-view"));
    if (
      window.parent !== window &&
      typeof saved?.chartId === "string" &&
      typeof saved.goal === "string" &&
      Array.isArray(saved.pillars) &&
      saved.pillars.length === 8 &&
      saved.pillars.every(
        (pillar) =>
          typeof pillar.name === "string" &&
          pillar.actions?.length === 8 &&
          pillar.actions.every((action) => typeof action === "string") &&
          Array.isArray(pillar.checked) &&
          pillar.checked.length === 8,
      )
    )
      return saved;
  } catch {
    // The standalone page can be opened without a saved chart.
  }
  return seed;
}

const data = readWorld();

let stage;
let selected = 0;
let saving = false;
let auto = false;
const canvas = $("#scene");
let showLabels = true;
let hoveredIsland = -1;
let labelPositions = [];
$("#goal").textContent = data.goal;
$("#goal").title = data.goal;
$("#sample").hidden = data !== seed;

const pillarButtons = data.pillars.map((pillar, index) => {
  const button = document.createElement("button");
  button.textContent = String(index + 1);
  button.setAttribute("aria-label", pillar.name);
  button.title = pillar.name;
  button.onclick = () => choose(index, true);
  return button;
});
$("#pillars").replaceChildren(...pillarButtons);

const labels = data.pillars
  .map((pillar) => pillar.name)
  .map((name, index) => {
    const label = document.createElement("button");
    label.type = "button";
    const number = document.createElement("small");
    number.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("span");
    title.textContent = name;
    title.title = name;
    label.append(number, title);
    label.onclick = () => {
      setGoalList(true);
      choose(index, true);
    };
    label.onpointerenter = () => {
      hoveredIsland = index;
      updateLabels();
    };
    label.onpointerleave = () => {
      hoveredIsland = -1;
      updateLabels();
    };
    return label;
  });
$("#islandLabels").replaceChildren(...labels);

function updateLabels() {
  labels.forEach((label, index) => {
    const point = labelPositions[index];
    const inView =
      point?.[2] &&
      point[0] > 5 &&
      point[0] < 95 &&
      point[1] > 25 &&
      point[1] < 86;
    label.hidden = !inView || (!showLabels && hoveredIsland !== index);
    if (label.hidden) return;
    label.style.left = point[0] + "%";
    label.style.top = point[1] + "%";
    label.classList.toggle("active", index === selected);
  });
}

function choose(index, focus = false) {
  selected = index;
  const pillar = data.pillars[selected];
  $("#pillarNumber").textContent = String(selected + 1) + " / 8";
  $("#pillarName").textContent = pillar.name;
  pillarButtons.forEach((button, i) =>
    button.setAttribute("aria-pressed", String(i === selected)),
  );
  $("#actions").replaceChildren(
    ...pillar.actions.map((title, i) => {
      const item = document.createElement("li");
      const label = document.createElement("label");
      const check = document.createElement("input");
      const number = document.createElement("span");
      const action = document.createElement("span");
      check.type = "checkbox";
      check.checked = pillar.checked[i];
      check.disabled = saving;
      check.onchange = () => updateCheck(index, i, check);
      number.className = "action-number";
      number.setAttribute("aria-hidden", "true");
      number.textContent = String(i + 1).padStart(2, "0");
      action.textContent = title;
      label.append(check, number, action);
      item.append(label);
      return item;
    }),
  );
  updateProgress();
  stage?.select(selected);
  if (focus) stage?.focusIsland(selected);
  updateLabels();
}

function updateProgress() {
  const done = data.pillars.reduce(
    (total, pillar) => total + pillar.checked.filter(Boolean).length,
    0,
  );
  $("#crystalCount").textContent = "全表完成 " + done + " / 64";
  $("#crystalProgress").value = done;
  const [place, fuel, unit] = workshops[selected];
  const amount = data.pillars[selected].checked.filter(Boolean).length;
  $("#islandWood").textContent =
    place +
    (woods[selected] ? " · " + woods[selected] : "") +
    "｜" +
    (amount
      ? `${amount} 位工人搬運${fuel}，每人每趟 1 ${unit}`
      : "勾選行動後開始供應");
  $("#chosen").textContent = "本支柱 " + amount + " / 8";
}

function saveCheck(pillar, action, done) {
  if (data === seed) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel();
    const timer = setTimeout(() => {
      channel.port1.close();
      reject(new Error("儲存未回應，請重新開啟 3D 檢視確認進度。"));
    }, 20000);
    channel.port1.onmessage = ({ data: result }) => {
      clearTimeout(timer);
      channel.port1.close();
      if (result.ok) resolve();
      else reject(new Error(result.message));
    };
    window.parent.postMessage(
      {
        type: "mandala:check-action",
        chartId: data.chartId,
        pillar,
        action,
        done,
      },
      location.origin,
      [channel.port2],
    );
  });
}

async function updateCheck(pillar, action, check) {
  if (saving) return;
  const done = check.checked;
  const status = $("#checkStatus");
  saving = true;
  status.textContent = data === seed ? "" : "儲存中…";
  $("#actions").setAttribute("aria-busy", "true");
  const hadFocus = document.activeElement === check;
  $("#actions").inert = true;
  try {
    await saveCheck(pillar, action, done);
    data.pillars[pillar].checked[action] = done;
    updateProgress();
    stage?.refreshProgress({ pillar, action, done });
    status.textContent = data === seed ? "" : "已儲存";
  } catch (error) {
    check.checked = data.pillars[pillar].checked[action];
    status.textContent = error.message;
  } finally {
    saving = false;
    $("#actions").inert = false;
    $("#actions").removeAttribute("aria-busy");
    $("#actions")
      .querySelectorAll("input")
      .forEach((input) => {
        input.disabled = false;
      });
    if (
      hadFocus &&
      check.isConnected &&
      document.activeElement === document.body
    )
      check.focus();
  }
}

function unavailable() {
  canvas.hidden = true;
  $("#sceneUnavailable").hidden = false;
  $(".scene-footer").hidden = true;
  $(".island-tools").hidden = true;
  $("#islandLabels").hidden = true;
  stage = null;
}

function syncRotation() {
  $("#rotate").textContent = auto ? "暫停旋轉" : "自動旋轉";
  $("#rotate").setAttribute("aria-pressed", String(auto));
  stage?.setAuto(auto);
}
$("#rotate").onclick = () => {
  auto = !auto;
  syncRotation();
};
$("#daylight").addEventListener("click", (event) => {
  const button = event.target.closest("[data-time]");
  if (!button) return;
  $("#daylight")
    .querySelectorAll("button")
    .forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
  canvas.closest(".viewport").dataset.time = button.dataset.time;
  stage?.setTime(button.dataset.time);
});
$("#islandOverview").onclick = () => stage?.focusIsland(-1);
function setGoalList(open) {
  const list = $("#goalList");
  const button = $("#toggleGoals");
  list.hidden = !open;
  $(".workspace").classList.toggle("goals-hidden", !open);
  button.textContent = open ? "收起清單" : "顯示清單";
  button.setAttribute("aria-expanded", String(open));
}
$("#toggleGoals").onclick = () => setGoalList($("#goalList").hidden);
$("#toggleLabels").onclick = (event) => {
  showLabels = !showLabels;
  hoveredIsland = -1;
  event.currentTarget.setAttribute("aria-pressed", String(showLabels));
  updateLabels();
};

choose(0);
try {
  stage = mountStage(canvas, {
    pillars: data.pillars,
    onPillar: (index) =>
      index === 8 ? stage?.focusIsland(-1) : choose(index, true),
    onLabels: (positions) => {
      labelPositions = positions;
      updateLabels();
    },
    onHover: (index) => {
      hoveredIsland = index;
      updateLabels();
    },
    onDelivery: (message) => {
      $("#delivery").textContent = message;
    },
    onUnavailable: unavailable,
  });
} catch (error) {
  console.warn("Mandala scene could not start", error);
}
if (stage) {
  $(".island-tools").hidden = false;
  $("#islandLabels").hidden = false;
} else unavailable();
syncRotation();
window.addEventListener("pagehide", (event) => {
  if (!event.persisted) stage?.dispose();
});

function escapeXML(s) {
  return String(s).replace(
    /[<>&"']/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[c],
  );
}
function svgChart() {
  const pos = [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
      [2, 2],
      [1, 2],
      [0, 2],
      [0, 1],
    ],
    cells = Array.from({ length: 9 }, () => Array(9).fill(null));
  cells[4][4] = { text: data.goal, c: "#304636", dark: true };
  pos.forEach(([x, y], i) => {
    cells[3 + y][3 + x] = { text: data.pillars[i].name, c: colors[i] };
    cells[y * 3 + 1][x * 3 + 1] = { text: data.pillars[i].name, c: colors[i] };
    pos.forEach(([ax, ay], j) => {
      cells[y * 3 + ay][x * 3 + ax] = {
        text: data.pillars[i].actions[j],
        c: colors[i],
        light: true,
      };
    });
  });
  let s =
    '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1180" viewBox="0 0 1080 1180"><rect width="1080" height="1180" fill="#f7f7ef"/><text x="45" y="55" font-family="Arial,sans-serif" font-size="25" fill="#304636">目標之境 · 我的曼陀羅表</text><text x="45" y="88" font-family="Arial,sans-serif" font-size="13" fill="#7d8b74">一個核心目標 / 八個支柱 / 六十四個開始的可能</text>';
  for (let y = 0; y < 9; y++)
    for (let x = 0; x < 9; x++) {
      let d = cells[y][x],
        px = 45 + x * 110,
        py = 120 + y * 110;
      s += `<rect x="${px + 2}" y="${py + 2}" width="106" height="106" rx="4" fill="${d.light ? "#fff" : d.c}" stroke="${d.light ? d.c : "#f7f7ef"}" stroke-opacity=".35"/>`;
      const chars = Array.from(d.text),
        chunks = [];
      while (chars.length) chunks.push(chars.splice(0, 7).join(""));
      const lines = chunks.slice(0, 8);
      lines.forEach((line, j) => {
        s += `<text x="${px + 55}" y="${py + 55 - (lines.length - 1) * 7 + j * 14}" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" fill="${d.light ? "#435641" : "#fff"}">${escapeXML(line)}</text>`;
      });
    }
  return (
    s +
    '<text x="45" y="1150" font-family="Arial,sans-serif" font-size="12" fill="#7d8b74">MANDALA LAB — 先有方向，再走出自己的路。</text></svg>'
  );
}
$("#export").onclick = () => {
  $("#chart").innerHTML = svgChart();
  $("#exportDialog").showModal();
};
$("#closeDialog").onclick = () => $("#exportDialog").close();
$("#download").onclick = () => {
  const blob = new Blob([svgChart()], { type: "image/svg+xml;charset=utf-8" }),
    url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = "我的曼陀羅表.svg";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
$("#print").onclick = () => window.print();
