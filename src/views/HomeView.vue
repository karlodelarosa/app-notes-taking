<script setup lang="ts">
import CardNotes from '@/components/molecules/CardNotes.vue'
import LabelTag from '@/components/atom/label/LabelTag.vue'
import TheContainer from '@/components/template/TheContainer.vue'
import SearchField from '@/components/atom/input/SearchField.vue'
import { notes } from '@/js/mock_data/sample_notes'

const labels = [
  { name: 'Label 1', isActive: true },
  { name: 'Label 2', isActive: true },
  { name: 'Label 3', isActive: false },
]
</script>

<template>
  <TheContainer page-name="Dashboard">
    <div class="filter-section">
      <div class="flex-1">
        <span class="font-bold text-xs tracking-wide">QUICK ACCESS:</span>
        <div class="flex flex-row gap-1 flex-wrap">
          <template v-for="(label, key) in labels" :key="key">
            <LabelTag :text="label.name" :status="label.isActive" />
          </template>
        </div>
      </div>
      <div class="flex-1 w-full lg:w-1/2 lg:ml-auto">
        <SearchField />
      </div>
    </div>

    <div class="card-section">
      <CardNotes :notes="notes" />
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