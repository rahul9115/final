const passport = require('passport');
var a="";
const fileupload=require('express-fileupload');
const fs=require('fs');

require('../models/file')
const mongoose=require('mongoose');
const { Binary } = require('mongodb');
const File=mongoose.model('files');


module.exports = (app) => {

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
    app.post('/api/submit',(req,res)=>{
        b=req.body
        console.log("sjhs",b);
       
        

})
}

