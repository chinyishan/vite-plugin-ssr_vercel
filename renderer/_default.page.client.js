export { render }

import { createApp } from './app'

async function render(pageContext) {
  const app = createApp(pageContext)
  console.log(pageContext, '_default.page.client');
  app.mount('#app')
}
