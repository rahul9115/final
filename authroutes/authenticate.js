
  
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
const AWS=require('aws-sdk');
const multer=require("multer");
var axios=require("axios");
const mongouri="mongodb+srv://rahul:rahul@cluster0.rpfjy.mongodb.net/<dbname>?retryWrites=true&w=majority";
const conn =mongoose.createConnection(mongouri);
var id="";
const s3=new AWS.S3({
    accessKeyId:process.env.AWS_ID,
    secretAccessKey:process.env.AWS_SECRET
})

const storage=multer.memoryStorage({
    destination:function(req,file,callback){
        callback(null,'');
    }
})
  const upload = multer({ storage });
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
       if (a=="teacher"){
        app.get('/api/output', (req, res) => {
            
        
            info=req.user;
            
            res.send(req.user);
            
    
        });
        res.redirect("/login");
       }
       if (a=="student"){
        app.get('/api/output1', (req, res) => {
           
            app.get('/api/output', (req, res) => {
    
               
                
                res.send("");
                
        
            });   
            info=req.user;
            
            res.send(req.user);
            
    
        });
       res.redirect("/paper");
       }else{
           
           res.send("");
       }
        
    }
        
    );
    
    app.get("/api/logout", (req, res) => {
        req.logout();
        app.get('/api/output', (req, res) => {

        
                
                
            res.send("");
            
    
        });
        app.get('/api/output1', (req, res) => {

        
                
                
            res.send("");
            
    
        });
        res.redirect("/");
    });
    var info="";
    
    app.post('/api/stack',(req,res)=>{
        var answers=req.body;
        
        res.send(answers)
    })
    app.post('/api/stack1',(req,res)=>{
        var answers=req.body;
        console.log("hola",answers[1].props);
        res.send(answers);
    })
   
    var b='';
    var file1="";
    var q1="";
    var q="";
    app.post("/api/submit2",(req,res)=>{
        q=req.body;
        
        console.log("No of questions",q.
        
        
        
        
        
        
        questions);
        
    })
    app.post('/api/submit',(req,res)=>{
        
        
        console.log("wola",req.files.file);
        const file=req.files.file;
        var id=customId(file);
        console.log("file",file);
        upload.single(file);
        const params={
                Bucket:"exam-rahul-vemuri-12",
                Key:id,
                Body: file.data,
                name:file.name,
                ContentType:file.mimetype                   
        }
        s3.upload(params,(error,data)=>{
                if(error){
                    res.status(500).send(error);
                }
                res.status(200).send(data);
        })
        File.findOne({_id:info.googleId}).then((existingUser)=>{
            if(existingUser){
                console.log("in to delete");
               File.deleteOne({_id:info.googleId}).then(()=>{
                   console.log("data deleted");
               });
                
            }
            if(info.googleId){
                console.log("wolab",{googleId:info.googleId,email:info.email[0].value,name:file.name,files:file});
                new File({_id:info.googleId,email:info.email[0].value,name:file.name,files:file,questions:q.questions,pdf_id:id}).save();
            }
            
          
        })
         
          file.mv(`/client1/build/media/${file.name}`,err=>{
            if(err){
                console.log(err);
                return res.status(500).send(err);
            }
        });
      
      
        

})
var googleId="";
app.post("/api/submit4",(req,res)=>{
    googleId=req.body.id;
    console.log("This id",googleId);
})
app.get("/api/submit3",(req,res)=>{
    console.log("required name",googleId)
    var name1="";
    if(info.googleId!=undefined){
    File.findOne({_id:googleId},(err,user)=>{
        if(user!=null){
        name1=user.name;
        const params={
            Bucket:"exam-rahul-vemuri-12",
            Key:user.pdf_id
                          
    }
       
        s3.getSignedUrl('putObject',params,(err,data)=>{
            
                console.log("krishna",data);
                var url="";
                for (var i=0;i<data.length;i++){
                    if(data[i]=='?')
                        break
                    else
                        url=url+data[i];    
                }
                res.send({user1:user.name,q:user.questions,url1:url});
         })
        
        }else{
            res.send("no data");
        }
    })
}
})




}
    


