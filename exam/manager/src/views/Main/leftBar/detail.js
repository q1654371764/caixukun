import React from 'react';
import { connect } from 'dva';
import styles from './detail.css';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
function IndexPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
        </div>
        <div className={styles.header_right}>
          <span>
            <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" />
          </span>
          <span className={styles.txt}>
            asfdgsads
            </span>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.box}>
          <div className={styles.left}>
              <Sider className={styles.slide}>
                <Menu
                  mode="inline"
                  theme="dark"
                  // defaultSelectedKeys={['1']}
                  // defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                       <Icon type="sliders" />
                        试题管理
                  </span>
                    }
                  >
                    <Menu.Item key="1">添加试题</Menu.Item>
                    <Menu.Item key="2">试题分类</Menu.Item>
                    <Menu.Item key="3">查看试题</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="user"/>
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
              </Sider>
          </div>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </div>
      </div>
    </div>
    
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
