import CryptoJS from 'crypto-js'
const unit = {
  // md5加密
  md5Encode: str => {
    return CryptoJS.MD5(str).toString()
  },
  // 判断是否空对象
  isEmptyObject: val => {
    const obj = { ...val }
    delete obj._index
    delete obj._rowKey
    for (const key in obj) {
      return false
    }
    return true
  }
}

export default unit
