import { createStore } from 'vuex'

import modal from './module/modal'
import notes from './module/notes'
import label from './module/label'
import settings from './module/settings'

export default createStore({
  modules: {
    modal,
    notes,
    label,
    settings
  }
})
