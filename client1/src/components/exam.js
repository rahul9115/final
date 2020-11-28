import React,{Component} from "react";
import {useState} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import css from "./css/exam.css";
import image from "./images/log.png";
import Body from "./body";
import axios from "axios";
var a="";
var q_no=[];
var a1=[];
var i=0;
var answers=[];
class exam extends Component{
        
    constructor(props){
        super(props);
        this.state={
            element:null,
           
            style:{display:'none'},
            data:'<p>React is really <em>nice</em>!</p>',
            data1:'<p>React is really <em>nice</em>!</p>',
            input:null,
            input1:null
            
            
        }
        
        
    }
   
    show=()=>{
        this.setState({element:<div className="modal-content"><a class="close" href="#" onClick={this.delete}>&times;</a><a className="ques" onClick={this.show1}>+ Add question</a></div>,style:{display:'block'}
        })
    }  
    show1=()=>{
        this.setState({element:<div className="modal-content"><a class="close1" href="#" onClick={this.delete1}>&times;</a> <br></br>
        </div>,style:{display:'block'}})
            
        
    }
    optionscall(i){
        console.log(q_no[0])
        return <div className="select">    
        <label style={{padding:10,marginRight:10,marginTop:100 }}>{i}</label> 
        
      <select id="cars" name={i} onChange={evt=>this.give(evt)}>
      <option value=" " ></option>      
    <option value="A" >A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
  </select>
      
        

        
      
      </div>
    }
    give(evt){
        for(var i=0;i<answers.length;i++){
            if (answers[i].q_no==evt.target.name){
                answers.splice(i);

            }
        }
        answers.push({q_no:evt.target.name,answer:evt.target.value});
        console.log(answers);
    }
    option1(){
  
    
   
   
   
        for (i=1;i<=this.state.input1;i++)
        a1[i]=this.optionscall(i);
       console.log(q_no[0],a1); 
      return  a1;  
       }
    show2=()=>{
        this.setState({element:<div className="modal-content"><a class="close1" href="#" onClick={this.delete2}>&times;</a> <br></br>
        
        <h1>Enter the answers</h1>

        
            {this.option1()}
            <button onClick={this.pdf} className="ok">Ok</button>
            </div>,style:{display:'block'}})
            
        
    }
   
   
    delete=()=>{
        this.setState({element:null,style:{display:'none'}});
    }
    delete1=()=>{
        this.show()
    }
    pdf=()=>{
        this.setState({element:<div className="modal-content"><a class="close" href="#" onClick={this.delete}>&times;</a><input className="pdf" type="file" placeholder="Add pdf" required  onChange={evt => this.updateInputValue(evt)}></input><input type="number" className="pdf2" placeholder="Enter the number questions" onChange={evt=>this.questions(evt)} required></input><a className="options" onClick={this.show2}>+ Add answers</a> <button onClick={this.onFileChange} className="ok1">Ok</button></div>,style:{display:'block'}})
    }
    show3=()=>{
        this.setState({element:<a className="options" onClick={this.show2}>+ Add answers</a>,style:{display:'block'}});
    }
    delete2=()=>{
        this.pdf()
    }
    updateInputValue=(evt)=> {
        
        this.setState({
          input: evt.target.files[0]
        });
        
    } 
    
    onFileChange=()=>{
      
        console.log(this.state.input)  
        const formData = new FormData();
        formData.append('file', this.state.input);
          a=this.state.input;
        axios({url:'/api/submit', method:"POST",headers:{authorization:"your token"},data:formData})
        .then(response => console.log(response))
        .catch(() => console.log('Error creating new course'));
        console.log("Questions",this.state.input1);
        axios.post("/api/submit2",{questions:this.state.input1}).then(response=>console.log(response)).catch(()=>console.log('Error creating questions'))
        axios.post("/api/submit5",answers).then(response=>console.log(response)).catch(()=>console.log('Error creating questions'))
        
    }   
    questions=(evt)=>{
        
        this.setState({
            input1: evt.target.value
          });
          
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
                    <form action="/paper" >
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
export const file_name=()=> {
    return a;
}