import {login,quesType,examType,examSubject,getQusetion,userFormation,addTitle,allTitle,searChget,addType,getUserInfo, getViewAuthority,appendImg} from '../services'
import {getToken,setToken} from '../utils/user'
import { routerRedux } from 'dva/router';

// 引入路由表
import allView from '../router/config.js'

export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {
      isLogin:0,
      userInfo: {},
      viewAuthority: [],  // 用户所拥有的视图权限
      myView: [],  // 拥有权限的前端路由
      forbiddenView: [] //没有权限访问的路由
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
            }else{
              // 1.1.2 有登录态，请求用户信息,请求用户权限
              dispatch({
                type: 'getUserInfo'
              })
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
        *getUserInfo({payload}, {call, put, select}){
          // 1.判断是否有权限信息
          let myView = yield select(state=>state.user.myView);
          if (myView.length){
            return;
          }
   
          // 2.获取用户信息
          let userInfo = yield call(getUserInfo);
         //  console.log('userInfo...', userInfo);
          yield put({
            type: 'updateUserInfo',
            payload: userInfo.data
          })
   
          // 3.根据id获取视图权限
          let viewAuthority = yield call(getViewAuthority, userInfo.data.user_id);
          console.log('viewAuthority...', viewAuthority);
          yield put({
            type: 'updateViewAuthority',
            payload: viewAuthority.data
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
        // yield put({
        //   type:"getExamAll",
        //   payload:data
        // })
      },
      *appendImg({payload},{call,put}){
        console.log(payload)
        let data = yield call(appendImg,payload)
        console.log(data)
        yield put({type:'appen',action:data.data})
      },
    
    },
    // 同步操作
    reducers: {
      loginData(state, {payload}) {
        return { ...state, isLogin:payload };
      },
      updateUserInfo(state, {payload}){
        return {...state, userInfo: payload}
      },
      updateViewAuthority(state, {payload}){
        // 筛选出我所有的前端路由权限
        let myView = allView.routes,
            forbiddenView = [];
        myView.forEach(item=>{
          item.children = item.children.filter(value=>{
            if (payload.findIndex(id=>id.view_id===value.id) !== -1){
              return true;
            }else{
              forbiddenView.push(value.path);
              return false;
            }
          })
        })
        console.log('myView...', myView);
        return {...state, viewAuthority: payload, myView, forbiddenView}
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
      appen(state,{action}){
        return {...state,upload:action}
      },
    },
  
  };
  