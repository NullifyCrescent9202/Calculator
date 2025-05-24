function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(a && b == 0){
        return "Nice Try";
    } else 
    return a / b;
}


let preNum  = null;

let currentNum = null;

let operand = ["1o", "2o", "3o", "4o"] 

function operate(num1, num2, op){
    if(op === "1o"){
        return add(num1, num2);
    } else if(op === "2o"){
        return subtract(num1, num2);
    } else if(op === "3o"){
        return multiply(num1, num2);
    } else if (op === "4o"){
        return divide(num1, num2);
    }
}

const con = document.querySelector(".con");
const display = document.querySelector(".display > h1");
const numberButtons = document.querySelectorAll(".number");
const decimal = document.querySelector("#decimal");

let displayArray = [];

let data = [];
let x = false;


decimal.addEventListener("click", () =>{
    if(display.textContent.length < 9){
        text = ".";
         if(displayArray.includes(".")){
                let x = true;
                console.log("true");
             } else{
                displayArray.push(".");
                let num = displayArray.join("");
                display.textContent = num;
                console.log(displayArray);
                let x = true;
             };
    };
});



numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
         console.log(displayArray)
            if(display.textContent.length < 9){

            text = button.textContent;
             displayArray.push(text);
             let num = displayArray.join("");
             display.textContent = num;
             console.log(displayArray);

            }
    });
});




