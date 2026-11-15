import type { Client } from "@libsql/client";
import { Webhook } from "standardwebhooks";
import { z } from "zod";
import { ApiProblem, json } from "./api.ts";
import { goalAllowance, withWrite } from "./cloud-store.ts";

export type BillingEnv = {
  POLAR_ACCESS_TOKEN?: string;
  POLAR_WEBHOOK_SECRET?: string;
  POLAR_PRODUCT_ID?: string;
  POLAR_SERVER?: string;
};

export function billingConfig(env: BillingEnv) {
  if (!env.POLAR_ACCESS_TOKEN || !env.POLAR_WEBHOOK_SECRET || !env.POLAR_PRODUCT_ID ||
      !["sandbox", "production"].includes(env.POLAR_SERVER ?? "")) return null;
  return {
    accessToken: env.POLAR_ACCESS_TOKEN,
    webhookSecret: env.POLAR_WEBHOOK_SECRET,
    product: env.POLAR_PRODUCT_ID,
    endpoint: env.POLAR_SERVER === "sandbox" ? "https://sandbox-api.polar.sh" : "https://api.polar.sh",
    sandbox: env.POLAR_SERVER === "sandbox",
  };
}
type BillingConfig = NonNullable<ReturnType<typeof billingConfig>>;

export async function checkout(db: Client, owner: string, origin: string, config: BillingConfig, email?: string) {
  const now = Date.now();
  const purchase = await withWrite(db, async (tx) => {
    const allowance = await goalAllowance(tx, owner, now);
    if (allowance.remaining)
      throw new ApiProblem("你還有可用的目標名額。", 409, "GOALS_AVAILABLE");
    if (allowance.used < allowance.total)
      throw new ApiProblem("有目標正在生成，請等候完成後再購買。", 409, "GOALS_PENDING");
    const { rows } = await tx.execute({
      sql: `SELECT checkout_url FROM mandala_purchases
        WHERE owner=? AND product_id=? AND state='open' AND expires_at>?
        ORDER BY expires_at DESC LIMIT 1`,
      args: [owner, config.product, now],
    });
    if (rows[0]?.checkout_url) return { url: String(rows[0].checkout_url) };
    if (rows.length) throw new ApiProblem("正在開啟付款頁，請稍候再試。", 409, "CHECKOUT_PENDING");
    const id = crypto.randomUUID();
    await tx.execute({
      sql: "INSERT INTO mandala_purchases (id,owner,product_id,expires_at,state) VALUES (?,?,?,?,'open')",
      args: [id, owner, config.product, now + 60_000],
    });
    return { id };
  });
  if (purchase.url) return json({ url: purchase.url });
  try {
    const response = await fetch(config.endpoint + "/v1/checkouts/", {
      method: "POST",
      headers: { Authorization: "Bearer " + config.accessToken, "Content-Type": "application/json" },
      signal: AbortSignal.timeout(15_000),
      body: JSON.stringify({
        products: [config.product],
        external_customer_id: owner,
        customer_email: email,
        allow_discount_codes: false,
        metadata: { mandala_purchase: purchase.id },
        success_url: new URL("/?purchase=" + purchase.id, origin).href,
        return_url: new URL("/", origin).href,
      }),
    });
    if (!response.ok) throw Error("Checkout unavailable");
    const session = z.object({
      id: z.uuid(),
      url: z.url(),
      expires_at: z.string(),
      amount: z.number().positive(),
      product: z.object({ id: z.literal(config.product), is_recurring: z.literal(false) }),
    }).parse(await response.json());
    const url = new URL(session.url);
    const expires = Date.parse(session.expires_at);
    if (url.protocol !== "https:" || !Number.isFinite(expires) || expires <= now)
      throw Error("Invalid checkout");
    await db.execute({
      sql: "UPDATE mandala_purchases SET checkout_id=?,checkout_url=?,expires_at=? WHERE id=?",
      args: [session.id, url.href, expires, purchase.id!],
    });
    return json({ url: url.href });
  } catch {
    await db.execute({
      sql: "DELETE FROM mandala_purchases WHERE id=? AND checkout_id IS NULL",
      args: [purchase.id!],
    });
    throw new ApiProblem("目前無法開啟付款頁，請稍後再試。", 502, "CHECKOUT_UNAVAILABLE");
  }
}

const eventSchema = z.object({
  type: z.enum(["order.paid", "order.refunded"]),
  data: z.object({
    id: z.uuid(),
    checkout_id: z.uuid(),
    product_id: z.uuid(),
    paid: z.boolean(),
    status: z.string(),
    billing_reason: z.literal("purchase"),
    subtotal_amount: z.number().int().positive(),
    metadata: z.object({ mandala_purchase: z.uuid() }),
    customer: z.object({ external_id: z.string() }),
  }),
});

export async function polarWebhook(request: Request, db: Client, config: BillingConfig) {
  let event;
  try {
    // Polar signs with the literal endpoint secret as bytes.
    event = new Webhook(Buffer.from(config.webhookSecret, "utf8"), { format: "raw" })
      .verify(await request.text(), Object.fromEntries(request.headers));
  } catch {
    return json({ error: "Invalid webhook signature" }, 401);
  }
  const parsed = eventSchema.safeParse(event);
  if (!parsed.success) return json({ ok: true });
  const { type, data } = parsed.data;
  if (type === "order.paid" && (!data.paid || data.status !== "paid")) return json({ ok: true });
  if (type === "order.refunded" && data.status !== "refunded") return json({ ok: true });
  const state = type === "order.refunded" ? "refunded" : "paid";
  await db.execute({
    sql: `UPDATE mandala_purchases SET state=?, order_id=?
      WHERE id=? AND owner=? AND product_id=? AND checkout_id=?
      AND (order_id IS NULL OR order_id=?) AND state!='refunded'`,
    args: [state, data.id, data.metadata.mandala_purchase, data.customer.external_id,
      data.product_id, data.checkout_id, data.id],
  });
  return json({ ok: true });
}

export async function paymentStatus(db: Client, owner: string, id: string) {
  const { rows } = await db.execute({
    sql: "SELECT state,expires_at FROM mandala_purchases WHERE id=? AND owner=?",
    args: [id, owner],
  });
  const row = rows[0];
  if (!row) return json({ error: "找不到這張訂單。" }, 404);
  const state = row.state === "open" && Number(row.expires_at) <= Date.now() ? "expired" : row.state;
  return json({ state, ...(await goalAllowance(db, owner)) });
}
