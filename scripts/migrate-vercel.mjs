import { readFile } from "node:fs/promises";
import { createClient } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL;
if (!url) throw new Error("Missing TURSO_DATABASE_URL");
const client = createClient({ url, authToken: process.env.TURSO_AUTH_TOKEN });
try {
  const original = (await readFile(new URL("../drizzle/0000_mandala.sql", import.meta.url), "utf8"))
    .replaceAll("--> statement-breakpoint", "")
    .replace(/CREATE (TABLE|INDEX) /g, "CREATE $1 IF NOT EXISTS ");
  const membership = await readFile(new URL("../drizzle/vercel.sql", import.meta.url), "utf8");
  const statements = (original + "\n" + membership).split(";").map((sql) => sql.trim()).filter(Boolean);
  await client.batch(statements, "write");
  console.log("Mandala cloud schema is ready.");
} finally {
  client.close();
}
