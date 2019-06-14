import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import Styles from './index.css';
import { Layout, Breadcrumb, Select, Row, Col, Button, Icon, Tag ,Table} from 'antd';
const { Header, Content, Sider } = Layout;
function Detail(props) {
    let [data,setdata] = useState({arr:''})
  useEffect(()=>{
    let {quesType} = props;
    let uid = props.history.location.search.split('=')[1]
    console.log(props.data6.filter(item=>item.questions_id === uid))
    let datas = props.data6.filter(item=>item.questions_id === uid)
    setdata({arr:datas})
  }, []);

    return <div>
         <Layout style={{ padding: '0 24px 24px' }}>
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{data.arr[0]?data.arr[0].user_name:''}</Breadcrumb.Item>
                </Breadcrumb>
                
                <h4>
                    <Tag color="blue">{data.arr[0]?data.arr[0].exam_name:''}</Tag>
                    <Tag color="geekblue">{data.arr[0]?data.arr[0].questions_type_text:''}</Tag>
                    <Tag color="gold">{data.arr[0]?data.arr[0].subject_text:''}</Tag>
                </h4>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{data.arr[0]?data.arr[0].title:''}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={Styles.flex}>
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                    {data.arr[0]?data.arr[0].questions_stem:''}
                </Content>
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                    {data.arr[0]?data.arr[0].questions_answer:''}
                </Content>
            </div>
        </Layout>
    </div>
    
  }

  // props的类型检查
  Detail.propTypes = {

  }
  // props的默认值
  Detail.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    ...state.user
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Detail);
