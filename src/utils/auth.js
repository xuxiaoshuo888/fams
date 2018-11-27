import Cookies from 'js-cookie'

const TokenKey = 'token'
const RoleKey = 'currentRole'
const RoleListKey = 'roleList'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setRoleList(list) {
  return Cookies.set(RoleListKey, list)
}

export function getRoleList(list) {
  return Cookies.get(RoleListKey, list)
}

export function setCurrentRole(CurrentRole) {
  return Cookies.set(RoleKey, CurrentRole)
}

export function getCurrentRole(CurrentRole) {
  return Cookies.get(RoleKey, CurrentRole)
}
