<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import CloseIcon from '@/components/atom/svg/CloseIcon.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import ButtonDefault from '@/components/atom/button/ButtonDefault.vue'
import NoteLabelCollection from '@/core/application/NoteLabelCollection'
import NotesService from '@/core/application/notes/NotesService'
import SearchNote from '@/core/application/SearchNote'

const store = useStore()
const closeModal = () => {
  store.dispatch('modal/closeModal')
}

const contentLength = ref(0)
const content = ref('')

watch(content, (newVal) => {
  contentLength.value = newVal.length
})

const allNotes = computed(() => store.getters['notes/GET_allNotes'])
const searchKeyword = computed(() => store.getters['notes/GET_searchKeyword'])
const selectedLabel = computed(() => store.getters['label/GET_labels'])
const deleteId = computed(() => store.getters['notes/GET_deleteId'])

const collection = new NoteLabelCollection()

const note = new NotesService()
const deleteNote = async () => {

  await note.remove(deleteId.value)
  if(searchKeyword.value.length <= 0) {
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
    closeModal()
}
</script>
<template>
  <div class="w-2/6 bg-white rounded-custom-modal pb-[30px]">
    <div class="px-[30px] flex flex-row justify-between relative border-b border-gray-100 py-[30px]">
        <p class="font-bold">Confirm Action</p>
        <CloseIcon
            @click="closeModal()"
            class="absolute right-[20px] top-[10px] active:scale-95 cursor-pointer"
            />
    </div>

    <div class="p-[30px]">
        <h1 class="font-bold text-lg">Are you sure you want to delete this note?</h1>
        <p>This note will be permanently deleted.</p>
    </div>
    

    <div class="">
      <div class="px-[30px] w-[200px] xl:w-2/4 ml-auto flex flex-row gap-3">
        <ButtonDefault @click="closeModal()" text="Cancel" />
        <ButtonPrimary @click="deleteNote()" text="Delete" />
      </div>
    </div>
  </div>
</template>
