import React from "react"
import {Spin} from "antd"
import {Link} from "react-router-dom"
class ShowTopics extends React.Component{
    render(){
        let {data}=this.props;
        let tabs={
            ask:"问答",
            job:"招聘",
            share:"分享"
        }
        return(
            <div className="topics">
                {
                    data.length===0?<div><Spin size="large" /></div>:data.map(item=>(
                        <div key={item.id} className="topic">
                            <img src={item.author.avatar_url} alt="avatar"/>
                            <div>
                                <h1>{item.title}</h1>
                                <span>{item.top?'置顶':item.good?'精华':tabs[item.tab]}</span>
                                <span>回复量：<strong>{item.reply_count}</strong></span>
                                <span>阅读量：{item.visit_count}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default ShowTopics