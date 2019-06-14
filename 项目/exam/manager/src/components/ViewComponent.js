import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        let { data } = this.props
        return (
            <div className="ant-list-item">
                <div className="ant-list-item-content ant-list-item-content-single">
                    <a href="">
                        <div className="ant-list-item-meta">
                            <div className="ant-list-item-meta-content">
                                <h4 className="ant-list-item-meta-title">{data.title}</h4>
                            </div>
                        </div>
                        <div style={{ marginTop: '10px' }}><div style={{ paddingBottom: '20px' }}>
                            <div className="ant-tag ant-tag-blue">{data.questions_type_text}</div>
                            <div className="ant-tag ant-tag-geekblue">{data.subject_text}</div>
                            <div className="ant-tag ant-tag-orange">{data.exam_name}</div>
                        </div><span style={{ marginBottom: '10px', display: 'inline-block' }}>{data.user_name} 发布</span></div>
                    </a></div>
                <ul className="ant-list-item-action">
                    <li><a href="javascript:;">编辑</a>
                    </li>
                </ul>
            </div>
        );
    }
}
