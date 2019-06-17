import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './details.scss'

import { Select ,Button,Icon} from 'antd';
import { Link } from 'dva/router';
const { Option } = Select;

function Details(props) {
    
  
  useState(() => {

  }, [])
  useEffect(() => {
  
    // 调登录接口
    
  }, [props.isLogin]);

  return (

    <div className={styles.asdas}>
          <div className={styles.title}>
            <p>试题类型</p>
        </div>
    </div>
  )
}
// props的类型检查page_id
Details.propTypes = {

}
// props的默认值
Details.defaultProps = {

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

export default connect(mapStateToProps, mapDisaptchToProps)(Details);

