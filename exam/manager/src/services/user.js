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