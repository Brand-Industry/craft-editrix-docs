<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import BrandFooter from './components/BrandFooter.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <BrandFooter />
    </template>
  </Layout>
</template>
