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
                    <nav class="navig2">
                    <ul>
                        <li><a href="http://localhost:3000"><img src={image}></img></a></li>
                        <li ><a href="http://localhost:3000" class="l1">Home</a></li>
                        <li ><a href="/api/logout"class="l2">Logout</a></li>
                    
                        
                    </ul>
                    </nav>
                    <div className="create">
                        <h1 className="ch">Create New Exam</h1>
                        <input type="text" placeholder="Enter the exam name" className="i1"></input>
                    </div>
                    <div className="exam">
                        <h1 className="ch1">Exam Questions</h1>
                        <input type="radio" className="b1" name="question"></input>
                        <label className="l11">ADD PDF</label>
                        <input type="radio" className="b2" name="question"></input>
                        <label className="l21">Write Exam Questions</label>
                        <input type="radio" className="b3" name="question"></input>
                        <label className="l31">Multiple Choice Questions</label>

                    </div>
                    <div className="final">
                            <button className="b6">Create Exam</button>
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