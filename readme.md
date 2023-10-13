# vite-plugin-ssr_vercel
See [vite-plugin-ssr.com/vercel](https://vite-plugin-ssr.com/vercel).

How to deploy:
 1. Fork this repository.
 1. Log in to your [Vercel](https://vercel.com/) account (or create one).
 1. Add your fork on Vercel's dashbaord with following settings:
    - `FRAMEWORK PRESET` should be `Vite`. (Vercel should automatically detect Vite; just make sure it's already set.)
    - Modify `Build and Output Settings` > `OUTPUT DIRECTORY` from `dist` to `dist/client`.

That's it, your fork is now deployed on Vercel (it should look like [vite-plugin-ssr-demo.vercel.app](https://vite-plugin-ssr-demo.vercel.app)). It's continuously deployed: if you commit and push a change to your fork, then Vercel automatically re-deploys your app.

Integration points:
 - API Route: [api/ssr.js](api/ssr.js).
 - Routing URLs to `api/ssr.js`: [vercel.json#rewrites](vercel.json).
 - Build: the [package.json](package.json)'s scripts `package.json#scripts['vercel-build']` and `package.json#scripts.build`.
 - Development: the [package.json](package.json)'s script `package.json#scripts.dev`; we use Vite's development server for improved DX.

> 👉 Vercel runs our API Route `api/ssr.js` as a serverless function, for more information see [Vercel Docs > Serverless Functions > Deploying](https://vercel.com/docs/concepts/functions/serverless-functions#deploying-serverless-functions).

## 目錄及主要文件介紹
├── components
│   └── Counter.vue
├── package-lock.json
├── package.json
├── pages //在這裡建立網站的頁面
│   ├── index.page.vue //這裡預設是“/”路徑展示的頁面
│   └── star-wars
│       ├── filterMovieData.ts
│       ├── index
│       │   ├── index.page.server.ts
│       │   └── index.page.vue 
│       ├── movie
│       │   ├── index.page.route.ts
│       │   ├── index.page.vue
│       │   └── onBeforeRender.ts
│       └── types.ts
├── readme.md
├── renderer
│   ├── Link.vue
│   ├── PageShell.vue //app.ts中設定的主入口，其他vue頁面透過slot載入過來
│   ├── _default.page.client.ts //只在瀏覽器端執行的程式碼
│   ├── _default.page.server.ts //在服務端渲染的時候使用的程式碼
│   ├── _error.page.vue
│   ├── app.ts //類似傳統vue專案中的main.js，主入口
│   ├── getPageTitle.ts
│   ├── logo.svg
│   ├── types.ts
│   └── usePageContext.ts
├── tsconfig.json
├── types.d.ts
└── vite.config.ts //vite的設定文件，裡面已經設定好了ssr方式渲染
