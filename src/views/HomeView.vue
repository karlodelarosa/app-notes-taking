<script setup lang="ts">
import TheBaseLayout from '@/components/template/TheBaseLayout.vue'
</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-[100px]">
    <TheBaseLayout>
      <template #sidebar>
        <h2 class="uppercase font-bold tracking-wide mb-[20px]">QUICK ACCESS</h2>
        <ul class="flex flex-row gap-1 flex-wrap">
          <li v-for="i in 5">
            <button class="bg-gray-800 text-white p-2 text-sm rounded-lg cursor-pointer hover:bg-green-500 ">Label {{ i }}</button>
          </li>
        </ul>
      </template>

      <template #content>
        <h2 class="uppercase font-bold tracking-wide mb-[20px]">ALL NOTES</h2>
      </template>
    </TheBaseLayout>
  </div>
</template>
