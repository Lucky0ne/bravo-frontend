/**
 * Created by igorgo on 25.06.2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mainMenu from './modules/mainMenu'
import { SessionStorage } from 'quasar'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  storage: SessionStorage
}
export default new Vuex.Store({
  state,
  modules: {
    mainMenu
  },
  strict: debug
})
