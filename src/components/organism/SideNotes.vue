<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import NotesService from '@/core/application/notes/NotesService'
import NoteLabelCollection from '@/core/application/NoteLabelCollection'

const store = useStore()
const allNotes = computed(() => store.getters['notes/GET_allNotes'])
const selectedNote = computed(() => store.getters['notes/GET_allNoteKey'])
const selectedLabel = computed(() => store.getters['label/GET_selectedLabels'])

const collection = new NoteLabelCollection()
collection.buildData().then((result) => {
  store.dispatch('notes/setNotes', result)
})

const forEdit = (key: number) => {
  const newArray = allNotes.value[key].labels.map((data: any) => {
    return { id: data.label_id, name: data.label }
  })
  store.dispatch('notes/setSelectedNote', key)
  store.dispatch('label/setSelectedLabels', new Set(newArray))
}
</script>

<template>
  <div class="flex flex-col h-[calc(100vh-100px)] overflow-hidden hover:overflow-auto">
    <div
      class="side-note-item"
      v-for="(note, i) in allNotes"
      :key="i"
      @click="forEdit(i)"
      :class="{ 'bg-neutral-1': selectedNote === i }"
    >
      <h2>{{ note['title'] }}</h2>
      <p class="">
        {{ note['content'] }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.side-note-item {
  @apply px-[30px] py-[10px] border-b border-gray-200 cursor-pointer hover:bg-neutral-1 transition-all duration-100;
}

.side-note-item h2 {
  @apply text-xl font-bold text-gray-800 mb-1 truncate;
}

.side-note-item p {
  @apply text-gray-500 max-h-[95px] overflow-hidden;
}
</style>
