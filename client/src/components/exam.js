import React,{Component} from "react";
import {useState} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import css from "./css/exam.css";
import image from "./images/log.png";
import Body from "./body";
import RGF from 'react-google-forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import parse from "html-react-parser";

import axios from "axios";

class exam extends Component{
    
    constructor(props){
        super(props);
        this.state={
            element:null,
           
            style:{display:'none'},
            data:'<p>React is really <em>nice</em>!</p>',
            data1:'<p>React is really <em>nice</em>!</p>',
            input:""
            
            
        }
        
        
    }
   
    show=()=>{
        this.setState({element:<div className="modal-content"><a class="close" href="#" onClick={this.delete}>&times;</a><a className="ques" onClick={this.show1}>+ Add question</a></div>,style:{display:'block'}
        })
    }  
    show1=()=>{
        this.setState({element:<div className="modal-content"><a class="close1" href="#" onClick={this.delete1}>&times;</a> <br></br>
        <CKEditor editor={ClassicEditor}  
            ></CKEditor></div>,style:{display:'block'}})
            
        
    }
    show2=()=>{
        this.setState({element:<div className="modal-content"><a class="close1" href="#" onClick={this.delete2}>&times;</a> <br></br>
        
        <h1>Enter the choices</h1>

        <CKEditor editor={ClassicEditor} value={this.state.data1}  onChange={(event,editor)=>{
            const data=editor.getData();
            this.onsubmit1(data);

        }}
            ></CKEditor>
            <h1>Enter the answer</h1>
            <CKEditor editor={ClassicEditor} value={this.state.data} onChange={(evt,editor) =>{
                const data=editor.getData()
                console.log(typeof(data))
                this.onsubmit(data)
            } }
            ></CKEditor>
            
            <button onClick={this.pdf} className="ok">Ok</button>
            </div>,style:{display:'block'}})
            
        
    }
    onsubmit1=(data) =>{
       

        console.log("form submitted", data);
 
        
         axios.post('http://localhost:5000/api/stack1', parse(data))
             .then(response => console.log(response.data))
             .catch(() => console.log('Error creating new course'))
 
         
     }
    onsubmit =(data) =>{
       

       console.log("form submitted", data);

       
        axios.post('http://localhost:5000/api/stack', parse(data))
            .then(response => console.log(response.data))
            .catch(() => console.log('Error creating new course'))

        
    }
    delete=()=>{
        this.setState({element:null,style:{display:'none'}});
    }
    delete1=()=>{
        this.show()
    }
    pdf=()=>{
        this.setState({element:<div className="modal-content"><form action={this.delete}><a class="close" href="#" onClick={this.delete}>&times;</a><a className="options" onClick={this.show2}>+ Add options and answers</a><input className="pdf" type="file" placeholder="Add pdf" required  onChange={evt => this.updateInputValue(evt)}></input> <button onClick="submit" className="ok1">Ok</button></form></div>,style:{display:'block'}})
    }
    delete2=()=>{
        this.pdf()
    }
    updateInputValue=(evt)=> {
        
        this.setState({
          input: evt.target.files[0]
        });
        const formData = new FormData(); 
        formData.append( 
            "myFile", 
            evt.target.files[0],
           evt.target.files.name
          
          ); 
          console.log( evt.target.files[0]);
        axios.post('http://localhost:5000/api/submit', formData)
        .then(response => console.log(response))
        .catch(() => console.log('Error creating new course'))
    }        
    
   
    
        

    

      
    renderContent() {
        console.log(this.style)
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
                    <form action="/api/submit1" method="POST">
                    <div className="create">
                        <h1 className="ch">Create New Exam</h1>
                        <input type="text" placeholder="Enter the exam name" className="i1"></input>
                    </div>
                    <div className="exam" >
                        <h1 className="ch1">Exam Questions</h1>
                        <input onClick={this.pdf} type="radio" className="b1" value="Exam Questions" name="question"></input>
                        <label className="l11">ADD PDF</label>
                        <input type="radio" className="b2" value="ADD PDF" name="question"></input>
                        <label className="l21">Write Exam Questions</label>
                        <input onClick={this.show} type="radio" className="b3" value="Write Exam Questions" name="question"></input>
                        <label  className="l31">Multiple Choice Questions</label>
                    
                    </div>
                    <div className="final">
                            <button type="submit" className="b6">Create Exam</button>
                    </div>
                  </form>
                  
                  <div className="modal" style={this.state.style}>
                 
                      {this.state.element}</div>
                  
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