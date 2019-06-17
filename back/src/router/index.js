import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import CommodityMaintain from '../components/CommodityMaintain'
import Order from '../components/Order'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
      {
        path: '/CommodityMaintain',
        name: '商品維護',
        component: CommodityMaintain
      },
      {
        path: '/Order',
        name: '訂單維護',
        component: Order
      }],
    },
    {
      path: '/',
      name: '登入',
      component: Login
    },
  ]
})
