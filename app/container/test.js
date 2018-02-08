import React,{Component} from "react";
export default class Test extends Component{
    render(){
        const isShow=true;
        const message="拥有"+this.aa()+"数量";
        const sss="1111111"
        return(
            <div>
                {isShow?message:sss}
            </div>
        )
    }
    aa(){
        return "12"
    }
}