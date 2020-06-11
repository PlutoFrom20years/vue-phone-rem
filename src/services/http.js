import axios from 'axios'
import config from '../../config'
import querystring from 'querystring'


// 错误提示
const networkErr = '网络请求超时'
console.log('process', process.env.VUE_APP_API);
const instance = axios.create({
  timeout: 15 * 1000, // 请求超时时间设置 15s
  withCredentials: false //  带cookie请求
  // headers: { 'Content-Type': '' }
})
// request 拦截器
instance.interceptors.request.use(
  config => {
    console.log(config);

    //  请求拦截的逻辑  例如校验是否带我token
  },
  err => {
    return Promise.reject(err)
  }
)
console.log('process.env.VUE_APP_API,', process.env);

// response 拦截器
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      //  请求成功的逻辑
    }
    return res
  },
  err => {
    if (err.response) {
      if (err.response.status === 401) {
        // 无权限
      }
    }
    return Promise.reject(err.response.data)
  }
)
const http = {
  get: (path, params, { url = '', port = 8810 }) => {
    return new Promise((resolve, reject) => {
      let apiUrl = `${config.apiUrl}:${port}${config.apiBaseUrl}${path}`
      if (url) {
        apiUrl = `${url}:${port}${config.apiBaseUrl}${path}`
      }
      instance
        .get(apiUrl, {
          params
        })
        .then(
          res => {
            return resolve(res)
          },
          err => {
            return reject(err.msg || networkErr)
          }
        )
    })
  },
  post: (
    path,
    params,
    { url = '', port = 8810, raw = false, file = false }
  ) => {
    return new Promise((resolve, reject) => {
      let data = params
      const headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }

      if (file) {
        headers['Content-type'] = 'multipart/form-data'
      } else if (!raw) {
        data = querystring.stringify(params)
        headers['Content-type'] = 'application/x-www-form-urlencoded'
      }

      let apiUrl = `${config.apiUrl}:${port}${config.apiBaseUrl}${path}`
      if (url) {
        apiUrl = `${url}:${port}${config.apiBaseUrl}${path}`
      }
      // 拦截JSON对象里面的rel【权限控制】
      if (raw) {
        if (data.rel) {
          apiUrl += `?rel=${data.rel}`
          delete data.rel
        }
      }
      instance
        .post(apiUrl, data, {
          headers
        })
        .then(
          res => {
            return resolve(res)
          },
          err => {
            return reject(err.msg || networkErr)
          }
        )
    })
  }
}
export default http


