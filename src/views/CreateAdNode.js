import React, {Component} from 'react';
import {Form, Input, Button, Checkbox, InputNumber} from 'antd';
import axios from 'axios'

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form:{},
            checkNick: false,
        };
    }

    onSubmit = () => {
        this.props.form.validateFields(
            (err,values) => {
                if (!err) {
                    console.log(values)
                    axios.post(`http://cmovie.holyzq.com/api/admin/v1/advertisements`,values).then(res=>{
                        this.props.history.push('/advertisement_nodes')
                    })
                }
            },
        );
    }

    handleChange = (e) => {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['nickname'], { force: true });
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <FormItem {...formItemLayout} label="名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: '请输入名称',
                        }],
                    })(
                        <Input placeholder="请输入名称"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="排序">
                    {getFieldDecorator('sort', {
                        rules: [{
                            required: this.state.checkNick,
                            message: '请输入排序',
                        }],
                    })(
                        <InputNumber min={1} max={99} placeholder="请输入排序"/>
                    )}
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Checkbox
                        checked={this.state.checkNick}
                        onChange={this.handleChange}
                    >
                        sort is required
                    </Checkbox>
                </FormItem>
                <FormItem {...formItemLayout} label="广告序号">
                    {getFieldDecorator('advertisement_node_id', {
                        rules: [{
                            required: true,
                            message: '不能为空',
                        }],
                    })(
                        <Input placeholder="请输入序号"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="照片id">
                    {getFieldDecorator('photo_id', {
                        rules: [{
                            required: true,
                            message: '请输入名称',
                        }],
                    })(
                        <Input placeholder="请输入名称"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="广告网址">
                    {getFieldDecorator('url', {
                        rules: [{
                            required: true,
                            message: '请输入网址',
                        }],
                    })(
                        <Input placeholder="网址" />
                    )}
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Button type="primary" onClick={this.onSubmit}>
                        新增
                    </Button>
                </FormItem>
            </div>
        );
    }
}


const WrappedApp = Form.create()(Create);

export default WrappedApp;

