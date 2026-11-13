import { PDFDocument, PageSizes } from "pdf-lib";
import { svgChart } from "../src/export.ts";
import type { Chart } from "../src/domain.ts";
export interface FileStore {
  get(key: string): Promise<Uint8Array | null>;
  put(key: string, bytes: Uint8Array): Promise<void>;
}
export function attachment(body: BodyInit, type: string, name: string) {
  return new Response(body, {
    headers: {
      "Content-Type": type,
      "Content-Disposition": `attachment; filename="mandala.${name.split(".").pop()}"; filename*=UTF-8''${encodeURIComponent(name)}`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
export const pdfKey = (owner: string, id: string, revision: number) =>
  `${encodeURIComponent(owner)}/${id}/${revision}.pdf`;
export async function createPdf(png: Uint8Array, chart: Chart) {
  if (
    png.length < 24 ||
    ![137, 80, 78, 71, 13, 10, 26, 10].every((v, i) => png[i] === v)
  )
    throw Error("INVALID_PNG");
  const view = new DataView(png.buffer, png.byteOffset, png.byteLength),
    width = view.getUint32(16),
    height = view.getUint32(20);
  if (
    width < 1 ||
    height < 1 ||
    width > 2500 ||
    height > 2800 ||
    width * height > 5_000_000
  )
    throw Error("IMAGE_SIZE");
  const doc = await PDFDocument.create();
  doc.setTitle("Mandala Chart");
  doc.setCreator("Mandala Studio");
  doc.setCreationDate(new Date(chart.createdAt));
  doc.setModificationDate(new Date());
  const image = await doc.embedPng(png),
    page = doc.addPage([PageSizes.A3[1], PageSizes.A3[0]]),
    margin = 16;
  const fit = image.scale(
    Math.min(
      (page.getWidth() - margin * 2) / image.width,
      (page.getHeight() - margin * 2) / image.height,
    ),
  );
  page.drawImage(image, {
    x: (page.getWidth() - fit.width) / 2,
    y: (page.getHeight() - fit.height) / 2,
    width: fit.width,
    height: fit.height,
  });
  await doc.attach(
    new TextEncoder().encode(
      JSON.stringify({ version: 2, charts: [chart] }, null, 2),
    ),
    "mandala-backup.json",
    {
      mimeType: "application/json",
      description: "Editable Mandala Studio backup",
    },
  );
  return doc.save();
}
export async function readPng(request: Request) {
  if (request.headers.get("Content-Type")?.split(";")[0] !== "image/png")
    throw Error("INVALID_PNG");
  const reader = request.body?.getReader();
  if (!reader) throw Error("INVALID_PNG");
  let size = 0;
  const parts: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 3_000_000) {
      await reader.cancel();
      throw Error("IMAGE_SIZE");
    }
    parts.push(value);
  }
  const bytes = new Uint8Array(size);
  let pos = 0;
  for (const part of parts) {
    bytes.set(part, pos);
    pos += part.length;
  }
  return bytes;
}
export async function chartFile(
  request: Request,
  c: Chart,
  format: string,
  owner: string,
  files?: FileStore,
) {
  if (format === "json" && request.method === "GET")
    return attachment(
      JSON.stringify({ version: 2, charts: [c] }, null, 2),
      "application/json; charset=utf-8",
      "曼陀羅表備份.json",
    );
  if (format === "svg" && request.method === "GET")
    return attachment(
      svgChart(c),
      "image/svg+xml; charset=utf-8",
      "我的曼陀羅表.svg",
    );
  if (format !== "pdf") return null;
  if (!files)
    return new Response(
      JSON.stringify({ error: "PDF 儲存服務尚未就緒，請稍後再試。" }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  const revision = Number(new URL(request.url).searchParams.get("revision"));
  if (!Number.isSafeInteger(revision) || revision < 0 || revision > c.revision)
    return new Response(
      JSON.stringify({ error: "匯出版本不正確，請重新開啟匯出視窗。" }),
      { status: 409, headers: { "Content-Type": "application/json" } },
    );
  const key = pdfKey(owner, c.id, revision);
  if (request.method === "GET") {
    const bytes = await files.get(key);
    return bytes
      ? attachment(
          new Uint8Array(bytes).buffer,
          "application/pdf",
          "我的曼陀羅表.pdf",
        )
      : new Response(
          JSON.stringify({ error: "請先在表格中按「產生 PDF」，再下載。" }),
          { status: 404, headers: { "Content-Type": "application/json" } },
        );
  }
  if (request.method === "POST") {
    if (revision !== c.revision)
      return new Response(
        JSON.stringify({ error: "表格已更新，請重新開啟匯出視窗。" }),
        { status: 409, headers: { "Content-Type": "application/json" } },
      );
    try {
      const bytes = await createPdf(await readPng(request), c);
      await files.put(key, bytes);
      return new Response(
        JSON.stringify({
          url: `/api/charts/${c.id}/export.pdf?revision=${revision}`,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        },
      );
    } catch {
      return new Response(
        JSON.stringify({
          error: "無法產生 PDF，請重試。圖片須為有效 PNG，且小於 3 MB。",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
  }
  return null;
}
