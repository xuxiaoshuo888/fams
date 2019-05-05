import router from './router'
import store from './store'
import {Message} from 'element-ui'
import {getToken} from './utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {//to 将要去的路由，from-从哪里来，next 去哪里
  //1判断是否有token，先在store中读，然后在cookie中读
  if (getToken()) {/*has token*/
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      next()
    }
  }
  //没有token，直接重定向到登录页，如果已经是登录页则不跳转
  else {/*has no token 直接登出*/
    // next({path: '/login'})
    if (whiteList.indexOf(to.path) !== -1) {//将要去的路由，不在白名单内为假
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
