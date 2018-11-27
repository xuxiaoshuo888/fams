import {login, requestToken, logout} from "@/api/login";
import {getToken, setToken, removeToken, setRoleList, getRoleList, setCurrentRole, getCurrentRole} from "@/utils/auth";

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
    Login({commit}, userInfo) {
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
            resolve()
          })
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
//   .then(res => {
//   //写入缓存
//   setToken(res.data.token)
//   setCurrentRole(res.data.currentRole)
//   setRoleList(res.data.roles)
//   //写入store
//   commit('SET_TOKEN', res.data.token)
//   commit('SET_ROLE', res.data.currentRole)
//   commit('SET_ROLELIST', res.data.roles)
// })
// return res.data.
// const data = response.data
// setToken(data.token)
// commit('SET_TOKEN', data.token)
// resolve()


// requestToken(res.data.APP_UUID).then((res) => {
//   console.log(res)
//   //写入缓存
//   setToken(res.data.token)
//   setCurrentRole(res.data.currentRole)
//   setRoleList(res.data.roles)
//   //写入store
//   commit('SET_TOKEN', res.data.token)
//   commit('SET_ROLE', res.data.currentRole)
//   commit('SET_ROLELIST', res.data.roles)
//   resolve()
// })
