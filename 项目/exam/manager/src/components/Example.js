import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
const { Sider } = Layout;
const Example = () => {
    return (
        <Sider width={200} style={{ background: '#fff' }}>
            <Menu mode="inline" theme="dark" defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="sub1" title={<span><Icon type="user" />试题管理</span>}>
                    <Menu.Item key="1"> <Link to="/questions/add">添加试题</Link>  </Menu.Item>
                    <Menu.Item key="2"> <Link to="/questions/type">试题分类</Link>  </Menu.Item>
                    <Menu.Item key="3"> <Link to="/questions/view">查看试题</Link>  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />用户管理</span>}>
                    <Menu.Item key="4"> <Link to="/questions/">添加用户</Link>  </Menu.Item>
                    <Menu.Item key="5"> <Link to="/questions/">用户展示</Link>  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />考试管理</span>}>
                    <Menu.Item key="6"> <Link to="/questions/">添加考试</Link>  </Menu.Item>
                    <Menu.Item key="7"> <Link to="/questions/">试卷列表</Link>  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="notification" />班级管理</span>}>
                    <Menu.Item key="8"> <Link to="/questions/">班级管理</Link>  </Menu.Item>
                    <Menu.Item key="9"> <Link to="/questions/">教室管理</Link>  </Menu.Item>
                    <Menu.Item key="10"> <Link to="/questions/">学生管理</Link>  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="notification" />阅卷管理</span>}>
                    <Menu.Item key="11"> <Link to="/questions/">待批班级</Link>  </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

Example.propTypes = {
};

export default Example;
