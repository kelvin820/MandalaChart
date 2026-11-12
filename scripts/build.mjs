import { build } from "esbuild";
import { readFile, writeFile, mkdir, rm, readdir } from "node:fs/promises";
import { join, extname } from "node:path";
await rm("dist", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/client", { recursive: true });
await build({
  entryPoints: ["src/app.ts"],
  bundle: true,
  format: "esm",
  target: "es2023",
  outfile: "dist/client/app.js",
  minify: true,
});
const files = {};
async function collect(dir, prefix = "") {
  for (const f of await readdir(dir, { withFileTypes: true })) {
    const relative = prefix + "/" + f.name;
    if (f.isDirectory()) await collect(join(dir, f.name), relative);
    else {
      const body = await readFile(join(dir, f.name), "utf8"),
        type =
          {
            ".html": "text/html; charset=utf-8",
            ".css": "text/css; charset=utf-8",
            ".js": "text/javascript; charset=utf-8",
          }[extname(f.name)] ?? "text/plain";
      files[relative] = { body, type };
      await mkdir(join("dist/client", prefix), { recursive: true });
      await writeFile(join("dist/client", relative), body);
    }
  }
}
await collect("public");
files["/app.js"] = {
  body: await readFile("dist/client/app.js", "utf8"),
  type: "text/javascript; charset=utf-8",
};
await writeFile(
  "server/assets.generated.ts",
  "export default " +
    JSON.stringify(files) +
    " as Record<string,{body:string;type:string}>;\n",
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
