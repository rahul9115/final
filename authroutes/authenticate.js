const passport = require('passport');

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));
    app.get('/auth/google/callback', (req,res)=>{
        console.log("Hello");
       res.redirect("/login");
    }
        
    );

}