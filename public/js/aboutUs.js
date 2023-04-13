//Animate Counter

const counterNum=document.querySelectorAll(".counter-numbers");

const speed=200;


counterNum.forEach((curElem)=>{

    const updateNumber = () =>{
            
        const targetNumber=parseInt(curElem.dataset.number);
    
        const initialNum=parseInt(curElem.innerText);
        
        const incrementNumber = Math.trunc(targetNumber/speed);

        if(initialNum<targetNumber){
            curElem.innerText=`${initialNum+incrementNumber}+`;
            setTimeout(updateNumber,10);
        }
    };

updateNumber();
})