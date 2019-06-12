import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { SubMenu } = Menu;

function MenuComp(props){

  return <Menu
  mode="inline"
  theme="dark"
//   defaultSelectedKeys={['1']}
  // defaultOpenKeys={['sub1']}
  style={{ height: '100%', borderRight: 0 }}
>
  <SubMenu
    key="questions"
    title={
      <span>
        <Icon type="user" />
        试题管理
    </span>
    }
  >
    <Menu.Item key="1">
        <Link to="/questions/add">添加试题</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/questions/type">试题分类</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/questions/view">查看试题</Link>
      </Menu.Item>
  </SubMenu>
  <SubMenu
    key="sub2"
    title={
      <span>
        <Icon type="user" />
        用户管理
    </span>
    }
  >
    <Menu.Item key="4">添加用户</Menu.Item>
    <Menu.Item key="5">用户展示</Menu.Item>
  </SubMenu>
  <SubMenu
    key="sub3"
    title={
      <span>
        <Icon type="schedule" />
        考试管理
    </span>
    }
  >
    <Menu.Item key="6">添加考试</Menu.Item>
    <Menu.Item key="7">试卷列表</Menu.Item>
  </SubMenu>
  <SubMenu
    key="sub4"
    title={
      <span>
        <Icon type="project" />
        班级管理
    </span>
    }
  >
    <Menu.Item key="8">班级管理</Menu.Item>
    <Menu.Item key="9">教室管理</Menu.Item>
    <Menu.Item key="10">学生管理</Menu.Item>
  </SubMenu>
  <SubMenu
    key="sub5"
    title={
      <span>
        <Icon type="project" />
        阅卷管理
    </span>
    }
  >
    <Menu.Item key="11">待批班级</Menu.Item>
  </SubMenu>
</Menu>
}

export default MenuComp;
