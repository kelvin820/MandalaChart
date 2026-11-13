import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createServer } from "node:http";
import { DatabaseSync } from "node:sqlite";
import { readFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { api } from "./api.ts";
import { D1Store } from "./store.ts";
import worker from "./worker.ts";
mkdirSync("work", { recursive: true });
const db = new DatabaseSync("work/mandala.sqlite");
db.exec("PRAGMA journal_mode=WAL;");
db.exec("CREATE TABLE IF NOT EXISTS local_migrations(name TEXT PRIMARY KEY)");
if (
  !db
    .prepare("SELECT name FROM local_migrations WHERE name=?")
    .get("0000_mandala")
) {
  db.exec(readFileSync(resolve("drizzle/0000_mandala.sql"), "utf8"));
  db.prepare("INSERT INTO local_migrations(name) VALUES(?)").run(
    "0000_mandala",
  );
}
export function localD1(sqlite: DatabaseSync) {
  return {
    prepare(sql: string) {
      let values: any[] = [];
      const stmt = {
        bind(...args: any[]) {
          values = args;
          return stmt;
        },
        async all() {
          return { results: sqlite.prepare(sql).all(...values) };
        },
        async first() {
          return sqlite.prepare(sql).get(...values) ?? null;
        },
        async run() {
          const r = sqlite.prepare(sql).run(...values);
          return { meta: { changes: Number(r.changes) } };
        },
      };
      return stmt;
    },
  } as unknown as D1Database;
}
const store = new D1Store(localD1(db));
const server = createServer(async (req, res) => {
  try {
    const body: Buffer[] = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > (req.url?.includes("/export.pdf") ? 3_000_000 : 300_000)) {
        res.writeHead(413);
        res.end("Body too large");
        return;
      }
      body.push(chunk);
    }
    const url = "http://" + (req.headers.host ?? "127.0.0.1:3000") + req.url;
    const request = new Request(url, {
      method: req.method,
      headers: req.headers as Record<string, string>,
      ...(req.method !== "GET" && req.method !== "HEAD"
        ? { body: Buffer.concat(body) }
        : {}),
    });
    const response = new URL(url).pathname.startsWith("/api/")
      ? await api(request, process.env, store, "local-owner", undefined, {
          async get(key: string) {
            try {
              return new Uint8Array(
                await readFile(resolve("work/exports", key)),
              );
            } catch {
              return null;
            }
          },
          async put(key: string, bytes: Uint8Array) {
            const target = resolve("work/exports", key);
            await mkdir(resolve(target, ".."), { recursive: true });
            await writeFile(target, bytes);
          },
        })
      : await worker.fetch(request, {});
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch {
    res.writeHead(500);
    res.end("Local server error");
  }
});
server.requestTimeout = 230_000;
server.listen(Number(process.env.PORT || 3000), "127.0.0.1", () =>
  console.log(`Mandala Studio: http://127.0.0.1:${process.env.PORT || 3000}`),
);
