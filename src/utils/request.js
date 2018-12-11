import axios from 'axios'
import Vue from 'vue'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
import {getToken, getCurrentRole} from '@/utils/auth'
import querystring from 'querystring'

//创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,//请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
let loading;
//request拦截器
service.interceptors.request.use(
  config => {
    loading = Vue.prototype.$loading({text: "", background: 'rgba(0, 0, 0, 0.3)'});
    let currentRole
    if(getCurrentRole() && config.data){
      currentRole = JSON.parse(getCurrentRole())
      config.data['roleId'] = currentRole.id
    }
    config.data = querystring.stringify(config.data)
    if (store.getters.token) {
      config.headers.Authorization = "Bearer " + getToken()
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

//response拦截器
service.interceptors.response.use(
  response => {
    // console.log(response)
    loading.close();
    const res = response.data
    if (res.errcode === '0') {//正常
      return response.data
    } else {//非正常
      Message({
        message: res.errmsg,
        type: 'error',
        duration: 5 * 1000
      })
    }
  },
  error => {
    loading.close();
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
