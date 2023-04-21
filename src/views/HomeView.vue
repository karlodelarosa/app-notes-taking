<script setup lang="ts">
import TheContainer from '@/components/template/TheContainer.vue'
import LabelTag from '@/components/atom/label/LabelTag.vue'

const labels = [
  { name: 'Label 1', isActive: true },
  { name: 'Label 2', isActive: true },
  { name: 'Label 3', isActive: false }
]
</script>

<template>
  <TheContainer page-name="Dashboard">
    <div class="grid grid-cols-2 items-center justify-between">
      <div class="flex flex-row gap-1">
        <template v-for="(label, key) in labels" :key="key">
          <LabelTag :text="label.name" :status="label.isActive" />
        </template>
      </div>
      <div class="ml-auto">search</div>
    </div>
  </TheContainer>
</template>
