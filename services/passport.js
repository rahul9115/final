const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const key=require("../keys/key");
passport.use(new GoogleStrategy({
    clientID: key.clientID,
    clientSecret: key.clientSecret,
    callbackURL: "/auth/google/callback"
},(accessToken,refreshToken,profile,done)=>{
    console.log(profile);
}))
