import React, { Component } from 'react'
import { Input, Select, Button, Modal } from 'antd';
import Editor from 'for-editor'
import { connect } from 'dva';
const { Option } = Select;
const confirm = Modal.confirm;

class Add extends Component {

    state = {
        value: '',
        value1: '',
        detail: [],
        subject: [],
        getQuestionsType: [],
    }
    componentDidMount() {
        this.props.examType();
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            detail: newProps.detail,
            subject: newProps.subject,
            getQuestionsType: newProps.getQuestionsType
        })
    }
    render() {
        let { value, value1, detail, subject, getQuestionsType } = this.state
        console.log(value)
        return (
            <div className="content">
                <h2 style={{ padding: '20px 0px', marginTop: "10px" }}>添加试题</h2>
                <div className="el_conent">
                    <p>题目信息</p>
                    <p>题干</p>
                    <Input size="large" placeholder="请输入题目标题，不超过20个字" value={value1} allowClear onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({
                            value1: e.target.value
                        })
                    }} />
                    <p style={{ marginTop: '20px' }}>题目主题</p>
                    <Editor value={value} onChange={this.handleChange.bind(this)} />
                    <p style={{ marginTop: '20px' }}>请选择考试类型：</p>
                    <div>
                        <Select defaultValue='周考二' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                            {
                                detail.map((el, i) => {
                                    return <Option key={i} value={el.exam_name}>{el.exam_name}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <p style={{ marginTop: '20px' }}>请选择课程类型：</p>
                    <div>
                        <Select defaultValue="" style={{ width: 120 }} onChange={this.select1.bind(this)}>
                            {
                                subject && subject.map((el, i) => {
                                    return <Option key={i} value={el.subject_text}>{el.subject_text}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <p style={{ marginTop: '20px' }}>请选择题目类型：</p>
                    <div>
                        <Select defaultValue='' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                            {
                                getQuestionsType && getQuestionsType.map((el, i) => {
                                    return <Option key={i} value={el.questions_type_text}>{el.questions_type_text}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <p style={{ marginTop: '20px' }}>答题信息</p>
                    <Editor value={value} onChange={this.handleChange.bind(this)} />
                    <Button type="primary" size='large' style={{ margin: '20px 0' }} onClick={this.btn.bind(this)}>提交</Button>
                </div>
            </div>
        )
    }
    select1 = (value) => {

        console.log(`selected ${value}`);
    }
    handleChange = (value) => {
        this.setState({
            value: value
        })
        console.log(`selected ${value}`);
    }
    btn = () => {
        confirm({
            title: '你确定要添加这道试题吗?',
            content: '真的要添加吗？',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
}
const mapStateToProps = state => {
    return { ...state.add }
}

const mapDisaptchToProps = dispatch => {
    return {
        examType() {
            dispatch({
                type: 'add/examTypes',
            })
        }
    }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Add);
