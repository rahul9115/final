import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import instructions from "./instructions";
import Body from "./body";
import login from "./login";
import css from "./css/login.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import exam from "./exam";
import paper from "./paper";
class App extends Component{
    componentDidMount() {
        this.props.fetchUser();

    }
   
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    
                    
                    <Route exact path='https://fathomless-cove-72547.herokuapp.com/exam/' component={Body}/>
                    <Route exact path='https://fathomless-cove-72547.herokuapp.com/login' style={css} component={login}/>
                    <Route exact path='https://fathomless-cove-72547.herokuapp.com/exam' style={css} component={exam}/>
                    <Route exact path='https://fathomless-cove-72547.herokuapp.com/paper' style={css} component={paper}/>
                    </BrowserRouter>

            </div>
        );
    }
}

  export default connect(null,actions)(App);