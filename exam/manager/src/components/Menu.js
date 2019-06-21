import React from 'react';
import { Menu, Icon } from 'antd';
import {connect} from 'dva';
import { Link } from 'dva/router';
import {injectIntl} from 'react-intl'

const { SubMenu } = Menu;

function MenuComp(props){
    console.log(props.myView);
    return <Menu
    theme="dark"
    mode="inline"
    style={{ height: '100%', borderRight: 0 }}
  >
    {props.myView.map((item, index)=>{
      return <SubMenu key={item.name} title={
        <span>
           <Icon type="user" />
            {props.intl.formatMessage({id: item.name})}
        </span>
      }>{
        item.children.map((value, key)=>{
          return value.name && <Menu.Item key={value.path}>
            <Link to={value.path}>{props.intl.formatMessage({id: value.name})}</Link>
          </Menu.Item>
        })
      }
      </SubMenu>
    })}
  </Menu>
//   return <Menu
//     theme="dark"
//     mode="inline"
//     defaultSelectedKeys={['1']}
//     defaultOpenKeys={['questions']}
//     style={{ height: '100%', borderRight: 0 }}
//   >
//     <SubMenu
//       key="questions"
//       title={
//         <span>
//           <Icon type="user" />
//           {props.intl.formatMessage({id: 'router.questions'})}
//         </span>
//       }>
//       <Menu.Item key="1">
//         <Link to="/questions/add">{props.intl.formatMessage({id: 'router.questions.add'})}</Link>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <Link to="/questions/type">{props.intl.formatMessage({id: 'router.questions.type'})}</Link>
//       </Menu.Item>
//       <Menu.Item key="3">
//         <Link to="/questions/view">{props.intl.formatMessage({id: 'router.questions.view'})}</Link>
//       </Menu.Item>
//     </SubMenu>
//     <SubMenu
//         key="sub2"
//         title={
//         <span>
//             <Icon type="user" />
//             {props.intl.formatMessage({id: 'router.questions.user'})}
//         </span>
//         }
//     >
//         <Menu.Item key="4">
//             <Link to="/user/add">{props.intl.formatMessage({id: 'router.questions.adduser'})}</Link>
//         </Menu.Item>
//         <Menu.Item key="5">
//             <Link to="/user/show">{props.intl.formatMessage({id: 'router.questions.usershow'})}</Link>
//         </Menu.Item>
//     </SubMenu>
//     <SubMenu
//         key="sub3"
//         title={
//         <span>
//             <Icon type="schedule" />
//             {props.intl.formatMessage({id: 'router.questions.examMan'})}
//         </span>
//         }
//     >
//         <Menu.Item key="6">
//             <Link to="/exam/add">{props.intl.formatMessage({id: 'router.questions.addExam'})}</Link>
//         </Menu.Item>
//         <Menu.Item key="7">
//             <Link to="/exam/list">{props.intl.formatMessage({id: 'router.questions.examlist'})}</Link>
//         </Menu.Item>
//     </SubMenu>
//     <SubMenu
//         key="sub4"
//         title={
//         <span>
//             <Icon type="project" />
//             {props.intl.formatMessage({id: 'router.questions.classMan'})}
//         </span>
//         }
//     >
//         <Menu.Item key="8">
//             <Link to="/class/classMetting">{props.intl.formatMessage({id: 'router.questions.classMan'})}</Link>
//         </Menu.Item>
//         <Menu.Item key="9">
//             <Link to="/class/classRoom">{props.intl.formatMessage({id: 'router.questions.roomMan'})}</Link>
//         </Menu.Item>
//         <Menu.Item key="10">
//             <Link to="/class/student">{props.intl.formatMessage({id: 'router.questions.studentMan'})}</Link>
//         </Menu.Item>
//     </SubMenu>
//     <SubMenu
//         key="sub5"
//         title={
//         <span>
//             <Icon type="project" />
//             {props.intl.formatMessage({id: 'router.questions.gradeMan'})}
//         </span>
//         }
//     >
//         <Menu.Item key="11">
//             <Link to="/examination/waitClass">{props.intl.formatMessage({id: 'router.questions.classWait'})}</Link>
//         </Menu.Item>
//     </SubMenu>

//   </Menu>
}
const mapStateToProps = state=>{
    return {
      myView: state.user.myView
    }
  }
export default injectIntl(connect(mapStateToProps)(MenuComp));