
const mongoose=require("mongoose");
const stuSchema=new mongoose.Schema({
    name:String,
    city:String,
    post:String,
    salary:Number
})

module.exports=mongoose.model("student",stuSchema);