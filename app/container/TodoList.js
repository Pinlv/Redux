import React, { Component } from 'react';
import $ from 'jquery';
import { Layout, Row, Col, Form, Input } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;

import TodoListTable from '../component/TodoListTable'
import './todo.css'

export default class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            list: {
                PageSize: 10,
                data:null,
                count:null
            },
            columns: [
                {
                    title: 'Id',
                    dataIndex: 'Id',
                    key: 'Id'
                }, {
                    title: 'UserName',
                    dataIndex: 'UserName',
                    key: 'UserName'
                }, {
                    title: 'Email',
                    dataIndex: 'Email',
                    key: 'Email'
                }, {
                    title: 'Phone',
                    dataIndex: 'Phone',
                    key: 'Phone'
                }, {
                    title: 'ModifyDate',
                    dataIndex: 'ModifyDate',
                    key: 'ModifyDate'
                }, {
                    title: 'FirstName',
                    dataIndex: 'FirstName',
                    key: 'FirstName'
                }, {
                    title: 'LastName',
                    dataIndex: 'LastName',
                    key: 'LastName'
                }],
            loading: true
        }
    }
    render() {
        return (
            <Layout >
                <Header>头部</Header>
                <Layout>
                    <Sider style={{ backgroundColor: 'red' }}>左侧</Sider>
                    <Content style={{ minHeight: 280, backgroundColor: "white" }}>
                        <Form className=".ant-advanced-search-form">
                            <Row gutter={24}>
                                <Col key={1} span={4}>
                                    <FormItem label={"Name"}>
                                        <Input placeholder="Name" />
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                        <Row type="flex" justify="center" >
                            <Col lg={12} >
                                <TodoListTable list={this.state.list} columns={this.state.columns} getUserList={this.getUserList.bind(this)} loading={this.state.loading} />
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <Footer>底部</Footer>
            </Layout>

        )
    }
    componentWillMount() {
        this.getUserList();
    }
    getUserList(Page=1){
        console.log(this)
        let self=this
        $.get("https://ot860d5nmi.execute-api.ap-southeast-1.amazonaws.com/GetUserTest", { Page:Page, PageSize:self.state.list.PageSize }).then((data) => {
            console.log(self)
            if (typeof data != Object) {
                self.setState({
                    list:{
                        data:data.UserList,
                        count:data.Count[0]['count(*)'],
                        PageSize:this.state.list.PageSize
                    },
                    loading: false
                })
            } else {
               console.log(data)
            }
        }).fail(()=>{
             console.log("11111111111111")   
        })
    }

}