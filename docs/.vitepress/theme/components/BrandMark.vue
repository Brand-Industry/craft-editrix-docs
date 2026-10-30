<script setup lang="ts">
import { withBase } from 'vitepress'

const home = 'https://thebrandindustry.com/es'
</script>

<template>
  <a class="brand-mark" :href="home" target="_blank" rel="noopener">
    <span class="brand-mark-by">A plugin by</span>
    <img class="brand-logo-light" :src="withBase('/brand/brand-industry-light.svg')" alt="Brand Industry" width="91" height="28" />
    <img class="brand-logo-dark" :src="withBase('/brand/brand-industry-dark.svg')" alt="Brand Industry" width="91" height="28" />
  </a>
</template>

<style>
.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  color: var(--vp-c-text-3);
  font-size: 14px;
  text-decoration: none;
}

.brand-mark:hover .brand-mark-by {
  color: var(--vp-c-text-1);
}

.brand-mark img {
  display: block;
  height: 28px;
  width: auto;
}

.brand-mark .brand-logo-dark {
  display: none;
}

.dark .brand-mark .brand-logo-light {
  display: none;
}

.dark .brand-mark .brand-logo-dark {
  display: block;
}

/* In the right column the mark stacks: label above, logo larger, as a sponsor block. */
.brand-aside {
  margin-top: 24px;
  padding-bottom: 8px;
}

.brand-aside .brand-mark {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.brand-aside .brand-mark img {
  height: 40px;
}
</style>
