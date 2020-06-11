import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import './assets/css/main.less' // 全局样式表
// 引入vant组件以及样式
import Vant from 'vant'
import 'vant/lib/index.css'
// 全局注册vant组件
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
