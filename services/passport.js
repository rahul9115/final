const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require("../keys/key");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rahul:rahul@cluster0.rpfjy.mongodb.net/<dbname>?retryWrites=true&w=majority";
passport.use(new GoogleStrategy({
  clientID: key.clientID,
  clientSecret: key.clientSecret,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
  var myobj = { googleId: profile.id,name:profile.name,hd:profile.hd};
  MongoClient.connect(uri, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mongo");
    $exists = false;
    var collection = dbo.collection("customers");

    var value = collection.find(myobj);

    value.count(function (err, num) {
      if (err) {
        throw err;
      }
      console.log(num);


      if (num > 0) //if it does
      {
        console.log("Already present"); // print out what it sends back
        collection.findOne(myobj, (err, data) => {
          if (err) {
            throw err;
          }


        });
      }
      if (num === 0) // if it does not 
      {
        dbo.collection("customers").insertOne(myobj, function (err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          done
          db.close();
        });

      }
      collection.findOne(myobj, (err, data) => {
        if (err) {
          throw err;
        }
        console.log(data._id);
        console.log(data);
        var id = data._id;
        collection.findOne({ _id: id }).then(data => {
          done(null, data);
        });

        passport.serializeUser((data, done) => {
          console.log("i am in");
          done(null, data._id);

        });
        passport.deserializeUser((id, done) => {
          console.log("i am just out");
          collection.findOne({ _id: id }).then(user => {
            done(null, data);
          });
        });

      });

    });




  });

}
));






