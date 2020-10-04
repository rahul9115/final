const passport = require('passport');

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));
    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
        console.log("Hello");
       res.redirect("/login");
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

}