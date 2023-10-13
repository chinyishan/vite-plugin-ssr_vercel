<template>
  <h1>About</h1>
  <p>Showcase of using vite-plugin-ssr with Vercel.</p>
  <p>Example version: 6.</p>
</template>

<script>
// export const title = 'Earth Countries'
export const documentProps = {
  // 此 標題 和 描述 將覆蓋預設值(靜態)
  title: 'About SpaceX',
  description: 'Our mission is to explore the galaxy.'
}
</script>
