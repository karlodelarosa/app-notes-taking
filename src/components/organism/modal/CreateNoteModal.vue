<script setup lang="ts">
import { useStore } from 'vuex'
import CloseIcon from '@/components/atom/svg/CloseIcon.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import ButtonDefault from '@/components/atom/button/ButtonDefault.vue'

const store = useStore()
const closeModal = () => {
  store.dispatch('modal/closeModal')
}
</script>
<template>
  <div class="w-2/5 bg-white rounded-custom-modal py-[30px] relative">
    <CloseIcon @click="closeModal()" class="absolute right-[10px] top-[10px] active:scale-95 cursor-pointer" />
    <div class="border-b border-gray-200 px-[30px] mb-8">
      <input type="text" class="w-full outline-none font-bold text-4xl mb-[20px]" placeholder="Add title..">
    </div>

    <div class="px-[50px] mb-8">
      <textarea name="Content" placeholder="Add text here" rows="10" class="w-full text-xl text-gray-600 outline-none resize-none mb-3"></textarea>
      <div class="text-right text-gray-500">0/1000</div>
    </div>

    <div class="">
      <div class="px-[30px] w-1/2 ml-auto flex flex-row gap-3">
        <ButtonDefault text="Cancel" />
        <ButtonPrimary text="Save Note" />
      </div>
    </div>
  </div>
</template>