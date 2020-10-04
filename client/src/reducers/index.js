import { combineReducers } from 'redux';
import authReducer from "./authreducers"
export default combineReducers({
    auth: authReducer
});