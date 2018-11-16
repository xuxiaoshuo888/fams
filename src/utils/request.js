import axios form 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'

//创建axios实例
const service = axios.create({
  baseURL:process.env.BASE_API,//api的base_url
  timeout:5000//请求超时时间
})

//request拦截器
service.interceptors.request.use(config => {

})

//response拦截器
service.interceptors.response.use(config => {

})
