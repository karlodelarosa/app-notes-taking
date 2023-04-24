/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
    labels: []
  })
  
  const actions = {
    setLabels({ commit }: any, data: []) {
      commit('SET_LABEL', data)
    }
  }
  
  const mutations = {
    SET_LABEL(state: { labels: [] }, payload: []) {
      state.labels = payload
    }
  }
  
  const getters = {
    GET_labels: (state: { labels: [] }) => state.labels,
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  