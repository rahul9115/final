const passport = require('passport');
var a="";
const fileupload=require('express-fileupload');
const fs=require('fs');

require('../models/file')
const mongoose=require('mongoose');
const { Binary } = require('mongodb');
const File=mongoose.model('files');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var customId=require("custom-id");

module.exports = (app) => {
   app.use(fileupload());
   app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
   app.use(cors());
   app.use(cookieParser());
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));
    app.post("/api/state",(req,res)=>{
        console.log("This",req.body.profile);
        a=req.body.profile;
    })
    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
       if (a=="teacher")
        res.redirect("/login");
       else
       res.redirect("/");
        
    }
        
    );
    app.get("/api/logout", (req, res) => {
        req.logout();
        app.get("/api/output",(req,res)=>{
            res.send("");
        })
        res.redirect("/");
    });
    app.get('/api/output', (req, res) => {

        console.log("in");
        res.send(req.user);


    });
    app.post('/api/stack',(req,res)=>{
        var answers=req.body;
        console.log("hola",answers.props.children);
        res.send(answers)
    })
    app.post('/api/stack1',(req,res)=>{
        var answers=req.body;
        console.log("hola",answers[1].props);
        res.send(answers)
    })
   
    var b='';
    var file1="";
    app.post('/api/submit',(req,res)=>{
        
        
        console.log("wola",req.files.file);
        const file=req.files.file;
        var id=customId(file);
        console.log("file",file);
        File.findOne({name:file.name,files:file}).then((existingUser)=>{
            if(existingUser){
                console.log("Already present");
             
            }else{
              console.log({name:file.name,files:file});
              new File({name:file.name,files:file}).save();
            }
      
          })
          
          File.findOne({name:file.name,files:file}).then((user)=>{
             console.log("wohoooo",user);
             
             
          })
          file.mv(`C:/Users/sudha/Downloads/exam4/client/public/uploads/${file.name}`,err=>{
            if(err){
                console.log(err);
                return res.status(500).send(err);
            }
        });
      b=file.name
        

})
app.get("/api/submit",(req,res)=>{
    res.send(b);
})


    

}

