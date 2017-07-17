import React from "react"
import axios from "axios"
import { Button, Menu, Dropdown, Icon } from 'antd';
class Theme extends React.Component{
    constructor(){
        super()
        this.state={
            title:'',
            content:''
        }
    }
    handlesubmit(){
        let accesstoken = sessionStorage.accesstoken;
        if(!accesstoken){
            alert("请登录")
            return
        }
        let {title,content}=this.state;
        let tab = "dev";
        let data = {accesstoken,title,content,tab};
        axios.post('https://cnodejs.org/api/v1/topics', data)
            .then(res=>{
                let id = res.data.topic_id;
                this.props.history.push(`/topic/${id}`)
            })
            .catch(err=>alert(err))
    }
    render(){
        let {title,content}=this.state;
        console.log(title)
        return(
            <div className="newtext">
                <label htmlFor="title">标题（大于10个字符）</label><br />
                <input type="text" id=''title style={{width: '100%'}} value={title} onChange={e=>this.setState({title: e.target.value})}/><br />
                <label htmlFor="tab">分类:{"dev"}</label><br />
                <label htmlFor="content">内容（支持markdown语法）</label><br />
                <textarea id='content' rows="10" style={{width: '100%'}} value={content} onChange={e=>this.setState({content: e.target.value})}/>
                <Button type="primary" onClick={this.handlesubmit.bind(this)}>发布新主题</Button>
            </div>
        )
    }
}
export default Theme