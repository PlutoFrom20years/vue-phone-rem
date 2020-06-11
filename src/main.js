import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import './assets/css/main.less' // 全局样式表
// 引入vant组件以及样式
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/font/iconfont.css'    //字体图标 
import api from './api'
// 全局注册vant组件
Vue.config.productionTip = false
// 将api挂载到Vue原型上，组件中通过this.api访问
Vue.prototype.api = api
//路由拦截 这里也可以做一些token拦截
router.beforeEach((to, from, next) => {
  // 统一返回404
  if (!to.matched.length && to.path !== '/404') {
    next({ path: '/404' })
    return false
  }
  next()
})
Vue.use(Vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
