import React from 'react';
import styles from './main.css';
import { Route, Switch } from 'dva/router';
import Menu from '../../components/Menu'
import { Layout } from 'antd';
import Add from '../Question/add/add.js'
import Type from '../Question/type/type'
import View from '../Question/view/view'

const { Content, Sider } = Layout;
function IndexPage(props) {
  return <Layout className={styles.container}>
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
    <Layout>
      <Sider>
        <Menu/>
      </Sider>
      <Content>
        <Switch>
          <Route path="/questions/add" component={Add}></Route>
          <Route path="/questions/type" component={Type}></Route>
          <Route path="/questions/view" component={View}></Route>
        </Switch>
      </Content>
    </Layout>
  </Layout>
}

IndexPage.propTypes = {
};

export default IndexPage
