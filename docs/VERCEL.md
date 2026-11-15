# 願いの曼陀羅 · Vercel 預覽部署

以 Node.js 24 建置，Vercel 供應前端靜態檔和 API。會員的目標與名額由 Turso 保存，登入由 Clerk 驗證，付款由 Polar Checkout 處理。

1. 在現有 Vercel 帳戶建立專案，選 GitHub 的 `kelvin820/MandalaChart`。部署本分支為 Preview。Framework Preset 使用 Other，建置及輸出目錄由 `vercel.json` 設定。
2. 建立一個 Turso 測試資料庫，連接 Preview 環境。在有該資料庫連線變數的受控終端執行 `npm run db:vercel`。這個指令建立所需的表和索引，可重複執行。
3. 建立 Clerk Development instance，開啟 Email 驗證碼。將 Publishable Key 與 Secret Key 設入 Preview，並在 Clerk 設定使用的網址。新增 `MANDALA_ORIGIN` 時填入同一個 HTTPS origin，包含協定。預覽網址有別名時選定一個為測試入口。
4. 設定後端的 `NVIDIA_API_KEY`，並用密碼產生器建立至少 32 字元的 `MANDALA_TRIAL_SECRET`。同時設定獨立的 `CRON_SECRET`，供正式站的每日試用資料清理使用。連接 Private Blob 到 Preview，以測試會員的 PDF 下載。
5. 在 [Polar Sandbox](https://sandbox.polar.sh/) 新增一個固定價格、單次付款的商品，例如「新增 1 個曼陀羅目標」。建立具 `checkouts:write` 權限的 Organization Access Token。把 `POLAR_SERVER` 設為 `sandbox`，再填入商品 ID、Access Token 與 Webhook Secret。
6. 將 Polar 的 webhook 指向 `https://預覽網址/api/billing/webhook`，訂閱 `order.paid` 和 `order.refunded`。測試站如有部署保護，在 Vercel 開啟 [Protection Bypass for Automation](https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection#protection-bypass-for-automation)，把 `?x-vercel-protection-bypass=秘密值` 加在 Polar 後台的 webhook 網址。回呼內容會驗簽，也會比對網站已建立的訂單、商品及會員。
7. 重部署 Preview。先用訪客完成一次，再用兩個測試會員驗收資料隔離、三個免費名額、下單取消、沙盒付款、回來新增第 4 個、回呼重送與跨裝置 PDF。

設定名稱可參考 [.env.example](../.env.example)。把秘密值填到 Vercel 的 Environment Variables，Preview 和 Production 的資料庫、Clerk 和 Polar 分開設定。商用時再建立正式商品、設定售價與完成收款驗證，並切換正式憑證。Clerk Production instance 如需自有網域，按 Clerk 的 Domains 指引設定。

訪客的表留在當前分頁，重新整理或切到 3D 頁仍可繼續。關閉分頁後會清掉這份表。伺服器的試用結果可在 15 分鐘內查詢。試用以 24 小時簽章 Cookie 和網路上限節流。會員保留試用表時使用 1 個免費名額。新增表成功才占用名額，刪除不會補回。可在付款進度畫面重新查詢付款確認。整筆退款會收回額度，既有表仍可編輯。
