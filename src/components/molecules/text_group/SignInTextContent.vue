<script setup lang="ts">
import CheckIcon from '@/components/atom/svg/CheckIcon.vue'
import ListBasic from '../list/ListBasic.vue';

const items = [
  'Note Taking',
  'View notes',
  'User Settings'
]
</script>

<template>
  <div class="content">
    <h1>Note Taking Application</h1>
    <p>A simple note taking application</p>

    <ListBasic :items="items">
      <template #icon>
        <CheckIcon />
      </template>
    </ListBasic>
  </div>
</template>

<style scoped>
.content > h1{
  @apply text-white text-4xl font-bold mb-2
}

.content > p{
  @apply text-gray-300 text-lg
}
</style>