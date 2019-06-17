import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './rooman.css';
import { Modal} from 'antd';
import {message} from 'antd';

function RoomMan(props) {
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
    let {allRoom} = props;
      
    allRoom()
    console.log(props)
  }, []);

  let  handleCancel = () => {
    visibleli({
      flag:false
    })
  };
  let handleOk = () => {
    let {AddRoom} = props;
    AddRoom({
        room_text:inp.inp
    })
    // message.success(props.data5);
    console.log(inp.inp)

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
            <p>教室管理</p>
        </div>
        <div className={styles.content}>
            <button onClick={showModal}>+添加教室</button>
            <Modal
            title='添加班级'
            visible={visib.flag}
            onOk={handleOk}
            confirmLoading={config.confirmLoading}
            onCancel={handleCancel}
          >
            <input type="text" value={inp.inp} placeholder='教室号' onChange={(event)=>{
              inpValue({inp:event.target.value})
            }} className={styles.inpp}/>
        </Modal>
            <div className={styles.con}>
              <div className={styles.top}>
                <span>教室号</span>
                <span>操作</span>
              </div>
              {
                props.data &&  props.data.map((item,index)=><div className={styles.eve} key={index}>
                    <span>{item.room_text}</span>
                    <span onClick={()=>{
                        let {RoomDelete} = props;
                        RoomDelete({
                            room_id:item.room_id
                        })
                        console.log(props)
                        console.log(item.room_id)
                    }}>删除</span>
                  </div>
                )
              }
            </div>
        </div>
    </div>
    
  }

  // props的类型检查
  RoomMan.propTypes = {

  }
  // props的默认值
  RoomMan.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    ...state.room
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    allRoom(){
        dispatch({
            type: 'room/allRoom',
        })
    },
    AddRoom(payload){
        dispatch({
            type: 'room/AddRoom',
            payload
        })
    },
    RoomDelete(payload){
        dispatch({
            type: 'room/RoomDelete',
            payload
        })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(RoomMan);
