const passport = require('passport');
const mongoose=require('mongoose');
const user1=require("../models/User")
const User=mongoose.model('users');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require("../keys/key");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rahul:rahul@cluster0.rpfjy.mongodb.net/<dbname>?retryWrites=true&w=majority";
passport.serializeUser((data, done) => {
  
  done(null, data.id);

});
passport.deserializeUser((id, done) => {
  console.log("i am just out");
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(new GoogleStrategy({
  clientID: key.clientID,
  clientSecret: key.clientSecret,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  console.log("wola",profile);
    User.findOne({googleId:profile.id,name:profile.name,email:profile.emails}).then((existingUser)=>{
      if(existingUser){
        done(null,existingUser)
      }else{
        new User({googleId:profile.id,name:profile.name,email:profile.emails}).save().then(user=>{done(null,user)});
      }

    })
    
        
        

     

    




 

}
));






