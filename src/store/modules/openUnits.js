/**
 * Created by igorgo on 25.06.2017.
 */
import * as types from '../mutation-types'
// initial state
let removeByAttr = function (arr, attr, value) {
  let i = arr.length
  while (i-- > 0) {
    if (arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      (arguments.length > 2 &&
      arr[i][attr] === value)
    ) {
      arr.splice(i, 1)
      break
    }
  }
  return arr
}

const state = {
  openUnitsList: [],  // <li v-for="(value, propertyName) in openUnitsList">
  openUnitsEls: [],  // <li v-for="(value, propertyName) in openUnitsList">
  activeUnitTab: '',
  tmp: ''
}

// mutations
const mutations = {
  [types.UNIT_OPENED] (state, unit) {
    state.openUnitsList.push(unit)
  },
  [types.UNIT_CLOSED] (state, unit) {
    removeByAttr(state.openUnitsList, 'code', unit.code)
    removeByAttr(state.openUnitsEls, 'code', unit.code)
  },
  [types.UNIT_TAB_CHANGED] (state, tab) {
    state.activeUnitTab = tab
  },
  [types.UNIT_TAB_GOT_EL] (state, obj) {
    console.log(obj.code)
    state.tmp = obj
    // state.openUnitsEls.push(obj)
  }
}

// getters
const getters = {
  getOpenUnits: state => state.openUnitsList,
  getUnitElementByCode: (state, getters) => (id) => {
    /* let i = state.openUnitsEls.length
    while (i-- > 0) {
      if (state.openUnitsEls[i] &&
        state.openUnitsEls[i].hasOwnProperty('code') &&
        state.openUnitsEls[i].code === id
      ) {
        return state.openUnitsEls[i].el
      }
    } */
    return null
  },
  getActiveUnitTabKey: state => state.activeUnitTab
}

// actions
const actions = {
  openNewUnit ({commit, state}, unit) {
    if (!(unit.code in state.openUnitsList)) {
      commit(types.UNIT_OPENED, unit)
    }
  },
  closeOpenedUnit ({commit, state}, unit) {
    if (unit.code in state.openUnitsList) {
      commit(types.UNIT_CLOSED, unit)
      // todo: activate previous/next tab
    }
  },
  activateUnitTab ({commit, state}, code) {
    if (state.activeUnitTab !== code) {
      commit(types.UNIT_TAB_CHANGED, code)
    }
  },
  addOpenUnitElement ({commit, state}, obj) {
    commit(types.UNIT_TAB_GOT_EL, obj)
    commit(types.UNIT_TAB_CHANGED, obj.code)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
