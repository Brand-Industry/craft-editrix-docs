<script setup lang="ts">
import { withBase } from 'vitepress'

const alt =
  'Editrix, advanced content search and replace for Craft CMS. Search and replace with regex, safe preview and rollback, Matrix and Neo support.'
</script>

<template>
  <div class="hero-banner">
    <img
      class="hero-banner-light"
      :src="withBase('/brand/hero-banner-light.png')"
      :alt="alt"
      width="1600"
      height="500"
      fetchpriority="high"
      decoding="async"
    />
    <img
      class="hero-banner-dark"
      :src="withBase('/brand/hero-banner-dark.png')"
      :alt="alt"
      width="1600"
      height="500"
      decoding="async"
    />
  </div>
</template>

<style>
/* Unscoped on purpose: the theme switch is the .dark class on <html>, outside this component. */
.hero-banner {
  margin: 24px 0 32px;
  line-height: 0;
}

.hero-banner img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.hero-banner .hero-banner-dark {
  display: none;
}

.dark .hero-banner .hero-banner-light {
  display: none;
}

.dark .hero-banner .hero-banner-dark {
  display: block;
}
</style>
