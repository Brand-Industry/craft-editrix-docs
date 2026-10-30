<script setup lang="ts">
import { withBase } from 'vitepress'

// Screenshots are 1440x749; the size is declared so the page does not shift while they load.
defineProps<{
  src: string
  alt: string
  caption?: string
}>()
</script>

<template>
  <figure class="shot">
    <a :href="withBase(src)" target="_blank" rel="noopener" :aria-label="`Open the full-size screenshot: ${alt}`">
      <img :src="withBase(src)" :alt="alt" width="1440" height="749" loading="lazy" decoding="async" />
    </a>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.shot {
  margin: 24px 0;
}

.shot a {
  display: block;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
  line-height: 0;
}

.shot img {
  width: 100%;
  height: auto;
}

.shot figcaption {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}
</style>
