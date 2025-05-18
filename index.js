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
    return a / b;
}


let preNum  = null;

let currentNum = null;

let operand = [1, 2, 3, 4] 

function operate(num1, num2, op){
    if(op === 1){
        return add(num1, num2);
    } else if(op === 2){
        return subtract(num1, num2);
    } else if(op === 3){
        return multiply(num1, num2);
    } else if (op === 4){
        return divide(num1, num2);
    }
}

const con = document.querySelector(".con");
const display = document.querySelector(".display > h1");
const numberButtons = document.querySelectorAll(".number");

let displayArray = [];

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(display.textContent.length < 9){
            text = button.textContent;
        displayArray.push(text);
        let num = displayArray.join("");
        display.textContent = num;
        };
    });
});




