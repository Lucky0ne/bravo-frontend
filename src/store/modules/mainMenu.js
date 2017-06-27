/**
 * Created by igorgo on 25.06.2017.
 */
import mmapi from '../../api/main-menu'
import * as types from '../mutation-types'

// initial state
const state = {
  mainMenuContent: []
}

// mutations
const mutations = {
  [types.MAIN_MENU_UPDATED] (state, content) {
    state.mainMenuContent = content
  }
}

// getters
const getters = {
  allMainMenuContent: state => state.mainMenuContent,
  isMainMenuLoaded: state => state.mainMenuContent && (state.mainMenuContent.length > 0)
}

// actions
const actions = {
  getMainMenuContent ({commit, state, rootState}, router) {
    if (!state.mainMenuContent || !state.mainMenuContent.isArray || (state.mainMenuContent.length === 0)) {
      const content = rootState.storage.get.item('menuClient')
      if (content !== null) {
        commit(types.MAIN_MENU_UPDATED, content)
      }
      else {
        mmapi.getModuleMainMenu(router).then(
          content => {
            rootState.storage.set('menuClient', content)
            commit(types.MAIN_MENU_UPDATED, content)
          }
        )
      }
    }
  },
  clearMainMenu ({commit}) {
    commit(types.MAIN_MENU_UPDATED, {})
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
