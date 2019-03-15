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

export function getRoleList() {
  return Cookies.get(RoleListKey)
}

export function removeRoleList() {
  return Cookies.remove(RoleListKey)
}

export function setCurrentRole(CurrentRole) {
  return Cookies.set(RoleKey, CurrentRole)
}

export function getCurrentRole() {
  return Cookies.get(RoleKey)
}

export function removeCurrentRole() {
  return Cookies.remove(RoleKey)

}
