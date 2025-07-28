
const stuModel=require("../models/stuModel")
const homepage=(req,res)=>{
    res.render("home");
}
const insertpage=(req,res)=>{
    res.render("insert");
}
const stuSave=async(req,res)=>{
    const {name,city,post,salary}=req.body;
    const stuData= await stuModel.create({
        name:name,
        city:city,
        post:post,
        salary:salary
    })
    console.log(req.body);
    res.render("insert")
}


module.exports={
    homepage,
    insertpage,
    stuSave
}