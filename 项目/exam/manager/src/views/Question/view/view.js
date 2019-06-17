import React,{useState,useEffect} from "react"
import style from "./view.css"
import {connect} from "dva"
import { Layout, Breadcrumb, Select, Row, Col, Button, Icon, Tag ,Table} from 'antd';
import { Link } from 'dva/router';

const { Content } = Layout;
const { Option } = Select;
const { CheckableTag } = Tag;
const columns = function(props){
  return [
    {
      dataIndex: '',
      key: 'name', 
      render: (text) => (
        <div  onClick={()=>{
          console.log(props)
          let pathname = '/questions/detail?uid='+text.questions_id
          props.history.push(pathname)
        }}>
            <h4>{text.title}</h4>
            <h4>
                <Tag color="blue">{text.questions_type_text}</Tag>
                <Tag color="geekblue">{text.subject_text}</Tag>
                <Tag color="gold">{text.exam_name}</Tag>
            </h4>
            <a href="">{text.user_name}</a>
            <a href="">发布</a>
        </div>
      ),
    },
    {
      key: 'action',
      render: (text) => (
        <span style={{position:"absolute",right:20}}>
          <Link to={`/questions/add?id=${text.questions_id}`}>编辑</Link>
        </span>
      ),
    },
  ];
}

function Look(props) {
  const [exam, examID] = useState('');
  const [questionstype, questionsType] = useState('');
   useEffect(()=>{
     let {examType,allTit} = props;
    console.log(props)
    examType()
    allTit()
   },[])
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>试题分类</Breadcrumb.Item>

            </Breadcrumb>
            <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    overflow:'auto'
                }}
            >
                <Row className={style.row}>
                    <Col span={2}>课程类型:</Col>
                    <Col span={40}>
                        <div>
                          {
                            props.data2 && props.data2.map((item,index)=><MyTag key={index}>{item.subject_text}</MyTag>)
                          }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 2 }} span={8}>
                        考试类型:<Select
                            defaultValue=''
                            style={{ width: 120 }}
                            dropdownRender={menu => (
                                <div>
                                    {menu}
                                </div>
                            )}
                            onChange={(value)=>{
                              examID({exam:value})
                              console.log(value)
                            }}>
                          {
                            props.data1 && props.data1.map((item,index)=><Option key={index} value={item.exam_id}>{item.exam_name}</Option>)
                          }
                        </Select>
                    </Col>
                    <Col span={8}>题目类型:<Select
                        defaultValue=''
                        style={{ width: 120 }}
                        dropdownRender={menu => (
                            <div>
                                {menu}
                            </div>
                        )}
                        onChange={(value)=>{
                          questionsType({questionstype:value})
                          console.log(value)
                        }}>
                          {
                            props.data3 && props.data3.map((item,index)=><Option key={index} value={item.questions_type_id}>{item.questions_type_text}</Option>)
                          }
                        
                    </Select></Col>
                    <Col span={8} onClick={()=>{
                              let {searchget} = props;
                              console.log(props)
                              searchget({
                                exam_id:exam.exam,
                                questions_type_id:questionstype.questionstype
                              })
                              console.log(exam.exam,questionstype.questionstype)
                            }}>
                        <Button className={style.btn} type="primary">
                            <Icon type="search"/>查询
                    </Button>
                    </Col>
                </Row>
                <Table className={style.table} columns={columns(props)} dataSource={props.data6} />
            </Content>
        </Layout>
    )
    
}
class MyTag extends React.Component {
    state = { checked: false };
  
    handleChange = checked => {
      this.setState({ checked });
    };
    render() {
      return (
        <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
      );
    }
  }
 const MapState=state=>{
   return {
     ...state.user
   }
 }
 const MapDispatch=dispatch=>({
   //获取所有考试类型
   examType(){
    dispatch({
      type: 'user/allQuest',
    })
  },
  allTit(){
    dispatch({
      type: 'user/alltitle',
    })
  },
  searchget(payload){
    dispatch({
      type:"user/searChget",
      payload,
    })
  }
 })
export default connect(MapState,MapDispatch)(Look)

