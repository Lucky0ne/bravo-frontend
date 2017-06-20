<template>
  <div class="login-page window-height window-width bg-light column items-center">
    <div>
      <div class="login-card card bg-white column items-center justify-center">
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
    .login-header
      height 50vh
      width 100%
      padding-top 15vh
      font-size 10vmax
      color rgba(255, 255, 255, .2)
      overflow hidden
    .login-card
      margin-top -25px
      width 90vw
      max-width 600px
      padding 50px
      i
        font-size 5rem
</style>
