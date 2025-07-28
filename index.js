
const express=require("express");
const app=express();
const stuRoute=require("./Routes/stuRoutes");
const mongoose=require("mongoose");
const bodyParser = require('body-parser')
app.set("view engine","ejs");
app.use("/", stuRoute);
app.use(express.static("./public"));
mongoose.connect("mongodb://127.0.0.1:27017/ramdb").then(()=>{
    console.log("connected to database");
})

//Body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})