<script setup lang="ts">
import * as _ from 'lodash'
import DeleteIcon from '../atom/svg/DeleteIcon.vue'
import EditIcon from '../atom/svg/EditIcon.vue'
import LabelTagStatic from '../atom/label/LabelTagStatic.vue'

defineProps<{
  notes?: object
}>()
</script>
<template>
  <TransitionGroup name="fade">
    <div v-for="(note, key) in notes" :key="key" class="bg-white rounded-custom-card shadow-xl">
      <div class="px-5 pt-5">
        <EditIcon class="ml-auto hover:brightness-75 cursor-pointer active:scale-95" />
      </div>
      <div class="px-5 py-2">
        <h1 class="w-full truncate text-3xl font-bold text-gray-700 mb-3">{{ _.unescape(note['title']) }}</h1>
        <p class="text-gray-600 h-[250px] overflow-hidden whitespace-pre-wrap hover:overflow-auto">
          {{ _.unescape(note['content']) }}
        </p>
      </div>

      <div class="px-5 mb-5 flex flex-row flex-wrap gap-1">
        <template v-for="(label, i) in note['labels']" :key="i">
          <LabelTagStatic :text="label" />
        </template>
      </div>

      <div class="flex flex-row justify-between items-center border-t border-gray-200 px-5 py-3">
        <!-- <p class="text-sm text-gray-500">1 day ago</p> -->
        <DeleteIcon class="ml-auto hover:brightness-75 cursor-pointer active:scale-95" />
      </div>
    </div>
  </TransitionGroup>
</template>
