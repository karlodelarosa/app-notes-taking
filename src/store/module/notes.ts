/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
  notes: {},
  selectedNote: 0,
  searchKeyword: '',
  deleteId: null
})

const actions = {
  setNotes({ commit }: any, data: object) {
    commit('SET_NOTES', data)
  },
  setSelectedNote({ commit }: any, data: number) {
    commit('SET_SELECTED_NOTE', data)
  },
  setSearchKeyword({ commit }: any, data: string) {
    commit('SET_SEARCH_KEYWORD', data)
  },
  setDeleteId({ commit }: any, data: any) {
    commit('SET_DELETE_ID', data)
  }
}

const mutations = {
  SET_NOTES(state: { notes: object }, payload: object) {
    state.notes = payload
  },
  SET_SELECTED_NOTE(state: { selectedNote: number }, payload: number) {
    state.selectedNote = payload
  },
  SET_SEARCH_KEYWORD(state: { searchKeyword: string }, payload: string) {
    state.searchKeyword = payload
  },
  SET_DELETE_ID(state: { deleteId: any }, payload: any) {
    state.deleteId = payload
  }
}

const getters = {
  GET_allNotes: (state: { notes: object }) => state.notes,
  GET_searchKeyword: (state: { searchKeyword: string }) => state.searchKeyword,
  GET_allNoteKey: (state: { selectedNote: number }) => state.selectedNote,
  GET_selectedNoteTitle: (state: any) => {
    return state.notes[state.selectedNote].title
  },
  GET_selectedNoteContent: (state: any) => {
    return state.notes[state.selectedNote]!.content
  },
  GET_selectedNote: (state: any) => {
    return state.notes[state.selectedNote]
  },
  GET_deleteId: (state: { deleteId: string }) => state.deleteId
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
