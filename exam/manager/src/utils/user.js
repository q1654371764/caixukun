import Cookie from "js-cookie"

const key = 'authorization'
//获取
export function getToken(){
    return Cookie.get(key)
}
//设置
export function setToken(value){
    return Cookie.set(key,value,{expires:7})
}