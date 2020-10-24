import React,{Component, Fragment,useState} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import css from "./css/paper.css";
import image from "./images/log.png";
import Body from "./body";
import RGF from 'react-google-forms';
import { Document, Page } from 'react-pdf';
import file_name from "./exam";
import exam from "./exam";
import * as actions from "../actions";
import axios from "axios";


var a=[];
class paper extends Component{
    call(){
        
        axios.get("/api/submit").then(res=>{a.push(res.data)});
        return a;
        
         
       
    }
    renderContent() {
       var str=this.call();
       console.log(str);
        switch (this.props.auth) {
            case null:
                return <Body />;
            case false:
                return <Body />;
            default:
                return [
                 <div>   
               
                    <div id="mySidenav" class="sidenav">
                    
                    <a href="#">Begin Exam</a>
                    <a href="#">Submit Exam</a>
                  
                    </div>
                    <div className="pdf1">
                    <embed src={`/uploads/${str[0]}`} width="1200px" height="600px" />
                  </div>
                   </div>
                
                
              
                   
                ];



        }
    }
    render(){
        console.log(this.props.auth);
        return(
           
           <div className="container5" id="frag5">
            {this.renderContent()} 
            </div>
            
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
  }
export default connect( mapStateToProps)(paper);
