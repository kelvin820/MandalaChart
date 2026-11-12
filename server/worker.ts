import { api, json } from "./api.ts";
import { D1Store } from "./store.ts";
import type { ModelEnv } from "./llm.ts";
import assets from "./assets.generated.ts";
export default {
  async fetch(request: Request, env: ModelEnv & { DB?: D1Database }) {
    const path = new URL(request.url).pathname;
    if (path.startsWith("/api/")) {
      if (!env.DB) return json({ error: "雲端資料庫尚未完成設定。" }, 503);
      return api(
        request,
        env,
        new D1Store(env.DB),
        request.headers.get("oai-authenticated-user-id"),
      );
    }
    const file =
      assets[path === "/" ? "/index.html" : path] ??
      (path === "/worlds/" ? assets["/worlds/index.html"] : null);
    if (!file) return new Response("Not found", { status: 404 });
    return new Response(file.body, {
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
