// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import store from './store'
import router from './router'
import brMainMenu from './components/brMainMenu'
import brUnitTabs from './components/brUnitTabs'
import brUnitView from './components/brUnitView'

Vue.use(Quasar) // Install Quasar Framework
Vue.use(brMainMenu)
Vue.use(brUnitTabs)
Vue.use(brUnitView)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
