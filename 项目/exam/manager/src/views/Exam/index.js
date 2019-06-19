import React, { useEffect } from 'react';
import './index.scss';
import Example from '@/components/Example';
import { Layout, Dropdown, Menu ,Modal} from 'antd';
import { Route, Switch } from 'dva/router';
import Addeaxm from "./Questions/addExam"
import Typeexam from "./Questions/typeExam"
import Viewexam from "./Questions/viewExam"
import Detailexam from "./Questions/detailExam"
import Adduser from './Usermanagement/addUser'
import Viewuser from './Usermanagement/viewUser'
import Addexams from './Exammanagement/addExams'
import Addevent from './Exammanagement/addEvent'
import Examlist from './Exammanagement/examList'
import Viewdetail from './Exammanagement/viewDetail'
import Classroom from './Markmanagement/classRoom'
import Marklist from './Markmanagement/markList'
import Detailclass from './Markmanagement/detailClass'
import Class from "./manageMent/classManagement"
import Classrooms from "./manageMent/classroomManagement"
import Student from "./manageMent/studentManagement"
import {removeToken} from '@/utils/user'
const { Header, Sider, Content } = Layout;
const confirm = Modal.confirm;

function SiderDemo(props) {

    useEffect(() => {
      
    }, [props])

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
    return <div>
        <Layout>
            <Header>
                <div>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" style={{ width: '150px', height: 'auto' }} alt="" />
                </div>
                <Dropdown overlay={menu}>
                    <span style={{ height: '100%', width: "150px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" style={{ width: '40px', height: '40px', verticalAlign: 'middel', borderRadius: '50%', margin: '0 10px' }} alt="" />渲染值</span>
                </Dropdown>
            </Header>
            <Layout>
                <Sider>
                    <Example />
                </Sider>
                <Content>
                    <Switch>
                        <Route path="/questions/add" component={Addeaxm}></Route>
                        <Route path="/questions/type" component={Typeexam}></Route>
                        <Route path="/questions/view" component={Viewexam}></Route>
                        <Route path="/questions/detail" component={Detailexam}></Route>
                        <Route path="/questions/adduser" component={Adduser}></Route>
                        <Route path="/questions/viewuser" component={Viewuser}></Route>
                        <Route path="/questions/addexams" component={Addexams}></Route>
                        <Route path="/questions/addevent" component={Addevent}></Route>
                        <Route path="/questions/examlist" component={Examlist}></Route>
                        <Route path="/questions/viewDetail" component={Viewdetail}></Route>
                        <Route path="/questions/classroom" component={Classroom}></Route>
                        <Route path="/questions/marklist" component={Marklist}></Route>
                        <Route path="/questions/detailclass" component={Detailclass}></Route>
                        <Route path="/questions/classManagement" component={Class}></Route>
                        <Route path="/questions/classroomManagement" component={Classrooms}></Route>
                        <Route path="/questions/studentManagement" component={Student}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    </div>
}

export default SiderDemo;
