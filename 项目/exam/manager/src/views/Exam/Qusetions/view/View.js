import React, { Component } from 'react'
import { connect } from 'dva';
import { Radio, Select, Button } from 'antd';
import ViewComponent from '@/components/ViewComponent'
const { Option } = Select;

class View extends Component {
  state = {

  }
  componentDidMount() {
    this.props.examType()
  }

  render() {
    let { subject, detail, getQuestionsType, questions } = this.props
    return (
      <div className="content">
        <h2 style={{ padding: '20px 0px', marginTop: "10px" }}>查看试题</h2>
        <div className="el_conent">
          <div>
            <span>课程类型：</span>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="all">all</Radio.Button>
              {
                subject && subject.map((el, i) => {
                  return <Radio.Button key={i} value={el.subject_text}>{el.subject_text}</Radio.Button>
                })
              }
            </Radio.Group>
            <div className="el-Button">
              <div>
                <span>考试类型：</span>
                <Select defaultValue='周考二' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                  {
                    detail && detail.map((el, i) => {
                      return <Option key={i} value={el.exam_name}>{el.exam_name}</Option>
                    })
                  }
                </Select>
              </div>
              <div>
                <span>题目类型：</span>
                <Select defaultValue='' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                  {
                    getQuestionsType && getQuestionsType.map((el, i) => {
                      return <Option key={i} value={el.questions_type_text}>{el.questions_type_text}</Option>
                    })
                  }
                </Select>
              </div>
              <Button type="primary" icon="search">搜索</Button>
            </div>
          </div>
        </div>
        <div className="el_conent">
          {
            questions && questions.map((el, i) => {
              return <ViewComponent data={el} key={i} />
            })
          }

        </div>
      </div>
    )
  }

  select1 = (value) => {
    console.log(`selected ${value}`);
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
export default connect(mapStateToProps, mapDisaptchToProps)(View)