import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/ws/security/login',
    method: 'post',
    data: {
      user_name: username,
      pass_word: password
    }
  })
}

export function requestToken(uuid) {
  return request({
    url: '/ws/gettoken',
    method: 'post',
    data: {'uuid': uuid}
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
