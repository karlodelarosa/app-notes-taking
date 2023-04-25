<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import CloseIcon from '@/components/atom/svg/CloseIcon.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import ButtonDefault from '@/components/atom/button/ButtonDefault.vue'
import LabelMultiselect from '@/components/organism/LabelMultiselect.vue'

import NotesService from '@/core/application/notes/NotesService'

const store = useStore()
const closeModal = () => {
  store.dispatch('modal/closeModal')
}

const activeModal = computed(() => store.getters['modal/GET_activeModal'])

const contentLength = ref(0)
const maxContentLength = ref(300)
const title = ref('')
const content = ref('')
const successMessage = ref('')

watch(content, (newVal) => {
  contentLength.value = newVal.length
})

const notes = new NotesService()
const saveNote = () => {
  const response = notes.setTitle(title.value).setContent(content.value).insert()
  response.then(({ success, message}) => {
    if (success) {
      title.value = ''
      content.value = ''
      successMessage.value = JSON.stringify(message)

      closeModal()

      setTimeout(async () => {
        await notes.fetchAll().then((result) => {
          store.dispatch('notes/setNotes', result)
        })
      }, 300)
    }
  })
}
</script>
<template>
  <div class="w-2/5 bg-white rounded-custom-modal py-[30px] relative">
    <CloseIcon
      @click="closeModal()"
      class="absolute right-[10px] top-[10px] active:scale-95 cursor-pointer"
    />
    <form @submit="">
      <div class="border-b border-gray-200 px-[30px] mb-8">
        <input
          v-model="title"
          type="text"
          class="w-full outline-none font-bold text-4xl mb-[20px]"
          placeholder="Add title.."
          maxlength="32"
        />
      </div>

      <div class="px-[50px] mb-8">
        <LabelMultiselect />
        <textarea
          v-model="content"
          name="Content"
          placeholder="Add text here"
          rows="10"
          maxlength="300"
          class="w-full text-xl text-gray-600 outline-none resize-none mb-3"
        ></textarea>
        <div class="text-right text-gray-500">{{ contentLength }}/{{ maxContentLength }}</div>
      </div>

      <div class="">
        <div class="px-[30px] w-[200px] xl:w-1/4 ml-auto flex flex-row gap-3">
          <!-- <ButtonDefault @click="closeModal()" text="Cancel" /> -->
          <ButtonPrimary @click="saveNote()" text="Save Note" />
        </div>
      </div>
    </form>
  </div>
</template>
