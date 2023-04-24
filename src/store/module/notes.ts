/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
    notes: {},
    selectedNote: 0
  })
  
  const actions = {
    setNotes({ commit }: any, data: object) {
      commit('SET_NOTES', data)
    },
    setSelectedNote({ commit }: any, data: number) {
      commit('SET_SELECTED_NOTE', data)
    }
  }
  
  const mutations = {
    SET_NOTES(state: { notes: object }, payload: object) {
      state.notes = payload
    },
    SET_SELECTED_NOTE(state: { selectedNote: number }, payload: number) {
      state.selectedNote = payload
    }
  }
  
  const getters = {
    GET_allNotes: (state: { notes: object }) => state.notes,
    GET_allNoteKey: (state: { selectedNote: number }) => state.selectedNote,
    GET_selectedNoteTitle: (state: any ) => {
      return state.notes[state.selectedNote].title
    },
    GET_selectedNoteContent: (state: any ) => {
      return state.notes[state.selectedNote]!.content
    },
    GET_selectedNote: (state: any) => {
      return state.notes[state.selectedNote]
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  