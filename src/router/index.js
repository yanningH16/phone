import Vue from 'vue'
import Router from 'vue-router'

import Home from './home/home'
import Center from './center/center'
import ShopCar from './shopCar/shopCar'
Vue.use(Router)

const defaultRouter = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  }
]
const routes = [...defaultRouter, ...Home, ...Center, ...ShopCar]
let router = new Router({
  routes,
  mode: 'history'
})
// 设置title
router.beforeEach((to, from, next) => {
  if (to.meta.title || to.params.message) {
    document.title = to.meta.title || to.params.message.title
  } else {
    document.title = '购物系统'
  }
  next()
})
export default router
