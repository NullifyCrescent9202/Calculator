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
let num;
let a;
let b;
let boolNegative = false;

function negativeDisplay(){
    if(boolNegative == true){
        num = -Math.abs(num);
        console.log(negative);
        return num;
    } else{
        return num;
    }
}

decimal.addEventListener("click", () =>{
    if(display.textContent.length < 9){
        text = ".";
         if(displayArray.includes(".")){
             } else{
                displayArray.push(".");
                num = displayArray.join("");
                display.textContent = num;
             };
    };
});


numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
         console.log(displayArray)
            if(display.textContent.length < 9){
            text = button.textContent;
             displayArray.push(text);
             num = displayArray.join("");

             console.log(num);
             display.textContent = negativeDisplay();
             console.log(displayArray);
             console.log(num);
            };
    });
});

const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const sumButton = document.querySelector("#sum");
const negativeButton = document.querySelector("#negative");

negativeButton.addEventListener("click", () =>{
    if(boolNegative == false){
        num = -Math.abs(num);
        display.textContent = num;
        boolNegative = true;
    } else if(bool == true){
        num = Math.abs(num);
        display.textContent = num;
        boolNegative = false;
    };
});

const percentButton = document.querySelector("#percent");
percentButton.addEventListener("click", ()=>{
    console.log("hello");
    let n = num / 100;
    num = n;
    if(n > 1){
        num = 0; 
        display.textContent = num;
    } else if(n == 0){
            num = 0;
            display.textContent = num;
        } else{
            display.textContent = num.toFixed(5);
        }
});


const clearButton = document.querySelector("#clear")
