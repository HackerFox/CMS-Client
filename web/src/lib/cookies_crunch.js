import cookies from 'react-cookies'

let cookiesCrunch = {
  encryptedSID(){
    let dataSID = cookies.load('_kv') || 'not found'
    return encryptedSID
  },
  decryptedSID(){

  }
}

export default cookiesCrunch
