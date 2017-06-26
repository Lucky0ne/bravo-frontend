<template>
  <q-layout>
    <div slot="header">
      <div class="toolbar">
        <button @click="$refs.mainMenu.$refs.drawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="0">
          <span>{{appName}} v{{version}}</span>
        </q-toolbar-title>
      </div>
      <br-unit-tabs-panel></br-unit-tabs-panel>
    </div>
    <br-mmenu ref="mainMenu" @logoff="logoff"></br-mmenu>
    <div class="logo-container non-selectable no-pointer-events">
      <div class="logo">
        <img src="~assets/bravo-logo.png">
      </div>
    </div>
    <div class="layout-view">
      <br-unit-view-wrap></br-unit-view-wrap>
    </div>
  </q-layout>
</template>

<script>
  import apiCall from '../apicall'
  import { Toast, SessionStorage } from 'quasar'

  export default {
    data () {
      return {
        appName: 'PROJECT BRAVO',
        version: '0.0.1'
      }
    },
    methods: {
      logoff () {
        let router = this.$router
        let q = apiCall({router: router})
        q.post('/auth/logoff').then(response => {
          Toast.create.positive('Сеанс работы завершен')
          SessionStorage.clear()
          this.$refs.mainMenu.clearMainMenu()
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
