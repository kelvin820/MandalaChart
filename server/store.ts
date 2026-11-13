import { chartSchema, type Chart } from "../src/domain.ts";
import type { Store, Job } from "./api.ts";
export class D1Store implements Store {
  private db: D1Database;
  constructor(db: D1Database) {
    this.db = db;
  }
  async list(owner: string) {
    const r = await this.db
      .prepare(
        "SELECT payload FROM mandala_charts WHERE owner=? ORDER BY updated_at DESC LIMIT 100",
      )
      .bind(owner)
      .all<{ payload: string }>();
    return r.results.map((r) => chartSchema.parse(JSON.parse(r.payload)));
  }
  async get(owner: string, id: string) {
    const r = await this.db
      .prepare("SELECT payload FROM mandala_charts WHERE owner=? AND id=?")
      .bind(owner, id)
      .first<{ payload: string }>();
    return r ? chartSchema.parse(JSON.parse(r.payload)) : null;
  }
  async put(owner: string, c: Chart, expected: number | null) {
    if (expected === null) {
      const r = await this.db
        .prepare(
          "INSERT OR IGNORE INTO mandala_charts (id,owner,revision,payload,updated_at) VALUES (?,?,?,?,?)",
        )
        .bind(c.id, owner, c.revision, JSON.stringify(c), c.updatedAt)
        .run();
      return r.meta.changes === 1;
    }
    const r = await this.db
      .prepare(
        "UPDATE mandala_charts SET revision=?,payload=?,updated_at=? WHERE owner=? AND id=? AND revision=?",
      )
      .bind(c.revision, JSON.stringify(c), c.updatedAt, owner, c.id, expected)
      .run();
    return r.meta.changes === 1;
  }
  async delete(owner: string, id: string, expected: number) {
    const r = await this.db
      .prepare(
        "DELETE FROM mandala_charts WHERE owner=? AND id=? AND revision=?",
      )
      .bind(owner, id, expected)
      .run();
    return r.meta.changes === 1;
  }
  async job(owner: string, id: string) {
    const r = await this.db
      .prepare("SELECT payload FROM mandala_generations WHERE owner=? AND id=?")
      .bind(owner, id)
      .first<{ payload: string }>();
    return r ? (JSON.parse(r.payload) as Job) : null;
  }
  async reserve(owner: string, j: Job) {
    const r = await this.db
      .prepare(
        "INSERT OR IGNORE INTO mandala_generations (id,owner,created_at,payload) SELECT ?,?,?,? WHERE (SELECT COUNT(*) FROM mandala_generations WHERE owner=? AND created_at>?)<6 AND (SELECT COUNT(*) FROM mandala_generations WHERE owner=? AND created_at>?)<60",
      )
      .bind(
        j.requestId,
        owner,
        j.createdAt,
        JSON.stringify(j),
        owner,
        Date.now() - 60000,
        owner,
        Date.now() - 86400000,
      )
      .run();
    return r.meta.changes === 1;
  }
  async finish(owner: string, j: Job) {
    await this.db
      .prepare(
        "UPDATE mandala_generations SET payload=? WHERE owner=? AND id=?",
      )
      .bind(JSON.stringify(j), owner, j.requestId)
      .run();
  }
}
