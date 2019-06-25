import styles from './index.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch,Redirect } from 'dva/router';
import Menus from '../../components/Menu'
import { Layout, Dropdown, Menu ,Modal} from 'antd';
import {connect} from 'dva';
import Cookie from 'js-cookie'
// import Add from '../Question/add/add.js'
// import Type from '../Question/type/type'
// import View from '../Question/view/view'
// import Detail from '../Question/detail/index'
// import List from '../ExamManer/QuestionList/index'
// import ExamDetail from '../ExamManer/ExamDetail/examdetail'
// import UserShow from '../User/userShow/usershow'
// import ClassManager from '../RoomManager/RoomMan/roomMan'
// import AddUser from '../User/AddUser/Adduser'
// import StudentMan from '../RoomManager/StudentMan/SutdentMan'
// import ClassWait from '../GradeMan/classWait/classWait'
// import ClassDetail from '../GradeMan/classDetail/classDetail'
// import AddExam from '../ExamManer/AddExam/AddExam'
// import AddDetail from '../ExamManer/AddDetail/AddDetail'
// import ClassMan from '../RoomManager/classMan/classMan'
import {removeToken} from '../../utils/user'
const { Content, Sider } = Layout;
const confirm = Modal.confirm;
function IndexPage(props) {
  let [img,imgS] = useState('');
  let [be,beS] = useState(Cookie.get('img'));
  useEffect(function(){
    console.log('top',props)
    imgS(props.img)
  },[props.img])
  
  if (!props.myView.length){
    return null;
  }
  let onClick = ({ key }) => {
    if(key*1 === 4){
        let {history:{push}} = props
        confirm({
            title: '你确定要退出当前的账号吗?',
            onOk() {
                removeToken()
                push('/login')
            },
            onCancel() {
              console.log('Cancel');
            },
        });
        
    }
    
};
const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">个人中心</Menu.Item>
        <Menu.Item key="2">我的班级</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">设置</Menu.Item>
        <Menu.Item key="4">退出登录</Menu.Item>
    </Menu>
);
  return <Layout className={styles.container}>
      <div className={styles.header}>
          <div className={styles.header_left}>
            <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
          </div>
          <select name="请选择语言" id="" onChange={(e)=>{
              props.changeLocal(e.target.value)
            }} className={styles.selecT}>
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
         
          <div className={styles.header_right}>
          <Dropdown overlay={menu}>
                    <span style={{ height: '100%', width: "150px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={img ? img : be} style={{ width: '40px', height: '40px', verticalAlign: 'middel', borderRadius: '50%', margin: '0 10px' }} alt="" />chenmanjie</span>
            </Dropdown>
            {/* <button className={styles.btt} onClick={()=>props.changeLocal(props.locale==='zh'?'en':'zh')}>{props.locale==='zh'?'中文':'Eng'}</button> */}
          </div>
        </div>
    <Layout>
      <Sider>
        <Menus/>
      </Sider>
      <Content>
        <Switch>
          {/* <Route path="/questions/add" component={Add}></Route>
          <Route path="/questions/type" component={Type}></Route>
          <Route path="/questions/view" component={View}></Route>
          <Route path="/questions/detail" component={Detail}></Route>
          <Route path="/exam/list" component={List}></Route>
          <Route path="/exam/ExamDetail" component={ExamDetail}></Route>
          <Route path="/user/show" component={UserShow}></Route>
          <Route path="/class/classRoom" component={ClassManager}></Route>
          <Route path="/user/add" component={AddUser}></Route>
          <Route path="/class/student" component={StudentMan}></Route>
          <Route path="/examination/waitClass" component={ClassWait}></Route>
          <Route path="/examination/ClassDetail" component={ClassDetail}></Route>
          <Route path="/exam/add" component={AddExam}></Route>
          <Route path="/exam/addDetail" component={AddDetail}></Route>
          <Route path="/class/classMetting" component={ClassMan}></Route> */}
          <Redirect exact from="/" to="/questions/add"/>
          {/* 渲染该用户拥有的路由 */}
          {
            props.myView.map((item)=>{
              if (item.children){
                return item.children.map((value,key)=>{
                  return  <Route key={key} path={value.path} component={value.component}/>
                })
              }
            })
          }
          {/* 403路由 */}
          {props.forbiddenView.map((item)=>{
            return <Redirect key={item} from={item} to="/403"/>
          })}
          {/* 剩余路由去404 */}
          <Redirect to="/404"/>
        </Switch>
      </Content>
    </Layout>
  </Layout>

}


const mapStateToProps = state=>{
  console.log('state..', state);
  return {
    locale: state.global.locale,
    myView: state.user.myView,
    forbiddenView: state.user.forbiddenView,
    img:state.user.imgSrc ? state.user.imgSrc.path : Cookie.get('img')
    // img:state.user.upload[0].path
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    changeLocal: payload=>{
      dispatch({
        type: 'global/changeLocale',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);