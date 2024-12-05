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

