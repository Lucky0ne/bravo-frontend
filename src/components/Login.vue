<template>
</template>

<script>
  import { Dialog, Toast } from 'quasar'
  import apicall from '../apicall'
  export default {
    data () {
      return {}
    },
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
            preventClose: true,
            handler (data, close) {
              let q = apicall({router: router})
              q.post('/auth/login', data).then(response => {
                close(() => {
                  Toast.create.positive('Успешный вход в систему в качестве пользователя "' + data.username + '"')
                })
                router.back()
              }).catch(e => {
                Toast.create.negative(e.apierror)
                console.log(e.response)
              })
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
