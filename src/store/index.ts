import { createStore } from 'vuex'

import modal from './module/modal'
import notes from './module/notes'

export default createStore({
  modules: {
    modal,
    notes
  }
})
