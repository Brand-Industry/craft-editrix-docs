<script setup lang="ts">
import { withBase } from 'vitepress'

// The default VitePress footer is hidden on pages with a sidebar, so the license line and the
// Brand Industry mark live here, in the doc-after slot.
const home = 'https://thebrandindustry.com/es'
</script>

<template>
  <footer class="brand-footer">
    <p class="brand-footer-license">Editrix is released under the Craft License. One license covers one production site.</p>
    <a class="brand-footer-link" :href="home" target="_blank" rel="noopener">
      <span class="brand-footer-by">A plugin by</span>
      <img class="brand-logo-light" :src="withBase('/brand/brand-industry-light.svg')" alt="Brand Industry" width="91" height="28" />
      <img class="brand-logo-dark" :src="withBase('/brand/brand-industry-dark.svg')" alt="Brand Industry" width="91" height="28" />
    </a>
  </footer>
</template>

<style>
.brand-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 24px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.brand-footer-license {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}

.brand-footer-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  color: var(--vp-c-text-3);
  font-size: 14px;
  text-decoration: none;
}

.brand-footer-link:hover .brand-footer-by {
  color: var(--vp-c-text-1);
}

.brand-footer-link img {
  display: block;
  height: 28px;
  width: auto;
}

.brand-footer .brand-logo-dark {
  display: none;
}

.dark .brand-footer .brand-logo-light {
  display: none;
}

.dark .brand-footer .brand-logo-dark {
  display: block;
}
</style>
