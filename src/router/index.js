import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {//进入后默认看到的内容
      path: '/',
      name: 'Dashboard',
      component: Layout,
      redirect:'/dashboard',
      children: [{
        path:'dashboard',
        component: () => import('@/views/dashboard/index')
      }]
    },
    {
      path: '/stdInfo',
      name: 'StdInfo',
      component: Layout,
      redirect:'/stdInfo',
      children: [{
        path:'stdInfo',
        component: () => import('@/views/stdInfo/stdInfo')
      }]
    }
  ]
})
