import {allRoom,AddRoom,RoomDelete,Allstudents,Deletestu,getGtade,getSubject,getRoom} from '../services'

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
          *Allstudent({payload},{call,put}){
            let data = yield call(Allstudents)
            // console.log(data)
            yield put({type:'student',action:data.data})
          },
          *delstudent({payload},{call,put}){
              let data = yield call(Deletestu,payload)
              console.log(data)
          },
          *gtade({payload},{call,put}){
            let dataGtade= yield call(getGtade);
            let dataSubject= yield call(getSubject);
            let dataRoom= yield call(getRoom);
  
            yield put({type:"getGtade",payload:dataGtade})
            yield put({type:"getSubject",payload:dataSubject})
            yield put({type:"getRoom",payload:dataRoom})
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
        student(state, action) {
          return { ...state, data2:action};
        },
        getGtade(state, {payload}) {
          return { ...state, classData:payload.code===1?payload.data:[]};
        },
        getSubject(state, {payload}) {
          return { ...state, subjectData:payload.code===1?payload.data:[]};
        },
        getRoom(state, {payload}) {
          return { ...state, roomData:payload.code===1?payload.data:[]};
        },
  
    },
  
  };
  