<script setup lang="ts">
import * as _ from 'lodash'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import DeleteIcon from '../atom/svg/DeleteIcon.vue'
import EditIcon from '../atom/svg/EditIcon.vue'
import LabelTagStatic from '../atom/label/LabelTagStatic.vue'
import NotesService from '@/core/application/notes/NotesService'
import NoteLabelCollection from '@/core/application/NoteLabelCollection'
import SearchNote from '@/core/application/SearchNote'

defineProps<{
  notes?: object
}>()

const store = useStore()
const router = useRouter()
const collection = new NoteLabelCollection()

const allNotes = computed(() => store.getters['notes/GET_allNotes'])
const searchKeyword = computed(() => store.getters['notes/GET_searchKeyword'])
const selectedLabel = computed(() => store.getters['label/GET_labels'])

const note = new NotesService()
const deleteNote = async (id: string | number) => {
  store.dispatch('modal/openModal', 'delete')
  store.dispatch('notes/setDeleteId', id)

  // await note.remove(id)
  
  // if(searchKeyword.value.length <= 0) {
  //   if (selectedLabel.value.length > 0) {
  //     collection.buildByLabelId(selectedLabel.value).then((result) => {
  //       store.dispatch('notes/setNotes', result)
  //     })
  //   } else {
  //     collection.buildData().then((result) => {
  //       store.dispatch('notes/setNotes', result)
  //     })
  //   }
  // }

  // const searchNote = new SearchNote()
  //   .setKeyword(searchKeyword.value)
  //   .setLabel(selectedLabel.value)
  //   .setAllData(allNotes.value)
  //   .filter()
  
  //   store.dispatch('notes/setNotes', searchNote)
}

const initEdit = (id: string | number) => {
  store.dispatch('notes/setSelectedNote', id)
  router.push('notes')
}
</script>
<template>
  <TransitionGroup name="fade" >
    <div v-for="(note, key) in notes" :key="key" class="bg-white rounded-custom-card shadow-xl">
      <div class="px-5 pt-5">
        <EditIcon @click="initEdit(key)" class="ml-auto hover:brightness-75 cursor-pointer active:scale-95" />
      </div>
      <div class="px-5 py-2">
        <h1 class="w-full truncate text-3xl font-bold text-gray-700 mb-3">{{ _.unescape(note['title']) }}</h1>
        <p class="text-gray-600 h-[250px] overflow-hidden whitespace-pre-wrap hover:overflow-auto">
          {{ _.unescape(note['content']) }}
        </p>
      </div>

      <div class="px-5 mb-5 flex flex-row flex-wrap gap-1 h-[20px]">
        <template v-for="(item, i) in note['labels']" :key="i">
          <LabelTagStatic :text="item.label" />
        </template>
      </div>

      <div class="flex flex-row justify-between items-center border-t border-gray-200 px-5 py-3">
        <DeleteIcon @click="deleteNote(note['id'])" class="ml-auto hover:brightness-75 cursor-pointer active:scale-95" />
      </div>
    </div>
  </TransitionGroup>
</template>
