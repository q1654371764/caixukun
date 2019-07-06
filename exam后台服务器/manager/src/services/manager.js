import request from '../utils/request';

export function allQuestion() {
  return request({
    url:'/exam/exam'
  })
}
export function ExamDetail(params) {
    console.log(params)
    return request({
      url:'/exam/exam?exam_exam_id=' + params.exam_exam_id,
    })
}
export function userAll1(){
    return request({
        url:'/user/user',
    })
}
export function userAll2(){
    return request({
        url:'/user/identity',
    })
}
export function userAll3(){
    return request({
        url:'/user/api_authority',
    })
}
export function userAll4(){
    return request({
        url:'/user/identity_api_authority_relation',
    })
}
export function userAll5(){
    return request({
        url:'/user/user',
    })
}
export function userAll6(){
    return request({
        url:'/user/identity_view_authority_relation',
    })
}
export function WaitClass(){
    return request({
      url:"/manger/grade",
      method:"GET"
    })
  }
  export function Classmate(payload){
    return request({
      url:`/exam/student?grade_id=${payload}`,
      method:"GET"
    })
  }
  export function AddExam(payload){
      console.log(payload)
    return request({
      url:'/exam/exam',
      data:payload
    })
  }
  export function getgtade(){
    return request({
        url:"/manger/grade",
        method:"GET",
    })
}

export function getsubject(){
    return request({
        url:"/exam/subject",
        method:"GET",
    }) 
}

export function getroom(){
    return request({
        url:"/manger/room",
        method:"GET",
    }) 
}

export function delrooms(payload){
    return request({
        url:"/manger/room/delete",
        method:"DELETE",
        data:payload
    })
}

export function addGtade(payload){
    return request({
        url:"/manger/grade",
        method:"POST",
        data:payload,
    })
}

export function delClass(payload){
  return request({
      url:"/manger/grade/delete",
      method:"DELETE",
      data:payload,
  })
}

export function addRoom(payload){
    return request({
        url:"/manger/room",
        method:"POST",
        data:payload,
    })
}

export function gradUpdata(payload){
    return request({
        url:"/manger/grade/update",
        method:"PUT",
        data:payload,
    })
}
export function genxin(payload){
  return request({
      url:"/exam/exam/" + payload.examid,
      method:"PUT",
      data:{
        question_ids:payload.question_ids
      }
  })
}

 