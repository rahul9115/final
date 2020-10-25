const mongoose=require("mongoose");
const dataSchema=mongoose.Schema({
    googleId: String,
    name: Object,
    email:Object
});
module.exports=mongoose.model('users',dataSchema);