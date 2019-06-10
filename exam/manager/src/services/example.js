import request from '../utils/request';

export function query() {
  return request('/api/users');
}
export function login(data) {
  console.log(data)
  // return request('http://127.0.0.1:7001/user/login',{
  //   method: 'post',
  //   headers: {
  //     'Content-Type': 'application/json; charset=utf-8'
  //   },
  //   body: JSON.stringify({
  //     "user_name":this.state.name,
  //     "user_pwd":this.state.pwd
  //   })
  // })
  return true
}
