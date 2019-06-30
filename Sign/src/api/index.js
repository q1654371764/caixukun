import request from '@/utils/request';

// 登陆接口
export let login = code=>{
  return request.post('/user/code2session', {
    code
  })
}

// 添加面试
export let addSign = params=>{
  console.log(params)
  return request.post('/sign', params);
}

// 获取面试列表
export let getSignList = params=>{
  console.log(params)
  return request.get('/sign', params);
}

// 获取面试详情
export let getSignDetail = id=>{
  console.log(getSignDetail)
  return request.get('/sign/'+id);
}

// 更新面试状态
export let updateSignDetail = (id, params)=>{
  console.log(updateSignDetail)
  return request.put('/sign/'+id, params);
}

// 解密数据
export let decrypt = params=>{
  console.log(decrypt)
  return request.post('/user/decrypt', params)
}
