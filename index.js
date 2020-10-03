const express=require("express");
const app=express();
const PORT=process.env.PORT || 5000;
const host="0.0.0.0";
const passport=require("passport");
const passportConfig = require('./services/passport');
const authroutes=require("./authroutes/authenticate");
authroutes(app);
app.listen(PORT,host,()=>{
    console.log("Server started");
    
})