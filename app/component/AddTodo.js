import React,{Component,ReactPropTypes} from 'react';
import {Button,Input} from 'antd';
export default class AddTodo extends Component{
    render(){
        return(
            <div>
                <Input placeholder="请输入。。。"/>
                <Button type="primary"/>
            </div>
        )
    }
    handleClick(e){
       let value=e.target.value;
       this.props.onAddClick(value);
       e.target.value=null;
    }
}