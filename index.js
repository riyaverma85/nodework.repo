
const express=require("express");
const app=express();
const stuRoute=require("./Routes/stuRoutes");
const bodyParser = require('body-parser')
app.set("view engine","ejs");
app.use("/", stuRoute);
app.use(express.static("./public"));

//Body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})