<template>
</template>

<script>
  import { Dialog, Toast } from 'quasar'
  export default {
    data () {},
    mounted () {
      let router = this.$router
      Dialog.create({
        title: 'Вход в систему',
        message: 'Для продолжения работы необходимо авторизоваться.',
        form: {
          username: {
            type: 'textbox',
            label: 'Имя пользователя',
            model: ''
          },
          password: {
            type: 'password',
            label: 'Пароль'
          }
        },
        buttons: [
          {
            label: 'Ok',
            handler (data) {
              Toast.create('Returned ' + JSON.stringify(data))
              router.go(-1)
            }
          }
        ]
      })
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
