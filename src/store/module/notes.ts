/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
    notes: {},
  })
  
  const actions = {
    setNotes({ commit }: any, data: object) {
      commit('SET_NOTES', data)
    }
  }
  
  const mutations = {
    SET_NOTES(state: { notes: object }, payload: object) {
      state.notes = payload
    }
  }
  
  const getters = {
    GET_allNotes: (state: { notes: object }) => state.notes,
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  