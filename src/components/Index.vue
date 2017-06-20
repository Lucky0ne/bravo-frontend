<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="0">
        <span>{{appName}} v{{version}}</span>
      </q-toolbar-title>
    </div>
    <q-drawer swipe-only ref="leftDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
          <span>Меню</span>
        </q-toolbar-title>
      </div>
      <m-menu></m-menu>
    </q-drawer>
  </q-layout>
</template>

<script>
  // import axios from 'axios'
  // import SessionStorage from 'quasar'
  import mainM from './MainMenu.vue'
  export default {
    data () {
      return {
        appName: 'PROJECT BRAVO',
        version: '0.0.1'
      }
    },
    components: {
      'm-menu': mainM
    }
  }
</script>
