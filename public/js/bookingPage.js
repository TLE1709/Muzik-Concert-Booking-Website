let numberOftickets=0;

// document.getElementsByClassName("minus").addEventListener("click",minus);
// document.getElementsByClassName("plus").addEventListener("click",plus);


function minus(){
    if(numberOftickets===0){
        numberOftickets=0;
        document.getElementsByClassName("number-of-ticket")[0].innerHTML=numberOftickets;
    }
    else{
        numberOftickets=numberOftickets-1;
        document.getElementsByClassName("number-of-ticket")[0].innerHTML=numberOftickets;
    }
}

function plus(){

    numberOftickets=numberOftickets+1;
    document.getElementsByClassName("number-of-ticket")[0].innerHTML=numberOftickets;
}