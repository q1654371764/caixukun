
import {userView,identity,api_authority,identity_api_authority_relation,view_authority,authority_relation,identityato,adduser,edit,usernew,authority,examtrench} from '../services/index'
export default {
    // 命名空间
    namespace: 'view',

    // 模块内部的状态
    state: {

    },

    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        
      },
    },

    // 异步操作
    effects: {
        *userView({payload }, { call, put }) {
            let data = yield call(userView)
            let data1 = yield call(identity)
            let data2 = yield call(api_authority)
            let data3 = yield call(identity_api_authority_relation)
            let data4 = yield call(view_authority)
            let data5 = yield call(authority_relation)

            yield put({type:'userViews',play:data.data})
            yield put({type:'identitys',play:data1.data})
            yield put({type:'api_authority',play:data2.data})
            yield put({type:'identity_api_authority_relation',play:data3.data})
            yield put({type:'view_authority',play:data4.data})
            yield put({type:'authority_relation',play:data5.data})
        },
         *examTypes({ payload }, { call, put }) {
            let addusr = yield call(adduser, payload)
            yield put({ type: 'addusr', payload: addusr.data })
            let identit = yield call(identityato)
            yield put({ type: 'identity', payload: identit.data })
            if (payload) {
                let edi = yield call (edit,payload)
                yield put ({type:'edit',payload:edi})
            }
            // let authority = yield call(authorityApi,payload)
            // yield put({ type: 'authority', payload: authority.data })
            let userne = yield call(usernew,payload)
            yield put({ type: 'usernew', payload: userne.data })
            let author = yield call(authority,payload)
            yield put({ type: 'authority', payload: author.data })
        },
        *detail({ payload }, { call, put }){
          let userne = yield call(examtrench,payload)
          yield put({ type: 'userneList', payload: userne.data })
        }
    },

    // 同步操作
    reducers: {
      userViews(state,action){
        return {
          ...state,
          userList:action.play
        }
      },
      identitys(state,action){
        return {
          ...state,
          identityList:action.play
        }
      },
      api_authority(state,action){
        return {
          ...state,
          api_authorityList:action.play
        }
      },
      identity_api_authority_relation(state,action){
        return {
          ...state,
          identity_apiList:action.play
        }
      },
      view_authority(state,action){
        return {
          ...state,
          view_authorityList:action.play
        }
      },
      authority_relation(state,action){
        return {
          ...state,
          authorityList:action.play
        }
      },
      adduser(state, action) {
            return {
                ...state,
                adduser: action.payload,
            };
        },
        identity(state, action) {
            
            return {
                ...state,
                identity: action.payload,
            };
        },
        edit(state, action) {
            
            return {
                ...state,
                edit: action.payload,
            };
        },
        // authorityApi(state, action) {
        //     return {
        //         ...state,
        //         authorityApi: action.payload,
        //     };
        // },
        usernew(state, action) {
            return {
                ...state,
                usernew: action.payload,
            };
        },
        authority(state, action) {
            return {
                ...state,
                authority: action.payload,
            };
        },
        userneList(state,action){
            return {
              ...state,
              authority: action.payload.questions,
          };
        }
      },
};