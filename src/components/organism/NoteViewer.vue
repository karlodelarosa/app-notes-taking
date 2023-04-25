<script setup lang="ts">
import * as _ from 'lodash'
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import ButtonPrimary from '../atom/button/ButtonPrimary.vue'
import LabelTagStatic from '../atom/label/LabelTagStatic.vue'
import NotesService from '@/core/application/notes/NotesService'
import LabelMultiselect from './LabelMultiselect.vue'

import NoteLabelCollection from '@/core/application/NoteLabelCollection'

const noteLabelCollection = new NoteLabelCollection()

const store = useStore()
const selectedNote = computed(() => store.getters['notes/GET_selectedNote'])
const selectedLabel = computed(() => store.getters['label/GET_selectedLabels'])
const selectedNoteKey = ref(0)
const title = ref('')
const content = ref('')
// const noteLabel = ref()

const isFormComplete = ref(false)
const checkFields = () => {
  isFormComplete.value = title.value !== '' && content.value !== ''
}

const notes = new NotesService()
const getItems = (() => {
  noteLabelCollection.buildData().then(async (result) => {
    await store.dispatch('notes/setNotes', result)
    selectedNoteKey.value = selectedNote.value.id
    title.value = _.unescape(selectedNote.value.title)
    content.value = _.unescape(selectedNote.value.content)
    // noteLabel.value = selectedNote.value.labels
    
    await store.dispatch('label/setSelectedLabels', selectedNote.value.labels)
  })
  
})

getItems()

const focusInput = () => {
  setTimeout(() => {
    titleInput.value?.focus()
  }, 100)
}

watch(selectedNote, () => {
  selectedNoteKey.value = selectedNote.value.id
  title.value = _.unescape(selectedNote.value.title)
  content.value = _.unescape(selectedNote.value.content)
  // noteLabel.value = selectedNote.value.labels
  focusInput()
  checkFields()
})

watch(selectedLabel, () => {
  console.info('note viewer')
}, {deep: true})

const titleInput = ref<HTMLInputElement | null>(null)
const editMode = ref(true)

const updateNote = () => {
  focusInput()
  if (editMode.value) {
    notes
      .setTitle(title.value)
      .setContent(content.value)
      .setLabels(selectedLabel.value)
      .update(selectedNoteKey.value)
      .then(result => {
        getItems()
      })
  }
}

</script>

<template>
  <div v-if="selectedNote" class="flex-1 bg-neutral-1 min-h-screen h-fit p-[30px]">
    <div class="grid grid-cols-12 gap-[20px]">
      <div class="col-span-9 bg-white rounded-custom-card" :class="{ 'bg-yellow-100': editMode }">
        <div class="px-[30px] py-[30px] border-b border-gray-200" :class="{ 'border-yellow-500': editMode }">
          <input
            ref="titleInput"
            v-model="title"
            :disabled="!editMode"
            type="text"
            class="w-full outline-none font-bold text-4xl bg-transparent"
            placeholder="Add title.."
            :required="true"
            maxlength="32"
            @input="checkFields()"
          />
        </div>

        <div class="py-[20px] px-[100px] min-h-[400px] text-gray-700">





          <!-- <div class="flex flex-row gap-1 flex-wrap mb-[30px]">
            <input type="text" placeholder="Add tags" class="bg-transparent outline-none">
            <template v-for="(item, key) in noteLabel" :key="key">
              <LabelTagStatic :text="item.label" />
            </template>
            
          </div> -->




          <LabelMultiselect />
          <textarea
            class="w-full text-lg text-gray-600 outline-none resize-none mb-3 bg-transparent"
            v-model="content"
            :disabled="!editMode"
            name="Content"
            placeholder="Add text here"
            rows="15"
            maxlength="300"
            :required="true"
            @input="checkFields()"
          ></textarea>  
        </div>
      </div>

      <div class="col-span-3 flex flex-col gap-2">
        <ButtonPrimary @click="updateNote()" :disabled="!isFormComplete" text="Save Changes" :edit-mode="editMode" />
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="text"]:disabled, textarea:disabled {
  @apply bg-transparent
}
</style>