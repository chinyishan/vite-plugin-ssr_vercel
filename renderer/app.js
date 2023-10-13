///類似傳統vue專案中的main.js，主入口
import { createSSRApp, h } from 'vue'
import PageLayout from './PageLayout.vue'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        PageLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  }

  const app = createSSRApp(PageWithLayout)

  return app
}
