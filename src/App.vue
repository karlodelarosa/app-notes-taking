<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheMenu from './components/template/TheMenu.vue'
</script>

<template>
  <header>
    <TheMenu />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
