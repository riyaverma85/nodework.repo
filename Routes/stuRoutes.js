
const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController");

route.get("/",stuController.homepage)
route.get("/insert",stuController.insertpage)


module.exports=route;