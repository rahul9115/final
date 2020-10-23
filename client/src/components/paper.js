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
                    <nav class="navig3">
                    <ul>
                        <li><a href="http://localhost:3000"><img src={image}></img></a></li>
                        <li ><a href="http://localhost:3000" class="l1">Home</a></li>
                        <li ><a href="/api/logout"class="l2">Logout</a></li>
                    
                        
                    </ul>
                    </nav>
                    <div>
                    
                    <embed src={`/uploads/${str[0]}`} width="800px" height="2100px" />
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
