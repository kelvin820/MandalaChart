import type { Chart } from "./domain.ts";

const POS = [0, 1, 2, 3, -1, 4, 5, 6, 7];
const branches = POS.flatMap((pillar, i) =>
  pillar === -1 ? [] : [{ pillar, col: i % 3, row: Math.floor(i / 3) }],
);
export const sheetWidth = 1230;
export const sheetHeight = 870;
const cellWidth = 126;
const cellHeight = 76;
const left = 36;
const top = 105;
const groupGap = 6;

const escape = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

function position(col: number, row: number) {
  return [
    left + col * cellWidth + Math.floor(col / 3) * groupGap,
    top + row * cellHeight + Math.floor(row / 3) * groupGap,
  ];
}

function arrows() {
  return branches
    .map(({ col, row }) => {
      const [sx, sy] = position(3 + col, 3 + row);
      const [ex, ey] = position(col * 3 + 1, row * 3 + 1);
      const dx = ex - sx;
      const dy = ey - sy;
      const length = Math.hypot(dx, dy);
      const ux = dx / length;
      const uy = dy / length;
      // The arrow emerges from the edge of the inner pillar and stops just before its outer counterpart.
      const edge = Math.min(
        cellWidth / (2 * Math.abs(ux)),
        cellHeight / (2 * Math.abs(uy)),
      );
      const x = sx + cellWidth / 2 + ux * (edge - 6);
      const y = sy + cellHeight / 2 + uy * (edge - 6);
      const span = length - 2 * edge + 3;
      return `<path transform="translate(${x} ${y}) rotate(${(Math.atan2(dy, dx) * 180) / Math.PI})" d="M0 -6 L${span - 16} -6 L${span - 16} -13 L${span} 0 L${span - 16} 13 L${span - 16} 6 H0Z" fill="url(#pillar-direction)"/>`;
    })
    .join("");
}

function cellText(text: string, x: number, y: number, emphasis: boolean) {
  const chars = Array.from(text);
  let size = emphasis ? 17 : 16;
  let perLine = Math.floor((cellWidth - 16) / size);
  while (Math.ceil(chars.length / perLine) * size * 1.26 > cellHeight - 14) {
    size -= 0.25;
    perLine = Math.floor((cellWidth - 16) / size);
  }
  const lines = Array.from(
    { length: Math.ceil(chars.length / perLine) },
    (_, i) => chars.slice(i * perLine, (i + 1) * perLine).join(""),
  );
  const cx = x + cellWidth / 2;
  const lineHeight = size * 1.26;
  const baseline =
    y + cellHeight / 2 - ((lines.length - 1) * lineHeight) / 2 + size * 0.34;
  return `<text x="${cx}" y="${baseline}" text-anchor="middle" font-size="${size}" font-weight="${emphasis ? 750 : 550}">${lines
    .map(
      (line, i) =>
        `<tspan x="${cx}" dy="${i ? lineHeight : 0}">${escape(line)}</tspan>`,
    )
    .join("")}</text>`;
}

export function svgChart(chart: Chart, fontBase64?: string) {
  type Cell = {
    text: string;
    kind: "goal" | "pillar" | "action" | "empty";
    code?: string;
    done?: boolean;
  };
  const cells: Cell[][] = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => ({ text: "尚未展開", kind: "empty" })),
  );
  cells[4][4] = { text: chart.goal, kind: "goal" };
  for (const { pillar, col, row } of branches) {
    const heading: Cell = {
      text: chart.subGoals[pillar].title,
      kind: "pillar",
      code: String(pillar + 1).padStart(2, "0"),
    };
    cells[row + 3][col + 3] = heading;
    cells[row * 3 + 1][col * 3 + 1] = heading;
    for (const action of branches) {
      const item = chart.expansions[pillar]?.[action.pillar];
      if (item)
        cells[row * 3 + action.row][col * 3 + action.col] = {
          text: item.title,
          kind: "action",
          done: !!chart.doneActions[pillar + ":" + action.pillar],
        };
    }
  }

  const fills = {
    goal: "#d4e0f0",
    pillar: "#e5edf6",
    action: "#fffdf8",
    empty: "#f3f1ec",
  };
  const colors = {
    goal: "#162c50",
    pillar: "#243e65",
    action: "#292e38",
    empty: "#6b6f76",
  };
  const backgrounds: string[] = [];
  const labels: string[] = [];
  cells.forEach((row, y) =>
    row.forEach((cell, x) => {
      const [px, py] = position(x, y);
      backgrounds.push(
        `<rect x="${px}" y="${py}" width="${cellWidth}" height="${cellHeight}" fill="${cell.done ? "#fbf2de" : fills[cell.kind]}" stroke="#b8c1cc" stroke-width=".75"/>`,
      );
      const corner = cell.code ?? (cell.done ? "✓" : "");
      labels.push(
        `<g fill="${colors[cell.kind]}">${corner ? `<text x="${px + 7}" y="${py + 12}" font-size="9" fill="#625339">${corner}</text>` : ""}${cellText(cell.text, px, py, cell.kind === "goal" || cell.kind === "pillar")}</g>`,
      );
    }),
  );
  const frames = POS.map((pillar, i) => {
    const [x, y] = position((i % 3) * 3, Math.floor(i / 3) * 3);
    return `<path d="M${x} ${y}h${3 * cellWidth}v${3 * cellHeight}h-${3 * cellWidth}Z" fill="none" stroke="${pillar === -1 ? "#375779" : "#778596"}" stroke-width="${pillar === -1 ? 2.2 : 1.15}"/>`;
  }).join("");
  const font = fontBase64
    ? `<style>@font-face{font-family:MandalaExport;src:url(data:font/woff2;base64,${fontBase64}) format("woff2");font-weight:500 800}</style>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${sheetWidth}" height="${sheetHeight}" viewBox="0 0 ${sheetWidth} ${sheetHeight}" font-family="MandalaExport, 'Mandala Serif', 'Noto Serif TC', 'PMingLiU', 'Microsoft JhengHei', serif">
    <defs>${font}<linearGradient id="pillar-direction"><stop stop-color="#87a7ca" stop-opacity="0"/><stop offset=".6" stop-color="#7396bf" stop-opacity=".19"/><stop offset="1" stop-color="#4679ac" stop-opacity=".42"/></linearGradient></defs>
    <rect width="${sheetWidth}" height="${sheetHeight}" fill="#fbf8f0"/>
    <text x="36" y="56" font-size="34" font-weight="800" fill="#203856">我的曼陀羅表</text>
    <text x="1182" y="53" text-anchor="end" font-size="12" letter-spacing="2.1" fill="#53627a">MANDALA STUDIO</text>
    <path d="M36 77H1182" stroke="#a6916e"/>
    ${backgrounds.join("")}${frames}${arrows()}${labels.join("")}
    <text x="36" y="836" font-size="13" fill="#4f5c70">中心目標 → 八個支柱 → 六十四項行動</text>
    <text x="1182" y="836" text-anchor="end" font-size="13" fill="#4f5c70">已檢核 ${Object.values(chart.doneActions).filter(Boolean).length} / 64</text>
  </svg>`;
}
