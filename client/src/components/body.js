import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import css from "./css/body.css"
import Header1 from "./css/Header.css";
import {connect} from "react-redux";
import image from "./images/log.png";
import * as actions from "../actions";
class Body extends Component{
    
    constructor(props){
        super(props);
        this.state={
            element:<a><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
            style:{backgroundColor:"white",color:"black"},
            style1:{backgroundColor:"navy",color:"white"},
            profile:"student"
        }
    }
    
    updateStudent=()=>{
        this.setState({element:<a href=""><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
        style:{backgroundColor:"white",color:"black"},
        style1:{backgroundColor:"navy",color:"white"},
        profile:"student"});
    }
    updateTeacher=()=>{
        this.setState({element:<a href="/auth/google" className="teah"><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
        style:{backgroundColor:"navy",color:"white"},
        style1:{backgroundColor:"white",color:"black"},
        profile:"teacher"});
    }
    render(){
        console.log(this.props)
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
                  <a href="#" className="login">{this.state.element}</a>
                  {this.props.handleToken(this.state)}
                  </div> 
           
            </div>
            
            
        )
    }
}


export default connect(null,actions)(Body);