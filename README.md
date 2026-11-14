# 願望之境 · Wishlands

終極目標 → 八個支柱 → 每支柱八項原子行動或原子能力 → 完整曼陀羅表與 3D 願望浮島。

## 本次設計

- 全站採用深色底、霧藍標題與香檳金進度提示。標題使用本機提供的 Noto Serif TC 字型子集，其他字元由系統字型補齊。
- 已設定 AI 時，新目標可一鍵生成並儲存八個支柱及六十四項行動。完成後即可開啟 3D。
- 保留舊版的範例、清單、兩層九宮格、單格替換、手動編輯與檢核。
- 支柱有獨立的期限、起點與限制。重新生成單一支柱時，AI 也會重做它的八項行動。
- 修改既有表格時，可以在生成前調整 Prompt。先預覽候選，再採用並儲存，採用後可立即復原一次。
- 編輯上層保留下層並標示待檢查；改原子內容會重設該項檢核。
- 原子能力有可觀察的驗證標準；持續習慣的勾選代表本次檢核。
- JSON 備份與匯入、舊版完整 getMandala JSON 匯入、SVG 與直接下載 PDF。
- AI 尚未設定時會顯示提示。範例資料和外部模型匯入各有自己的操作入口。

## 實作選擇

採用 TypeScript、原生 DOM 元件、Zod、SQLite 相容儲存與 Three.js。模型支援 NVIDIA NIM 和 OpenAI。首頁與 3D 成果共用渲染模組，編輯區的支柱進度由已確認的資料驅動。

- `src/domain.ts`：資料 schema、兩層 Prompt、候選採用規則。
- `src/app.ts`：首頁、九宮格、編輯、Prompt、比較採用、備份。
- `server/llm.ts`：使用 NVIDIA Chat Completions 或 OpenAI Responses 生成結構化資料，並驗證八項輸出。
- `server/api.ts`：驗證、使用者權限、生成請求冪等、版本檢查。
- `server/store.ts`：D1 持久化，資料以使用者 ID 隔離。
- `server/worker.ts`：Sites Cloudflare Worker，靜態資源隨 Worker 內嵌。
- `server/local.ts`：僅監聽 127.0.0.1 的本機 Node SQLite 版本。
- `db/schema.ts` / `drizzle/`：Drizzle 產生的資料庫遷移。
- `src/scenes/`：Three.js 願望浮島，支援旋轉、縮放、切換時段與選取支柱。每項勾選的行動會啟動一位工人，持續為中央火炬運送燃料。3D 頁的行動勾選與原表同步，無法顯示 WebGL 2 時仍可勾選行動。

## 本機啟動

需要 Node 24+（使用 node:sqlite）。

```sh
npm ci --cache /tmp/mandala-npm-cache
cp .env.example .env
# 在本機 .env 設定 NVIDIA_API_KEY，或設定 OPENAI_API_KEY 與 OPENAI_MODEL
npm run build
npm start
```

開啟 http://127.0.0.1:3000 。本機資料放在忽略追蹤的 `work/mandala.sqlite`，本機以 local-owner 作為使用者，僅供單人開發。沒有模型設定也可試用範例、編輯、備份與匯入外部模型的 JSON。

設定 `NVIDIA_API_KEY`（或 `NGC_API_KEY`）後會使用 NVIDIA。預設模型是 `nvidia/nemotron-3.5-super-vl-120b-a12b`，可用 `NVIDIA_MODEL` 指定支援 JSON Schema 的模型。未設定 NVIDIA 金鑰時，會使用已設定的 OpenAI 金鑰與模型。金鑰留在後端，`.env` 已被 Git 忽略。

可執行 `node --env-file-if-exists=.env scripts/check-nvidia.mjs`，用範例目標測試 NVIDIA 的兩層生成。

## 部署

沿用既有私人 Sites 身分與權限。`.openai/hosting.json` 宣告 DB；建置輸出 `dist/server/index.js` 與 `.openai/hosting.json`，並把 schema 遷移包含在發布封裝。Hosted 資料使用 Sites D1，使用者身分由平台 `oai-authenticated-user-id` 提供。沒有身分的 API 請求一律拒絕。

要在 Sites 啟用 NVIDIA，需在站點的後端環境變數加入秘密值 `NVIDIA_API_KEY`，再部署新版。本機 `.env` 只供本機服務使用。

## 檢查

```sh
npm run db:generate
npm run typecheck
npm test
npm run build
```

測試使用 SQLite 驗證資料隔離、版本衝突、生成冪等、限流與候選不直接覆寫。自動化測試使用模擬模型回覆。

## 範圍與限制

- 每個使用者每分鐘六次、每日六十次生成的基本限流；公開商用前仍須依產品政策設定成本預算、用量與營運監控。
- 本次檢核不包含排程、提醒或習慣的歷史打卡。
- 請求識別碼與結果存入資料庫，連線失去回應時會用同一識別碼查詢，不以相同目標文字猜測配對。這不是耐久背景佇列；Worker 在中斷後可能無法完成模型請求，逾時會保留舊內容並允許重試。
- 舊平台資料不包含在交接原始碼；需要原平台匯出的 JSON 才可匯入，沒有預設已搬移。
- SVG 使用本機可用字體，未嵌入商業字體。

## 檔案下載

JSON、SVG 由已登入使用者專屬的 HTTPS 附件端點直接下載，避免嵌入式瀏覽環境封鎖 blob 下載。PDF 先在瀏覽器將目前 SVG 轉成高解析 PNG，保留中文字形，再由後端產生 A3 PDF、內嵌 JSON 備份，存於 Sites R2，並提供正式下載連結。PDF 畫面是圖像，JSON 是可繼續編輯的完整資料。

R2 宣告為 BUCKET，檔案依使用者、表格 UUID、版本隔離。後端驗證登入、版本、PNG 類型、檔案大小與像素上限；不需要 OpenAI 金鑰。
