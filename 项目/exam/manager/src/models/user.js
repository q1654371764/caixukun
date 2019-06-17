import {login,quesType,examType,examSubject,getQusetion,userFormation,addTitle,allTitle,searChget,addType,WaitClass,Classmate} from '../services'
import {getToken,setToken} from '../utils/user'
import { routerRedux } from 'dva/router';
export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {
      isLogin:0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({pathname}) => {
          console.log('pathname',pathname)
          if(pathname.indexOf('/login') === -1){

            if (!getToken()){
              dispatch(routerRedux.replace({
                pathname: `/login?redirect=${encodeURIComponent(pathname)}`,
              }))
            }

          }else{
            if (getToken()){
              
              dispatch(routerRedux.replace({
               pathname: `/`,
             }))
            }
          }
        });
      },
    },
  
    // 异步操作
    effects: {
        *login({payload},{call,put}){
            // console.log(login)
            let data = yield call(login,payload)
            if(data.code === 1){
              setToken(data.token)
            }
            yield put({
              type:'loginData',
              payload:data.code === 1 ? 1 : -1
            })
        },
        *quesType({payload},{call,put}){
          let questionType = yield call(quesType)
          yield put({
            type:'questype',
            payload:questionType
          })
        },
        *allQuest({payload},{call,put}){
          let examaType = yield call(examType)
          let examasubject = yield call(examSubject)
          let getQues = yield call(getQusetion)
          let userId = yield call(userFormation)
          console.log(examaType,examasubject,getQues,userId)
          yield put({
            type:'examtype',
            payload:examaType,
          })
          yield put({
            type:'examsub',
            payload:examasubject,
          })
          yield put({
            type:'getQues',
            payload:getQues,
          })
          yield put({
            type:'useid',
            payload:userId,
          })
        },
        *addtitle({payload},{call,put}){
          // console.log(login)
          let data = yield call(addTitle,payload)
          console.log(data)
          yield put({
            type:'addtit',
            payload:data
          })
      },
      *alltitle({payload},{call,put}){
        let data = yield call(allTitle)
        console.log(data)
        yield put({
          type:'allTit',
          payload:data
        })
      },
      *searChget({payload},{call,put}){
        let data = yield call(searChget,payload);
        console.log(data)
        yield put({
          type:"getExamAll",
          payload:data
        })
      },
      *addType({payload},{call,put}){
        let data = yield call(addType,payload);
        console.log(data)
      },
      *WaitClass({payload},{call,put}){
        let data = yield call(WaitClass);
        yield put({
          type:"getClass",
          payload:data,

        })
        console.log(data)
      },
      *Classmate({payload},{call,put}){
        console.log(payload)
        let data8 = yield call(Classmate,payload);
        console.log(data8)
        yield put({
          type:"getClassmate",
          payload:data8.exam,

        })
        // console.log(exam.exam)
      }
    },
    // 同步操作
    reducers: {
      loginData(state, {payload}) {
        return { ...state, isLogin:payload };
      },
      questype(state, {payload}) {
        return { ...state, data:payload.data};
      },
      examtype(state, {payload}) {
        return { ...state, data1:payload.data,code1:payload.code === 1? 1 : 0 };
      },
      examsub(state, {payload}) {
        return { ...state, data2:payload.data};
      },
      getQues(state, {payload}) {
        return { ...state, data3:payload.data};
      },
      useid(state, {payload}) {
        return { ...state, data4:payload.data,code4:payload.code === 1? 1 : 0 };
      },
      addtit(state, {payload}) {
        return { ...state, data5:payload.msg};
      },
      allTit(state, {payload}) {
        return { ...state, data6:payload.data};
      },
      getExamAll(state, {payload}) {
        return { ...state, data6:payload.code===1?payload.data:[]};
      },
      getClass(state,{payload}){
        return { ...state, data7:payload.code===1?payload.data:[]};
      },
      getClassmate(state,{payload}){
        // console.log(payload.code)
        return { ...state, data8:payload};
      }
    },
  
  };
  