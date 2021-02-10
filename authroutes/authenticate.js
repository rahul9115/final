const passport = require('passport');
var a="";
const fileupload=require('express-fileupload');
const fs=require('fs');
var FileManager = require('file-storage');
require('../models/file')
require('../models/student')
require('../models/answer')
var object1={};
const mongoose=require('mongoose');
const { Binary } = require('mongodb');
const File=mongoose.model('files');
const student=mongoose.model('student');
const answer=mongoose.model('answers');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var customId=require("custom-id");
var axios=require("axios");
const AWS=require('aws-sdk');
const crypto=require("crypto");
const multer=require("multer");
const { CostExplorer } = require('aws-sdk');
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
   app.set("view engine","ejs");
   app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
   app.use(cors());
   app.use(cookieParser());
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));
   
    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
        app.post("/api/state",(req,res)=>{
            console.log("This",req.body.profile);
            a=req.body.profile;
        })
       if (a=="teacher"){
       
       
        res.redirect("/login");
    }
       if (a=="student"){
        app.get('/api/output1', (req, res) => {
            console.log("wolabbi")
            
            info=req.user;
            
            res.send(req.user);
            
        
        });  
    res.redirect("/paper");
    }

 });
 app.get('/api/output', (req, res) => {
    console.log("wolabbi")
    
    info=req.user;
    
    res.send(req.user);
    

});   
 
 
    app.get("/api/logout", (req, res) => {
        req.logout();
        app.get("/api/output",(req,res)=>{
            res.send("");
        })
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
    var teacher_answers=[];
    var student_answers=[];
    app.post("/api/submit5",(req,res)=>{
        console.log(req.body)
        teacher_answers=req.body;
    });
    app.post("/api/answers",(req,res)=>{
        console.log(req.body)
        student_answers=req.body
    })  
    
    app.post('/api/submit',(req,res)=>{
        
        
        console.log("wola",req.files.file);
                  
        const file=req.files.file;
        id=customId(file);
        upload.single(file);
        const params={
                Bucket:"examanandvemuri1",
                Key:id,
                Body: file.data,
                name:file.name,
                ContentType:file.mimetype                   
        }
        s3.upload(params,(error,data)=>{
                if(error){
                    console.log(error)
                }
                res.status(200).send(data);
        })
        console.log("file",file);
        File.findOne({_id:info.googleId}).then((existingUser)=>{
            if(existingUser){
                console.log("in to delete");
               File.deleteOne({_id:info.googleId}).then(()=>{
                   console.log("data deleted");
               });
                
            }
            if(info.googleId){
                console.log("wolab",{googleId:info.googleId,email:info.email[0].value,name:file.name,files:file});
                new File({_id:info.googleId,email:info.email[0].value,name:file.name,files:file,questions:q.questions,pdf_id:id,answers:teacher_answers}).save();
            }
            
          
        })
       
          
      
      
        

})
var googleId="";



var teacher_answers1=[];
app.post("/api/submit3",(req,res)=>{
    googleId=req.body.id;
    console.log("This id",googleId);
    console.log(googleId)
    var name1="";
    if(info.googleId!=undefined){
    File.findOne({pdf_id:googleId},(err,user)=>{
        if(user!=null){
        student.findOne({pdf_id:googleId,_id:info.googleId}).then((existingUser)=>{
            console.log(existingUser);
           
                console.log("in")
                new student({_id:info.googleId,email:info.email[0].value,pdf_id:googleId}).save();
                const params={
                    Bucket:"examanandvemuri1",
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
                object1={user1:user.name,q:user.questions,url1:url};
         })
        teacher_answers1=user.answers; 
        console.log("teacher",teacher_answers1)
           
        })
        
        
       
        
        
        }else{
            res.send("no data");
        }
       
    })
}
})



app.get("/api/submit3",(req,res)=>{
    res.send(object1);
})
    

        
    
    app.get("/api/score",(req,res)=>{
        var score=0;
        console.log("teacher",teacher_answers1,student_answers);
        for(var i=0;i<teacher_answers1.length;i++){
            for(var j=0;j<student_answers.length;j++){
                if(teacher_answers1[i].q_no==student_answers[j].q_no){
                    console.log(teacher_answers1[i].q_no,student_answers[i].q_no)
                    if(teacher_answers1[i].answer==student_answers[j].answer)
                        score=score+1;
                }
            }
        }
        answer.findOne({_id:info.googleId,pdf_id:googleId}).then((user)=>{
            if(user){
                res.send("Sorry you have already given the test");
            }else{
                new answer({_id:info.googleId,email:info.email[0].value,pdf_id:googleId,student_score:score,answers:student_answers}).save().then(()=>{
                    res.send("Thank you for giving the test");
                });
            }
        })
      
})


}
    



