/**
 * Created by igorgo on 25.06.2017.
 */
import apiCall from '../apicall'

function getModuleMainMenu (router) {
  return new Promise(
    (resolve, reject) => {
      let q = apiCall({router: router})
      q.get('/api/get-main-menu').then(response => {
        resolve(response.data.children)
      }).catch(e => {
        console.log(e)
        reject(e)
      })
    }
  )
}

export default {
  getModuleMainMenu
}
