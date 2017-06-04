import axios from 'axios'

let requestPrivate = {
  let result = ''
    getKey(crendential){
      axios.get('https://localhost/private_key', {
        headers : {
          private_key : crendential
        }
      }).then(res => result = res)
        .catch(err => result = 'not serve')
    return result
  }
}
