<template>
  <div class="login-page window-height window-width bg-light column items-center">
    <div class="login-card card">
      <div class="card-title bg-primary text-white">Вход в систему</div>
      <div class="card-content">
        <i class="text-grey-5">error_outline</i>
        <p class="caption text-center">Oops. Nothing here...</p>
        <p class="text-center group">
          <button v-if="canGoBack" class="grey push small" @click="goBack">
            <i class="on-left">keyboard_arrow_left</i>
            Go back


          </button>
          <router-link to="/">
            <button class="grey push small">
              Go home
              <i class="on-right">home</i>
            </button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        canGoBack: window.history.length > 1
      }
    },
    methods: {
      goBack () {
        window.history.go(-1)
      }
    }
  }
</script>
<style lang="stylus">
  .login-page
    padding 50px
    .login-card
      width 90vw
      max-width 600px
      i
      font-size 5rem
</style>
