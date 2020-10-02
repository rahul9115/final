import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import Header from "./css/Header.css";
import Body from "./body";
import image from "./images/log.png";
class App extends Component{
    render(){
        return(
            <div className="container">
                <nav class="navig">
                <ul>
                    <li><img src={image}></img></li>
                    <li ><a href="#" class="l1">Home</a></li>
                    <li ><a href="#"class="l2">About</a></li>
                </ul>
                </nav>
            </div>
        );
    }
}
export default App;