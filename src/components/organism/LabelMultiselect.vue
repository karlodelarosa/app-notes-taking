<script setup lang="ts">
import { ref } from 'vue'
import LabelService from '@/core/application/labels/LabelService'
import LabelTagStatic from '../atom/label/LabelTagStatic.vue'
import TagIcon from '@/components/atom/svg/TagIcon.vue'

interface Label {
  id?: number,
  name?: string,
}

const labels = ref()

const labelService = new LabelService()
labelService.fetchAll().then((data: Label) => {
  labels.value = data
})

const isOpenMenu = ref(false)
const selectedLabels = ref<any>(new Set())
const addLabel = (params: {}) => {
  selectedLabels.value.add(params)
  isOpenMenu.value = false
}

const openMenu = () => {
  isOpenMenu.value = true
}

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

const removeItemFromSet = (index: number) => {
  const copy = new Set([...selectedLabels.value])
  const obj = [...copy].find((data, key) => key === index)
  copy.delete(obj)
  selectedLabels.value = new Set(copy)
}
</script>

<template>
  <div class="mb-4 flex flex-row gap-1">
    <div class="w-full flex flex-row gap-1 flex-wrap flex-grow">
      <TransitionGroup name="list" tag="div" class="w-full flex flex-row gap-4 flex-wrap h-fit">
        <template v-for="(selected, index) in selectedLabels" :key="index">
          <LabelTagStatic :text="selected.name" @click="removeItemFromSet(index)" />
        </template>
      </TransitionGroup>
    </div>

    <div class="relative mb-1 flex-none">
      <Transition name="list">
        <div v-if="isOpenMenu" class="bg-white border shadow-lg absolute top-0 right-[110px] z-50 rounded">
          <div v-for="(label, id) in labels" @click="addLabel(label)" class="px-3 py-1 hover:bg-gray-100 cursor-pointer">
            {{ label.name }}
          </div>
        </div>
      </Transition>
      <button type="button" @click="toggleMenu()" class="w-fit h-[28px] rounded-custom-button px-4 ml-auto bg-black text-white text-xs hover:brightness-95 transition-all duration-100 flex flex-row gap-1 items-center">
        <TagIcon class="w-[15px] h-[15px]" />
        Add Label
      </button>
    </div>
  </div>
</template>