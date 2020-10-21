const mongoose=require("mongoose");
const dataSchema1=new mongoose.Schema({
    data:Buffer
});
module.exports=mongoose.model('files',dataSchema1);