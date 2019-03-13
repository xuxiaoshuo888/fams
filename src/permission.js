import router from './router'
import store from './store'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
import {Message} from 'element-ui'
import {getToken} from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {//to 将要去的路由，from-从哪里来，next 去哪里
  //1判断是否有token，先在store中读，然后在cookie中读
  if (getToken()) {
    if (to.path === '/login') {
      // console.log(1)
      next({path: '/'})
    } else {
      // console.log(2)
      next()
    }
  } else {
    // console.log(3)
    if (whiteList.indexOf(to.path) !== -1) {//将要去的路由，不在白名单内为假
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      // NProgress.done()
    }
  }
  //1.1有,直接重定向到首页
  //1.2没有，定向到登录页，输入账号密码
})

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
