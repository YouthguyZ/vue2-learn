import axios from 'axios'

// create an axios instance 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://ihrm-java.itheima.net',
  // baseURL: 'http://localhost:3000',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 添加请求拦截器
service.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  if (!response.data.success) {
    // 创建一个失败的 porimse 手动抛出异常
    // 创建一个错位对象并传出去
    return Promise.reject(new Error(response.data))
  }
  console.log('拦截请求：', response)
  return response
}, function(error) {
  // 对响应错误做点什么
  console.log('拦截失败：', error)
  return Promise.reject(error)
})

// 导出实例
export default service

