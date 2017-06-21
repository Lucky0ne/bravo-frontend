/**
 * Created by igorgo on 21.06.2017.
 */
import axios from 'axios'

export default function (options) {
  let apicall = axios.create(options)
  apicall.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401) {
        if (options.router) {
          options.router.push({path: 'login'})
        }
      }
      if (error.response.data) {
        let message = error.response.data
        if (message.startsWith('ORA-')) {
          let test = message.match(/ORA-\d\d\d\d\d:\s(.*)/)
          if (test.length > 1) message = test[1]
        }
        error.apierror = message
      }
      else {
        error.apierror = 'Uncaught error.'
      }
      return Promise.reject(error)
    })
  return apicall
}
