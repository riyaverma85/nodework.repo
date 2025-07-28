
const stuModel=require("../models/stuModel")
const homepage=(req,res)=>{
    res.render("home");
}
const insertpage=(req,res)=>{
    res.render("insert");
}
const stuSave=async(req,res)=>{
    const {nm,ct,pst,sal}=req.body;
    const stuData=await stuModel.create({
        name:nm,
        city:ct,
        post:pst,
        salary:sal
    })
    console.log(req.body)
    res.render("insert")
}


module.exports={
    homepage,
    insertpage,
    stuSave
}