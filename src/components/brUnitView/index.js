/**
 * Created by igorgo on 25.06.2017.
 */
import brUnitViewGrid from './brUnitViewGrid.vue'
import brUnitViewWrap from './brUnitViewWrap.vue'
import brUnitView from './brUnitView.vue'

export default function (Vue) {
  Vue.component('br-unit-view-grid', brUnitViewGrid)
  Vue.component('br-unit-view-wrap', brUnitViewWrap)
  Vue.component('br-unit-view', brUnitView)
}
