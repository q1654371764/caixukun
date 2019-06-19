import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Example extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
    style={{ height: '100%', borderRight: 0 }}>
            <SubMenu
              key="questions"
              title={
                <span>
                  <Icon type="database" />
                  <span>试卷管理</span>
                </span>
              }
            >
              <Menu.Item key="1" ><Link to="/questions/add">添加试题</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/questions/type">试题分类</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/questions/view">查看试题</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="4"><Link to="/questions/adduser">添加用户</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/questions/viewuser">用户展示</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="profile" />
                  <span>考试管理</span>
                </span>
              }
            >
              <Menu.Item key="7"><Link to="/questions/addexams">添加考试</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/questions/examlist">添加用户</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="project" />
                  <span>班级管理</span>
                </span>
              }
            >
              <Menu.Item key="9"><Link to="/questions/classManagement">班级管理</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/questions/studentManagement">学生管理</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/questions/classroomManagement">教室管理</Link></Menu.Item>
            </SubMenu><SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="read" />
                  <span>阅卷管理</span>
                </span>
              }
            >
              <Menu.Item key="12"><Link to="/questions/classroom">待批管理</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    )
  }
}
