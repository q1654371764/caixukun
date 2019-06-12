import React, { useEffect } from 'react';
import { connect } from 'dva';
import './login.scss';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

function login(props) {
 // 判断是否登陆
 useEffect(()=>{
  if (props.isLogin === 1){
    // 1.提示登陆成功
    message.success('登陆成功');
    // 2.存储cookie
    // 3.跳转主页面
    console.log('props.history', props.history);
    let pathName = decodeURIComponent(props.history.location.search.split('=')[1]);
    props.history.replace(pathName);
  }else if(props.isLogin === -1){
    // 登陆失败
    message.error('用户名或密码错误')
  }
}, [props.isLogin]);


  // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // 调登录接口
        props.login({
          user_name: values.username,
          user_pwd: values.password
        })
      }
    });
  };
  // 表单校验
  const { getFieldDecorator } = props.form;
  return <div className="con">
    <div className='box'>
      <Form onSubmit={handleSubmit} className="login_form">
        <Form.Item>
          {getFieldDecorator('username', {
            validateTrigger: 'onBlur',
            rules: [{ required: true, message: '请输入正确的用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确的密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入用户密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
      </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
      </Button>
        </Form.Item>
      </Form>;
    </div>
  </div>
}

// props的类型检查
login.propTypes = {

}
// props的默认值
login.defaultProps = {

}
const mapStateToProps = state => {
  console.log('state...', state);
  return {
    ...state.user
  }
}

const mapDisaptchToProps = dispatch => {
  return {
    login(payload) {
      dispatch({
        type: 'user/login',
        payload
      })
      console.log(payload)
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(login));
