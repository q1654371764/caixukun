import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './classmate.scss'

import { Select, Button, Icon } from 'antd';
import { Link } from 'dva/router';
const { Option } = Select;

function Classmate(props) {
  let { Classmate, data8 } = props;

  useState(() => {

  }, [])
  useEffect(() => {

    let pathName = decodeURIComponent(props.history.location.search.split('=')[1])
    console.log(pathName)
    // 调登录接口

    Classmate(pathName)
  }, [props.isLogin]);
  
  console.log(props)
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  return (

    <div className={styles.add}>
      <div className={styles.head}>
        <div className={styles.tlt}>
          <p>状态:</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder=""
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
          </Select>
        </div>
        <div className={styles.tlt}>
          <p>班级:</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder=""
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
        <Button className={styles.btn} type="primary"><Icon type="search" />查询</Button>
      </div>
      <div className={styles.connect_class}>
        <div>
          <span>试卷列表</span>
        </div>
        <div className={styles.bot}>
          <li>班级</li>
          <li>姓名</li>
          <li>阅卷状态</li>
          <li>开始时间</li>
          <li>结束时间</li>
          <li>成材率</li>
          <li>操作</li>
        </div>
        {
          data8 && data8.map((item, index) => {
            return <div className={styles.bot_le} key={index}>
              <span>1611C</span>
              <span>{item.student_name}</span>
              <span>已阅</span>
              <span>{item.end_time}</span>
              <span>{item.student_id}</span>
              <span></span>
              <Link to={`/Classdetail/details`}><span>批卷</span></Link>
            </div>
          })
        }
      </div>
    </div>
  )
}
// props的类型检查page_id
Classmate.propTypes = {

}
// props的默认值
Classmate.defaultProps = {

}
const mapStateToProps = state => {
  console.log('state...', state);
  return {
    ...state.user
  }
}
const mapDisaptchToProps = dispatch => {
  return {
    Classmate(payload) {
      dispatch({
        type: 'user/Classmate',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Classmate);

