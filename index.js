const express=require("express");
const app=express();
const PORT=process.env.PORT;

const passport=require("passport");
const key=require("./keys/key");
const passportConfig = require('./services/passport');
const authroutes=require("./authroutes/authenticate");
const cookieSession = require("cookie-session");
var cors = require('cors');
const mongoose=require("mongoose");
const path = require("path");
mongoose.connect("mongodb+srv://rahul:rahul@cluster0.rpfjy.mongodb.net/<dbname>?retryWrites=true&w=majority");
require('./models/User');


const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.use(
    cookieSession({
        maxAge: 30*1000*60*60*1000,
        keys: [key.cookiekey]

    })
);
if (process.env.NODE_ENV == 'production') {
  
    
        app.get("/api/submit4",(req,res)=>{
            res.send("");
        })

        app.use(express.static('client1/build'));
        app.get("/paper",(req,res)=>{
            res.sendFile(path.resolve(__dirname,"client1/build/index.html"))
        })
        app.get("/login",(req,res)=>{
            res.sendFile(path.resolve(__dirname,"client1/build/index.html"))
        })
        app.get("/exam",(req,res)=>{
            res.sendFile(path.resolve(__dirname,"client1/build/index.html"))
        })
        
  
  
}     
app.use(passport.initialize());
app.use(passport.session())
authroutes(app);
app.listen(PORT,()=>{
    console.log("Server started");
    
})
