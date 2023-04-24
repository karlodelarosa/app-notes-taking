<script setup lang="ts">
import _ from 'lodash'
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import SearchIcon from '@/components/atom/svg/SearchIcon.vue'
import SearchNote from '@/core/application/SearchNote'
import NoteLabelCollection from '@/core/application/NoteLabelCollection'

const store = useStore()
const allData = computed(() => store.getters['notes/GET_allNotes'])
const selectedLabel = computed(() => store.getters['label/GET_labels'])

const searchText = ref('')
const activeLabel = ref([])

const searchArticle = () => {
  filterArticle(searchText.value)
  store.dispatch('notes/setSearchKeyword', searchText.value)
}

watch(selectedLabel, (newVal) => {
  activeLabel.value = newVal
})

const collection = new NoteLabelCollection()

const filterArticle = _.debounce(async (keyword: string) => {
  if(keyword.length <= 0) {
    if (activeLabel.value.length > 0) {
      collection.buildByLabelId(activeLabel.value).then((result) => {
        store.dispatch('notes/setNotes', result)
      })
    } else {
      collection.buildData().then((result) => {
        store.dispatch('notes/setNotes', result)
      })
    }
  }

  const searchNote = new SearchNote()
    .setKeyword(keyword)
    .setLabel(activeLabel.value)
    .setAllData(allData.value)
    .filter()
  
    store.dispatch('notes/setNotes', searchNote)
}, 500)
</script>

<template>
  <div class="w-full ml-auto relative">
    <input v-model="searchText" @input="searchArticle()" type="text" placeholder="Search notes" class="search-input" />
    <SearchIcon class="absolute right-[13px] top-[11px]" />
  </div>
</template>

<style scoped>
.search-input {
  @apply w-full pl-[15px] pr-[40px] py-[8px] rounded-custom-input border border-gray-400 bg-white;
}
</style>
