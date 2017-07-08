import React from "react"
import {HashRouter,Route} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Topic from "./components/Topic"
import Home from "./components/Home"
import Massage from "./components/Massage"
class App extends  React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Header/>
                    <Route path="" component={Topic}/>
                    <Route path="" component={Home}/>
                    <Route path="" component={Massage}/>
                    <Footer/>
                </div>
            </HashRouter>
        )
    }
}
export default App