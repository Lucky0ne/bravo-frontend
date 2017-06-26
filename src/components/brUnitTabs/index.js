/**
 * Created by igorgo on 25.06.2017.
 */
import brUnitTab from './brUnitTab.vue'
import brUnitTabs from './brUnitTabs.vue'
import brUnitTabsPanel from './brUnitTabsPanel.vue'

export default function (Vue) {
  Vue.component('br-unit-tab', brUnitTab)
  Vue.component('br-unit-tabs', brUnitTabs)
  Vue.component('br-unit-tabs-panel', brUnitTabsPanel)
}
