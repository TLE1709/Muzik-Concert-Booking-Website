let copyright=document.getElementsByClassName("copyright")[0];
const d = new Date();
let year = d.getFullYear();
copyright.innerHTML="© Copyright "+year;

const {userName,age,gender,phonenumber,email}=require(".../server.js");
// var Name=["Krishna","Vishakha","Gurleen","Divjot"];
// var email=["k@gmail.com","v@gmail.com","g@gmail.com","delhi@gmail.com"];
// var Age=[21,21,21,22];
// var PhoneNumber=[123,456,789,111];
// var Gender=['Male',"Female","Female","Male"];

// let i=Math.floor(Math.random()*4);
// console.log(i);
let sex;

// if(Name[i]==="Divjot"){
//     sex="bhalu";
// }
// else if(Gender[i]==="Male"){
//     sex="man";
// }

// else{
//     sex="woman"
// }

if(gender==="Male" || gender=="male"){
    sex="man";
}

else{
    sex="woman";
}

document.getElementById("user-pic").src="photos/"+sex+".png";
document.getElementsByClassName("name")[0].innerHTML=userName;
document.getElementsByClassName("age")[0].innerHTML=age;
document.getElementsByClassName("email")[0].innerHTML=email;
document.getElementsByClassName("pno")[0].innerHTML=phonenumber;
document.getElementsByClassName("gender")[0].innerHTML=gender;
document.getElementsByClassName("greet-name")[0].innerHTML=userName;
