import React from "react"
import {HashRouter,Route} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Topic from "./components/Topic"
import Home from "./components/Home"
import Massage from "./components/Massage"
import Theme from "./components/theme"
import User from "./components/User"
class App extends  React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Header/>
                    <Route path="/topic/:id" exact component={Topic}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/newTopic" component={Theme}/>
                    <Route path="/message" component={Massage}/>
                    <Route path="/user/:loginname"  component={User}/>
                    <Footer/>
                </div>
            </HashRouter>
        )
    }
}
export default App