import { api, json } from "./api.ts";
import { D1Store } from "./store.ts";
import type { ModelEnv } from "./llm.ts";
import assets from "./assets.generated.ts";
export default {
  async fetch(
    request: Request,
    env: ModelEnv & { DB?: D1Database; BUCKET?: R2Bucket },
  ) {
    const path = new URL(request.url).pathname;
    if (path.startsWith("/api/")) {
      if (!env.DB) return json({ error: "雲端資料庫尚未完成設定。" }, 503);
      return api(
        request,
        env,
        new D1Store(env.DB),
        request.headers.get("oai-authenticated-user-id"),
        undefined,
        env.BUCKET
          ? {
              async get(key: string) {
                const file = await env.BUCKET!.get(key);
                return file ? new Uint8Array(await file.arrayBuffer()) : null;
              },
              async put(key: string, bytes: Uint8Array) {
                await env.BUCKET!.put(key, bytes, {
                  httpMetadata: { contentType: "application/pdf" },
                });
              },
            }
          : undefined,
      );
    }
    const file =
      assets[path === "/" ? "/index.html" : path] ??
      (path === "/worlds/" ? assets["/worlds/index.html"] : null);
    if (!file) return new Response("Not found", { status: 404 });
    const body = file.base64
      ? Uint8Array.from(atob(file.body), (byte) => byte.charCodeAt(0))
      : file.body;
    return new Response(body, {
      headers: {
        "Content-Type": file.type,
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "same-origin",
        "Content-Security-Policy":
          "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'",
      },
    });
  },
};
