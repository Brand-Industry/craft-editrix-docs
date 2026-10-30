<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import BrandAside from './components/BrandAside.vue'
import BrandFooter from './components/BrandFooter.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-bottom>
      <BrandAside />
    </template>
    <template #doc-after>
      <BrandFooter />
    </template>
  </Layout>
</template>
