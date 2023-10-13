import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'
import logoUrl from './logo.svg'

export { render }
export { passToClient }

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps']

async function render(pageContext) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  console.log(pageContext, '_default.page.server');

  // See https://vite-plugin-ssr.com/head
  // 設置 <head> meta tags ，自訂匯出可在此處作為「pageContext.exports.documentProps」使用
  const { documentProps } = pageContext.exports

  // 預設值
  const title = documentProps?.title || 'Vite SSR app'
  const desc = documentProps?.description || 'App using Vite + vite-plugin-ssr'

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}
