import React, {Component} from 'react';
import {Table, Divider, Button} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios'


class AdvertisementNode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            advertisement: []
        }
    }

    componentDidMount() {
        this.init()
    }

    init(){
        axios.get('https://movie.lc1017.com/api/admin/v1/advertisements').then(res => {
            console.log(res)
            this.setState({
                advertisement: res.data.data
            })
        })
    }

    columns = () => [{
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '时间',
        dataIndex: 'created_at',
        key: 'created_at',
    }, {
        title: '排序',
        dataIndex: 'sort',
        key: 'sort',
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
      <a href="javascript:;" onClick={this.editRow.bind(this, text,record)}>编辑</a>
      <Divider type="vertical"/>
      <a href="javascript:;" onClick={this.deleteRow.bind(this, text)}>删除</a>
    </span>
        ),
    }];

    deleteRow(text) {
        console.log(text)
                axios.delete(`https://movie.lc1017.com/api/admin/v1/advertisements/${text.id}`).then(res=>{
                    this.init()
                })
    }

    editRow(text,record) {
        console.log(text)
        this.props.history.push({pathname:`/advertisement_nodes/edit/${text.id}`})
    }

    render() {
        return (
            <div>
                <Link to='/advertisement_nodes/create'>
                    <Button style={{marginBottom: '20px'}}>新增广告</Button>
                </Link>
                <Table columns={this.columns()} rowKey='id' dataSource={this.state.advertisement}/>
            </div>
        );
    }
}

export default AdvertisementNode;