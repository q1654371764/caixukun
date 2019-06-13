import React, { Component } from 'react';
import { Modal, Button, Input, Table } from 'antd';
import { connect } from 'dva';
const columns = [
    {
        title: '类型ID',
        dataIndex: 'questions_type_id',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: '类型名称',
        dataIndex: 'questions_type_text',
    },
    {
        title: '操作',
        dataIndex: 'questions_type_sort',
    }
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
class Type extends Component {

    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        this.props.type()
    }
    render() {
        return (
            <div className="content">
                <h2>考试分类</h2>
                <div className="el_conent">
                    <Button type="primary" onClick={this.showModal}>
                        + 添加类型
                    </Button>
                    <Modal
                        title="创建新类型"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <Input placeholder="请输入类型名称"></Input>
                    </Modal>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.exo.data} />
                </div>
            </div>
        );
    }
}


// props的类型检查
Type.propTypes = {

}
// props的默认值
Type.defaultProps = {

}

const mapStateToProps = state => {
    console.log('state...', state);
    return {
        ...state.user
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        type() {
            dispatch({
                type: 'user/type'
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Type)