import { test } from "node:test";
import assert from "node:assert/strict";
import { PDFDocument } from "pdf-lib";
import { crc32, deflateSync } from "node:zlib";
import { api } from "../server/api.ts";
import { createPdf, type FileStore } from "../server/files.ts";
import { demoChart } from "../src/demo.ts";
import { svgChart } from "../src/export.ts";
import { fixture } from "./support.ts";
function png() {
  function chunk(type: string, data: Buffer) {
    const b = Buffer.alloc(data.length + 12);
    b.writeUInt32BE(data.length, 0);
    b.write(type, 4);
    data.copy(b, 8);
    b.writeUInt32BE(crc32(b.subarray(4, -4)), -4 + b.length);
    return b;
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(2, 0);
  header.writeUInt32BE(2, 4);
  header[8] = 8;
  header[9] = 6;
  const row = Buffer.from([0, 50, 60, 80, 255, 200, 210, 240, 255]);
  return new Uint8Array(
    Buffer.concat([
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
      chunk("IHDR", header),
      chunk("IDAT", deflateSync(Buffer.concat([row, row]))),
      chunk("IEND", Buffer.alloc(0)),
    ]),
  );
}
function fileStore() {
  const data = new Map<string, Uint8Array>();
  return {
    data,
    async get(key: string) {
      return data.get(key) ?? null;
    },
    async put(key: string, value: Uint8Array) {
      data.set(key, value);
    },
  } satisfies FileStore & { data: Map<string, Uint8Array> };
}
test("JSON 與 SVG 為真實 HTTPS 附件回應，包含完整中文與可還原資料", async () => {
  const store = fixture(),
    c = demoChart();
  await store.put("a", c, null);
  for (const format of ["json", "svg"]) {
    const r = await api(
      new Request(`https://test.example/api/charts/${c.id}/export.${format}`),
      {},
      store,
      "a",
    );
    assert.equal(r.status, 200);
    assert.match(r.headers.get("Content-Disposition")!, /^attachment;/);
    assert.match(r.headers.get("Content-Disposition")!, /filename\*=UTF-8''/);
    if (format === "json") {
      const raw = (await r.json()) as any;
      assert.equal(raw.charts[0].goal, c.goal);
      assert.equal(raw.charts[0].expansions[0].length, 8);
    } else {
      const text = await r.text();
      assert.equal((text.match(/<rect /g) || []).length, 82);
      assert.match(text, /基礎發音/);
    }
  }
  const backup = await api(
    new Request("https://test.example/api/backup.json"),
    {},
    store,
    "a",
  );
  assert.match(backup.headers.get("Content-Disposition")!, /^attachment/);
  assert.equal(((await backup.json()) as any).charts.length, 1);
});
test("所有備份與附件依登入身分隔離", async () => {
  const store = fixture(),
    c = demoChart();
  await store.put("a", c, null);
  assert.equal(
    (
      await api(
        new Request("https://test.example/api/backup.json"),
        {},
        store,
        null,
      )
    ).status,
    401,
  );
  assert.equal(
    (
      await api(
        new Request(`https://test.example/api/charts/${c.id}/export.json`),
        {},
        store,
        "b",
      )
    ).status,
    404,
  );
  const backup = await api(
    new Request("https://test.example/api/backup.json"),
    {},
    store,
    "b",
  );
  assert.equal(((await backup.json()) as any).charts.length, 0);
});
test("PDF 為可解析的實際 A3 PDF，並內嵌可編輯 JSON 附件", async () => {
  const bytes = await createPdf(png(), demoChart());
  assert.equal(new TextDecoder().decode(bytes.slice(0, 5)), "%PDF-");
  const pdf = await PDFDocument.load(bytes);
  assert.equal(pdf.getPageCount(), 1);
  assert.ok(Math.abs(pdf.getPage(0).getWidth() - 841.89) < 1);
  assert.ok(pdf.catalog.has((await import("pdf-lib")).PDFName.of("Names")));
});
test("產生、儲存、下載 PDF，版本更新後不覆蓋舊匯出", async () => {
  const store = fixture(),
    c = demoChart(),
    files = fileStore();
  await store.put("a", c, null);
  const url = `https://test.example/api/charts/${c.id}/export.pdf?revision=0`;
  const result = await api(
    new Request(url, {
      method: "POST",
      headers: { "Content-Type": "image/png" },
      body: new Uint8Array(png()).buffer,
    }),
    {},
    store,
    "a",
    undefined,
    files,
  );
  assert.equal(result.status, 200);
  const link = (await result.json()) as any;
  assert.equal(link.url, `/api/charts/${c.id}/export.pdf?revision=0`);
  const download = await api(
    new Request("https://test.example" + link.url),
    {},
    store,
    "a",
    undefined,
    files,
  );
  assert.equal(download.status, 200);
  assert.equal(download.headers.get("Content-Type"), "application/pdf");
  assert.match(download.headers.get("Content-Disposition")!, /^attachment;/);
  assert.equal(
    new TextDecoder().decode((await download.arrayBuffer()).slice(0, 5)),
    "%PDF-",
  );
  assert.equal(
    (await api(new Request(url), {}, store, "b", undefined, files)).status,
    404,
  );
  await store.put("a", { ...c, revision: 1 }, 0);
  assert.equal(
    (
      await api(
        new Request(url, {
          method: "POST",
          headers: { "Content-Type": "image/png" },
          body: new Uint8Array(png()).buffer,
        }),
        {},
        store,
        "a",
        undefined,
        files,
      )
    ).status,
    409,
  );
  assert.equal(files.data.size, 1);
});
test("拒絕偽造圖片、過大尺寸，以及尚未產生的 PDF", async () => {
  await assert.rejects(() =>
    createPdf(new TextEncoder().encode("<html>bad</html>"), demoChart()),
  );
  const fake = png();
  new DataView(fake.buffer).setUint32(16, 50000);
  await assert.rejects(() => createPdf(fake, demoChart()));
  const store = fixture(),
    c = demoChart();
  await store.put("a", c, null);
  assert.equal(
    (
      await api(
        new Request(
          `https://test.example/api/charts/${c.id}/export.pdf?revision=0`,
        ),
        {},
        store,
        "a",
        undefined,
        fileStore(),
      )
    ).status,
    404,
  );
});
test("SVG 匯出不截斷長目標，並跳脫文字中的 XML", () => {
  const c = demoChart();
  c.goal = "目標".repeat(98) + '<>&"';
  const svg = svgChart(c);
  assert.equal((svg.match(/目/g) || []).length >= 98, true);
  assert.match(svg, /&lt;&gt;&amp;&quot;/);
  assert.doesNotMatch(svg, /<script>/);
});
