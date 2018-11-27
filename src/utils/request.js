import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
import {getToken} from '@/utils/auth'
import querystring from 'querystring'

//创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,//请求超时时间
  // headers:{
  //   'Content-Type':'application/x-www-form-urlencoded'
  // }
})

//request拦截器
service.interceptors.request.use(
  config => {
    config.data = querystring.stringify(config.data)
    console.log(config.data)
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // if (store.getters.token) {
    //   config.headers['Authorization'] =getToken()
    //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // }
    return config
  },
  error => {
    console.log(error)
    // Promise.reject(error)
  }
)

//response拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
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
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
