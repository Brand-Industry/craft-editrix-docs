import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fontsource-variable/figtree'
import './custom.css'
import Shot from './components/Shot.vue'
import HeroBanner from './components/HeroBanner.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Shot', Shot)
    app.component('HeroBanner', HeroBanner)
  }
} satisfies Theme
