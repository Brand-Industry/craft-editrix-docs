<script setup lang="ts">
import BrandMark from './BrandMark.vue'

// The default VitePress footer is hidden on pages with a sidebar, so the license line lives here, in the doc-after slot.
// The Brand Industry mark shows here only when the right column is not there (narrow screens, or a page with no headings).
</script>

<template>
  <footer class="brand-footer">
    <p class="brand-footer-license">Editrix is released under the Craft License. One license covers one production site.</p>
    <BrandMark class="brand-footer-mark" />
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

/* The aside shows from 1280px up, and only when the page has an outline. There the mark moves to the right column. */
@media (min-width: 1280px) {
  .VPDoc.has-aside .brand-footer-mark {
    display: none;
  }
}
</style>
