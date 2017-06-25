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
                         group="mainmenu" v-on:menu-item-click="onItemClick"></br-mmenu-popup>
      </template>
    </div>
  </q-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: mapGetters({
      content: 'allMainMenuContent',
      iLoaded: 'isMainMenuLoaded'
    }),
    methods: {
      onItemClick (item) {
        this.$refs.drawer.close()
        if (item.Code === 'Exit') {
          this.$emit('logoff')
        }
        else {
          this.$emit('call-unit', item.Code)
        }
      },
      ...mapActions(['getMainMenuContent', 'clearMainMenu'])
    },
    created () {
      this.$store.dispatch('getMainMenuContent', this.$router)
    }
  }
</script>
