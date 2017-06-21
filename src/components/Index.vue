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
    <q-drawer swipe-only ref="leftDrawer" id="menuDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
          <span>Меню</span>
        </q-toolbar-title>
      </div>
      <m-menu ref="mainMenu" v-bind:drawer="$refs.leftDrawer"></m-menu>
    </q-drawer>
    <div class="logo-container non-selectable no-pointer-events">
      <div class="logo">
        <img src="~assets/bravo-logo.png">
        <p class="caption text-center">
          <span>{{currentCode}}</span>
        </p>
      </div>
    </div>
  </q-layout>
</template>

<script>
  import mainM from './MainMenu.vue'
  export default {
    data () {
      return {
        appName: 'PROJECT BRAVO',
        version: '0.0.1',
        currentCode: ''
      }
    },
    components: {
      'm-menu': mainM
    }
  }
</script>
<style lang="stylus">
  .logo-container
    width 192px
    height 268px
    position absolute
    top 50%
    left 50%
    transform translateX(-50%) translateY(-50%)
  .logo
    position absolute
</style>
