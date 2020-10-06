import React,{Component, Fragment} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import css from "./css/login.css";
import image from "./images/log.png";
import Body from "./body";
import RGF from 'react-google-forms'
class login extends Component{
    renderContent() {
        
        switch (this.props.auth) {
            case null:
                return <Body />;
            case false:
                return <Body />;
            default:
                return [
                    
                
                    <div className="container1" id="frag1">
                    <nav class="navig1">
                    <ul>
                        <li><a href="http://localhost:3000"><img src={image}></img></a></li>
                        <li ><a href="http://localhost:3000" class="l1">Home</a></li>
                        <li ><a href="/api/logout"class="l2">Logout</a></li>
                    
                        
                    </ul>
                    </nav>
                   <div className="dash">
                       <h1 style={{color:"white"}} class="h">Dashboard</h1>
                   </div>
                      
                    
                    <div classname="container" id="che">
                    
                    <div className="check">
                        <a class="a1" href="#">Create Exam</a>
                    </div>
                    <div className="check1">
                        <a class="a2" href="#">Surveillance & Results</a>
                    </div>
                    <div className="check2">
                        <a class="a3" href="#">Analyse Results</a>
                    </div>
                    </div>
                </div>
                
                
              
                   
                ];



        }
    }
    render(){
        console.log(this.props.auth);
        return(
            <div className="container">
            {this.renderContent()} 
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
  }
export default connect( mapStateToProps)(login);