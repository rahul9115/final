import React,{Component, Fragment} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import css from "./css/exam.css";
import image from "./images/log.png";
import Body from "./body";
import RGF from 'react-google-forms'
class exam extends Component{
    renderContent() {
        
        switch (this.props.auth) {
            case null:
                return <Body />;
            case false:
                return <Body />;
            default:
                return [
                    
                
                    <div className="container2">
                    <nav class="navig1">
                    <ul>
                        <li><a href="http://localhost:3000"><img src={image}></img></a></li>
                        <li ><a href="http://localhost:3000" class="l1">Home</a></li>
                        <li ><a href="/api/logout"class="l2">Logout</a></li>
                    
                        
                    </ul>
                    </nav>
                    <div className="create">
                        <h1>Create New Exam</h1>
                        <input type="text" placeholder="Enter the exam name" className="i1"></input>
                    </div>
                  
                </div>
                
                
              
                   
                ];



        }
    }
    render(){
        console.log(this.props.auth);
        return(
            <div className="container6" id="frag2" >
            {this.renderContent()} 
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
  }
export default connect( mapStateToProps)(exam);