
const express=require("express");
const app=express();
const stuRoute=require("./Routes/stuRoutes");
app.set("view engine","ejs");
app.use("/", stuRoute);


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})