/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
  isOpen: false,
  activeModal: ''
})

const actions = {
  openModal({ commit }: any) {
    commit('SET_IS_OPEN', true)
  },
  closeModal({ commit }: any) {
    commit('SET_IS_OPEN', false)
  },
  setActiveModal({ commit }: any, data: string) {
      commit('SET_ACTIVE_MODAL', data)
  }
}

const mutations = {
  SET_IS_OPEN(state: { isOpen: boolean; }, payload: boolean) {
      state.isOpen = payload
  },
  SET_ACTIVE_MODAL(state: { activeModal: string; }, payload: string) {
    state.activeModal = payload
}
}

const getters = {
  GET_isOpen: (state: { isOpen: boolean; }) => state.isOpen,
  GET_activeModal: (state: { activeModal: string; }) => state.activeModal
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}