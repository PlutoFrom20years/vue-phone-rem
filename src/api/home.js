/*
 首页接口 demo
*/
import { http } from '../../services'
import config from '../../config'
const services = config.apiConfig.commonBase
// body实体
const servicesRaw = JSON.parse(JSON.stringify(services))
servicesRaw.raw = true
const home = {
  // 示例 post请求
  login: params => {
    return http.post('login', params, servicesRaw)
  },
  // 示例 get请求

  demo: params => {
    return http.get(
      'demo',
      params,
      services
    )
  }
}
export default home
