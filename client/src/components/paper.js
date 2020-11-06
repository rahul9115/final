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

const elements=['A','B','C','D'];
const options=[]
var a=[];
var i=3;
var a1=[];
var a2=[];
var q=" ";
var a3=[] ;
class paper extends Component{
    call(){
        
        axios.get("/api/submit3").then(res=>{
            a.push(res.data) 
            
        });
        
        return a;
         
       
    }
   
    async call1(){
        
        const res=await axios.get("/api/questions");
        a3.push(res.data.q);
        console.log(a3)
        return a3;
      
    }
    options(){
        
       
        for(var i=0;i<5;i++){
              
                   
              return (<div>     
              {elements.map((value, index) => {
                
                   return [<input type="radio" value={value} name="options"></input>,
                    <label>{value}</label>]
                

                
              })}
            </div>)
            
        }
            
      
        
    }
   option1(){
  
    
   
   
   
    for (var i=0;i<a3[0];i++)
    a1[i]=this.options();
    return a1;  
   }
    renderContent() {
       var str=this.call();
       var a2=this.call1();
       console.log(a2[0],str[0])
       
        switch (this.props.auth) {
            case null:
                return <Body />;
            case false:
                return <Body />;
            default:
                return [
                    <div>
                 <div>   
               
                    <div id="mySidenav" class="sidenav">
                    
                    <a href="/api/submit3">Begin Exam</a>
                    <a href="#">Submit Exam</a>
                  
                    </div>
                    <div className="pdf1">
                    <embed src={`/uploads/${str[0]}`} width="1200px" height="600px" />
                  </div>
                   </div>
                
               
                   <div className="options1">
                   
                           
                       
                    
                         {this.option1()}
                        
                    
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
