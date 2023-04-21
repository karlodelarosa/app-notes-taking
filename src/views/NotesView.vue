<script setup lang="ts">
import CardNotes from '@/components/molecules/CardNotes.vue'
import LabelTag from '@/components/atom/label/LabelTag.vue'
import TheContainer from '@/components/template/TheContainer.vue'
import TheNoteContainer from '@/components/template/TheNoteContainer.vue'
import SearchField from '@/components/atom/input/SearchField.vue'
import { notes } from '@/js/mock_data/sample_notes'

const labels = [
  { name: 'Label 1', isActive: true },
  { name: 'Label 2', isActive: true },
  { name: 'Label 3', isActive: false },
]
</script>

<template>
  <TheNoteContainer>
    <h1>HELLO</h1>
  </TheNoteContainer>
</template>