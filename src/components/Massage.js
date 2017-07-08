import React from "react"
import {url} from "../config"
import axios from "axios"
import {messages,Spin} from "antd"
class Massage extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    componentDidMount(){
        let accesstoken=sessionStorage.accesstoken;
        if(accesstoken){
            axios.get(`${url}/messages?accesstoken=${accesstoken}`)
                .then(res=>console.log(res))
                .catch(arr=>message.error("数据请求失败"))
        }else{
            this.props.history.push('/')
        }

    }
    render(){
        let {data} = this.state
        return(
            <div>
                {
                    data?(
                        <div>
                            <h1>未读消息：</h1>{
                            data.hasnot_read_messages.map(item=>(<p key={item.id}>{
                            item.author.loginname}
                            在文章
                                    <Link to={`/topic/${item.topic.id}`}>{item.topic.title}</Link>
                                </p>
                        ))}
                        </div>

                    ):
                        <div style={{textAlign:'center'}}>
                            <Spin size="large"/>
                        </div>

                }
            </div>
        )
    }
}
export default Massage