import { createStore } from 'vuex'

import modal from './module/modal'
import notes from './module/notes'
import label from './module/label'

export default createStore({
  modules: {
    modal,
    notes,
    label
  }
})
