const express=require('express');
const app=express();
const path=require("path");
const bodyParser=require("body-parser");
const Register=require("./models/register.js");

require("./db/conn.js");

let userName;
let aage;
let ggender;
let pphonenumber;
let eemail;

let emails=[];
let names=[];
let pno=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//Routing
app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");
});


app.get("/events",function(req,res){

    res.send("Welcome to events page");
});

// app.get("/register",function(req,res){

//     res.sendFile(__dirname+"/signup.html");
// })

app.post("/register",async (req,res) => {

    try{
        const pno=req.body.phonenumber;
        
        const registerUser=new Register({
            fullname:req.body.fullname,
            password:req.body.password,
            age:req.body.age,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
            gender:req.body.gender
        })
        
       const registered= await registerUser.save();
       res.status(201).send("Account Successfully Created");
    }
    catch(err){
        res.status(400).send(err+ "Failed to Create Account Please TryAgain");
    }
    });


    app.post("/login",async (req,res)=>{

        try{
        const email=req.body.email;
        const password=req.body.password;

        //Isme left wala email database ka aur right wala email req.body.email wala
        const useremail=await Register.findOne({email:email});
           userName= useremail.fullname;
            aage=useremail.age;
            ggender=useremail.gender;
            pphonenumber=useremail.phonenumber
            eemail=useremail.email;
        //    console.log(userName);
        if(useremail.password===password){
            res.status(201).redirect("/homepage.html");
        }else{
            res.send("Invalid Credentials Please Try Again");
        }}catch(err){
            res.status(400).send("Invalid Login Credentials");
        }
    });

    module.exports={userName,aage,ggender,pphonenumber,eemail};

app.get("*",function(req,res){

    res.send("404 Error ");
});

app.post("/",function(req,res){

    console.log(req.body.fname);
    console.log(req.body.email);
    console.log(req.body.pno);    


emails.push(req.body.email);
names.push(req.body.fname);
pno.push(req.body.pno);

console.log(emails+" "+ names +" " +pno);

    res.redirect("/");
});


app.listen(8000||process.env.PORT,function(){
    console.log("Server is Running at 8000");
});