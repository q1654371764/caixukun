import React,{useEffect} from "react"
import style from "./view.css"
import {connect} from "dva"
import { Layout, Breadcrumb, Select, Row, Col, Button, Icon, Tag ,Table} from 'antd';

const { Content } = Layout;
const { Option } = Select;
const { CheckableTag } = Tag;
const columns = [
    {
      dataIndex: '',
      key: 'name', 
      render: (text,index) => (
        <div key={index}>
            <h4>{text.title}</h4>
            <h4>
                <Tag color="blue">{text.questions_type_text}</Tag>
                <Tag color="geekblue">{text.subject_text}</Tag>
                <Tag color="gold">gold</Tag>
            </h4>
            <a href="">{text.user_name}</a>
            <a href="">发布</a>
        </div>
      ),
    },
    {
      key: 'action',
      render: (text, record) => (
        <span style={{position:"absolute",right:20}}>
          <a href="">编辑</a>
        </span>
      ),
    },
  ];

function Look(props) {
   useEffect(()=>{
     let {examType,allTit} = props;
    console.log(props)
    examType()
    allTit()
   },[])
   console.log(props)
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
                    <Col span={18}>
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
                            defaultValue='8sc5d7-7p5f9e-cb2zii-ahe5i'
                            style={{ width: 120 }}
                            dropdownRender={menu => (
                                <div>
                                    {menu}
                                </div>
                            )}
                        >
                          {
                            props.data1 && props.data1.map((item,index)=><Option key={index} value={item.exam_id}>{item.exam_name}</Option>)
                          }
                        </Select>
                    </Col>
                    <Col span={8}>题目类型:<Select
                        defaultValue='774318-730z8m'
                        style={{ width: 120 }}
                        dropdownRender={menu => (
                            <div>
                                {menu}
                            </div>
                        )}
                    >
                          {
                            props.data3 && props.data3.map((item,index)=><Option key={index} value={item.questions_type_id}>{item.questions_type_text}</Option>)
                          }
                        
                    </Select></Col>
                    <Col span={8}>
                        <Button className={style.btn} type="primary">
                            <Icon type="search" />查询
                    </Button>
                    </Col>
                </Row>
                <Table className={style.table} columns={columns} dataSource={props.data6} />
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
 })
export default connect(MapState,MapDispatch)(Look)

