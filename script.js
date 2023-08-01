let operators = document.querySelectorAll(".operator"); 
let numbers = document.querySelectorAll(".number"); 
let display = document.querySelector(".display");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");
let operand = '';
let nbr1 , nbr2; 

numbers.forEach(number => {
  number.addEventListener("click",() => {
    display.innerHTML += number.innerHTML;
  })

});
operators.forEach(oper => {
    oper.addEventListener("click", () =>{
        nbr1 = Number.parseFloat(display.innerHTML);
        operand = oper.innerHTML;
        display.innerHTML = "";
        console.log(nbr1); 
        console.log(operand);
    })

});
result.addEventListener("click",()=> {
    if(!nbr1 || display.innerHTML ==="" || operand ===''){
        return false ; 
    }else {
        nbr2 = Number.parseFloat(display.innerHTML); 
        switch(operand){
            case "+" : display.innerHTML = nbr1 +nbr2 ;
                       break; 
            case "*" : display.innerHTML = nbr1 * nbr2 ;
                       break; 
            case "/" : display.innerHTML = nbr1 / nbr2 ;
                       break; 
            case "-" : display.innerHTML = nbr1 - nbr2 ;
                       break;    
            case "%" : display.innerHTML = nbr1 % nbr2 ;
                       break;      
        }
    }
});
clear.addEventListener("click", () => {
    display.innerHTML = ""; 
    operand = ""; 
    nbr1 = 0; 
    nbr2 = 0; 
}); 
del.addEventListener("click",()=>{
    display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length -1);
})