const mongoose=require("mongoose");
const express=require("express");

const app=express();

mongoose.connect("mongodb://localhost:27017/userDB",{
    
    //These are written to avoid Depreciating Warning
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection at 27017 Successfull");
}).catch((e)=>{
    console.log(e);
})