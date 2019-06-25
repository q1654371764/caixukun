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
export function searChget(params){
  return request({
    url:"/exam/questions/condition?exam_id="+params.exam_id,
    method:"GET",
  })
}
export function addType(params){
  return request({
    url:"/exam/insertQuestionsType?text=" + params.text + '&sort=' + params.sort,
    method:"GET",
  })
}
// 获取用户信息
export function getUserInfo(){
  return request({
    url: '/user/userInfo'
  })
}

// 获取用户权限
export function getViewAuthority(user_id){
  return request({
    url: '/user/new?user_id='+user_id
  })
}


export function appendImg(payload){
  return request({
    url: 'http://123.206.55.50:11000/upload',
    method: 'POST',
    data: payload
  })
}
export function changeImgs(payload){
  return request({
        method: 'POST',
        url: 'http://123.206.55.50:11000/upload_base64',
        data: payload
  })
}

export function base64s(){
  return request({
    method:"POST",
    url: 'http://123.206.55.50:11000/tobase64',
    data: {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562050630&di=89f94270963dbfa38de1d0eea22bb5f0&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140103%2F20140103212227-1956389668.jpg'}
  })
}
