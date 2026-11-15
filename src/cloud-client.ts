import { chartSchema, type Chart } from "./domain.ts";
import type { connectAccount } from "./account-client.ts";

type Account = Awaited<ReturnType<typeof connectAccount>>;
let connection: Promise<Account> | undefined;
const trialKey = "mandala-tab-trial";

export function readTrial() {
  try {
    const value = sessionStorage.getItem(trialKey);
    return value ? chartSchema.parse(JSON.parse(value)) : null;
  } catch {
    return null;
  }
}

export function storeTrial(chart: Chart | null) {
  if (chart) sessionStorage.setItem(trialKey, JSON.stringify(chart));
  else sessionStorage.removeItem(trialKey);
}

export async function accountClient(key: string) {
  if (!connection) {
    const path = "/account.js";
    connection = import(path).then((module) => module.connectAccount(key) as Promise<Account>);
    connection.catch(() => { connection = undefined; });
  }
  return connection;
}

export async function accountHeaders() {
  const clerk = await connection?.catch(() => undefined);
  const token = await clerk?.session?.getToken();
  return token ? { Authorization: "Bearer " + token } : undefined;
}

export async function initWorldAccount() {
  const response = await fetch("/api/config");
  if (!response.ok) return;
  const config = await response.json();
  if (config.mode === "vercel" && config.publishableKey)
    await accountClient(config.publishableKey);
}
