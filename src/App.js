import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

import Home from './views/Home'
import AdvertisementNode from './views/AdvertisementNode'
import CreateAdNode from './views/CreateAdNode'
import EditAd from './views/EditAd'

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{background: '#fff'}}>

                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}
                            >

                                <Menu.Item key="1">
                                    <Link to='/'>
                                        <Icon type="pie-chart"/>
                                        <span>首页</span>
                                    </Link>
                                </Menu.Item>
                                <SubMenu key="sub1" title={<span><Icon type="user"/>广告</span>}>

                                        <Menu.Item key="1">
                                            <Link to='/advertisement_nodes'>广告列表</Link>
                                        </Menu.Item>

                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>

                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/advertisement_nodes" component={AdvertisementNode}/>
                                    <Route  path="/advertisement_nodes/create" component={CreateAdNode}/>
                                    <Route  path="/advertisement_nodes/edit/:id" component={EditAd}/>
                                </Switch>

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>


        );
    }
}

export default App;
