import { Table } from 'antd';
import React from "react";

const TodoListTable=(props)=>{
    let dataSource=props.list.data;
    let count=props.list.count;
    return(
        <Table 
        style={{marginTop:10}} 
        loading={props.loading} 
        dataSource={dataSource} 
        columns={props.columns}
        pagination={{
            total:count,
            pageSize:10,
            onChange:(current)=>{
                props.getUserList(current)
            }
        }} 
        size="small"
        />
    )
}
export default TodoListTable