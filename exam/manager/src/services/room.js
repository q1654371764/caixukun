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
