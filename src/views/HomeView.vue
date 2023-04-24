<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import CardNotes from '@/components/molecules/CardNotes.vue'
import LabelTag from '@/components/atom/label/LabelTag.vue'
import TheContainer from '@/components/template/TheContainer.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import NotesService from '@/core/application/notes/NotesService'

const labels = [
  { name: 'Label 1', isActive: true },
  { name: 'Label 2', isActive: true },
  { name: 'Label 3', isActive: false }
]
const store = useStore()
const openModal = () => {
  store.dispatch('modal/openModal')
}

const allNotes = ref({})
const notes = new NotesService()

notes.fetchAll().then((result) => {
  allNotes.value = result
})
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
            <LabelTag :text="label.name" :status="label.isActive" />
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
