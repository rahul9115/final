import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import instructions from "./instructions";
import Body from "./body";
import login from "./login";
import css from "./css/login.css";
import { connect } from "react-redux";
import * as actions from "../actions";
class App extends Component{
    componentDidMount() {
        this.props.fetchUser();

    }
   
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    
                    
                    <Route exact path='/' component={Body}/>
                    <Route exact path='/login' style={css} component={login}/>
                    
                                    </BrowserRouter>

            </div>
        );
    }
}

  export default connect(null,actions)(App);