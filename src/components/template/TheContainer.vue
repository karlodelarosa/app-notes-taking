<script setup lang="ts">
defineProps({
  pageName: {
    type: String,
    default: 'PAGE NAME'
  }
})
</script>

<template>
  <div>
    <header>
      <h1 class="page-title">{{ pageName }}</h1>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped>
.page-title {
  @apply text-4xl font-bold uppercase text-gray-700 mb-[20px];
}
</style>
