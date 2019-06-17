import {allRoom,AddRoom,RoomDelete} from '../services'

export default {
    // 命名空间
    namespace: 'room',
  
    // 模块内部的状态
    state: {
      isLogin:0
    },
  
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
      },
  
    // 异步操作
    effects: {
        *allRoom({payload},{call,put}){
            let room = yield call(allRoom)
            console.log(room)
            yield put({
              type:'allroom',
              payload:room
            })
          },
          *AddRoom({payload},{call,put}){
            let data = yield call(AddRoom,payload)
            console.log(data)
            yield put({
              type:'Addroom',
              payload:data
            })
          },
          *RoomDelete({payload},{call,put}){
            let roomDelete = yield call(RoomDelete,payload)
            console.log(roomDelete)
            // yield put({
            //   type:'allroom',
            //   payload:room
            // })
          },
    },
    // 同步操作
    reducers: {
        allroom(state, {payload}) {
        return { ...state, data:payload.code === 1 ? payload.data:[]};
        },
        Addroom(state, {payload}) {
        return { ...state, data1:payload.code === 1 ? payload.msg:[]};
        },
    },
  
  };
  