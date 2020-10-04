import axios from "axios";
import FETCH_USER from "./type";
export function fetchUser() {

    return function (dispatch) {
        console.log("yo");
        axios.get('/api/output').then(res => dispatch({ type: FETCH_USER, payload: res.data }))
    }

};


