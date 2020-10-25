const mongoose=require("mongoose");
const dataSchema1=new mongoose.Schema({
    _id:String,
    email:Object,
    name: String,
    files:Object

});
module.exports=mongoose.model('files',dataSchema1);