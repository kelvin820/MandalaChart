# 目標之境 · Mandala Studio

終極目標 → 八個支柱 → 每支柱八項原子行動或原子能力 → 完整曼陀羅表與四種立體成果。

## 本次設計

- 暖白底、靛藍主色、琥珀選取提示；不使用綠色底。
- 先分析與填表，完成八個支柱的展開與檢查後才開啟 3D。
- 保留舊版的範例、清單、兩層九宮格、單格替換、手動編輯與檢核。
- 加入支柱局部的期限、起點、限制；生成前可修改 System/User Prompt。
- 模型輸出先成為候選，採用才改表，採用後可立即復原一次。
- 編輯上層保留下層並標示待檢查；改原子內容會重設該項檢核。
- 原子能力有可觀察的驗證標準；持續習慣的勾選代表本次檢核。
- JSON 備份與匯入、舊版完整 getMandala JSON 匯入、SVG 與直接下載 PDF。
- OpenAI 尚未設定時明確提示；示範資料與外部模型匯入不假裝是 AI 生成。

## 實作選擇

採用 TypeScript、原生 DOM 元件、Zod、Vercel AI SDK 的 OpenAI provider、SQLite 相容儲存。前一版為 buildless 靜態網站；這次保留輕量前端與既有 Canvas 立體渲染器，以獨立模組取代原平台私有 SDK，避免直接搬入單一大型 App.tsx。舊交接文件指定的框架與逐字 Prompt 不是本次硬性需求。

- `src/domain.ts`：資料 schema、兩層 Prompt、候選採用規則。
- `src/app.ts`：首頁、九宮格、編輯、Prompt、比較採用、備份。
- `server/llm.ts`：唯一模型呼叫層，使用安裝版本的 generateText + Output.object，並再次驗證八項輸出。
- `server/api.ts`：驗證、使用者權限、生成請求冪等、版本檢查。
- `server/store.ts`：D1 持久化，資料以使用者 ID 隔離。
- `server/worker.ts`：Sites Cloudflare Worker，靜態資源隨 Worker 內嵌。
- `server/local.ts`：僅監聽 127.0.0.1 的本機 Node SQLite 版本。
- `db/schema.ts` / `drizzle/`：Drizzle 產生的資料庫遷移。
- `public/worlds/`：四種旋轉、縮放與生成動畫，接收目前填好的表，僅供檢視。

## 本機啟動

需要 Node 24+（使用 node:sqlite）。

```sh
npm ci --cache /tmp/mandala-npm-cache
cp .env.example .env
# 在本機 .env 安全設定 OPENAI_API_KEY 與 OPENAI_MODEL
npm run build
npm start
```

開啟 http://127.0.0.1:3000 。本機資料放在忽略追蹤的 `work/mandala.sqlite`，本機以 local-owner 作為使用者，僅供單人開發。沒有模型設定也可試用範例、編輯、備份與匯入外部模型的 JSON。

模型名稱沒有硬編碼，必須設定目前帳戶可用、支援 Structured Outputs 的模型。金鑰僅留在後端，不接受前端傳入。Hosted Sites 由安全金鑰設定流程提供環境變數，不要將 .env 提交。

## 部署

沿用既有私人 Sites 身分與權限。`.openai/hosting.json` 宣告 DB；建置輸出 `dist/server/index.js` 與 `.openai/hosting.json`，並把 schema 遷移包含在發布封裝。Hosted 資料使用 Sites D1，使用者身分由平台 `oai-authenticated-user-id` 提供。沒有身分的 API 請求一律拒絕。

## 檢查

```sh
npm run db:generate
npm run typecheck
npm test
npm run build
```

測試使用真正的 SQLite 儲存 adapter 驗證資料隔離、版本衝突、生成冪等、限流與候選不直接覆寫。模型以注入函式模擬，不會產生 OpenAI 費用；這些測試不代表真實模型品質驗證。

## 範圍與限制

- OpenAI 實際生成需完成安全金鑰設定後，才能驗證延遲與輸出品質。
- 每個使用者每分鐘六次、每日六十次生成的基本限流；公開商用前仍須依產品政策設定成本預算、用量與營運監控。
- 本次檢核不包含排程、提醒或習慣的歷史打卡。
- 請求識別碼與結果存入資料庫，連線失去回應時會用同一識別碼查詢，不以相同目標文字猜測配對。這不是耐久背景佇列；Worker 在中斷後可能無法完成模型請求，逾時會保留舊內容並允許重試。
- 舊平台資料不包含在交接原始碼；需要原平台匯出的 JSON 才可匯入，沒有預設已搬移。
- SVG 使用本機可用字體，未嵌入商業字體。

## 檔案下載

JSON、SVG 由已登入使用者專屬的 HTTPS 附件端點直接下載，避免嵌入式瀏覽環境封鎖 blob 下載。PDF 先在瀏覽器將目前 SVG 轉成高解析 PNG，保留中文字形，再由後端產生 A3 PDF、內嵌 JSON 備份，存於 Sites R2，並提供正式下載連結。PDF 畫面是圖像，JSON 是可繼續編輯的完整資料。

R2 宣告為 BUCKET，檔案依使用者、表格 UUID、版本隔離。後端驗證登入、版本、PNG 類型、檔案大小與像素上限；不需要 OpenAI 金鑰。
