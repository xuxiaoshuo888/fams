import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
import {getToken} from '@/utils/auth'

//创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,/*api的base_url*/
  timeout: 5000//请求超时时间
})

//request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] =getToken()
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

//response拦截器
service.interceptors.response.use(config => {
  response => {
    const res = response.data
    if (res.errorCode !== 200) {//非正常

    } else {//正常

    }
  },
    error =>{

    }
})

export default service
