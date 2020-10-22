const mongoose=require("mongoose");
const dataSchema1=new mongoose.Schema({
    name: String,
    files:Object
});
module.exports=mongoose.model('files',dataSchema1);