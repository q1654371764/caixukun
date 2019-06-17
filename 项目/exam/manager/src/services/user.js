import request from '../utils/request';
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
export function WaitClass(){
  return request({
    url:"/manger/grade",
    method:"GET"
  })
}
///exam/student
export function Classmate(payload){
  return request({
    url:`/exam/student?grade_id=${payload}`,
    method:"GET"
  })
}