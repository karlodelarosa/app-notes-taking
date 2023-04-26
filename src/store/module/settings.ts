/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
    settingsMenu: [
        'General',
        'Account',
        'Labels'
    ],
    activeComponent: 'general',
    selectedMenuID: 0
  })
  
  const actions = {
    setSettingsMenu({ commit }: any, data: []) {
      commit('SET_SETTINGS_MENU', data)
    },
    setActiveComponent({ commit }: any, data: string) {
      commit('SET_ACTIVE_COMPONENT', data)
    },
    setActiveComponentId({ commit }: any, data: number) {
        commit('SET_SELECTED_MENU_ID', data)
    }
  }
  
  const mutations = {
    SET_SETTINGS_MENU(state: { settingsMenu: [] }, payload: []) {
      state.settingsMenu = payload
    },
    SET_ACTIVE_COMPONENT(state: { activeComponent: string }, payload: string) {
      state.activeComponent = payload
    },
    SET_SELECTED_MENU_ID(state: { selectedMenuID: number }, payload: number) {
        state.selectedMenuID = payload
    },
  }
  
  const getters = {
    GET_settingsMenu: (state: { settingsMenu: [] }) => state.settingsMenu,
    GET_activeComponent: (state: { activeComponent: string }) => state.activeComponent,
    GET_selectedMenuID: (state: { selectedMenuID: any }) => state.selectedMenuID
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  