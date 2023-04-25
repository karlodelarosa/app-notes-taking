/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
  labels: [],
  selectedLabels: []
})

const actions = {
  setLabels({ commit }: any, data: []) {
    commit('SET_LABEL', data)
  },
  setSelectedLabels({ commit }: any, data: []) {
    commit('SET_SELECTED_LABEL', data)
  }
}

const mutations = {
  SET_LABEL(state: { labels: [] }, payload: []) {
    state.labels = payload
  },
  SET_SELECTED_LABEL(state: { selectedLabels: [] }, payload: []) {
    state.selectedLabels = payload
  }
}

const getters = {
  GET_labels: (state: { labels: [] }) => state.labels,
  GET_selectedLabels: (state: { selectedLabels: [] }) => state.selectedLabels
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
