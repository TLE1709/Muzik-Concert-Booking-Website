let loader=document.getElementById("loader");

function myloader(){

    loader.style.display='none';
}

let copyright=document.getElementsByClassName("copyright")[0];
const d = new Date();
let year = d.getFullYear();
copyright.innerHTML="© Copyright "+year;