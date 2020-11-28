import React,{Component, Fragment,useState} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import css from "./css/paper.css";
import image from "./images/log.png";
import Body from "./body";


import file_name from "./exam";
import exam from "./exam";
import * as actions from "../actions";
import axios from "axios";
import fonts from '../../node_modules/font-awesome/css/font-awesome.min.css';

const elements=['A','B','C','D'];
const options=[]
var a=[];
var i=3;
var a1=[];
var a2=[];
var q=" ";
var a3=[];
var j=0;
var value=[];
var m=0;
var m1=0;
var answer=[];
class paper extends Component{
    constructor(props){
        super(props);
        this.state={
            input:null,
            value:null,
            questions:null,
            url:null            
        }
    }
    async call(){
        
        const res=await axios.get("/api/submit3");
        m1=res.data;
        a.push(res.data.url1);
        a3.push(res.data.q);
        return m1;
         
       
    }
   
    
    async call3(){
        
        const res=await axios.get("/api/output1");
       
         value.push(res.data._id);
         m=res.data._id;
         console.log(m);
         return m;
    }
    options(i){
        
       
        
              
               return <div className="select">    
                <label style={{padding:10,marginRight:10,marginTop:100 }}>{i}</label> 
              {elements.map((value, index) => {
           
              return [<input type="radio" value={value} name={i} style={{padding:10,marginLeft:100,marginTop:100 }} onChange={evt=>this.check(evt)}></input>,
                    <label style={{padding:10,marginLeft:30,marginTop:100 }}>{value} </label>]
                

                
              })}
              </div>
           
            
            
      
        
    }
    check=(evt)=>{
        for(var i=0;i<answer.length;i++){
            if (answer[i].q_no==evt.target.name){
                answer.splice(i);

            }
        }
        answer.push({q_no:evt.target.name,answer:evt.target.value})
        console.log(answer)
       
    }
   option1(){
  
    
   
   
   
    for (var i=1;i<=a3[0];i++)
    a1[i]=this.options(i);
  return  a1;  
   }
   id=(evt)=>{
       this.setState({
          input :evt.target.value
       });
       axios({url:'/api/submit4', method:"POST",headers:{authorization:"your token"},data:{id:evt.target.value}})
       .then(response => console.log(response))
   }
   answers=()=>{
    axios({url:'/api/answers', method:"POST",headers:{authorization:"your token"},data:answer})
   }
    renderContent() {
       this.call()
           
       

       
       console.log(this.state.value)
       
       
       
       var m1=[]
       this.call3().then(data=>{
        this.state.value=data
    });
    
       
        switch (this.state.value) {
            case null:
                return <Body />;
            case undefined:
                return <Body />;
                    
                    
            case false:
                return <Body />;
            default:
                return [
                    <div>
                 <div>   
               
                    <div id="mySidenav" class="sidenav">
                    <input placeholder="Enter the Id" onChange={evt=>this.id(evt)}></input>
                    <a href="/api/submit3">Begin Exam</a>
                    
                    <a href="/api/score"  onClick={this.answers}>Submit Exam</a>
                    <a href="/api/logout"><i class="fas fa-sign-out-alt"></i>Logout</a>
                  
                    </div>
                    <div className="pdf1">
                        
                    <embed src={`${a[0]}`} width="1200px" height="600px" />
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
