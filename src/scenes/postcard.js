const serif = '"Mandala Serif", "Noto Serif TC", "Songti TC", serif';
const sans = '"Noto Sans TC", "PingFang TC", Arial, sans-serif';

function writeWrapped(ctx, text, x, y, width, lineHeight) {
  let line = "";
  for (const { segment } of new Intl.Segmenter().segment(text)) {
    if (line && ctx.measureText(line + segment).width > width) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      line = "";
    }
    line += segment;
  }
  ctx.fillText(line, x, y);
}

export function makePostcard(scene, { name, goal, pillars, sky }, capture) {
  const card = document.createElement("canvas");
  card.width = 1080;
  card.height = 1920;
  const ctx = card.getContext("2d");

  ctx.fillStyle = "#f4eddd";
  ctx.fillRect(0, 0, card.width, card.height);
  ctx.strokeStyle = "#a48251";
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, 1024, 1864);
  ctx.fillStyle = "#56412a";
  ctx.font = `600 30px ${serif}`;
  ctx.fillText("願いの曼陀羅", 72, 102);
  ctx.font = `650 52px ${serif}`;
  writeWrapped(ctx, name, 72, 178, 936, 64);

  ctx.fillStyle = sky;
  ctx.fillRect(72, 306, 936, 848);
  const scale = Math.min(scene.width / 936, scene.height / 848);
  const width = 936 * scale;
  const height = 848 * scale;
  capture(() =>
    ctx.drawImage(
      scene,
      (scene.width - width) / 2,
      (scene.height - height) / 2,
      width,
      height,
      72,
      306,
      936,
      848,
    ),
  );

  const counts = pillars.map((pillar) => pillar.checked.filter(Boolean).length);
  const done = counts.reduce((sum, count) => sum + count, 0);
  ctx.fillStyle = "#8b6638";
  ctx.font = `600 25px ${sans}`;
  ctx.fillText("核心目標", 72, 1222);
  ctx.fillStyle = "#302a21";
  ctx.font = `600 31px ${serif}`;
  writeWrapped(ctx, goal, 72, 1274, 936, 40);

  ctx.strokeStyle = "#bc9b6e";
  ctx.beginPath();
  ctx.moveTo(72, 1575);
  ctx.lineTo(1008, 1575);
  ctx.stroke();
  ctx.fillStyle = "#4c3925";
  ctx.font = `650 34px ${serif}`;
  ctx.fillText(`全表完成 ${done} / 64`, 72, 1645);
  ctx.textAlign = "right";
  ctx.font = `500 24px ${sans}`;
  ctx.fillText(new Intl.DateTimeFormat("zh-TW").format(new Date()), 1008, 1645);
  ctx.textAlign = "center";
  counts.forEach((count, i) => {
    const x = 72 + i * 119;
    ctx.fillStyle = count === 8 ? "#d5a461" : "#e9dbc3";
    ctx.fillRect(x, 1680, 103, 132);
    ctx.fillStyle = "#513919";
    ctx.font = `500 24px ${sans}`;
    ctx.fillText(String(i + 1).padStart(2, "0"), x + 51, 1730);
    ctx.font = `650 27px ${sans}`;
    ctx.fillText(`${count}/8`, x + 51, 1768);
    ctx.font = `500 15px ${sans}`;
    const name = Array.from(pillars[i].name);
    const label =
      name.length > 5 ? name.slice(0, 5).join("") + "…" : name.join("");
    ctx.fillText(label, x + 51, 1797, 91);
  });
  return new Promise((resolve, reject) =>
    card.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("無法產生明信片。"))),
      "image/png",
    ),
  );
}
