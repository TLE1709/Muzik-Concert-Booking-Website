let copyright=document.getElementsByClassName("copyright")[0];
const d = new Date();
let year = d.getFullYear();
copyright.innerHTML="© Copyright "+year;



// let loader=document.getElementById("loader");

// function myloader(){

//     loader.style.display='none';
// }

const arr=["We dont want to tell our dreams,we want to show them","Age is no barrier It is a limitation that you put in your mind","Music is my escape from chaotic world","Sometimes music is the only medicine heart and soul needs"];

let i=Math.floor(Math.random()*arr.length);

document.getElementById("motivation-quotes").innerHTML=arr[i];


