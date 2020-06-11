import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import './assets/css/main.less' // 全局样式表
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
