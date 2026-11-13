import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import { D1Store } from "../server/store.ts";
export function fixture() {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec(readFileSync("drizzle/0000_mandala.sql", "utf8"));
  const db = {
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
  return new D1Store(db);
}
