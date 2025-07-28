
const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController");

route.get("/",stuController.homepage)
route.get("/insert",stuController.insertpage)
route.post("/save",stuController.stuSave)


module.exports=route;