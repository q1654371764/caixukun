import {allQuestion,ExamDetail,userAll1,userAll2,userAll3,userAll4,userAll5,userAll6,genxin,WaitClass,Classmate,AddExam,addGtade,getgtade,getsubject,getroom,delClass,gradUpdata} from '../services'

export default {
    // 命名空间
    namespace: 'manager',
  
    // 模块内部的状态
    state: {
      
    },
  
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
      },
  
    // 异步操作
    effects: {
        *allQuestion({payload},{call,put}){
          let data = yield call(allQuestion)
          console.log(data)
          yield put({
            type:'allQue',
            payload:data
          })
        },
        *ExamDetail({payload},{call,put}){
            let detail = yield call(ExamDetail,payload)
            console.log(detail)
            yield put({
              type:'ExamDeta',
              payload:detail
            })
          },
          *userAlllist({payload},{call,put}){
            let data1 = yield call(userAll1)
            let data2 = yield call(userAll2)
            let data3 = yield call(userAll3)
            let data4 = yield call(userAll4)
            let data5 = yield call(userAll5)
            let data6 = yield call(userAll6)
            console.log(data1,data2,data3)
            yield put({ 
                type: 'save',
                action1:data1.data,
                action2:data2.data,
                action3:data3.data,
                action4:data4.data,
                action5:data5.data,
                action6:data6.data
            });
        },
        *WaitClass({ payload }, { call, put }) {
          let data = yield call(WaitClass);
          yield put({
            type: "getClass",
            payload: data,
    
          })
          console.log(data)
        },
        *Classmate({ payload }, { call, put }) {
          console.log(payload)
          let data8 = yield call(Classmate, payload);
          console.log(data8)
          yield put({
            type: "getClassmate",
            payload: data8.exam,
    
          })
          // console.log(exam.exam)
        },
        *AddExam({ payload }, { call, put }) {
          console.log(payload)
          let data = yield call(AddExam, payload);
          console.log(data)
          yield put({
            type: "AddEx",
            payload: data,
          })
        },
        *gtade({payload},{call,put}){
          let dataGtade= yield call(getgtade);
          let dataSubject= yield call(getsubject);
          let dataRoom= yield call(getroom);
          
          yield put({type:"getGtade",payload:dataGtade})
          yield put({type:"getSubject",payload:dataSubject})
          yield put({type:"getRoom",payload:dataRoom})
      },
        *addrade({payload},{call,put}){
            let data=yield call(addGtade,payload)
            yield put({type:"addRande",payload:data})
        },
        *delClass({payload},{call,put}){
          let data=yield call(delClass,payload);
          yield put({type:"deleClass",payload:data})
        },
      *gradUpdata({payload},{call,put}){
          let data=yield call(gradUpdata,payload);
          console.log(data);//更新
        },
        *genXin({ payload }, { call, put }) {
          console.log(payload)
          let data = yield call(genxin, payload);
          console.log(data)
          // yield put({
          //   type: "AddEx",
          //   payload: data,
          // })
        },
    
    },
    // 同步操作
    reducers: {
      allQue(state, {payload}) {
        return { ...state, data:payload.code===1?payload.exam:[]};
      },
      ExamDeta(state, {payload}) {
        return { ...state, data:payload.code===1?payload.exam:[]};
      },
      save(state, action) {
          console.log(action)
        return { ...state, data1:action};
      },
      getClass(state, { payload }) {
        return { ...state, data7: payload.code === 1 ? payload.data : [] };
      },
      getClassmate(state, { payload }) {
        // console.log(payload.code)
        return { ...state, data8: payload };
      },
      AddEx(state, { payload }) {
        return { ...state, addExamList: payload };
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
      addRande(state,{payload}){
          return {...state,grader:payload.code===1?true:false};
      },
      deleClass(state,{payload}){
        return {...state,isDele:payload.code===1?true:false};
      },
      deleRoom(state,{payload}){
        return {...state}
      }
    },
  
  };
  