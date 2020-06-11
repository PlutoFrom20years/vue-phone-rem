import CryptoJS from 'crypto-js'
const unit = {
  // md5加密
  md5Encode: str => {
    return CryptoJS.MD5(str).toString()
  }
}
export default unit
