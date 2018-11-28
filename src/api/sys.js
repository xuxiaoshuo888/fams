import request from '@/utils/request'

export function getRoleData() {
  return request({
    url:'/api/'
  })
}
