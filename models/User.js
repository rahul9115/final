const mongoose=require("mongoose");
const dataSchema=mongoose.Schema({
    googleId: String,
    name: String
});
module.exports=mongoose.model('users',dataSchema);