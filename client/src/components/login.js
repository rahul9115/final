import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";

import css from "./css/login.css";
import image from "./images/log.png";
class login extends Component{
    render(){
        return(
            <body class="yo">
            <div className="container1">
                <nav class="navig">
                <ul>
                    <li><a href="http://localhost:3000"><img src={image}></img></a></li>
                    <li ><a href="#" class="l1">Home</a></li>
                    <li ><a href="#"class="l2">About</a></li>
                    
                </ul>
                </nav>
            </div>
            </body>
        );
    }
}
export default login;