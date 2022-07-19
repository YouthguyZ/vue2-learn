// 导入 axios  用户模块
import request from '@/utils/request'

/**
 * 登录 API
 * @param {*object} data 参数 mobile password
 */
export function login(data) {
  return request({
    method: 'post',
    url: '/sys/login',
    data: data
  })
}

export function getInfo(token) {

}

export function logout() {

}
