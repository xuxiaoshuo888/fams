import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Layout,
      redirect:'/dashboard',
      children: [{
        path:'dashboard',
        component: () => import()
      }]
    }
  ]
})
