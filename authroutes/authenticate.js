const passport = require('passport');
var a="";
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
        res.redirect("http://localhost:3000/");
    });
    app.get('/api/output', (req, res) => {

        console.log("in");
        res.send(req.user);


    });
    app.post('/api/stack',(req,res)=>{
        var answers=req.body;
        console.log("hola",answers);
        res.send(answers)
    })

}