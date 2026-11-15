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
    MANDALA_TRIAL_SECRET, MANDALA_ORIGIN } = env;
  const publishableKey = env.CLERK_PUBLISHABLE_KEY || env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN || !publishableKey ||
      !CLERK_SECRET_KEY || !MANDALA_TRIAL_SECRET || MANDALA_TRIAL_SECRET.length < 32)
    return null;
  const deploymentUrl = env.VERCEL_ENV === "preview" ? env.VERCEL_URL : env.VERCEL_PROJECT_PRODUCTION_URL;
  const configured = MANDALA_ORIGIN || (deploymentUrl && "https://" + deploymentUrl);
  if (!configured) return null;
  const origin = new URL(configured).origin;
  const clerk = createClerkClient({ secretKey: CLERK_SECRET_KEY, publishableKey });
  const db = createClient({ url: TURSO_DATABASE_URL, authToken: TURSO_AUTH_TOKEN });
  return cloudHandler({
    env,
    db,
    origin,
    files,
    publishableKey,
    trialSecret: MANDALA_TRIAL_SECRET,
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
  });
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
