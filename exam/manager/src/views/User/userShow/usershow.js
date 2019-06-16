import React ,{useEffect,useState} from 'react';
import { connect} from 'dva';
import { Typography,Radio ,Table} from 'antd';
import style from './usershow.css'
const { Title } = Typography;
function Usershow(props) {
    let {user} = props
    let [data,setdata] = useState([])
    let [username,setusername] = useState('用户数据')
    
    useEffect(()=>{
        console.log(props)
      if(props.data1){
          console.log(1)
        setdata(props.data1.action1)
      }else{
        user()
      }
          
    },[props.data1])
    
    let columns = [
        {
            title: '用户数据',
            key: 'action',
            render: (text) => (
              <span className={style.list}>
                <span>{text.identity_text}</span>
                <span>{text.user_name}</span>
              </span>
            ),
          },
    ]
    let columns2 = [
      {
          title: '身份数据',
          key: 'action',
          render: (text) => (
            <span className={style.list}>
              <span>{text.identity_id}</span>
              <span>{text.identity_text}</span>
            </span>
          ),
        },
  ]
  let columns3 = [
    {
        title: 'api接口权限',
        key: 'action',
        render: (text) => (
          <span className={style.list}>
            <span>{text.api_authority_id}</span>
            <span>{text.api_authority_text}</span>
            <span>{text.api_authority_url}</span>
          </span>
        ),
      },
]
let columns4 = [
  {
      title: '身份和api接口关系',
      key: 'action',
      render: (text) => (
        <span className={style.list}>
          <span>{text.identity_api_authority_relation_id}</span>
          <span>{text.identity_text}</span>
          <span>{text.api_authority_text}</span>
        </span>
      ),
    },
]
let columns5 = [
  {
      title: '试图接口权限',
      key: 'action',
      render: (text) => (
        <span className={style.list}>
                <span>{text.identity_text}</span>
                <span>{text.user_name}</span>
              </span>
      ),
    },
]
let columns6 = [
  {
      title: '身份和试图接口权限关系',
      key: 'action',
      render: (text) => (
        <span className={style.list}>
          <span>{text.identity_view_authority_relation_id}</span>
          <span>{text.identity_text}</span>
          <span>{text.view_authority_text}</span>
          <span>{text.view_id}</span>
        </span>
      ),
    },
]
let [list,setlist] = useState(columns)
  return  <div className={style.userBox}>
      <Title level={2}>用户展示</Title>
      <div>
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a" onClick={()=>{
              setdata(props.data1.action1)
              setusername('用户数据')
              setlist(columns)
            }}>用户数据</Radio.Button>
            <Radio.Button value="b" onClick={()=>{
              setdata(props.data1.action2)
              setusername('身份数据')
              setlist(columns2)
            }}>身份数据</Radio.Button>
            <Radio.Button value="c" onClick={()=>{
              setdata(props.data1.action3)
              setusername('api接口权限')
              setlist(columns3)
            }}>api接口权限</Radio.Button>
            <Radio.Button value="d" onClick={()=>{
              setdata(props.data1.action4)
              setusername('身份和api接口关系')
              setlist(columns4)
            }}>身份和api接口关系</Radio.Button>
            <Radio.Button value="e" onClick={()=>{
              setdata(props.data1.action5)
              setusername('视图接口权限')
              setlist(columns5)
            }}>试图接口权限</Radio.Button>
            <Radio.Button value="f" onClick={()=>{
              setdata(props.data1.action6)
              setusername('身份和视图权限关系')
              setlist(columns6)
            }}>身份和试图权限关系</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        {console.log(props)}
        <Table columns={list} dataSource={data} />  
      </div>
  </div>
}
let mapStateToProps=state=>{
  return {
    ...state.manager
  }
}
let mapdispatchToProps=dispatch=>{
  return {
      user(){
          dispatch({
              type:'manager/userAlllist'
          })
      }
  }
}
export default connect(mapStateToProps,mapdispatchToProps)(Usershow);
