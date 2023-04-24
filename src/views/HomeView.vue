<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import CardNotes from '@/components/molecules/CardNotes.vue'
import LabelTag from '@/components/atom/label/LabelTag.vue'
import TheContainer from '@/components/template/TheContainer.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import NotesService from '@/core/application/notes/NotesService'
import NoteLabelCollection from '@/core/application/NoteLabelCollection'
import LabelService from '@/core/application/labels/LabelService'

const labels = ref()

const store = useStore()
const openModal = () => {
  store.dispatch('modal/openModal')
}

const allNotes = computed(() => store.getters['notes/GET_allNotes'])
const collection = new NoteLabelCollection()
const labelService = new LabelService()
const notesService = new NotesService()

const runCollection = () => {
  collection.buildData().then((result) => {
    store.dispatch('notes/setNotes', result)
  })
}
runCollection()

const runCollectionByLabelId = () => {
  collection.buildByLabelId(labelIds).then((result) => {
    store.dispatch('notes/setNotes', result)
  })
}

labelService.fetchAll().then((result) => {
  labels.value = result
})

const labelIds = new Array()
const filterByLabel = (labelId: number) => {
  toggleArray(labelId)

  if (labelIds.length <= 0) {
    runCollection()
  } else {
    runCollectionByLabelId()
  }
  // setTimeout(() => {
  //   runCollectionByLabelId()
  // }, 500)
}

const toggleArray = (labelId: number) => {
  if (!labelIds.includes(labelId)) {
    labelIds.push(labelId)
  } else {
    labelIds.splice(labelIds.indexOf(labelId), 1);
  }
}
</script>

<template>
  <TheContainer page-name="Dashboard">
    <div class="filter-section">
      <div class="flex-1 w-full lg:w-40 lg:mr-auto">
        <ButtonPrimary @click="openModal()" text="Add notes" size="sm" class="w-40" />
      </div>

      <div class="flex-1 ml-auto">
        <div class="flex flex-row gap-1 flex-wrap">
          <template v-for="(label, key) in labels" :key="key">
            <LabelTag @click="filterByLabel(label.id)" :text="label.name" :status="label.isActive" />
          </template>
        </div>
      </div>
    </div>

    <div class="card-section">
      <CardNotes :notes="allNotes" />
    </div>
  </TheContainer>
</template>

<style scoped>
.filter-section {
  @apply grid grid-cols-1 gap-5 lg:grid-cols-2 items-center justify-between mb-[30px];
}

.card-section {
  @apply grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px];
}
</style>
