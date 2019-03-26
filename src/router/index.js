import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/layout'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),//当跳转到新路由时，页面定位的最顶端
  routes: constantRoutes
})

export const constantRoutes = [
  {path: '/login', component: () => import('@/views/login/login'), hidden: false},
  {path: '/error', component: () => import('@/views/404/error'), hidden: true},
  {path: '/*', component: () => import('@/views/404/error'), hidden: true},
  {//进入后默认进入通知公告
    path: '/',
    // name: 'Dashboard',
    component: Layout,
    redirect: '/dashboard',//路由重定向，如果设置noredirect，则在面包屑中不可点击
    hidden: false,//true代表在侧边栏中不展示，true代表展示
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      meta: {
        title: '首页',
        icon: 'example',
        role_see: ['SYS_ADMIN', 'SYS_ZSLR', 'SYS_WS', 'SYS_XG'],
        role_edit: ['SYS_ADMIN', 'SYS_ZSLR', 'SYS_WS', 'SYS_XG']
      },
      component: () => import('@/views/dashboard/index')
    }]
  }
]

export const asyncRoutes = [
  {//a1招生录入管理
    path: '/stdEntry',
    component: Layout,
    name:"StdEntry",
    children: [{
      path: '',
      name: 'StdInfoIndex',
      meta: {
        title: '招生录入管理',
        icon: 'excel',
        role_see: ['SYS_ADMIN', 'SYS_ZSLR', 'SYS_WS', 'SYS_XG'],
        role_edit: ['SYS_ADMIN', 'SYS_ZSLR']
      },
      component: () => import('@/views/stdEntry/stdEntry'),
    }]
  },
  {//a2外事管理
    path: '/wsgl',
    component: Layout,
    redirect: '/wsgl/passpport',
    name: 'Wsgl',
    meta: {
      title: '外事管理',
      icon: 'user',
      role_see: ['SYS_ADMIN', 'SYS_ZSLR', 'SYS_WS', 'SYS_XG'],
      role_edit: ['SYS_ADMIN', 'SYS_WS']
    },
    children: [
      {//护照
        path: 'passport',
        name: 'Passport',
        meta: {title: '护照及居留许可管理', /*icon: 'nested'*/},
        component: () => import('@/views/passport/passport')
      },
      {//保险
        path: 'insurance',
        name: 'Insurance',
        meta: {title: '保险管理', /*icon: 'guide'*/},
        component: () => import('@/views/insurance/insurance')
      },
      {//临住
        path: 'tempAccommodation',
        name: 'TempAccommodation',
        meta: {title: '临住管理', /*icon: 'password'*/},
        component: () => import('@/views/tempAccommodation/tempAccommodation')
      }
    ]
  },
  {//a3学工管理
    path: '/xggl',
    component: Layout,
    redirect: '/xggl/stdInfo',
    name: 'Xggl',
    meta: {
      title: '学工管理',
      icon: 'user',
      role_see: ['SYS_ADMIN', 'SYS_ZSLR', 'SYS_WS', 'SYS_XG'],
      role_edit: ['SYS_ADMIN', 'SYS_XG']
    },
    children: [
      {//a3-1学生信息
        path: 'stdInfo',
        name: 'StdInfo',
        component: () => import('@/views/stdCard/stdCard'),
        meta: {title: '学生信息', icon: ''},
        children: [
          {//a3-1-1学生资料卡
            path: 'card',
            name: 'Card',
            component: () => import('@/views/stdCard/stdCard'),
            meta: {title: '学生资料卡', icon: ''}
          },
          {//学生基本信息管理
            path: 'basic',
            name: 'Basic',
            component: () => import('@/views/stdBasic/stdBasic'),
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
      {//处分
        path: 'violation',
        name: 'Violation',
        meta: {title: '学生处分管理', /*icon: 'documentation'*/},
        component: () => import('@/views/violation/violation'),
      },
      {//素质评分
        path: 'score',
        name: 'Score',
        meta: {title: '素质评分', icon: ''},
        component: () => import('@/views/score/regist'),
        children: [
          {//素质评分登记
            path: 'regist',
            name: 'Regist',
            component: () => import('@/views/score/regist'),
            meta: {title: '素质评分登记', icon: ''}
          },
          {//素质评分事项
            path: 'matter',
            name: 'Matter',
            component: () => import('@/views/score/matter'),
            meta: {title: '素质评分事项', icon: ''}
          }]
      },
      {//通知公告
        path: 'notice',
        name: 'Notice',
        meta: {title: '通知公告', /*icon: 'tab'*/},
        component: () => import('@/views/notice/notice'),
      }]
  },
  {//a8系统管理
    path: '/sysManagement',
    component: Layout,
    name: 'SysManagement',
    redirect: '/sysManagement/user',
    meta: {title: '系统管理', icon: 'component', role_see: ['SYS_ADMIN'], role_edit: ['SYS_ADMIN']},
    children: [
      {
        path: 'user',
        name: 'sysUser',
        component: () => import('@/views/sysManagement/user/user'),
        meta: {title: '用户管理', icon: ''}
      },
      {
        path: 'role',
        name: 'sysRole',
        component: () => import('@/views/sysManagement/role/role'),
        meta: {title: '角色管理', icon: ''}
      },
      {
        path: 'notice',
        name: 'sysNotice',
        component: () => import('@/views/sysManagement/notice/notice'),
        meta: {title: '提醒设置', icon: ''}
      },
      {
        path: 'dictionary',
        name: 'dictionary',
        component: () => import('@/views/sysManagement/dictionary/dictionary'),
        meta: {title: '数据字典', icon: ''}
      }
    ]
  },
  //未用的一些组件
  // {//05国籍统计表
  //   path: '/nation',
  //   component: Layout,
  //   // name:"",
  //   meta: {title: '国籍统计表', icon: 'eye'},
  //   children: [{
  //     path: '',
  //     name: 'Nation',
  //     component: () => import('@/views/nation/nation'),
  //   }]
  // },
  // {//06班级学生照片
  //   path: '/stdpic',
  //   component: Layout,
  //   // name:"",
  //   meta: {title: '班级学生照片', icon: 'form'},
  //   children: [{
  //     path: '',
  //     name: 'Stdpic',
  //     component: () => import('@/views/stdpic/stdpic'),
  //   }]
  // },
  // {//07班干部情况
  //   path: '/leader',
  //   component: Layout,
  //   // name:"",
  //   meta: {title: '班干部情况', icon: 'link'},
  //   children: [{
  //     path: '',
  //     name: 'Leader',
  //     component: () => import('@/views/leader/leader'),
  //   }]
  // },
  //
  //
  // {//10留学生日常动态
  //   path: '/stdDt',
  //   component: Layout,
  //   // name:"",
  //   meta: {title: '留学生日常动态', icon: 'table'},
  //   children: [{
  //     path: '',
  //     name: 'StdDt',
  //     component: () => import('@/views/stdDt/stdDt'),
  //   }]
  // },
  // {//11费用缴纳等级
  //   path: '/payment',
  //   component: Layout,
  //   // name:"",
  //   meta: {title: '费用缴纳等级', icon: 'tree'},
  //   children: [{
  //     path: '',
  //     name: 'Payment',
  //     component: () => import('@/views/payment/payment'),
  //   }]
  // },
  // {//13寝室管理登记
  //   path: '/room',
  //   component: Layout,
  //   redirect: '/room/check',
  //   name: 'Room',
  //   meta: {title: '寝室管理登记', icon: 'user'},
  //   children: [
  //     {
  //       path: 'check',
  //       name: 'Check',
  //       component: () => import('@/views/room/check'),
  //       meta: {title: '查寝', icon: 'user'}
  //     },
  //     {
  //       path: 'repair',
  //       name: 'Repair',
  //       component: () => import('@/views/room/repair'),
  //       meta: {title: '保修', icon: 'user'}
  //     },
  //     {
  //       path: 'assets',
  //       name: 'Assets',
  //       component: () => import('@/views/room/assets'),
  //       meta: {title: '财产', icon: 'user'}
  //     }
  //   ]
  // },
  // {//14班会，班会记录和班会签到
  //   path: '/meeting',
  //   component: Layout,
  //   redirect: '/meeting/record',
  //   name: 'Meeting',
  //   meta: {title: '班会', icon: 'user'},
  //   children: [
  //     {
  //       path: 'record',
  //       name: 'Record',
  //       component: () => import('@/views/meeting/record'),
  //       meta: {title: '班会记录表', icon: 'user'}
  //     },
  //     {
  //       path: 'signIn',
  //       name: 'SignIn',
  //       component: () => import('@/views/meeting/signIn'),
  //       meta: {title: '班会签到表', icon: 'user'}
  //     }
  //   ]
  // },
  //
  //
  // {//17心理健康谈话记录
  //   path: '/psychology',
  //   component: Layout,
  //   meta: {title: '心理健康谈话记录', icon: 'user'},
  //   children: [{
  //     path: '',
  //     name: 'Psychology',
  //     component: () => import('@/views/psychology/psychology'),
  //   }]
  // },
  // {//18特殊群体学生基本情况
  //   path: '/special',
  //   component: Layout,
  //   meta: {title: '特殊群体学生基本情况', icon: 'user'},
  //   children: [{
  //     path: '',
  //     name: 'Special',
  //     component: () => import('@/views/special/special'),
  //   }]
  // },
  //
  // {//20班主任日常工作记录
  //   path: '/routine',
  //   component: Layout,
  //   // name:"Routine",
  //   meta: {title: '班主任日常工作记录', icon: 'user'},
  //   children: [{
  //     path: '',
  //     name: 'Routine',
  //     component: () => import('@/views/routine/routine'),
  //   }]
  // },
]
