import {login,quesType} from '../services'
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
          // console.log('pathname',pathname)
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
            console.log('data',data)
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
          console.log('dataType',questionType)
          yield put({
            type:'questype',
            payload:questionType
          })
        },
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },
    // 同步操作
    reducers: {
      loginData(state, {payload}) {
        return { ...state, isLogin:payload };
      },
      questype(state, {payload}) {
        console.log(payload)
        return { ...state, data:payload.data,code:payload.code === 1? 1 : 0 };
      },
    },
  
  };
  