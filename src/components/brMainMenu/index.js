/**
 * Created by igorgo on 25.06.2017.
 */
import brMainMenu from './brMainMenu.vue'
import brMainMenuPopup from './brMainMenuPopup.vue'
import brMainMenuItem from './brMainMenuItem.vue'
import brMainMenuSeparator from './brMainMenuSeparator.vue'

export default function (Vue) {
  Vue.component('br-mmenu', brMainMenu)
  Vue.component('br-mmenu-popup', brMainMenuPopup)
  Vue.component('br-mmenu-item', brMainMenuItem)
  Vue.component('br-mmenu-separ', brMainMenuSeparator)
}
