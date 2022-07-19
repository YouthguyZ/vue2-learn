import axios from 'axios'

// create an axios instance 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://ihrm-java.itheima.net',
  // baseURL: 'http://localhost:3000',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 导出实例
export default service

// 请求拦截器

// 响应拦截器
