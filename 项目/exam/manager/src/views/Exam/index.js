import React from 'react';
import { Layout, Menu, Icon,Dropdown,Avatar } from 'antd';
import {Route, Switch,Redirect} from 'dva/router';
import style from "./index.scss"
import Example from "../../components/Example"
import Add from "../Exam/Qusetions/add/Add"
import Type from "../Exam/Qusetions/type/Type"
import View from "../Exam/Qusetions/view/View"

const { Header, Content } = Layout;
console.log(Example)
function mapStateToProps(state) {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              个人中心
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              我的班级
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              设置
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              退出登录
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
        <Layout>
            <Header className={style.header} theme="light ">
              <div className={style.left}>
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
              </div>
              <div className={style.right}>
                  <Avatar src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt="" /> 
                  <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="#">陈蔓杰<Icon type="down" /></a>
                  </Dropdown>
              </div>
            </Header>
            <Layout> 
              <Example/>
              <Layout style={{ padding: '0 24px 24px' }}>
                  <Content>
                    <Switch>
                      <Redirect exact from="/" to="/questions/add"/>
                        <Route path="/questions/add" component={Add}/>
                        <Route path="/questions/type" component={Type}/>
                        <Route path="/questions/view" component={View}/>
                    </Switch>
                  </Content>
              </Layout>
        </Layout>
        </Layout>
    )
}

export default mapStateToProps;