import request from '@/utils/request'
import Cookies from 'js-cookie'

const CookieName_dept = 'dept'

//拿部门数据，根据ID匹配出汉字信息
export function getDept() {
  return request.post('/ws/select/common', {type: 'dept'}).then(res => {
    return res.data.data
  }).catch()
}

//拿用户类型数据，根据ID匹配出汉字信息
export function getUserType(parentId) {
  request.post('/select/common', {type: 'code', parentId: parentId}).then(res => {
    console.log(res)
  }).catch()
}

//输入对象数组，key返回value组成的数组
export function getStringArr(objArr, m) {
  let a = []
  for (let i = 0; i < objArr.length; i++) {
    a.push(objArr[i][m])
  }
  return a
}

//输入对象数组，根据一个id返回一个value
export function getStringValue(objArr, id) {
  let a = ''
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i]['id'] === id) {
      a = objArr[i]['value']
    }
  }
  return a
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
