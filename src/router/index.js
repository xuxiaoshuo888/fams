import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login', component: () => import('@/views/login/login'), hidden: true
    },
    {
      path: '/404', component: () => import('@/views/404/error'), hidden: true
    },

    {//进入后默认进入通知公告
      path: '/',
      name: 'Dashboard',
      component: Layout,
      redirect: '/dashboard',//路由重定向，如果设置noredirect，则在面包屑中不可点击
      hidden: true,//true代表在侧边栏中不展示，true代表展示
      children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }]
    },
    {//a1招生录入管理
      path: '/stdBasic',
      component: Layout,
      // name:"StdInfo",
      meta: {title: '招生录入管理', icon: 'example'},
      children: [{
        path: '',
        name: 'StdInfoIndex',
        component: () => import('@/views/stdBasic/stdBasic'),
      }]
    },
    {//a2学生信息管理
      path: '/stdBasic',
      component: Layout,
      redirect: '/stdBasic/card',
      name: 'StdInfo',
      meta: {title: '学生信息管理', icon: 'user'},
      children: [
        {//学生资料卡
          path: 'card',
          name: 'Card',
          component: () => import('@/views/room/check'),
          meta: {title: '学生资料卡', icon: ''}
        },
        {//学生基本信息管理
          path: 'basic',
          name: 'Basic',
          component: () => import('@/views/stdpic/stdpic'),
          meta: {title: '学生基本信息管理', icon: ''}
        },
        {//学生照片管理
          path: 'stdpic',
          name: 'Stdpic',
          component: () => import('@/views/stdpic/stdpic'),
          meta: {title: '学生照片管理', icon: ''}
        }
      ]
    },
    {//a3护照及居留许可管理
      path: '/passport',
      component: Layout,
      // name:"",
      meta: {title: '护照及居留许可管理', icon: 'nested'},
      children: [{
        path: '',
        name: 'Passport',
        component: () => import('@/views/passport/passport'),
      }]
    },
    {//a4保险管理
      path: '/insurance',
      component: Layout,
      // name:"Insurance",
      meta: {title: '保险管理', icon: 'user'},
      children: [{
        path: '',
        name: 'Insurance',
        component: () => import('@/views/insurance/insurance'),
      }]
    },
    {//a5学生处分管理
      path: '/violation',
      component: Layout,
      meta: {title: '学生处分管理', icon: 'user'},
      children: [{
        path: '',
        name: 'Violation',
        component: () => import('@/views/violation/violation'),
      }]
    },
    {//a6学生素质评分管理
      path: '/score',
      component: Layout,
      redirect: '/score/regist',
      name: 'Score',
      meta: {title: '学生素质评分管理', icon: 'user'},
      children: [
        {
          path: 'regist',
          name: 'Regist',
          component: () => import('@/views/score/regist'),
          meta: {title: '素质评分登记', icon: 'user'}
        },
        {
          path: 'matter',
          name: 'Matter',
          component: () => import('@/views/score/matter'),
          meta: {title: '素质评分事项', icon: 'user'}
        }
      ]
    },
    {//a7临住管理
      path: '/tempAccommodation',
      component: Layout,
      // name:"",
      meta: {title: '临住管理', icon: 'password'},
      children: [{
        path: '',
        name: 'TempAccommodation',
        component: () => import('@/views/tempAccommodation/tempAccommodation'),
      }]
    },
    {//a8系统管理
      path: '/sysManagement',
      component: Layout,
      redirect: '/score/regist',
      // name: 'Score',
      meta: {title: '系统管理', icon: 'user'},
      children: [
        {
          path: 'regist',
          name: '',
          component: () => import('@/views/score/regist'),
          meta: {title: '素质评分登记', icon: 'user'}
        },
        {
          path: 'matter',
          name: '',
          component: () => import('@/views/score/matter'),
          meta: {title: '素质评分事项', icon: 'user'}
        }
      ]
    },

    {//05国籍统计表
      path: '/nation',
      component: Layout,
      // name:"",
      meta: {title: '国籍统计表', icon: 'eye'},
      children: [{
        path: '',
        name: 'Nation',
        component: () => import('@/views/nation/nation'),
      }]
    },
    {//06班级学生照片
      path: '/stdpic',
      component: Layout,
      // name:"",
      meta: {title: '班级学生照片', icon: 'form'},
      children: [{
        path: '',
        name: 'Stdpic',
        component: () => import('@/views/stdpic/stdpic'),
      }]
    },
    {//07班干部情况
      path: '/leader',
      component: Layout,
      // name:"",
      meta: {title: '班干部情况', icon: 'link'},
      children: [{
        path: '',
        name: 'Leader',
        component: () => import('@/views/leader/leader'),
      }]
    },


    {//10留学生日常动态
      path: '/stdDt',
      component: Layout,
      // name:"",
      meta: {title: '留学生日常动态', icon: 'table'},
      children: [{
        path: '',
        name: 'StdDt',
        component: () => import('@/views/stdDt/stdDt'),
      }]
    },
    {//11费用缴纳等级
      path: '/payment',
      component: Layout,
      // name:"",
      meta: {title: '费用缴纳等级', icon: 'tree'},
      children: [{
        path: '',
        name: 'Payment',
        component: () => import('@/views/payment/payment'),
      }]
    },
    {//13寝室管理登记
      path: '/room',
      component: Layout,
      redirect: '/room/check',
      name: 'Room',
      meta: {title: '寝室管理登记', icon: 'user'},
      children: [
        {
          path: 'check',
          name: 'Check',
          component: () => import('@/views/room/check'),
          meta: {title: '查寝', icon: 'user'}
        },
        {
          path: 'repair',
          name: 'Repair',
          component: () => import('@/views/room/repair'),
          meta: {title: '保修', icon: 'user'}
        },
        {
          path: 'assets',
          name: 'Assets',
          component: () => import('@/views/room/assets'),
          meta: {title: '财产', icon: 'user'}
        }
      ]
    },
    {//14班会，班会记录和班会签到
      path: '/meeting',
      component: Layout,
      redirect: '/meeting/record',
      name: 'Meeting',
      meta: {title: '班会', icon: 'user'},
      children: [
        {
          path: 'record',
          name: 'Record',
          component: () => import('@/views/meeting/record'),
          meta: {title: '班会记录表', icon: 'user'}
        },
        {
          path: 'signIn',
          name: 'SignIn',
          component: () => import('@/views/meeting/signIn'),
          meta: {title: '班会签到表', icon: 'user'}
        }
      ]
    },


    {//17心理健康谈话记录
      path: '/psychology',
      component: Layout,
      meta: {title: '心理健康谈话记录', icon: 'user'},
      children: [{
        path: '',
        name: 'Psychology',
        component: () => import('@/views/psychology/psychology'),
      }]
    },
    {//18特殊群体学生基本情况
      path: '/special',
      component: Layout,
      meta: {title: '特殊群体学生基本情况', icon: 'user'},
      children: [{
        path: '',
        name: 'Special',
        component: () => import('@/views/special/special'),
      }]
    },

    {//20班主任日常工作记录
      path: '/routine',
      component: Layout,
      // name:"Routine",
      meta: {title: '班主任日常工作记录', icon: 'user'},
      children: [{
        path: '',
        name: 'Routine',
        component: () => import('@/views/routine/routine'),
      }]
    },

    {
      path: '/*', component: () => import('@/views/404/error'), hidden: true
    },
  ]
})
