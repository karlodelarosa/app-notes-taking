<script setup lang="ts">
import * as _ from 'lodash'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import DeleteIcon from '../atom/svg/DeleteIcon.vue'
import EditIcon from '../atom/svg/EditIcon.vue'
import LabelTagStatic from '../atom/label/LabelTagStatic.vue'

defineProps<{
  notes?: object
}>()

const store = useStore()
const router = useRouter()

const allNotes = computed(() => store.getters['notes/GET_allNotes'])
const selectedLabel = computed(() => store.getters['label/GET_labels'])

const deleteNote = async (id: string | number) => {
  store.dispatch('modal/openModal', 'delete')
  store.dispatch('notes/setDeleteId', id)
}

const initEdit = (id: string | number, labels: any) => {
  store.dispatch('notes/setSelectedNote', id)
  store.dispatch('label/setSelectedLabels', labels)
  router.push('notes')
}
</script>
<template>
  <TransitionGroup name="fade">
    <div v-for="(note, key) in allNotes" :key="key" class="bg-white rounded-custom-card shadow-xl">
      <div class="px-5 pt-5">
        <EditIcon
          @click="initEdit(key, note['labels'])"
          class="ml-auto hover:brightness-75 cursor-pointer active:scale-95"
        />
      </div>
      <div class="px-5 py-2">
        <h1 class="w-full truncate text-3xl font-bold text-gray-700 mb-3">
          {{ _.unescape(note['title']) }}
        </h1>
        <p class="text-gray-600 h-[250px] overflow-hidden whitespace-pre-wrap hover:overflow-auto">
          {{ _.unescape(note['content']) }}
        </p>
      </div>

      <div class="px-6 mb-5 flex flex-row flex-wrap gap-4 h-[20px]">
        <template v-for="(item, i) in note['labels']" :key="i">
          <LabelTagStatic :text="item.label" />
        </template>
      </div>

      <div class="flex flex-row justify-between items-center border-t border-gray-200 px-5 py-3">
        <DeleteIcon
          @click="deleteNote(note['id'])"
          class="ml-auto hover:brightness-75 cursor-pointer active:scale-95"
        />
      </div>
    </div>
  </TransitionGroup>
</template>
