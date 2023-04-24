<script setup lang="ts">
import * as _ from 'lodash'
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import ButtonDefault from '../atom/button/ButtonDefault.vue'
import ButtonPrimary from '../atom/button/ButtonPrimary.vue'
import NotesService from '@/core/application/notes/NotesService'

const store = useStore()
const selectedNote = computed(() => store.getters['notes/GET_selectedNote'])
const selectedNoteKey = ref(0)
const title = ref('')
const content = ref('')

const notes = new NotesService()
const getItems = (() => {
  notes.fetchAll().then(async (result) => {
    await store.dispatch('notes/setNotes', result)
    selectedNoteKey.value = selectedNote.value.id
    title.value = _.unescape(selectedNote.value.title)
    content.value = _.unescape(selectedNote.value.content)
  })
})

getItems()

watch(selectedNote, () => {
  selectedNoteKey.value = selectedNote.value.id
  title.value = _.unescape(selectedNote.value.title)
  content.value = _.unescape(selectedNote.value.content)
})

const titleInput = ref<HTMLInputElement | null>(null)

const editMode = ref(false)
const editButtonText = ref('Start Editing')
const toggleEdit = () => {
  
  editButtonText.value = 'Save Changes'
  setTimeout(() => {
    titleInput.value?.focus()
  }, 100)
  
  if (editMode.value) {
    notes
      .setTitle(title.value)
      .setContent(content.value)
      .update(selectedNoteKey.value)
      .then(result => {
        console.info(result)
        editButtonText.value = 'Start Editing'
        getItems()
      })
  }

  editMode.value = !editMode.value
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
            maxlength="32"
          />
        </div>

        <div class="py-[40px] px-[100px] min-h-[400px] text-gray-700">
          <textarea
            v-model="content"
            :disabled="!editMode"
            name="Content"
            placeholder="Add text here"
            rows="15"
            maxlength="300"
            class="w-full text-gray-600 outline-none resize-none mb-3 bg-transparent"
          ></textarea>  
        </div>
      </div>

      <div class="col-span-3 flex flex-col gap-2">
        <ButtonPrimary @click="toggleEdit()" :text="editButtonText" :edit-mode="editMode" />
        <ButtonDefault />
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="text"]:disabled, textarea:disabled {
  @apply bg-transparent
}
</style>