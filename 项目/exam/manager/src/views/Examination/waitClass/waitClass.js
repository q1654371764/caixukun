import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './waitClass.scss'
import { Link } from 'dva/router';

function WaitClass(props) {
  let { WaitClass,data7 } = props;
  useState(() => {

  }, [])
  useEffect(() => {
  
    // 调登录接口
    WaitClass()
  }, [props.isLogin]);
  function click(e){
    let {history:{push}} = props
    push(`/Classmate/classmate?id=${e}`)
  }
  return (

    <div className={styles.add}>
      <div className={styles.title}>
        <p>待批班级</p>
      </div>
      <div className={styles.content}>
        <div className={styles.log}>
          <div className={styles.list}>
            <li>班级名</li>
            <li>课程名称</li>
            <li>阅卷状态</li>
            <li>课程名称</li>
            <li>成材率</li>
            <li>操作</li>
          </div>
        </div>
        {
          data7 && data7.map((item, index) => 
          <div className={styles.eve} key={index}>
            <span>{item.grade_name}</span>
            <span>{item.subject_text}</span>
            <span></span>
            <span>{item.subject_text}</span>
            <span>{item.room_text}</span>
            <span onClick={()=>{
              click(item.grade_id)
            }}>批卷</span>
          </div>
          )
        }
      </div>
      
    </div>
  )
}
// props的类型检查
WaitClass.propTypes = {

}
// props的默认值
WaitClass.defaultProps = {

}
const mapStateToProps = state => {
  console.log('state...', state);
  return {
    ...state.user
  }
}
const mapDisaptchToProps = dispatch => {
  return {
    WaitClass() {
      dispatch({
        type: 'user/WaitClass',
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(WaitClass);

