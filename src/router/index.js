import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    // 路由懒加载
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
  },
  {
    path: '/404',
    name: '404',
    // 路由懒加载  404
    component: () => import(/* webpackChunkName: "about" */ '../pages/NotFound.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
