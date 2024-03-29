import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './type.css';
import { Modal} from 'antd';

function Type(props) {
  // const [userInfo, setUserInfo] = React.useState({ 
  //   data: ''
  // });
  const [visib, visibleli] = React.useState({ 
    flag: false 
  });
  const [config, confirml] = React.useState({ 
    confirmLoading: false,
  });
  const [inp,inpValue] = useState('')
  useState(()=>{
   
  },[])
  useEffect(()=>{
    let {quesType} = props;
    // 调登录接口
      quesType()
      console.log(props)
  }, []);

  let  handleCancel = () => {
    visibleli({
      flag:false
    })
  };
  let handleOk = () => {
    let {addType} = props;
    if(inp.inp){
      addType({
        text:inp.inp,
        sort:props.data.length + 1
      })
    }
    
    visibleli({
      flag:false
    })
  };
  let showModal = () => {
    visibleli({
      flag:true
    })
  };
    return <div className={styles.TypeC}>
        <div className={styles.title}>
            <p>试题类型</p>
        </div>
        <div className={styles.content}>
            <button onClick={showModal}>添加类型</button>
            <Modal
            title="添加类型"
            visible={visib.flag}
            onOk={handleOk}
            confirmLoading={config.confirmLoading}
            onCancel={handleCancel}
          >
            <input type="text" value={inp.inp} onChange={(event)=>{
              inpValue({inp:event.target.value})
            }} className={styles.inpp}/>
        </Modal>
            <div className={styles.con}>
              <div className={styles.top}>
                <span>类型ID</span>
                <span>类型名称</span>
                <span>操作</span>
              </div>
              {
                props.data &&  props.data.map((item,index)=><div className={styles.eve} key={index}>
                    <span>{item.questions_type_id}</span>
                    <span>{item.questions_type_text}</span>
                    <span></span>
                  </div>
                )
              }
            </div>
        </div>
    </div>
    
  }

  // props的类型检查
  Type.propTypes = {

  }
  // props的默认值
  Type.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    ...state.user
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    quesType(){
      dispatch({
        type: 'user/quesType',
      })
    },
    addType(payload){
      dispatch({
        type: 'user/addType',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Type);
