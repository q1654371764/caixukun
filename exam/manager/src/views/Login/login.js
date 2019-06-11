import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import style from './login.scss';

function Login(props){
    const {login,user} = props;
    useEffect(()=>{
        console.log(props);
    }, []);
    useState(()=>{
        console.log('useState....',props);
    })
    // 表单提交
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            login({
                user_name: values.username,
                user_pwd: values.password
            });
            console.log(props);
            props.history.push('/detail')
          }
        });
    }
    // 表单校验
    const { getFieldDecorator } = props.form;
    return <div className='login_wrapper'>
            <div className='login_form'>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入您的用户名!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入用户名"
                                className='login_input'
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码!' },
                            {pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/,message: '请输入正确的密码!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入密码"
                                className='login_input'
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div className='login_form_remember'>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                忘记密码?
                            </a>
                        </div>
                        
                        <Button type="primary" htmlType="submit" className='login_form_button'>
                            登 录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
}

// props的类型检测
Login.propTypes = {

}
// props的默认值
Login.defaultProps = {

}

const mapState = state => {
    console.log('atate...',state)
    return state;
}
const mapDispatch = dispatch => ({
    login(payload){
        dispatch({
            type: 'user/login',
            payload
        })
    }
})

export default connect(mapState,mapDispatch)(Form.create()(Login));
