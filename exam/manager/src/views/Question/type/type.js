import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './type.css';

function Type(props) {
  useState(()=>{
    
  },[])
  useEffect(()=>{
    let {quesType} = props;
    // 调登录接口
    if(props.code === 1){
        console.log(props.data)
    }else{
        quesType()
    }
  }, [props]);

    return <div className={styles.TypeC}>
        <div className={styles.title}>
            <p>试题类型</p>
        </div>
        <div className={styles.content}>
            <button>添加类型</button>
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
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Type);
