import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import css from "./css/body.css"
import Header1 from "./css/Header.css";

import image from "./images/log.png";
class Body extends Component{
    
    constructor(props){
        super(props);
        this.state={
            element:<a><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
            style:{backgroundColor:"white",color:"black"},
            style1:{backgroundColor:"navy",color:"white"}
        }
    }
    updateStudent=()=>{
        this.setState({element:<a><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
        style:{backgroundColor:"white",color:"black"},
        style1:{backgroundColor:"navy",color:"white"}});
    }
    updateTeacher=()=>{
        this.setState({element:<a><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
        style:{backgroundColor:"navy",color:"white"},
        style1:{backgroundColor:"white",color:"black"}});
    }
    render(){
        return(
            
            <div className="container" id="con" >
                <nav class="navig">
                <ul>
                    <li><a href="http://localhost:3000"><img src={image}></img></a></li>
                    <li ><a href="#" class="l1">Home</a></li>
                    <li ><a href="#"class="l2">About</a></li>
                </ul>
                </nav>
              <div className="choice">
                  <a href="#" class="student" onClick={this.updateStudent} style={this.state.style}>Student</a>
                  <a href="#" class="teacher" onClick={this.updateTeacher} style={this.state.style1}>Teacher</a>
                  <a href="/auth/google" className="login">{this.state.element}</a>
                  </div> 
           
            </div>
            
            
        )
    }
}
export default Body;