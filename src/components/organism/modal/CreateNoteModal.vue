<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import CloseIcon from '@/components/atom/svg/CloseIcon.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import LabelMultiselect from '@/components/organism/LabelMultiselect.vue'

import NotesService from '@/core/application/notes/NotesService'
import NoteLabelCollection from '@/core/application/NoteLabelCollection'
import SearchNote from '@/core/application/SearchNote'

const store = useStore()
const closeModal = () => {
  store.dispatch('modal/closeModal')
}

const contentLength = ref(0)
const maxContentLength = ref(300)
const title = ref('')
const content = ref('')
const selectedLabels = computed(() => store.getters['label/GET_selectedLabels'])
const successMessage = ref('')

watch(content, (newVal) => {
  contentLength.value = newVal.length
})

const isFormComplete = ref(false)
const checkFields = () => {
  isFormComplete.value = title.value !== '' && content.value !== ''
}

const notes = new NotesService()
const collection = new NoteLabelCollection()

const allNotes = computed(() => store.getters['notes/GET_allNotes'])
const searchKeyword = computed(() => store.getters['notes/GET_searchKeyword'])
const selectedLabel = computed(() => store.getters['label/GET_labels'])

const saveNote = () => {
  const labelIds = [...selectedLabels.value].map((data) => data.id)
  const response = notes
    .setTitle(title.value)
    .setContent(content.value)
    .setLabels(labelIds)
    .insert()

  response.then(({ success, message }) => {
    if (success) {
      title.value = ''
      content.value = ''
      successMessage.value = JSON.stringify(message)

      closeModal()

      setTimeout(async () => {
        if (searchKeyword.value.length <= 0) {
          if (selectedLabel.value.length > 0) {
            collection.buildByLabelId(selectedLabel.value).then((result) => {
              store.dispatch('notes/setNotes', result)
            })
          } else {
            collection.buildData().then((result) => {
              store.dispatch('notes/setNotes', result)
            })
          }
        }

        const searchNote = new SearchNote()
          .setKeyword(searchKeyword.value)
          .setLabel(selectedLabel.value)
          .setAllData(allNotes.value)
          .filter()

        store.dispatch('notes/setNotes', searchNote)
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
    <form @submit.prevent="saveNote()">
      <div class="border-b border-gray-200 px-[30px] mb-8">
        <input
          v-model="title"
          type="text"
          class="w-full outline-none font-bold text-4xl mb-[20px]"
          placeholder="Add title.."
          maxlength="32"
          tabindex="1"
          @input="checkFields()"
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
          tabindex="2"
          @input="checkFields()"
          class="w-full text-xl text-gray-600 outline-none resize-none mb-3"
        ></textarea>
        <div class="text-right text-gray-500">{{ contentLength }}/{{ maxContentLength }}</div>
      </div>

      <div class="">
        <div class="px-[30px] w-[200px] xl:w-1/4 ml-auto flex flex-row gap-3">
          <ButtonPrimary :disabled="!isFormComplete" text="Save Note" />
        </div>
      </div>
    </form>
  </div>
</template>
