import request from '../utils/request';

// export function query() {
//   return request('/api/users');
// }
export function login(params) {
  return request({
    url:'/user/login',
    method:'POST',
    data:params
  })
}
export function quesType() {
  return request({
    url:'/exam/getQuestionsType',
  })
}
export function examType() {
  return request({
    url:'/exam/examType',
  })
}
export function examSubject() {
  return request({
    url:'/exam/subject',
  })
}
export function getQusetion() {
  return request({
    url:'/exam/getQuestionsType',
  })
}
export function userFormation() {
  return request({
    url:'/user/userInfo',
  })
}
export function addTitle(params) {
  return request({
    url:'/exam/questions',
    method:'POST',
    data:params
  })
}
export function allTitle() {
  return request({
    url:'exam/questions/new',
  })
}