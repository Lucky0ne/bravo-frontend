<template>
  <div class="list no-border platform-delimiter">
    <template v-for="menuItem in menuItems">
      <main-menu-popup v-if="menuItem.name == 'Popup'" v-bind:attrs="menuItem.attr" v-bind:children="menuItem.children"
                       group="mainmenu"></main-menu-popup>
    </template>
  </div>
</template>
<script>
  import apiCall from '../apicall'
  import { SessionStorage } from 'quasar'
  import cpPopup from './menu_items/popup.vue'
  export default {
    data () {
      return {
        menuItems: []
      }
    },
    mounted () {
      this.fetchMenu()
    },
    methods: {
      fetchMenu () {
        let value = SessionStorage.get.item('menuClient')
        if (value !== null) {
          this.menuItems.push.apply(this.menuItems, value)
        }
        else {
          let q = apiCall({router: this.$router})
          q.get('/api/get-main-menu').then(response => {
            let resp = response.data.children
            if (resp) SessionStorage.set('menuClient', resp)
            this.menuItems.push.apply(this.menuItems, resp)
          }).catch(e => {
            console.log(e)
          })
        }
      }
    },
    components: {
      'main-menu-popup': cpPopup
    }
  }
</script>
