import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',component:() => import('@/views/login/login'),hidden:true
    },
    {//进入后默认看到的内容
      path: '/',
      name: 'Dashboard',
      component: Layout,
      redirect:'/dashboard',//路由重定向，如果设置noredirect，则在面包屑中不可点击
      hidden:true,//true代表在侧边栏中不展示，true代表展示
      children: [{
        path:'dashboard',
        component: () => import('@/views/dashboard/index')
      }]
    },
    {//学生详情
      path: '/stdInfo',
      component: Layout,
      name:"StdInfo",
      meta:{title:'班级学生信息',icon:''},
      children: [{
        path:'',
        name:'StdInfoIndex',
        component: () => import('@/views/stdInfo/stdInfo'),
      }]
    },
    {//班会，班会记录和班会签到
      path:'/meeting',
      component:Layout,
      redirect:'/meeting/record',
      name:'Meeting',
      meta:{title:'班会', icon:''},
      children:[
        {
          path:'record',
          name:'Record',
          component: () => import('@/views/meeting/record'),
          meta: {title :'班会',icon:''}
        },
        {
          path:'signIn',
          name:'SignIn',
          component: () => import('@/views/meeting/signIn'),
          meta: {title :'签到',icon:''}
        }
      ]
    }
  ]
})
