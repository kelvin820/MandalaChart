import { sheetHeight, sheetWidth, svgChart } from "./export.ts";
import {
  chartSchema,
  contextSchema,
  makePrompt,
  validateOutput,
  applyCandidate,
  clearBranch,
  type Chart,
  type Context,
  type Operation,
  type Generation,
  type Pillar,
  type Atom,
} from "./domain.ts";
import { demoChart } from "./demo.ts";
const $ = <T extends HTMLElement = HTMLElement>(s: string) =>
  document.querySelector<T>(s)!;
const app = $("#app"),
  dialog = $<HTMLDialogElement>("#dialog"),
  content = $("#dialogContent");
const escape = (v: unknown) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
const POS = [0, 1, 2, 3, -1, 4, 5, 6, 7],
  examples = [
    "建立每月穩定現金流的被動收入系統",
    "一年內把日文學到能獨自在日本旅行對話",
    "半年內體脂從 24% 降到 18%",
    "把內湖辦公室改造成共享辦公室並開始招租",
  ];
let charts: Chart[] = [],
  current: Chart | null = null,
  selected: number | null = null,
  actionIndex = 0,
  ready = false,
  loadError = "",
  draft = { goal: "", deadline: "", currentState: "", constraints: "" },
  busy = false;
let noticeTimer: number;
function toast(s: string) {
  $("#toast").textContent = s;
  $("#toast").classList.add("show");
  clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(
    () => $("#toast").classList.remove("show"),
    4500,
  );
}
async function api<T = any>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  let body: any;
  try {
    body = await response.json();
  } catch {
    throw Error("服務回應中斷，請稍後再試。");
  }
  if (!response.ok) throw Error(body.error || "操作失敗，請稍後再試。");
  return body;
}
async function load() {
  app.innerHTML =
    '<div class="loading-page"><div class="spinner"></div>正在整理你的目標…</div>';
  try {
    const [config, list] = await Promise.all([
      api("/api/config"),
      api("/api/charts"),
    ]);
    ready = config.modelReady;
    charts = list.charts;
    $("#connection").textContent = ready
      ? "AI 已設定"
      : "AI 尚待連線";
    loadError = "";
  } catch (e) {
    loadError = (e as Error).message;
    $("#connection").textContent = "連線待確認";
  }
  const id = location.hash.slice(1);
  current = charts.find((c) => c.id === id) ?? null;
  render();
  restorePending();
}
function render() {
  if (current) renderChart();
  else renderHome();
}
function contextFields(prefix: string, c: Context, local = false) {
  return `<div class="context-fields"><label class="field"><span class="label">期限${local ? "（這個支柱）" : ""}</span><input id="${prefix}Deadline" maxlength="100" value="${escape(c.deadline)}" placeholder="${local ? "留空沿用整體期限" : "例如：半年內、2027 年 6 月前"}"></label><label class="field"><span class="label">目前起點</span><textarea id="${prefix}State" maxlength="500" rows="2" placeholder="${local ? "這個能力目前做到哪裡？" : "例如：完全新手、已有基礎但停滯半年"}">${escape(c.currentState)}</textarea></label><label class="field"><span class="label">限制條件</span><textarea id="${prefix}Constraints" maxlength="500" rows="2" placeholder="${local ? "局部條件應符合整體時間與預算" : "例如：每週能投入三小時、預算有限"}">${escape(c.constraints)}</textarea></label></div>`;
}
function readContext(prefix: string): Context {
  return contextSchema.parse({
    deadline: $<HTMLInputElement>(`#${prefix}Deadline`).value,
    currentState: $<HTMLTextAreaElement>(`#${prefix}State`).value,
    constraints: $<HTMLTextAreaElement>(`#${prefix}Constraints`).value,
  });
}
function renderHome() {
  app.innerHTML = `<section class="hero"><div class="hero-copy"><h1>從一個願望，<br><em>走出下一步。</em></h1><p>把願望拆成八個支柱，找出今天就能做的事。每勾選一項完成的行動，願望浮島的希望火炬就會更亮。</p><div class="hero-actions"><button data-action="focusGoal">開始寫下目標 <span aria-hidden="true">↓</span></button><button data-action="demo" class="hero-demo" ${loadError ? "disabled" : ""}>看看範例 <span aria-hidden="true">↗</span></button></div></div><mandala-preview class="hero-art" aria-hidden="true"></mandala-preview></section>${loadError ? `<div class="error-banner" role="alert">${escape(loadError)} <button data-action="reload">重新連線</button></div>` : ""}<div class="home-layout"><section class="panel"><div class="panel-heading"><h2>你的終極目標</h2><span class="step">01 / DEFINE</span></div><form id="createForm"><label class="field"><span class="label">你想實現什麼？</span><textarea id="goalInput" class="goal-input" maxlength="200" required placeholder="例如：一年後，能自信地用英文完成工作簡報">${escape(draft.goal)}</textarea><span class="char-count">不必一次想完整，先寫下你想去的方向。</span></label><div class="examples">${examples.map((s, i) => `<button type="button" data-action="example" data-index="${i}">${escape(s)}</button>`).join("")}</div><details class="context"><summary>＋ 加上期限、起點與限制，讓拆解更貼近你</summary>${contextFields("home", draft)}</details><div class="submit-row"><button class="primary" type="submit" ${loadError ? "disabled" : ""}>一起拆解目標　↗</button><small>生成前可檢視<br>與修改 Prompt</small></div></form></section><aside class="home-side"><div class="eyebrow">A THOUGHTFUL WAY FORWARD</div><div class="steps">${[
    ["先說清楚想要什麼", "目標、起點與限制，都是拆解的依據。"],
    ["找到支持它的八個支柱", "能力、習慣、資源，都可以是一塊拼圖。"],
    ["拆成真正能開始的一步", "逐格展開，調整到適合自己的大小。"],
  ]
    .map(
      (s, i) =>
        `<div class="step-item"><span>0${i + 1}</span><div><strong>${s[0]}</strong><p>${s[1]}</p></div></div>`,
    )
    .join(
      "",
    )}</div><button data-action="demo" class="full-width" ${loadError ? "disabled" : ""}>先試用一張已填範例 ↗</button><div class="side-quote">「有方向的微小行動，<br>也值得被看見。」<span>BUILD YOUR OWN POSSIBILITY.</span></div></aside></div><section class="list-section"><div class="list-head"><h2>我的曼陀羅表 <span class="step">${String(charts.length).padStart(2, "0")}</span></h2><div class="inline-buttons"><button class="quiet" data-action="demo" ${loadError ? "disabled" : ""}>試用範例</button><button class="quiet" data-action="import">匯入備份</button><a class="quiet button-link" href="/api/backup.json" target="_blank" rel="noopener">備份全部 ↓</a></div></div>${
    charts.length
      ? `<div class="saved-list">${charts
          .slice()
          .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
          .map((c) => {
            const n = Object.keys(c.expansions).length,
              d = Object.values(c.doneActions).filter(Boolean).length;
            return `<button class="saved-card" data-action="open" data-id="${c.id}"><div class="panel-heading" style="margin:0"><strong>${escape(c.goal)}</strong><time>${new Date(c.updatedAt).toLocaleDateString("zh-TW", { timeZone: "Asia/Taipei", month: "numeric", day: "numeric" })}</time></div><span class="summary">${c.subGoals.map((p) => escape(p.title)).join(" · ")}</span><span class="badges"><span class="badge">已展開 ${n}/8</span>${n ? `<span class="badge warm">已檢核 ${d}/${n * 8}</span>` : ""}${c.deadline ? `<span class="badge">${escape(c.deadline)}</span>` : ""}</span></button>`;
          })
          .join("")}</div>`
      : '<div class="empty">還沒有建立目標。先寫下一個願望，或試用一張已填範例。</div>'
  }</section>`;
  $("#createForm").onsubmit = (e) => {
    e.preventDefault();
    draft = {
      goal: $<HTMLTextAreaElement>("#goalInput").value.trim(),
      ...readContext("home"),
    };
    if (!draft.goal) return;
    openPrompt("create");
  };
  $("#goalInput").oninput = () =>
    (draft.goal = $<HTMLTextAreaElement>("#goalInput").value);
}
function progress(c: Chart) {
  return {
    expanded: Object.keys(c.expansions).length,
    total: Object.values(c.expansions).reduce((a, b) => a + b.length, 0),
    done: Object.values(c.doneActions).filter(Boolean).length,
  };
}
let previousStructure: { id: string; confirmed: boolean[] } | undefined;
function structureProgress(chart: Chart) {
  const confirmed = chart.subGoals.map((_, index) =>
    !!chart.expansions[index] && !chart.stale.includes(index),
  );
  const previous = previousStructure?.id === chart.id ? previousStructure.confirmed : confirmed;
  previousStructure = { id: chart.id, confirmed };
  const pillars = confirmed.map((ready, index) =>
    `<i class="${ready ? "ready" : ""} ${ready && !previous[index] ? "raised" : ""}"></i>`,
  );
  return `<div class="structure-progress"><div class="structure-pillars" aria-hidden="true">${pillars.join("")}</div><p>已確認 ${confirmed.filter(Boolean).length} / 8 個支柱</p></div>`;
}
function renderChart() {
  const c = current!,
    p = progress(c);
  app.innerHTML = `<div class="chart-toolbar"><button class="quiet" data-action="home">← 我的曼陀羅表</button><div class="toolbar-actions"><button data-action="editMeta">編輯目標</button><button data-action="regenAll">整張重新生成</button><button data-action="delete" class="danger">刪除</button></div></div><div class="chart-outline"><b>01 目標定位</b><i></i><b>02 八個支柱</b><i></i><span>${p.expanded ? "03 行動拆解" : "03 等待展開"}</span><i></i><span>04 檢視成果</span></div><div class="chart-heading"><div><div class="eyebrow">YOUR NORTH STAR</div><h1>${escape(c.goal)}</h1><div class="context-summary">${
    [
      ["期限", c.deadline],
      ["起點", c.currentState],
      ["限制", c.constraints],
    ]
      .filter((s) => s[1])
      .map((s) => `<span>${s[0]}：${escape(s[1])}</span>`)
      .join("") || "<span>尚未設定定位資訊，可隨時編輯目標補充。</span>"
  }</div></div><div class="chart-progress"><div>支柱展開 ${p.expanded}/8　·　行動檢核 ${p.done}/${p.total}</div><div class="progress-track"><i style="width:${p.total ? (p.done / p.total) * 100 : 0}%"></i></div></div></div>${c.stale.length ? '<div class="stale-warning">上層目標或支柱已修改，部分行動需要重新檢查。舊內容仍保留，確認適用或重新生成後即可更新。</div>' : ""}<div class="chart-layout"><section>${selected !== null ? '<div id="branchArea"></div>' : wholeBoard ? renderWholeBoard(c) : overviewGrid(c)}</section><aside class="chart-aside"><h3>讓目標有根基。</h3><p>八個支柱是起點，不是唯一答案。你可以編輯、換個切入點，再慢慢拆到適合自己的大小。</p>${structureProgress(c)}<div class="divider"></div><button data-action="export">匯出曼陀羅表 ↗</button><button data-action="worlds" ${p.expanded < 8 || c.stale.length ? "disabled" : ""}>前往我的願望浮島 ↗</button><p class="note" style="margin-top:12px">${p.expanded < 8 ? "完成八個支柱的拆解後，讓整張表長成立體模型。" : c.stale.length ? "先檢查更新後的行動，再檢視立體成果。" : "結構已建立。到願望浮島查看每項行動的進度。"}</p></aside></div>`;
  renderBranch();
}
let wholeBoard = false;

