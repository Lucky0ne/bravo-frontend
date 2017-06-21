<template>
  <div class="item item-link" @click="clickItem">
    <div class="item-content">{{attrs.Caption.replace('&', '')}}</div>
  </div>
</template>

<script>
  import { Toast, SessionStorage } from 'quasar'
  import apiCall from '../../apicall'
  export default {
    methods: {
      clickItem: function () {
        this.$root.$children[0].$refs.rootView.$refs.leftDrawer.close()
        if (this.$props.attrs.Code === 'Exit') {
          this.$root.$children[0].$refs.rootView.currentCode = ''
          let router = this.$router
          let q = apiCall({router: router})
          q.post('/auth/logoff').then(response => {
            Toast.create.positive('Сеанс работы завершен')
            SessionStorage.clear()
            this.$root.$children[0].$refs.rootView.$refs.mainMenu.menuItems = []
            router.push({path: 'login'})
          }).catch(e => {
            Toast.create.negative(e.apierror)
            console.log(e.response)
          })
          console.log('Exit')
        }
        else {
          this.$root.$children[0].$refs.rootView.currentCode = this.$props.attrs.Code
        }
      }
    },
    props: ['attrs']
  }
</script>
