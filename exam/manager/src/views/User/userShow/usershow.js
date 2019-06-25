import React ,{useEffect,useState} from 'react';
import { connect} from 'dva';
import { Typography,Radio ,Table} from 'antd';
import style from './usershow.css'
const { Title } = Typography;
function Usershow(props) {
    let {user} = props
    let [data,setdata] = useState([])
    let [username,setusername] = useState('用户数据')
    let [eve,newEve] = React.useState({
      arr:['用户名','密码','身份']
    })
    
    useEffect(()=>{
        console.log(props)
      if(props.data1){
        setdata(props.data1.action1)
      }else{
        user()
      }
          
    },[props.data1])
    
    let columns = [
        {
            key: 'action',
            render: (text) => (<div className={style.list}>
                <span>{text.user_name}</span>
                <span>{text.user_pwd}</span>
                <span>{text.identity_text}</span>
              </div>
            ),
          },
    ]
    let columns2 = [
      {
          key: 'action',
          render: (text) => (
            <div className={style.list}>
              <span>{text.identity_text}</span>

            </div>
          ),
        },
  ]
  let columns3 = [
    {
        key: 'action',
        render: (text) => (
          <div className={style.list}>
            <span>{text.api_authority_text}</span>
            <span>{text.api_authority_url}</span>
            <span>{text.api_authority_method}</span>
          </div>
        ),
      },
]
let columns4 = [
  {
      key: 'action',
      render: (text) => (
        <div className={style.list}>
          <span>{text.identity_text}</span>
          <span>{text.api_authority_text}</span>
          <span>{text.api_authority_url}</span>
          <span>{text.api_authority_method}</span>

        </div>
      ),
    },
]
let columns5 = [
  {
      render: (text) => (
          <div className={style.list}>
            <span>{text.identity_text}</span>
            <span>{text.user_name}</span>
          </div>
      ),
    },
]
let columns6 = [
  {
      key: 'action',
      render: (text) => (
        <div className={style.list}>
          <span>{text.identity_text}</span>
          <span>{text.view_authority_text}</span>
          <span>{text.view_id}</span>
        </div>
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
              newEve({
                arr:['用户名','密码','身份']
              })
              setusername('用户数据')
              setlist(columns)
            }}>用户数据</Radio.Button>
            <Radio.Button value="b" onClick={()=>{
              setdata(props.data1.action2)
              newEve({
                arr:['身份名称']
              })
              setusername('身份数据')
              setlist(columns2)
            }}>身份数据</Radio.Button>
            <Radio.Button value="c" onClick={()=>{
              setdata(props.data1.action3)
              newEve({
                arr:['api权限名称','api权限url','api权限方法']
              })
              setusername('api接口权限')
              setlist(columns3)
            }}>api接口权限</Radio.Button>
            <Radio.Button value="d" onClick={()=>{
              setdata(props.data1.action4)
              newEve({
                arr:['身份名称','api权限名称','api权限url','api权限方法']
              })
              setusername('身份和api接口关系')
              setlist(columns4)
            }}>身份和api接口关系</Radio.Button>
            <Radio.Button value="e" onClick={()=>{
              setdata(props.data1.action5)
              newEve({
                arr:['视图权限名称','视图id']
              })
              setusername('视图接口权限') 
              setlist(columns5)
            }}>试图接口权限</Radio.Button>
            <Radio.Button value="f" onClick={()=>{
              setdata(props.data1.action6)
              newEve({
                arr:['身份','视图名称','视图id']
              })
              setusername('身份和视图权限关系')
              setlist(columns6)
            }}>身份和试图权限关系</Radio.Button>
        </Radio.Group>
      </div>
      <div className={style.quan}>
        {console.log(props)}
        <Table columns={list} dataSource={data} />  
        <div className={style.title}>
          {
            eve.arr.map((item,index)=><span key={index}>{item}</span>)
          }
        </div>
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
