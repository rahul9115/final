import React,{component, Fragment} from "react";
import { Component } from "react";
import {Helmet, helmet} from "react-helmet";
import {Link} from "react-router-dom";
class instructions extends Component{
    render(){
        return(
            <Fragment>
                <Helmet><title>Quiz Instructions -Quiz App</title></Helmet>
                <div className="instructions container">
                    <h1>How to give the quiz</h1>
                    <p>Ensure you read this guide from start to finish</p>
                    <ul className="browser-default" id="main-list">
                        <li>The quiz is of 15 minutes duration</li>
                        <li>Each quiz consists of 15 questions</li>
                        <li>Every question has 4 options</li>
                        <li>Select the option which answers the question</li>
                        <li>Feel free to submit at any time</li>
                        <li>The timer starts as soon as you click the start button</li>
                        </ul>
                    <div>
                        <span className="left"><Link to="/login">No take me back</Link></span>
                        <span className="left"><Link to="/login">Start</Link></span>
                        </div>    
                </div>
            </Fragment>
        );
    }

}
export default instructions;