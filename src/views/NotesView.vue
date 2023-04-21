<script setup lang="ts">
import ButtonDefault from '@/components/atom/button/ButtonDefault.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import TheNoteContainer from '@/components/template/TheNoteContainer.vue'
import SearchField from '@/components/atom/input/SearchField.vue'
import { notes } from '@/js/mock_data/sample_notes'
</script>

<template>
  <TheNoteContainer>
    <div class="w-full h-screen md:flex">
      <div class="flex-none w-full md:max-w-sm bg-white border-r border-gray-300">
        <div class="px-[30px] py-[30px]">
          <SearchField />
        </div>

        <div class="flex flex-col h-[calc(100vh-100px)] overflow-hidden hover:overflow-auto">
          <div
            v-for="(note, i) in notes"
            :key="i"
            class="px-[30px] py-[10px] border-b border-gray-200 cursor-pointer hover:bg-neutral-1 transition-all duration-100"
          >
            <h2 class="text-xl font-bold text-gray-800 mb-1 truncate">{{ note['title'] }}</h2>
            <p class="text-gray-500 max-h-[95px] overflow-hidden">
              {{ note['content'] }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex-1 bg-neutral-1 min-h-screen h-fit p-[30px]">
        <div class="grid grid-cols-12 gap-[20px]">
          <div class="col-span-9 bg-white rounded-custom-card">
            <div class="px-[30px] py-[30px] border-b border-gray-200">
              <h1 class="text-3xl font-bold">Add title</h1>
            </div>

            <div class="py-[40px] px-[100px] min-h-[400px] text-gray-700">Add text here ...</div>

            <div class="px-[30px] py-[20px]">
              <p class="text-gray-500 text-sm text-right">0/1000</p>
            </div>
          </div>

          <div class="col-span-3 flex flex-col gap-2">
            <ButtonPrimary />
            <ButtonDefault />
          </div>
        </div>
      </div>
    </div>
  </TheNoteContainer>
</template>
