<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import ButtonDefault from '@/components/atom/button/ButtonDefault.vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import TheNoteContainer from '@/components/template/TheNoteContainer.vue'
import SearchField from '@/components/atom/input/SearchField.vue'

import SideNotes from '@/components/organism/SideNotes.vue'
import NoteViewer from '@/components/organism/NoteViewer.vue'
</script>

<template>
  <TheNoteContainer>
    <div class="w-full h-screen md:flex">
      <div class="flex-none w-full md:max-w-sm bg-white border-r border-gray-300">
        <div class="px-[30px] py-[30px]">
          <SearchField />
        </div>
        <SideNotes />
      </div>
      <NoteViewer />
    </div>
  </TheNoteContainer>
</template>
