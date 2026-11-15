import { Clerk } from "@clerk/clerk-js";
import { zhTW } from "@clerk/localizations";

type ClerkUi = NonNullable<NonNullable<Parameters<Clerk["load"]>[0]>["ui"]>;

export async function connectAccount(key: string) {
  const clerk = new Clerk(key);
  const frontend = atob(key.split("_")[2]).slice(0, -1);
  await new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://${frontend}/npm/@clerk/ui@1/dist/ui.browser.js`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve();
    script.onerror = () => {
      script.remove();
      reject(new Error("登入介面暫時無法載入，請稍後再試。"));
    };
    document.head.appendChild(script);
  });
  const { __internal_ClerkUICtor: ClerkUI } = window as Window & {
    __internal_ClerkUICtor?: ClerkUi["ClerkUI"];
  };
  if (!ClerkUI) throw new Error("登入介面暫時無法載入，請稍後再試。");
  await clerk.load({
    ui: { ClerkUI },
    localization: zhTW,
    telemetry: { disabled: true },
  });
  return clerk;
}
