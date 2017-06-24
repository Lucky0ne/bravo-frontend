<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button @click="$refs.mainMenu.$refs.drawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="0">
        <span>{{appName}} v{{version}}</span>
      </q-toolbar-title>
    </div>
    <main-menu ref="mainMenu" @logoff="logoff" @call-unit="openUnit"></main-menu>
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
  import mainMenu from './MainMenu.vue'
  import apiCall from '../apicall'
  import { Toast, SessionStorage } from 'quasar'
  export default {
    data () {
      return {
        appName: 'PROJECT BRAVO',
        version: '0.0.1',
        currentCode: ''
      }
    },
    components: {
      'main-menu': mainMenu
    },
    methods: {
      openUnit (unitcode) {
        this.currentCode = unitcode
      },
      logoff () {
        let router = this.$router
        let q = apiCall({router: router})
        q.post('/auth/logoff').then(response => {
          Toast.create.positive('Сеанс работы завершен')
          SessionStorage.clear()
          this.$refs.mainMenu.clear()
          router.push({path: 'login'})
        }).catch(e => {
          Toast.create.negative(e.apierror)
          console.log(e.response)
        })
      }
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
