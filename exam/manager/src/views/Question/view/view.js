import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './view.css';
import { Select } from 'antd';

const { Option } = Select;
function View(props) {
  useState(()=>{
    
  },[])
  useEffect(()=>{
    
  }, []);
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
    return <div>
        <div>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>
    </div>
  }

  // props的类型检查
  View.propTypes = {

  }
  // props的默认值
  View.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    // quesType(){
    //   dispatch({
    //     type: 'user/quesType',
    //   })
    // }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(View);
