import { build } from "esbuild";
import { readFile, writeFile, mkdir, rm, readdir, cp } from "node:fs/promises";
import { join, extname } from "node:path";
await rm("dist", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await cp("public", "dist/client", { recursive: true });
const clientOptions = {
  bundle: true,
  format: "esm",
  target: "es2023",
  minify: true,
};
await Promise.all([
  build({
    ...clientOptions,
    entryPoints: ["src/app.ts"],
    outfile: "dist/client/app.js",
  }),
  build({
    ...clientOptions,
    entryPoints: {
      "hero-scene": "src/scenes/home.js",
      "worlds/app": "src/scenes/worlds.js",
    },
    splitting: true,
    outdir: "dist/client",
    chunkNames: "assets/[name]-[hash]",
  }),
]);
const files = {};
async function collect(dir, prefix = "") {
  for (const f of await readdir(dir, { withFileTypes: true })) {
    const relative = prefix + "/" + f.name;
    if (f.isDirectory()) await collect(join(dir, f.name), relative);
    else {
      const extension = extname(f.name);
      const base64 = extension === ".woff2";
      const body = await readFile(
        join(dir, f.name),
        base64 ? "base64" : "utf8",
      );
      const type =
        {
          ".html": "text/html; charset=utf-8",
          ".css": "text/css; charset=utf-8",
          ".js": "text/javascript; charset=utf-8",
          ".svg": "image/svg+xml",
          ".woff2": "font/woff2",
        }[extension] ?? "text/plain; charset=utf-8";
      files[relative] = { body, type, ...(base64 ? { base64 } : {}) };
    }
  }
}
await collect("dist/client");
await writeFile(
  "server/assets.generated.ts",
  "export default " +
    JSON.stringify(files) +
    " as Record<string,{body:string;type:string;base64?:boolean}>;\n",
);
await build({
  entryPoints: ["server/worker.ts"],
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2023",
  outfile: "dist/server/index.js",
  minify: true,
});
await build({
  entryPoints: ["server/local.ts"],
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node24",
  packages: "external",
  outfile: "dist/local.mjs",
});
await mkdir("dist/.openai", { recursive: true });
await writeFile(
  "dist/.openai/hosting.json",
  await readFile(".openai/hosting.json", "utf8"),
);
console.log("Built client, Worker, and local SQLite server.");