function animateBoard(element: HTMLElement, from: DOMRect) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !element.animate) return;
  const to = element.getBoundingClientRect();
  if (!from.width || !from.height || !to.width || !to.height) return;
  element.animate(
    [
      { transformOrigin: "0 0", transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`, opacity: 0.38 },
      { transformOrigin: "0 0", transform: "none", opacity: 1 },
    ],
    { duration: 280, easing: "cubic-bezier(.22,.8,.25,1)" },
  );
}

function renderWholeBoard(chart: Chart) {
  return `<div class="whole-board" aria-label="完整曼陀羅表">${POS.map((pillar) => {
    const cells = POS.map((action) => {
      if (pillar === -1 && action === -1) {
        return `<button class="whole-goal" data-action="wholeBoard" aria-expanded="true"><strong>${escape(chart.goal)}</strong><small>收合 ↙</small></button>`;
      }
      if (pillar === -1 || action === -1) {
        return `<strong class="whole-pillar">${escape(chart.subGoals[pillar === -1 ? action : pillar].title)}</strong>`;
      }
      const item = chart.expansions[pillar]?.[action];
      const done = chart.doneActions[pillar + ":" + action];
      return `<span class="${done ? "whole-done" : ""}">${done ? "✓ " : ""}${item ? escape(item.title) : "—"}</span>`;
    });
    return `<div class="whole-group${pillar === -1 ? " whole-core" : ""}">${cells.join("")}</div>`;
  }).join("")}</div>`;
}

function overviewGrid(c: Chart) {
  return `<div class="grid" aria-label="第一層曼陀羅九宮格">${POS.map((i) => (i === -1 ? `<button class="cell center" data-action="wholeBoard" aria-expanded="false"><small>終極目標</small><strong>${escape(c.goal)}</strong><small>展開完整表 ↗</small></button>` : `<button class="cell ${selected === i ? "selected" : ""}" data-action="selectPillar" data-index="${i}" aria-pressed="${selected === i}"><span class="cell-number">PILLAR 0${i + 1}</span><strong>${escape(c.subGoals[i].title)}</strong><p>${escape(c.subGoals[i].actionHint)}</p><small>${c.expansions[i] ? `${c.stale.includes(i) ? "待檢查 · " : ""}已展開 · ${Object.keys(c.doneActions).filter((k) => k.startsWith(i + ":") && c.doneActions[k]).length}/8 已檢核` : "點選，補充條件與展開 ↗"}</small></button>`)).join("")}</div><p class="section-caption">點選一個支柱，找出支持它的八項原子行動或能力。</p>`;
}
function renderBranch() {
  if (selected === null) return;
  const el = $("#branchArea");
  const c = current!,
    i = selected,
    p = c.subGoals[i],
    atoms = c.expansions[i],
    ctx = c.pillarContexts[i] ?? {
      deadline: "",
      currentState: "",
      constraints: "",
    };
  const anchor = 8 - POS.indexOf(i);
  const grid = atoms ? `<div class="grid" aria-label="第二層原子行動九宮格">${POS.map((j) => (j === -1 ? `<div class="cell center"><small>行動支柱</small><strong>${escape(p.title)}</strong></div>` : `<button class="cell ${actionIndex === j ? "selected" : ""} ${c.doneActions[i + ":" + j] ? "completed" : ""}" data-action="selectAtom" data-index="${j}" aria-pressed="${actionIndex === j}"><span class="cell-number">0${j + 1} / ${atoms[j].kind === "capability" ? "原子能力" : "原子行動"}</span><strong>${escape(atoms[j].title)}</strong><p>${escape(atoms[j].detail)}</p><small>${c.doneActions[i + ":" + j] ? "✓ 已檢核" : "檢視做法與完成標準 ↗"}</small></button>`)).join("")}</div>` : `<div class="grid" aria-label="尚未展開的行動九宮格">${POS.map((j) => j === -1 ? `<button class="cell center" data-action="expand"><small>PILLAR 0${i + 1}</small><strong>${escape(p.title)}</strong><small>展開八項行動 ↗</small></button>` : '<div class="cell empty-atom" aria-hidden="true"></div>').join("")}</div>`;
  const mini = `<button class="overview-mini" data-action="collapse" aria-label="返回第一層曼陀羅九宮格"><span class="mini-grid" aria-hidden="true">${POS.map((j) => `<i class="${j === i ? "mini-active" : j === -1 ? "mini-center" : ""}"></i>`).join("")}</span><span>返回總覽</span></button>`;
  el.innerHTML = `<section class="branch" id="branch"><div class="branch-board">${grid}<div class="overview-dock" data-column="${anchor % 3}" data-row="${Math.floor(anchor / 3)}">${mini}</div></div>${atoms ? '<div id="atomDetail"></div>' : ""}<div class="branch-head"><div><h2>${escape(p.title)}</h2><p>${escape(p.description)}</p><p class="note">參考行動：${escape(p.actionHint)}</p></div></div><div class="branch-controls"><button data-action="editPillar">編輯這一格</button><button data-action="regenPillar">這一格換個方向</button></div><div class="local-context"><h4>為這個支柱補充條件</h4><p>留空會沿用終極目標的設定。局部條件會和整體限制一起交給 AI 分析。</p>${contextFields("pillar", ctx, true)}<div class="inline-buttons"><button class="primary" data-action="expand">${atoms ? "重新拆解八項內容" : "展開八項原子行動／能力"} ↗</button><button data-action="saveContext">儲存支柱條件</button></div></div>${c.stale.includes(i) ? '<div class="stale-warning">這個支柱的上層內容已更新。請重新檢查下面的行動是否仍適用。 <button data-action="reviewed">已檢查，保留這些行動</button></div>' : ""}</section>`;
  if (atoms) renderAtom();
}
function renderAtom() {
  const i = selected!,
    c = current!,
    a = c.expansions[i][actionIndex],
    done = c.doneActions[i + ":" + actionIndex];
  $("#atomDetail").innerHTML =
    `<div class="detail"><span class="badge">${a.kind === "capability" ? "原子能力 · 可展示與驗證" : "原子行動 · 可執行與檢核"}</span><h3 style="margin-top:12px">${escape(a.title)}</h3><p>${escape(a.detail)}</p><div class="criterion"><b>${a.kind === "capability" ? "如何驗證這個能力" : "怎樣算完成這次檢核"}</b>${escape(a.criterion)}</div><div class="buttons"><button data-action="toggleDone" class="${done ? "" : "amber"}" aria-pressed="${!!done}">${done ? "取消這次檢核" : "✓ 標記這次檢核完成"}</button><button data-action="editAtom">編輯內容</button></div><p class="note" style="margin:13px 0 0">持續性習慣的勾選代表這次檢核，之後可取消並重新檢視。</p></div>`;
}
function show(html: string, cls = "") {
  dialog.className = cls;
  content.innerHTML = html;
  if (!dialog.open) dialog.showModal();
}
function modal(title: string, body: string, footer = "") {
  return `<div class="modal-inner"><div class="modal-header"><h2>${title}</h2><button data-action="close" aria-label="關閉視窗">×</button></div>${body}${footer ? `<div class="modal-footer">${footer}</div>` : ""}</div>`;
}
async function saveChart(c: Chart, expected: number | null = c.revision) {
  if (busy) throw Error("上一個儲存尚未完成，請稍候。");
  busy = true;
  try {
    const result = await api("/api/charts", {
      method: "PUT",
      body: JSON.stringify({ chart: c, expected }),
    });
    const saved = chartSchema.parse(result.chart);
    charts = charts.filter((x) => x.id !== saved.id);
    charts.unshift(saved);
    if (current?.id === saved.id) current = saved;
    return saved;
  } finally {
    busy = false;
  }
}
function goHome() {
  wholeBoard = false;
  if (current) {
    current = null;
    selected = null;
    history.replaceState(null, "", location.pathname);
  }
  renderHome();
}
function openChart(id: string) {
  wholeBoard = false;
  current = charts.find((c) => c.id === id) ?? null;
  selected = null;
  actionIndex = 0;
  history.replaceState(null, "", "#" + id);
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}
type Pending = {
  input: Generation;
  base: Chart | null;
  context?: Context;
  createdAt: number;
};
let pending: Pending | null = null,
  pendingTimer: number | undefined,
  candidate: unknown = null;
function outputFormat(op: Operation) {
  return op === "expand"
    ? '{"actions":[{"title":"動詞開頭的行動或具體能力","detail":"具體做法","kind":"action 或 capability","criterion":"完成或驗證標準"}]}（actions 必須恰好八項）'
    : op === "pillar"
      ? '{"subGoal":{"title":"支柱名稱","description":"與終極目標的關聯","actionHint":"一個具體行動範例"}}'
      : '{"subGoals":[{"title":"支柱名稱","description":"與終極目標的關聯","actionHint":"一個具體行動範例"}]}（subGoals 必須恰好八項）';
}
function openPrompt(op: Operation) {
  if (pending) {
    showPending();
    return;
  }
  const c = op === "create" ? draft : current!;
  const local = op === "expand" ? readContext("pillar") : undefined;
  const prompts = makePrompt(
    op,
    c,
    op === "create" ? [] : current!.subGoals,
    selected ?? undefined,
    local,
  );
  prompts.user += "\n\n回傳 JSON 格式：" + outputFormat(op);
  pending = {
    input: {
      requestId: crypto.randomUUID(),
      operation: op,
      ...{
        goal: c.goal,
        deadline: c.deadline,
        currentState: c.currentState,
        constraints: c.constraints,
      },
      ...prompts,
      ...(op !== "create"
        ? { subGoals: structuredClone(current!.subGoals) }
        : {}),
      ...(op === "pillar" || op === "expand" ? { index: selected! } : {}),
      ...(local ? { pillarContext: local } : {}),
    },
    base: op === "create" ? null : structuredClone(current),
    context: local,
    createdAt: Date.now(),
  };
  candidate = null;
  renderPrompt();
}
function renderPrompt() {
  const p = pending!;
  const name = {
    create: "生成八個行動支柱",
    all: "重新生成八個支柱",
    pillar: "為這一格換個方向",
    expand: "拆解八項原子行動／能力",
  }[p.input.operation];
  show(
    modal(
      name,
      `<p>你的目標與兩層條件已整理成 Prompt。可以直接生成，也可以先調整說明。</p>${!ready ? '<div class="notice">AI 尚未完成連線。可先試用範例，或複製 Prompt 到外部模型，再貼回 JSON 結果。</div>' : ""}<details><summary>教練指引（System Prompt）</summary><textarea id="systemPrompt" class="prompt-editor prompt-system" maxlength="10000" aria-label="教練系統指引">${escape(p.input.system)}</textarea></details><div class="prompt-row" style="margin-top:17px"><label for="userPrompt" class="label">這次要交給 AI 的資訊</label><button data-action="copyPrompt">複製完整 Prompt</button></div><textarea id="userPrompt" class="prompt-editor" maxlength="15000" aria-label="使用者 Prompt">${escape(p.input.user)}</textarea><div id="promptError" role="alert" class="modal-error"></div><details class="external"><summary>使用外部 LLM：貼入生成結果</summary><p class="note">請貼上符合上方格式的 JSON；採用前會檢查結構與項目數。</p><textarea id="externalJson" aria-label="外部模型 JSON 結果" placeholder='{"subGoals": [...]}'></textarea><button data-action="externalResult">驗證並預覽結果</button></details>`,
      `<button data-action="cancelPrompt">取消</button><button class="primary" data-action="runGeneration" ${!ready ? "disabled" : ""}>交給 AI 生成 ↗</button>`,
    ),
  );
}
function syncPrompt() {
  if (!pending) return;
  if (document.querySelector("#systemPrompt"))
    pending.input.system = $<HTMLTextAreaElement>("#systemPrompt").value;
  if (document.querySelector("#userPrompt"))
    pending.input.user = $<HTMLTextAreaElement>("#userPrompt").value;
}
async function startGeneration() {
  syncPrompt();
  if (!pending || !pending.input.system.trim() || !pending.input.user.trim()) {
    if (document.querySelector("#promptError"))
      $("#promptError").textContent = "Prompt 不能空白。";
    return;
  }
  pending.createdAt = Date.now();
  sessionStorage.setItem("mandala-pending", JSON.stringify(pending));
  showPending();
  const id = pending.input.requestId;
  try {
    const job = await api("/api/generations", {
      method: "POST",
      body: JSON.stringify(pending.input),
    });
    if (pending?.input.requestId !== id) return;
    if (job.state === "succeeded") {
      candidate = job.payload;
      clearPendingTimer();
      sessionStorage.removeItem("mandala-pending");
      renderCandidate();
    } else if (job.state === "failed") generationError(job.error);
    else pollPending();
  } catch (e) {
    if (pending?.input.requestId !== id) return;
    const msg = (e as Error).message;
    if (msg.includes("尚未完成模型") || msg.includes("生成頻率")) {
      generationError(msg);
    } else {
      pollPending();
      const status = document.querySelector("#waitStatus");
      if (status)
        status.textContent =
          "連線可能中斷，正在核對這次生成狀態。原內容仍保留。";
    }
  }
}
function showPending() {
  if (!pending) return;
  show(
    modal(
      "正在為你的目標找方向",
      `<div class="waiting"><div class="spinner"></div><strong>${pending.input.operation === "expand" ? "把支柱拆成能開始的小步驟。" : "找出支持目標的八個支柱。"}</strong><p id="waitStatus">已等待 <span id="elapsed">${Math.floor((Date.now() - pending.createdAt) / 1000)}</span> 秒。生成完成後，會先讓你預覽。</p><p>原內容仍保留。你可以先關閉視窗，結果會在完成後顯示。</p></div>`,
    ),
  );
  if (pendingTimer) clearInterval(pendingTimer);
  pendingTimer = window.setInterval(() => {
    const el = document.querySelector("#elapsed");
    if (el && pending)
      el.textContent = String(
        Math.floor((Date.now() - pending.createdAt) / 1000),
      );
  }, 1000);
}
function clearPendingTimer() {
  if (pendingTimer) clearInterval(pendingTimer);
  pendingTimer = undefined;
}
let polling = false;
async function pollPending() {
  if (polling || !pending) return;
  polling = true;
  const id = pending.input.requestId;
  try {
    for (let n = 0; n < 65; n++) {
      if (pending?.input.requestId !== id) return;
      await new Promise((r) => setTimeout(r, 4000));
      try {
        const job = await api("/api/generations/" + id);
        if (job.state === "succeeded") {
          candidate = job.payload;
          clearPendingTimer();
          sessionStorage.removeItem("mandala-pending");
          renderCandidate();
          return;
        }
        if (job.state === "failed") {
          generationError(job.error);
          return;
        }
      } catch (e) {
        if ((e as Error).message.includes("找不到") && n > 2) {
          generationError("這次請求未成功送達，可以重試。原內容仍保留。");
          return;
        }
      }
    }
    generationError(
      "暫時無法確認生成結果。原內容仍保留，稍後可重新檢查這次請求。",
    );
  } finally {
    polling = false;
  }
}
function generationError(message: string) {
  clearPendingTimer();
  show(
    modal(
      "這次生成尚未完成",
      `<div class="error-banner" role="alert">${escape(message)}</div><p>不會替換任何現有內容。</p>`,
      `<button data-action="abandonPending">放棄這次請求</button><button data-action="checkPending">重新檢查狀態</button><button data-action="retryPrompt" class="primary">調整 Prompt 後重試</button>`,
    ),
  );
}
function restorePending() {
  const raw = sessionStorage.getItem("mandala-pending");
  if (!raw) return;
  try {
    pending = JSON.parse(raw);
    if (!pending?.input.requestId) throw Error();
    showPending();
    pollPending();
  } catch {
    sessionStorage.removeItem("mandala-pending");
    pending = null;
  }
}
function normalizeOutput(op: Operation, raw: any) {
  if (op === "expand" && Array.isArray(raw?.actions))
    return {
      ...raw,
      actions: raw.actions.map((a: any) => ({
        ...a,
        kind: a.kind ?? "action",
        criterion: a.criterion ?? a.detail,
      })),
    };
  return raw;
}
function renderCandidate() {
  if (!pending) return;
  const op = pending.input.operation;
  candidate = validateOutput(op, normalizeOutput(op, candidate));
  const next: any = candidate;
  const items: (Pillar | Atom)[] =
    op === "pillar"
      ? [next.subGoal]
      : op === "expand"
        ? next.actions
        : next.subGoals;
  const old: any[] =
    op === "create"
      ? []
      : op === "pillar"
        ? [pending.base!.subGoals[pending.input.index!]]
        : op === "expand"
          ? (pending.base!.expansions[pending.input.index!] ?? [])
          : pending.base!.subGoals;
  show(
    modal(
      "先看看，是否更接近你想要的方向",
      `<p>目前內容還沒改變。採用後才會儲存新結果，未採用的候選可以捨棄。</p>${op === "all" ? '<div class="notice">採用整張重生結果後，八個支柱會更新，原本第二層與檢核紀錄會清除。採用後可立即復原一次。</div>' : op === "pillar" ? '<div class="notice">只替換這一個支柱，並清除此支柱的第二層、局部條件與檢核紀錄，其他七格不受影響。</div>' : op === "expand" && old.length ? '<div class="notice">採用後只替換此支柱的八項內容，重設此支柱的檢核紀錄。</div>' : ""}<div class="candidate-list">${items.map((p: any, i) => `<article class="candidate-card">${old[i] ? `<div class="compare-old"><small>目前內容</small><strong>　${escape(old[i].title)}</strong><p>${escape(old[i].detail ?? old[i].description)}</p></div>` : ""}<span class="new-label">CANDIDATE 0${i + 1}${p.kind ? " / " + (p.kind === "capability" ? "原子能力" : "原子行動") : ""}</span><h3>${escape(p.title)}</h3><p>${escape(p.description ?? p.detail)}</p>${p.actionHint ? `<p>行動範例：${escape(p.actionHint)}</p>` : ""}${p.criterion ? `<div class="criterion"><b>驗證標準</b>${escape(p.criterion)}</div>` : ""}</article>`).join("")}</div><div id="candidateError" role="alert" class="modal-error"></div>`,
      `<button data-action="discardCandidate">保留舊內容，捨棄候選</button><button data-action="retryPrompt">修改 Prompt 再試一次</button><button data-action="applyCandidate" class="primary">採用並儲存 ↗</button>`,
    ),
  );
}
let undo: { before: Chart; afterRevision: number } | null = null;
async function adopt() {
  if (!pending) return;
  const p = pending;
  if (p.base) {
    const latest = await api("/api/charts/" + p.base.id);
    if (latest.chart.revision !== p.base.revision)
      throw Error(
        "原表已在另一個視窗更新。為避免蓋掉修改，請捨棄這次候選並重新載入。",
      );
    const c = applyCandidate(
      p.base,
      p.input.operation,
      candidate,
      p.input.index,
      p.context,
    );
    const saved = await saveChart(c, p.base.revision);
    undo = { before: p.base, afterRevision: saved.revision };
    current = saved;
  } else {
    const now = new Date().toISOString();
    const c = chartSchema.parse({
      id: crypto.randomUUID(),
      goal: p.input.goal,
      deadline: p.input.deadline,
      currentState: p.input.currentState,
      constraints: p.input.constraints,
      subGoals: (candidate as any).subGoals,
      expansions: {},
      doneActions: {},
      pillarContexts: {},
      stale: [],
      revision: 0,
      createdAt: now,
      updatedAt: now,
    });
    current = await saveChart(c, null);
    selected = null;
  }
  sessionStorage.removeItem("mandala-pending");
  pending = null;
  candidate = null;
  dialog.close();
  history.replaceState(null, "", "#" + current!.id);
  renderChart();
  toast("已採用新內容並儲存。");
  if (undo) {
    const button = document.createElement("button");
    button.textContent = "復原剛才的採用";
    button.dataset.action = "undo";
    button.className = "small-link";
    $("#toast").append("　", button);
    $("#toast").style.pointerEvents = "auto";
    clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => {
      $("#toast").classList.remove("show");
      $("#toast").style.pointerEvents = "none";
    }, 16000);
  }
}
function showEdit(kind: "meta" | "pillar" | "atom") {
  const c = current!,
    p = selected === null ? null : c.subGoals[selected],
    a = selected === null ? null : c.expansions[selected]?.[actionIndex];
  let body = "";
  if (kind === "meta")
    body = `<label class="field"><span class="label">終極目標</span><textarea id="editGoal" maxlength="200" required>${escape(c.goal)}</textarea></label>${contextFields("edit", c)}<p class="note">修改目標或整體條件後，已展開的行動會標示為待檢查，內容仍保留。</p>`;
  if (kind === "pillar")
    body = `<label class="field"><span class="label">支柱名稱</span><input id="editTitle" required maxlength="60" value="${escape(p!.title)}"></label><label class="field"><span class="label">為何有助於終極目標？</span><textarea id="editDescription" maxlength="600">${escape(p!.description)}</textarea></label><label class="field"><span class="label">參考行動方向</span><textarea id="editHint" maxlength="600">${escape(p!.actionHint)}</textarea></label><p class="note">下層內容會保留，並標示為待檢查。</p>`;
  if (kind === "atom")
    body = `<label class="field"><span class="label">類型</span><select id="editKind"><option value="action" ${a!.kind === "action" ? "selected" : ""}>原子行動</option><option value="capability" ${a!.kind === "capability" ? "selected" : ""}>原子能力</option></select></label><label class="field"><span class="label">名稱</span><input id="editTitle" maxlength="80" required value="${escape(a!.title)}"></label><label class="field"><span class="label">具體做法</span><textarea id="editDetail" required maxlength="1000">${escape(a!.detail)}</textarea></label><label class="field"><span class="label">完成或驗證標準</span><textarea id="editCriterion" required maxlength="500">${escape(a!.criterion)}</textarea></label>`;
  show(
    modal(
      kind === "meta"
        ? "調整你的終極目標"
        : kind === "pillar"
          ? "編輯行動支柱"
          : "編輯原子行動／能力",
      `<form id="editForm" data-kind="${kind}">${body}<div id="editError" role="alert" class="modal-error"></div><div class="modal-footer"><button type="button" data-action="close">取消</button><button class="primary" type="submit">儲存修改</button></div></form>`,
    ),
  );
  $("#editForm").onsubmit = async (e) => {
    e.preventDefault();
    const copy = structuredClone(current!);
    if (kind === "meta") {
      copy.goal = $<HTMLTextAreaElement>("#editGoal").value.trim();
      Object.assign(copy, readContext("edit"));
      if (
        ["goal", "deadline", "currentState", "constraints"].some(
          (k) => (copy as any)[k] !== (current as any)[k],
        )
      )
        copy.stale = Object.keys(copy.expansions).map(Number);
    }
    if (kind === "pillar") {
      copy.subGoals[selected!] = {
        title: $<HTMLInputElement>("#editTitle").value.trim(),
        description: $<HTMLTextAreaElement>("#editDescription").value.trim(),
        actionHint: $<HTMLTextAreaElement>("#editHint").value.trim(),
      };
      if (
        JSON.stringify(copy.subGoals[selected!]) !==
          JSON.stringify(current!.subGoals[selected!]) &&
        copy.expansions[selected!] &&
        !copy.stale.includes(selected!)
      )
        copy.stale.push(selected!);
    }
    if (kind === "atom") {
      copy.expansions[selected!][actionIndex] = {
        title: $<HTMLInputElement>("#editTitle").value.trim(),
        detail: $<HTMLTextAreaElement>("#editDetail").value.trim(),
        kind: $<HTMLSelectElement>("#editKind").value as Atom["kind"],
        criterion: $<HTMLTextAreaElement>("#editCriterion").value.trim(),
      };
      if (
        JSON.stringify(copy.expansions[selected!][actionIndex]) !==
        JSON.stringify(current!.expansions[selected!][actionIndex])
      )
        delete copy.doneActions[selected! + ":" + actionIndex];
    }
    try {
      await saveChart(chartSchema.parse(copy));
      dialog.close();
      renderChart();
      toast("修改已儲存。");
    } catch (e) {
      $("#editError").textContent = (e as Error).message;
    }
  };
}
function downloadLink(url: string, label: string, primary = false) {
  return `<a class="button-link ${primary ? "primary" : ""}" href="${escape(url)}" target="_blank" rel="noopener">${label}</a>`;
}
function exportUrl(format: string, c: Chart = current!) {
  return `/api/charts/${c.id}/export.${format}${format === "pdf" ? "?revision=" + c.revision : ""}`;
}
async function preparePdf(button: HTMLElement) {
  const snapshot = structuredClone(current!);
  button.setAttribute("disabled", "");
  button.textContent = "正在產生 PDF…";
  const result = $("#pdfResult");
  result.textContent = "正在保留中文字型與排版，請稍候…";
  try {
    const font = await fetch("/fonts/noto-serif-tc-ui.woff2");
    if (!font.ok) throw Error("無法載入 PDF 字型，請重試。");
    const bytes = new Uint8Array(await font.arrayBuffer());
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    const image = new Image();
    image.src =
      "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(svgChart(snapshot, btoa(binary)));
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = sheetWidth * 2;
    canvas.height = sheetHeight * 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw Error("瀏覽器無法產生圖片，請改用 SVG 下載。");
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const png = await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob(
        (blob) =>
          blob ? resolve(blob) : reject(Error("無法產生 PDF 圖片，請重試。")),
        "image/png",
      ),
    );
    if (png.size > 3_000_000) throw Error("PDF 圖片過大，請改用 SVG 下載。");
    const response = await fetch(exportUrl("pdf", snapshot), {
      method: "POST",
      headers: { "Content-Type": "image/png" },
      body: png,
      signal: AbortSignal.timeout(60000),
    });
    const body = await response.json();
    if (!response.ok) throw Error(body.error || "產生 PDF 失敗，請稍後重試。");
    result.innerHTML =
      downloadLink(body.url, "下載 PDF ↓", true) +
      '<p class="note">PDF 已產生。點擊上方連結下載；JSON 備份可用來還原編輯。</p>';
    button.textContent = "重新產生 PDF";
  } catch (e) {
    result.textContent = (e as Error).message || "PDF 產生失敗，請重試。";
    button.textContent = "重試產生 PDF";
  } finally {
    button.removeAttribute("disabled");
  }
}
function openExport() {
  show(
    modal(
      "讓你的計畫，看得見",
      `<p>PDF 與 SVG 供閱讀、分享；JSON 備份可匯入並繼續編輯。未展開的格子會保留標示。</p><div class="export-preview">${svgChart(current!)}</div><div id="pdfResult" class="download-result" role="status" aria-live="polite"></div>`,
      `${downloadLink(exportUrl("json"), "下載 JSON 備份 ↓")}<button data-action="preparePdf" class="primary">產生 PDF</button>${downloadLink(exportUrl("svg"), "下載 SVG ↓")}`,
    ),
  );
}
function openWorlds() {
  if (busy) {
    toast("正在儲存行動進度，請稍候再開啟 3D。");
    return;
  }
  const c = current!;
  if (progress(c).expanded < 8 || c.stale.length) {
    toast("先完成八個支柱的拆解與檢查，再看立體成果。");
    return;
  }
  sessionStorage.setItem(
    "mandala-world-view",
    JSON.stringify({
      chartId: c.id,
      goal: c.goal,
      pillars: c.subGoals.map((p, i) => ({
        name: p.title,
        actions: c.expansions[i].map((a) => a.title),
        checked: c.expansions[i].map((_, j) => !!c.doneActions[i + ":" + j]),
      })),
    }),
  );
  show(
    modal(
      "你的小行動，已經形成一個有方向的世界。",
      '<p>勾選做過的行動，讓島上的工人為希望火炬送燃料。進度會同步儲存到這張表。</p><iframe title="我的願望浮島" class="world-frame" src="/worlds/"></iframe>',
    ),
    "world-dialog",
  );
}
window.addEventListener("message", async (event) => {
  const frame = dialog.querySelector<HTMLIFrameElement>(".world-frame");
  const request = event.data;
  const reply = event.ports[0];
  if (!dialog.open || !frame || event.source !== frame.contentWindow ||
      event.origin !== location.origin || request?.type !== "mandala:check-action" || !reply) return;
  try {
    const chart = current;
    const { chartId, pillar, action, done } = request;
    if (!chart || chart.id !== chartId || typeof done !== "boolean" ||
        !Number.isInteger(pillar) || !Number.isInteger(action) ||
        !chart.expansions[pillar]?.[action] || chart.stale.includes(pillar)) {
      throw Error("這項行動已變更，請重新開啟 3D 檢視。");
    }
    const updated = structuredClone(chart);
    const key = pillar + ":" + action;
    if (done) updated.doneActions[key] = true;
    else delete updated.doneActions[key];
    await saveChart(updated);
    if (current?.id === chart.id) renderChart();
    reply.postMessage({ ok: true });
  } catch (error) {
    reply.postMessage({ ok: false, message: (error as Error).message || "儲存未完成，請再試一次。" });
  } finally {
    reply.close();
  }
});
function migrateImported(raw: any): Chart {
  const m = structuredClone(raw);
  m.id =
    typeof m.id === "string" && /^[a-f0-9-]{36}$/.test(m.id)
      ? m.id
      : crypto.randomUUID();
  m.pillarContexts ??= {};
  m.stale ??= [];
  m.revision = 0;
  m.createdAt = m.createdAt || new Date().toISOString();
  m.updatedAt = m.updatedAt || m.createdAt;
  for (const list of Object.values(m.expansions ?? {}) as any[][])
    for (const a of list) {
      a.kind ??= "action";
      a.criterion ??= a.detail;
    }
  return chartSchema.parse(m);
}
function importBackup() {
  show(
    modal(
      "匯入曼陀羅表備份",
      `<p>支援本版 JSON 備份，或原版 getMandala 的完整 JSON。相同 ID 的表不會覆蓋。</p><input type="file" id="backupFile" accept="application/json,.json" aria-label="選擇 JSON 備份檔"><textarea id="backupJson" class="prompt-editor" style="margin-top:15px" aria-label="或直接貼上備份 JSON" placeholder="也可以在這裡貼上 JSON"></textarea><div id="importError" class="modal-error" role="alert"></div>`,
      `<button data-action="close">取消</button><button data-action="confirmImport" class="primary">驗證並匯入</button>`,
    ),
  );
}
function validateImportedCharts(raw: any) {
  const records = Array.isArray(raw)
    ? raw
    : Array.isArray(raw.charts)
      ? raw.charts
      : raw.mandala
        ? [raw.mandala]
        : [raw];
  if (records.length > 100) throw Error("每次最多匯入 100 張表。");
  return records.map(migrateImported);
}
let deleting = false;
async function act(action: string, button: HTMLElement) {
  if (action === "focusGoal") {
    $("#goalInput").focus();
    return;
  }
  if (action === "close") {
    if (pending && !sessionStorage.getItem("mandala-pending")) {
      pending = null;
      candidate = null;
    }
    dialog.close();
    return;
  }
  if (action === "home") {
    goHome();
    return;
  }
  if (action === "reload") {
    await load();
    return;
  }
  if (action === "example") {
    $<HTMLTextAreaElement>("#goalInput").value =
      examples[Number(button.dataset.index)];
    draft.goal = examples[Number(button.dataset.index)];
    $("#goalInput").focus();
    return;
  }
  if (action === "open") {
    openChart(button.dataset.id!);
    return;
  }
  if (action === "demo") {
    button.setAttribute("disabled", "");
    try {
      const c = await saveChart(demoChart(), null);
      openChart(c.id);
      toast("已載入示範內容，未呼叫模型。這張範例可自由修改。");
    } finally {
      button.removeAttribute("disabled");
    }
    return;
  }
  if (action === "wholeBoard") {
    wholeBoard = !wholeBoard;
    renderChart();
    $("[data-action=wholeBoard]").focus({ preventScroll: true });
    return;
  }
  if (action === "selectPillar") {
    const from = $(".chart-layout .grid").getBoundingClientRect();
    selected = Number(button.dataset.index);
    actionIndex = 0;
    renderChart();
    const mini = $(".overview-mini");
    animateBoard(mini, from);
    mini.focus({ preventScroll: true });
    return;
  }
  if (action === "collapse") {
    const from = $(".overview-mini").getBoundingClientRect();
    const index = selected;
    selected = null;
    renderChart();
    animateBoard($(".chart-layout .grid"), from);
    $(`[data-action="selectPillar"][data-index="${index}"]`).focus({ preventScroll: true });
    return;
  }
  if (action === "selectAtom") {
    actionIndex = Number(button.dataset.index);
    document.querySelectorAll<HTMLElement>("[data-action=selectAtom]").forEach((cell) => {
      cell.classList.toggle("selected", cell === button);
      cell.setAttribute("aria-pressed", String(cell === button));
    });
    renderAtom();
    return;
  }
  if (action === "editMeta") {
    showEdit("meta");
    return;
  }
  if (action === "editPillar") {
    showEdit("pillar");
    return;
  }
  if (action === "editAtom") {
    showEdit("atom");
    return;
  }
  if (action === "regenAll") {
    openPrompt("all");
    return;
  }
  if (action === "regenPillar") {
    openPrompt("pillar");
    return;
  }
  if (action === "expand") {
    openPrompt("expand");
    return;
  }
  if (action === "saveContext") {
    const ctx = readContext("pillar"),
      c = structuredClone(current!);
    if (
      JSON.stringify(
        c.pillarContexts[selected!] ?? {
          deadline: "",
          currentState: "",
          constraints: "",
        },
      ) !== JSON.stringify(ctx) &&
      c.expansions[selected!] &&
      !c.stale.includes(selected!)
    )
      c.stale.push(selected!);
    c.pillarContexts[selected!] = ctx;
    await saveChart(c);
    renderChart();
    toast("支柱條件已儲存。");
    return;
  }
  if (action === "reviewed") {
    const c = structuredClone(current!);
    c.stale = c.stale.filter((i) => i !== selected);
    await saveChart(c);
    renderChart();
    toast("已確認這些內容仍適用。");
    return;
  }
  if (action === "toggleDone") {
    button.setAttribute("disabled", "");
    const c = structuredClone(current!),
      key = selected + ":" + actionIndex;
    c.doneActions[key] = !c.doneActions[key];
    try {
      await saveChart(c);
      renderChart();
    } finally {
      button.removeAttribute("disabled");
    }
    return;
  }
  if (action === "copyPrompt") {
    syncPrompt();
    try {
      await navigator.clipboard.writeText(
        `【教練指引】\n${pending!.input.system}\n\n【任務】\n${pending!.input.user}`,
      );
      toast("已複製完整 Prompt。");
    } catch {
      toast("無法存取剪貼簿，請直接選取文字複製。");
    }
    return;
  }
  if (action === "runGeneration") {
    await startGeneration();
    return;
  }
  if (
    action === "cancelPrompt" ||
    action === "discardCandidate" ||
    action === "abandonPending"
  ) {
    clearPendingTimer();
    sessionStorage.removeItem("mandala-pending");
    pending = null;
    candidate = null;
    dialog.close();
    return;
  }
  if (action === "checkPending") {
    showPending();
    pollPending();
    return;
  }
  if (action === "retryPrompt") {
    clearPendingTimer();
    sessionStorage.removeItem("mandala-pending");
    pending!.input.requestId = crypto.randomUUID();
    candidate = null;
    renderPrompt();
    return;
  }
  if (action === "externalResult") {
    try {
      syncPrompt();
      let text = $<HTMLTextAreaElement>("#externalJson")
        .value.trim()
        .replace(/^```(?:json)?\s*/, "")
        .replace(/\s*```$/, "");
      candidate = normalizeOutput(pending!.input.operation, JSON.parse(text));
      validateOutput(pending!.input.operation, candidate);
      renderCandidate();
    } catch {
      $("#promptError").textContent =
        "結果格式不符。請提供有效 JSON，支柱或原子內容須恰好八項，且包含所需欄位。";
    }
    return;
  }
  if (action === "applyCandidate") {
    button.setAttribute("disabled", "");
    try {
      await adopt();
    } catch (e) {
      $("#candidateError").textContent = (e as Error).message;
      button.removeAttribute("disabled");
    }
    return;
  }
  if (action === "undo") {
    if (!undo || current?.id !== undo.before.id) {
      toast("目前已無法復原這次採用。");
      return;
    }
    const saved = await saveChart(undo.before, undo.afterRevision);
    current = saved;
    undo = null;
    $("#toast").classList.remove("show");
    renderChart();
    toast("已復原採用前的內容。");
    return;
  }
  if (action === "delete") {
    deleting = false;
    show(
      modal(
        "刪除這張曼陀羅表？",
        `<p>${escape(current!.goal)}</p><div class="notice">刪除後會移除這張表的全部內容。建議先下載 JSON 備份。</div>`,
        `<button data-action="close">保留</button><button data-action="downloadChartJson">先備份 JSON</button><button data-action="confirmDelete" class="danger">我要刪除</button>`,
      ),
    );
    return;
  }
  if (action === "confirmDelete") {
    if (!deleting) {
      deleting = true;
      button.textContent = "再次點擊，永久刪除";
      button.classList.add("primary");
      return;
    }
    button.setAttribute("disabled", "");
    await api("/api/charts/" + current!.id + "?revision=" + current!.revision, {
      method: "DELETE",
    });
    charts = charts.filter((c) => c.id !== current!.id);
    dialog.close();
    goHome();
    toast("已刪除這張表。");
    return;
  }
  if (action === "export") {
    openExport();
    return;
  }
  if (action === "worlds") {
    openWorlds();
    return;
  }
  if (action === "preparePdf") {
    await preparePdf(button);
    return;
  }
  if (action === "downloadChartJson" || action === "backup") {
    show(
      modal(
        "下載可還原的備份",
        `<p>下載 JSON 後，可透過首頁的「匯入備份」繼續編輯。</p>${downloadLink(action === "backup" ? "/api/backup.json" : exportUrl("json"), "下載 JSON 備份 ↓", true)}`,
      ),
    );
    return;
  }
  if (action === "import") {
    importBackup();
    return;
  }
  if (action === "confirmImport") {
    button.setAttribute("disabled", "");
    try {
      const file = $<HTMLInputElement>("#backupFile").files?.[0];
      if (file && file.size > 5_000_000) throw Error("備份檔請小於 5 MB。");
      const text = file
        ? await file.text()
        : $<HTMLTextAreaElement>("#backupJson").value;
      const records = validateImportedCharts(JSON.parse(text));
      let saved = 0,
        skipped = 0;
      for (const c of records) {
        if (charts.some((x) => x.id === c.id)) {
          skipped++;
          continue;
        }
        await saveChart(c, null);
        saved++;
      }
      dialog.close();
      render();
      toast(`已匯入 ${saved} 張，略過 ${skipped} 張相同 ID 的表。`);
    } catch (e) {
      $("#importError").textContent =
        "匯入未完成：" + ((e as Error).message || "請確認 JSON 格式。");
      button.removeAttribute("disabled");
    }
    return;
  }
}
document.addEventListener("click", (e) => {
  const button = (e.target as HTMLElement).closest<HTMLElement>(
    "[data-action]",
  );
  if (!button || button.hasAttribute("disabled")) return;
  void act(button.dataset.action!, button).catch((e) => {
    const msg = (e as Error).message || "操作未完成，請稍後重試。";
    toast(msg);
    if (dialog.open) {
      const error = content.querySelector<HTMLElement>(".modal-error");
      if (error) error.textContent = msg;
    }
  });
});
dialog.addEventListener("cancel", () => {
  if (pending && !sessionStorage.getItem("mandala-pending")) {
    pending = null;
    candidate = null;
  }
});
dialog.addEventListener("close", () => {
  if (!dialog.open) dialog.querySelector(".world-frame")?.remove();
});
window.addEventListener("hashchange", () => {
  const id = location.hash.slice(1);
  if (id) openChart(id);
  else goHome();
});
void load();
