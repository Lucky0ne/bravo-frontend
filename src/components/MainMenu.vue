<template>
  <q-drawer swipe-only ref="drawer">
    <div class="toolbar light">
      <q-toolbar-title :padding="1">
        <span>Меню</span>
      </q-toolbar-title>
    </div>
    <div class="list no-border platform-delimiter">
      <template v-for="menuItem in menuItems">
        <main-menu-popup v-if="menuItem.name == 'Popup'" v-bind:attrs="menuItem.attr" v-bind:children="menuItem.children"
                         group="mainmenu" v-on:menu-item-click="onItemClick"></main-menu-popup>
      </template>
    </div>
  </q-drawer>
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
      },
      clear () {
        this.menuItems.slice(this.menuItems.length)
      },
      onItemClick (item) {
        this.$refs.drawer.close()
        if (item.Code === 'Exit') {
          this.$emit('logoff')
        }
        else {
          this.$emit('call-unit', item.Code)
        }
      }
    },
    components: {
      'main-menu-popup': cpPopup
    }
  }
</script>
