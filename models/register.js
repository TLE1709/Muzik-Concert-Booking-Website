const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    }
})

//now we need to create a collection
const Register= new mongoose.model("Register",userSchema);

module.exports=Register;
