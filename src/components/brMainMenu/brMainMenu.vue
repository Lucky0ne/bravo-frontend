<template>
  <q-drawer swipe-only ref="drawer">
    <div class="toolbar light">
      <q-toolbar-title :padding="1">
        <span>Меню</span>
      </q-toolbar-title>
    </div>
    <div class="list no-border platform-delimiter">
      <template v-for="menuItem in content">
        <br-mmenu-popup v-if="menuItem.name == 'Popup'" v-bind:attrs="menuItem.attr" v-bind:children="menuItem.children"
                        group="mainmenu"></br-mmenu-popup>
      </template>
    </div>
  </q-drawer>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {Events} from 'quasar'
  export default {
    computed: mapGetters({
      content: 'allMainMenuContent',
      iLoaded: 'isMainMenuLoaded'
    }),
    methods: {
      ...mapActions(['getMainMenuContent', 'clearMainMenu'])
    },
    created () {
      Events.$on('main-menu-item-click', (item) => {
        this.$refs.drawer.close()
        if (item.Code === 'Exit') {
          this.$emit('logoff')
        }
        else {
          this.$store.dispatch(
            'openNewUnit',
            {
              code: item.Code,
              name: item.Caption.replace('&', '').replace('…', '')
            }
          )
        }
      })
      this.$store.dispatch('getMainMenuContent', this.$router)
    }
  }
</script>
