import React from 'react';
import ReactDOM from 'react-dom';
import fonts from '../node_modules/font-awesome/css/font-awesome.min.css';
import reducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";

import App from './components/App';
const store = createStore(reducer, {}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
