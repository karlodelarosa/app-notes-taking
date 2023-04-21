<script setup lang="ts">
import TheBaseLayout from '@/components/template/TheBaseLayout.vue'

</script>

<template>
  <TheBaseLayout>
      <template #left-sidebar>
        <h2 class="uppercase font-bold tracking-wide mb-[20px]">ALL NOTES</h2>
        <ul class="flex flex-row gap-1 flex-wrap">
          <li v-for="i in 5" :key="i" class="w-full p-2 cursor-pointer transition-all duration-75 hover:bg-white">
            <h3 class=" font-bold text-gray-700">Notes Title {{ i }}</h3>
            <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, adipisci.</p>
          </li>
        </ul>
      </template>

      <template #content>
        <h2 class="uppercase font-bold tracking-wide mb-[20px]">ALL NOTES</h2>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="i in 5" :key="i" class="w-full bg-yellow-200 rotate-2 border">
            <div class="w-full bg-yellow-200 -rotate-2 p-5 shadow-lg border cursor-pointer">
              qwe
            </div>
          </div>
        </div>
      </template>

      <template #right-sidebar>
        <h2 class="uppercase font-bold tracking-wide mb-[20px]">QUICK ACCESS</h2>
        <ul class="flex flex-row gap-1 flex-wrap">
          <li v-for="i in 8" :key="i">
            <button class="bg-gray-800 text-white p-2 text-sm rounded-lg cursor-pointer hover:bg-green-500 ">Label {{ i }}</button>
          </li>
        </ul>
      </template>
    </TheBaseLayout>
</template>
