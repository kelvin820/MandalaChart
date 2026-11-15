import { createClient } from "@libsql/client/web";
import { createClerkClient } from "@clerk/backend";
import { get, put } from "@vercel/blob";
import { cloudHandler } from "../server/cloud.ts";
import { json } from "../server/api.ts";
import type { FileStore } from "../server/files.ts";

const env = process.env;
const files: FileStore | undefined = env.BLOB_STORE_ID || env.BLOB_READ_WRITE_TOKEN ? {
  async get(key) {
    const file = await get(key, { access: "private", useCache: false });
    return file?.statusCode === 200 ? file.stream : null;
  },
  async put(key, bytes) {
    await put(key, Buffer.from(bytes), {
      access: "private",
      contentType: "application/pdf",
      allowOverwrite: true,
    });
  },
} : undefined;

function setup() {
  const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, CLERK_SECRET_KEY,
    MANDALA_TRIAL_SECRET, MANDALA_ORIGIN, MANDALA_PREVIEW_ORIGIN } = env;
  const production = env.VERCEL_ENV === "production";
  const trialOnly = production && env.MANDALA_PUBLIC_TRIAL_ONLY === "1";
  const publishableKey = env.CLERK_PUBLISHABLE_KEY || env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN || !MANDALA_TRIAL_SECRET || MANDALA_TRIAL_SECRET.length < 32)
    return null;
  const clerk = !trialOnly && publishableKey && CLERK_SECRET_KEY
    ? createClerkClient({ secretKey: CLERK_SECRET_KEY, publishableKey }) : null;
  if (!trialOnly && (!clerk || (production &&
      (!publishableKey?.startsWith("pk_live_") || !CLERK_SECRET_KEY?.startsWith("sk_live_")))))
    return null;
  const deploymentUrl = env.VERCEL_ENV === "preview" ? env.VERCEL_URL : env.VERCEL_PROJECT_PRODUCTION_URL;
  const configured = MANDALA_ORIGIN || (deploymentUrl && "https://" + deploymentUrl);
  if (!configured) return null;
  const db = createClient({ url: TURSO_DATABASE_URL, authToken: TURSO_AUTH_TOKEN });
  const handlerFor = (origin: string) => cloudHandler({
    env,
    db,
    origin,
    files,
    trialSecret: MANDALA_TRIAL_SECRET,
    members: clerk && publishableKey ? {
      publishableKey,
      async identity(request) {
        const state = await clerk.authenticateRequest(request, { authorizedParties: [origin] });
        const auth = state.toAuth();
        const id = auth?.userId;
        if (!id) return null;
        if (new URL(request.url).pathname !== "/api/billing/checkout") return { id };
        const user = await clerk.users.getUser(id).catch(() => null);
        const email = user?.emailAddresses.find((item) =>
          item.id === user.primaryEmailAddressId && item.verification?.status === "verified"
        )?.emailAddress;
        return { id, email };
      },
    } : undefined,
  });
  const primary = handlerFor(new URL(configured).origin);
  if (env.VERCEL_ENV !== "preview" || !MANDALA_PREVIEW_ORIGIN) return primary;

  const previewOrigin = new URL(MANDALA_PREVIEW_ORIGIN).origin;
  const preview = handlerFor(previewOrigin);
  return (request: Request) =>
    new URL(request.url).origin === previewOrigin ? preview(request) : primary(request);
}

const handle = setup();

export default {
  async fetch(request: Request) {
    if (!handle) return json({ error: "雲端服務尚未設定。" }, 503);
    const url = new URL(request.url);
    const path = url.searchParams.get("__mandala_path");
    if (path !== null) {
      url.pathname = "/api/" + path;
      url.searchParams.delete("__mandala_path");
      return handle(new Request(url, request));
    }
    return handle(request);
  },
};
