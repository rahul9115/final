const mongoose=require("mongoose");
const dataSchema1=new mongoose.Schema({
    _id:String,
    email:Object,
    pdf_id:String,
    answers:Array,
    student_score:Number


});
module.exports=mongoose.model('answers',dataSchema1);