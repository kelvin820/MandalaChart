import type { Chart } from "./domain.ts";
const POS = [0, 1, 2, 3, -1, 4, 5, 6, 7];
const escape = (v: unknown) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export function svgChart(c: Chart) {
  const cell = 108,
    margin = 32;
  const cells: Array<Array<{ text: string; color: string; center?: boolean }>> =
    Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => ({ text: "尚未展開", color: "#e5e5eb" })),
    );
  const coordinates = POS.map((p, j) => ({
    p,
    x: j % 3,
    y: Math.floor(j / 3),
  })).filter((q) => q.p !== -1);
  cells[4][4] = { text: c.goal, color: "#243963", center: true };
  for (const q of coordinates) {
    cells[3 + q.y][3 + q.x] = {
      text: c.subGoals[q.p].title,
      color: "#677ba7",
      center: true,
    };
    cells[q.y * 3 + 1][q.x * 3 + 1] = {
      text: c.subGoals[q.p].title,
      color: "#677ba7",
      center: true,
    };
    for (const a of coordinates) {
      const atom = c.expansions[q.p]?.[a.p];
      cells[q.y * 3 + a.y][q.x * 3 + a.x] = {
        text: atom?.title ?? "尚未展開",
        color: atom ? "#fffefa" : "#efedf1",
      };
    }
  }
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1036" height="1130" viewBox="0 0 1036 1130"><rect width="1036" height="1130" fill="#faf7f2"/><text x="32" y="43" font-family="Arial,sans-serif" font-size="24" fill="#243963">我的曼陀羅表</text><text x="32" y="73" font-family="Arial,sans-serif" font-size="12" fill="#858596">MANDALA STUDIO · 一個目標，八個支柱，六十四個開始的可能。</text>`;
  for (let y = 0; y < 9; y++)
    for (let x = 0; x < 9; x++) {
      const d = cells[y][x],
        px = margin + x * cell,
        py = 100 + y * cell;
      svg += `<rect x="${px + 2}" y="${py + 2}" width="104" height="104" rx="5" fill="${d.color}" stroke="#dad9e1" stroke-width=".5"/>`;
      const chars = Array.from(d.text),
        lines: string[] = [];
      const fontSize = Math.max(
        5,
        Math.min(11, Math.floor(Math.sqrt(6750 / Math.max(chars.length, 1)))),
      );
      const perLine = Math.floor(88 / fontSize),
        lineHeight = fontSize * 1.2;
      while (chars.length) lines.push(chars.splice(0, perLine).join(""));
      lines.forEach((s, j) => {
        svg += `<text x="${px + 54}" y="${py + 54 - ((lines.length - 1) * lineHeight) / 2 + j * lineHeight}" text-anchor="middle" font-family="Arial,sans-serif" font-size="${fontSize}" fill="${d.center ? "#ffffff" : "#505873"}">${escape(s)}</text>`;
      });
    }
  return (
    svg +
    '<text x="32" y="1104" font-family="Arial,sans-serif" font-size="11" fill="#858596">先建立方向，再走出自己的路。</text></svg>'
  );
}
