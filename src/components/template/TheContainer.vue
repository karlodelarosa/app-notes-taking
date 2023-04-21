<script setup lang="ts">
defineProps({
  pageName: {
    type: String,
    default: 'PAGE NAME'
  }
})
</script>

<template>
  <div class="content-space">
    <div class="px-[50px]">
      <header>
        <h1 class="page-title">{{ pageName }}</h1>
      </header>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.content-space {
  @apply pl-80 py-[110px];
}
.page-title {
  @apply text-4xl font-bold uppercase text-gray-700 mb-[20px];
}
</style>
