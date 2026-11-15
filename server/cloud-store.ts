import type { Client, InArgs, InValue, Transaction } from "@libsql/client";
import { ApiProblem, type Job } from "./api.ts";
import { D1Store } from "./store.ts";
import type { Chart } from "../src/domain.ts";

type Database = Pick<Client | Transaction, "execute">;
export const FREE_GOALS = 3;
const minute = 60_000;
const day = 24 * 60 * minute;
type StoreOptions = { newGoal?: string; trialNetwork?: string; dailyTrialLimit?: number };

function asD1(db: Database) {
  return {
    prepare(sql: string) {
      const execute = (args: InArgs = []) => db.execute({ sql, args });
      const bind = (...args: InValue[]) => ({
        async all() { return { results: (await execute(args)).rows }; },
        async first() { return (await execute(args)).rows[0] ?? null; },
        async run() { return { meta: { changes: (await execute(args)).rowsAffected } }; },
      });
      return { bind };
    },
  } as unknown as D1Database;
}

export async function withWrite<T>(db: Client, run: (tx: Transaction) => Promise<T>) {
  const tx = await db.transaction("write");
  try {
    const value = await run(tx);
    await tx.commit();
    return value;
  } finally {
    tx.close();
  }
}

export async function goalAllowance(db: Database, owner: string, now = Date.now()) {
  const { rows } = await db.execute({
    sql: `SELECT
      (SELECT COUNT(*) FROM mandala_purchases WHERE owner=? AND state='paid') AS paid,
      (SELECT COUNT(*) FROM mandala_slots WHERE owner=? AND saved=1) AS used,
      (SELECT COUNT(*) FROM mandala_slots WHERE owner=? AND saved=0 AND expires_at>?) AS pending`,
    args: [owner, owner, owner, now],
  });
  const { paid, used, pending } = rows[0];
  const total = FREE_GOALS + Number(paid);
  return { total, used: Number(used), remaining: Math.max(0, total - Number(used) - Number(pending)) };
}

function outOfGoals() {
  return new ApiProblem("免費與已購買的名額已用完。", 409, "GOAL_LIMIT");
}

export class CloudStore extends D1Store {
  private readonly client: Client;
  private readonly options: StoreOptions;

  constructor(client: Client, options: StoreOptions = {}) {
    super(asD1(client));
    this.client = client;
    this.options = options;
  }

  override async put(owner: string, chart: Chart, expected: number | null) {
    if (expected !== null) return super.put(owner, chart, expected);
    return withWrite(this.client, async (tx) => {
      const store = new D1Store(asD1(tx));
      const now = Date.now();
      const { rows } = await tx.execute({
        sql: "SELECT saved, expires_at FROM mandala_slots WHERE owner=? AND id=?",
        args: [owner, chart.id],
      });
      const slot = rows[0];
      if (slot?.saved === 1) return false;
      if (!(slot && Number(slot.expires_at) > now) && !(await goalAllowance(tx, owner, now)).remaining)
        throw outOfGoals();
      if (!(await store.put(owner, chart, null))) return false;
      await tx.execute({
        sql: `INSERT INTO mandala_slots (owner,id,saved,expires_at) VALUES (?,?,1,0)
          ON CONFLICT(owner,id) DO UPDATE SET saved=1, expires_at=0`,
        args: [owner, chart.id],
      });
      return true;
    });
  }

  override async job(owner: string, id: string) {
    if (!this.options.trialNetwork) return super.job(owner, id);
    const { rows } = await this.client.execute({
      sql: "SELECT payload FROM mandala_trial_jobs WHERE owner=? AND id=? AND created_at>?",
      args: [owner, id, Date.now() - 15 * minute],
    });
    return rows[0]?.payload ? JSON.parse(String(rows[0].payload)) as Job : null;
  }

  override async reserve(owner: string, job: Job) {
    const network = this.options.trialNetwork;
    if (network) {
      const now = Date.now();
      return withWrite(this.client, async (tx) => {
        await tx.execute({
          sql: "DELETE FROM mandala_trial_jobs WHERE created_at<=?",
          args: [now - day],
        });
        await tx.execute({
          sql: "UPDATE mandala_trial_jobs SET payload=NULL WHERE created_at<=? AND payload IS NOT NULL",
          args: [now - 15 * minute],
        });
        const { rows } = await tx.execute({
          sql: `SELECT
            (SELECT COUNT(*) FROM mandala_trial_jobs WHERE owner=? AND
              (state='succeeded' OR (state='pending' AND created_at>?))) AS trial,
            (SELECT COUNT(*) FROM mandala_trial_jobs WHERE network=? AND created_at>?) AS attempts`,
          args: [owner, now - 4 * minute, network, now - day],
        });
        if (Number(rows[0].trial))
          throw new ApiProblem("每位訪客可試用一個目標。", 409, "TRIAL_LIMIT");
        if (Number(rows[0].attempts) >= 12)
          throw new ApiProblem("今日試用名額已滿，請稍後再試。", 429, "TRIAL_LIMIT");
        if (this.options.dailyTrialLimit !== undefined) {
          const { rows: daily } = await tx.execute("SELECT COUNT(*) AS attempts FROM mandala_trial_jobs");
          if (Number(daily[0].attempts) >= this.options.dailyTrialLimit)
            throw new ApiProblem("今日試用名額已滿，請稍後再試。", 429, "TRIAL_LIMIT");
        }
        const result = await tx.execute({
          sql: "INSERT OR IGNORE INTO mandala_trial_jobs VALUES (?,?,?,?,?,?)",
          args: [job.requestId, owner, network, job.createdAt, job.state, JSON.stringify(job)],
        });
        return result.rowsAffected === 1;
      });
    }
    if (this.options.newGoal !== job.requestId) return super.reserve(owner, job);
    return withWrite(this.client, async (tx) => {
      const store = new D1Store(asD1(tx));
      const now = Date.now();
      if (!(await goalAllowance(tx, owner, now)).remaining) throw outOfGoals();
      if (!(await store.reserve(owner, job))) return false;
      await tx.execute({
        sql: "INSERT INTO mandala_slots (owner,id,expires_at) VALUES (?,?,?)",
        args: [owner, job.requestId, now + 15 * minute],
      });
      return true;
    });
  }

  override async finish(owner: string, job: Job) {
    if (this.options.trialNetwork) {
      await this.client.execute({
        sql: "UPDATE mandala_trial_jobs SET state=?, payload=? WHERE owner=? AND id=?",
        args: [job.state, JSON.stringify(job), owner, job.requestId],
      });
    } else if (job.state === "failed") {
      await withWrite(this.client, async (tx) => {
        await new D1Store(asD1(tx)).finish(owner, job);
        await tx.execute({
          sql: "DELETE FROM mandala_slots WHERE owner=? AND id=? AND saved=0",
          args: [owner, job.requestId],
        });
      });
    } else {
      await super.finish(owner, job);
    }
  }
}
