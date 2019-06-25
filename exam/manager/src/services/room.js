import request from '../utils/request';

export function allRoom() {
  return request({
    url:'/manger/room'
  })
}
export function AddRoom(payload) {
    console.log(payload)
    return request({
      url:'/manger/room',
      method:'POST',
      data:payload
    })
}
export function RoomDelete(payload) {
    console.log(payload)
    return request({
      url:'/manger/room/delete',
      method:'DELETE',
      data:payload
    })
}
export function Allstudents(){
  return request({
      url:'/manger/student',
  })
}
export function Deletestu(payload){
  console.log(payload)
  return request({
      url:'/manger/student/:id=>student_id',
      method:'DELETE',
      data:{
          id:payload
      }
  })
}
export function getGtade(){
  return request({
      url:"/manger/grade",
      method:"GET",
  })
}

export function getSubject(){
  return request({
      url:"/exam/subject",
      method:"GET",
  }) 
}

export function getRoom(){
  return request({
      url:"/manger/room",
      method:"GET",
  }) 
}

