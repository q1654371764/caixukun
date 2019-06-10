import React from 'react';
import { connect } from 'dva';
import styles from './login.css';
import { Form, Icon, Input, Button ,Checkbox} from 'antd';

class login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      pwd:''
    }
  }
  render(){
    return (
      <div className={styles.login}>
        <Form className={styles.loginform}>
          <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
                className={styles.input1} value={this.state.name} onChange={this.username}/>
          </Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
                className={styles.input2} value={this.state.pwd} onChange={this.password}/>
          </Form.Item>
          <Form.Item>
            <div className={styles.eve}>
              <Checkbox>记住密码</Checkbox>
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
            </div>
            <Button type="primary" htmlType="submit" className={styles.but} onClick={()=>{
              console.log(this.state.name,this.state.pwd)
              this.props.dispatch({type:"example/login"})
              // console.log(this.props.data)
            }}>
              <a href="/#/detail">登录</a>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
  username = (e) => {
    this.setState({
        name:e.target.value
    })
    console.log(e.target.value)
  }
  password = (e) => {
    this.setState({
      pwd:e.target.value
  })
    console.log(e.target.value)
  }
}
const mapStateToProps = (state) => {  //见名知意，把state转换为props
  //可以打印state看看数据结构，然后放到data里
  return {
    data:state.data
  };
};
login.propTypes = {
};

export default connect(mapStateToProps)(login);
