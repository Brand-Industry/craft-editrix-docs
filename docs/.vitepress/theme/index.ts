import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fontsource-variable/figtree'
import './custom.css'
import Layout from './Layout.vue'
import Shot from './components/Shot.vue'
import HeroBanner from './components/HeroBanner.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Shot', Shot)
    app.component('HeroBanner', HeroBanner)
  }
} satisfies Theme
