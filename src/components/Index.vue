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
    <br-mmenu ref="mainMenu" @logoff="logoff" @call-unit="openUnit"></br-mmenu>
    <div class="logo-container non-selectable no-pointer-events">
      <div class="logo">
        <img src="~assets/bravo-logo.png">
        <p class="caption text-center">
          <span>{{currentCode}}</span>
        </p>
      </div>
    </div>
    <div class="layout-view">
      <!--tab-panel ref="tabPanel"></tab-panel-->
    </div>
  </q-layout>
</template>

<script>
  import apiCall from '../apicall'
  import { Toast, SessionStorage } from 'quasar'

//  function load (component) {
//    return () => System.import(`components/${component}.vue`)
//  }

  export default {
    data () {
      return {
        appName: 'PROJECT BRAVO',
        version: '0.0.1',
        currentCode: ''
      }
    },
    components: {
      // 'main-menu': load('MainMenu'),
      // 'tab-panel': load('tab_panel/TabPanel')
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
    z-index 5
    opacity 0.2
  .logo
    position absolute
</style>
