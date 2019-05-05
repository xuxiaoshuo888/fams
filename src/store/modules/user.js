import {login, requestToken, logout} from "@/api/login";
import {
  getToken, setToken, removeToken,
  setRoleList, getRoleList, removeRoleList,
  setCurrentRole, getCurrentRole, removeCurrentRole
} from "@/utils/auth";

const user = {
  state: {
    token: getToken(),
    role: getCurrentRole(),
    roleList: getRoleList()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_ROLELIST: (state, roleList) => {
      state.roleList = roleList
    }
  },
  actions: {
    Login({commit, dispatch}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        //login方法获取uuid，
        login(username, userInfo.password).then(res => {
          requestToken(res.data.APP_UUID).then((res) => {
            console.log(res)
            //写入缓存
            setToken(res.data.token)
            setCurrentRole(res.data.currentRole)
            setRoleList(res.data.roles)
            //写入store
            commit('SET_TOKEN', res.data.token)
            commit('SET_ROLE', res.data.currentRole)
            commit('SET_ROLELIST', res.data.roles)
            //1、登陆之后获取用户角色；2、根据角色加载路由
            //
            dispatch('GenerateRoutes', res.data.currentRole) // 动态修改权限后 重绘侧边菜单
            resolve()
          })
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOut({commit, state}) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          removeToken()
          removeRoleList()
          removeCurrentRole()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
