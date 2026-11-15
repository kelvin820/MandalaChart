import { Clerk } from "@clerk/clerk-js";
import { zhTW } from "@clerk/localizations";

export async function connectAccount(key: string) {
  const clerk = new Clerk(key);
  await clerk.load({
    localization: zhTW,
    telemetry: { disabled: true },
  });
  return clerk;
}
