import Cookie from 'js-cookie'

const key = 'authorization';
export function getToken(){
    return Cookie.get(key)
}
export function setToken(value){
    Cookie.set(key,value,{expires:7})
}
//删除cookie
export function removeToken() {
    return Cookie.remove(key)
}
