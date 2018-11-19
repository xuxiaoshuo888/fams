import {login, logout} from "@/api/login";
import {getToken, setToken, removeToken} from "@/utils/auth";

const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    Login({commit},userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN',data.token)
          resolve()
        }).catch(error=>{
          reject(error)
        })
      })
    }
  }
}

export default user
