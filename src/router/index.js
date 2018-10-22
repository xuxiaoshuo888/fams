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
    {//04学生详情
      path: '/stdInfo',
      component: Layout,
      // name:"StdInfo",
      meta:{title:'班级学生信息',icon:''},
      children: [{
        path:'',
        name:'StdInfoIndex',
        component: () => import('@/views/stdInfo/stdInfo'),
      }]
    },
    {//14班会，班会记录和班会签到
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
          meta: {title :'班会记录表',icon:''}
        },
        {
          path:'signIn',
          name:'SignIn',
          component: () => import('@/views/meeting/signIn'),
          meta: {title :'班会签到表',icon:''}
        }
      ]
    },
    {//05国籍统计表
      path: '/nation',
      component: Layout,
      // name:"",
      meta:{title:'国籍统计表',icon:''},
      children: [{
        path:'',
        name:'Nation',
        component: () => import('@/views/nation/nation'),
      }]
    },
    {//06班级学生照片
      path: '/stdpic',
      component: Layout,
      // name:"",
      meta:{title:'班级学生照片',icon:''},
      children: [{
        path:'',
        name:'Stdpic',
        component: () => import('@/views/stdpic/stdpic'),
      }]
    },
    {//07班干部情况
      path: '/leader',
      component: Layout,
      // name:"",
      meta:{title:'班干部情况',icon:''},
      children: [{
        path:'',
        name:'Leader',
        component: () => import('@/views/leader/leader'),
      }]
    },
    {//08护照及居留许可统计表
      path: '/passport',
      component: Layout,
      // name:"",
      meta:{title:'护照及居留许可统计表',icon:''},
      children: [{
        path:'',
        name:'Passport',
        component: () => import('@/views/passport/passport'),
      }]
    },
    {//09临住登记统计表
      path: '/tempAccommodation',
      component: Layout,
      // name:"",
      meta:{title:'临住登记统计表',icon:''},
      children: [{
        path:'',
        name:'TempAccommodation',
        component: () => import('@/views/tempAccommodation/tempAccommodation'),
      }]
    }
  ]
})
