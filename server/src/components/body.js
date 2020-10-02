import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import css from "./css/body.css";

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
            
            <div className="container">
              <div className="choice">
                  <a href="#" class="student" onClick={this.updateStudent} style={this.state.style}>Student</a>
                  <a href="#" class="teacher" onClick={this.updateTeacher} style={this.state.style1}>Teacher</a>
                  <a href="#" className="login">{this.state.element}</a>
            </div>
            </div>
        )
    }
}
export default Body;