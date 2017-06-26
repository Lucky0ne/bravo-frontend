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

let getIndxByAttr = function (arr, attr, value) {
  let i = arr.length
  while (i-- > 0) {
    if (arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      (arguments.length > 2 &&
      arr[i][attr] === value)
    ) {
      return i
    }
  }
  return -1
}

const state = {
  openUnitsList: [],
  activeUnitTab: ''
}

// mutations
const mutations = {
  [types.UNIT_OPENED] (state, unit) {
    state.openUnitsList.push(unit)
  },
  [types.UNIT_CLOSED] (state, unitcode) {
    removeByAttr(state.openUnitsList, 'code', unitcode)
  },
  [types.UNIT_TAB_CHANGED] (state, unitcode) {
    state.activeUnitTab = unitcode
  }
}

// getters
const getters = {
  getOpenUnits: state => state.openUnitsList,
  getActiveUnitTabKey: state => state.activeUnitTab
}

// actions
const actions = {
  openNewUnit ({commit, state}, unit) {
    if (getIndxByAttr(state.openUnitsList, 'code', unit.code) === -1) {
      commit(types.UNIT_OPENED, unit)
      commit(types.UNIT_TAB_CHANGED, unit.code)
    }
    else {
      if (state.activeUnitTab !== unit.code) {
        commit(types.UNIT_TAB_CHANGED, unit.code)
      }
    }
  },
  closeOpenedUnit ({commit, state}, unitcode) {
    let indx = getIndxByAttr(state.openUnitsList, 'code', unitcode)
    if (indx >= 0) {
      // if it's currently active tab - have to make active another
      let needChangeFocus = state.activeUnitTab === unitcode
      let throwFocusTo = -1
      // find out to which
      if (indx > 0) {
        // to previous
        throwFocusTo = indx - 1
      }
      else {
        throwFocusTo = state.openUnitsList.length > 1 ? 0 : -1
      }
      commit(types.UNIT_CLOSED, unitcode)
      if (needChangeFocus && throwFocusTo >= 0) {
        commit(types.UNIT_TAB_CHANGED, state.openUnitsList[throwFocusTo].code)
      }
    }
  },
  activateUnitTab ({commit, state}, code) {
    if (state.activeUnitTab !== code) {
      commit(types.UNIT_TAB_CHANGED, code)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
