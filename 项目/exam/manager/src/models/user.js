import { login,type,insertQuestionsType} from '../services/index'
import {setToken, getToken} from '@/utils/user'
import { routerRedux } from 'dva/router';
export default {
    // 命名空间
    namespace: 'user',

    // 模块内部的状态
    state: {

    },

    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({ pathname }) => {
          // console.log('pathname...', pathname);
          if (pathname.indexOf('/login') === -1) {
            // 不去登陆页面做token检测
            if (!getToken()){
              // 利用redux做路由跳转
              dispatch(routerRedux.replace({
                pathname: `/login`,
                search:`?redirect=${encodeURIComponent(pathname)}`
              }))
            }
          }else{
            // 去登陆页面，如果已登陆跳回首页
            if (getToken()){
               // 利用redux做路由跳转
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
        *login({ payload }, { call, put }) {
            let data = yield call(login, payload);
            // console.log('data...', payload);
            if (data.code === 1){
                setToken(data.token);
            }
            yield put({
                type: 'save',
                payload: data.code === 1?1:-1
              })
        },
        *type({payload},{ call, put }) {
          let exo = yield call(type)
          if(payload !== undefined){
            var data = yield call(insertQuestionsType,payload)
            yield put({
              type:"insertType",
              payload:{...data}
            })
          }
          
          yield put({
            type:"exo",
            payload:exo
          })
        },
    },

    // 同步操作
    reducers: {
        save(state, action) {
            return {
                ...state,
                detail: action.payload,
            };
        },
        exo(state,{payload}){
          return { ...state, exo: payload }
        },
        insertType(state,action){
          return { ...state, addCode: action.payload }
        }
    },

};