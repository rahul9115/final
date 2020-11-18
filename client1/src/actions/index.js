import axios from "axios";
import FETCH_USER from "./type";
export function fetchUser() {

    return function (dispatch) {
       console.log("yoooo");
        axios.get('/api/output').then(res => dispatch({ type: FETCH_USER, payload: res.data }))
    }

};

export function answers(token) {
    console.log(token);
    return function (dispatch) {
        axios.post("/api/stack", token).then(res => dispatch({ type: FETCH_USER, payload: res.data }))

    }
};


