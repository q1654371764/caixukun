import request from '../utils/request';
import { getToken } from "../utils/user"
//code码
let str = getToken("key")
console.log(str)

//登录
export function login(params) {
  return request({
    url: "/user/login",
    method: "POST",
    data: params
  })
}

//试题分类
export function type() {
  return request({
    url: "/exam/getQuestionsType",
    method: "GET"
  })
}

//查看试题
export function view() {
  return request({
    url: "/exam/exam",
    method: "GET"
  })
}

//获取试题类型
export function examType() {
  return request({
    url: '/exam/examType',
    method: 'GET',
  })
}

//获取考试类型
export function subject() {
  return request({
    url: '/exam/subject',
    method: 'GET',
  })
}

//获取考试类型
export function getQuestionsType() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'GET',
  })
}
//获取所有的试题
export function questions() {
  return request({
    url: '/exam/questions/new',
    method: 'GET',
  })
}