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

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form:{
                name:''
            },
            checkNick: false,
        };
    }

    componentDidMount(){
        // console.log(this.props.location.state)
        console.log(this.props.match.params.id)
        let id =this.props.match.params.id

        axios.get(`https://movie.lc1017.com/api/admin/v1/advertisements/${id}/edit`).then(res => {
            console.log(res)
            this.setState({
                form: res.data.data.advertisement
            })
        })
    }

    onSubmit = () => {
        this.props.form.validateFields(
            (err,values) => {
                if (!err) {
                    console.log(values)
                    let id =this.props.match.params.id
                    axios.put(`https://movie.lc1017.com/api/admin/v1/advertisements/${id}`,values).then(res=>{
                        this.props.history.push('/advertisement_nodes')
                    })
                }
            },
        );
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
                        initialValue: this.state.form.name,
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
                        initialValue: this.state.form.sort,
                    })(
                        <InputNumber min={1} max={99} placeholder="请输入排序"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="广告序号">
                    {getFieldDecorator('advertisement_node_id', {
                        rules: [{
                            required: true,
                            message: '不能为空',
                        }],
                        initialValue: this.state.form.advertisement_node_id,
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
                        initialValue: this.state.form.photo_id,
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
                        initialValue: this.state.form.url,
                    })(
                        <Input placeholder="网址" />
                    )}
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Button type="primary" onClick={this.onSubmit}>
                        更新数据
                    </Button>
                </FormItem>
            </div>
        );
    }
}

const Wrapped = Form.create()(Edit);

export default Wrapped;

