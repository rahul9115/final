import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Body from "./body";
import login from "./login";
import css from "./css/login.css"
class App extends Component{
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
export default App;