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
let opArray = [];

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
let numArray = [];
let sum;
let data = [];
let num;
let a;
let boolNegative = false;
let opPressed = false;
let opp = [];
sumPress = false;

let currentOp;

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
            if(display.textContent.length < 9){
            text = button.textContent;
             displayArray.push(text);
             num = displayArray.join("");
             display.textContent = negativeDisplay();
            };
    });
});

function symbol(sym){
    display.textContent = sym;
};


const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", ()=>{
    if(opArray.length == 2){

    } else{
         opArray.push("3o")
         console.log("pushing");
        };

    symbol("*");
    if(sumPress == false){
    numArray.push(Number(num));
    console.log("else");
    displayArray = [];
    };

    if(numArray.length == 2){
        delegateOPS("*", "3o");
       opArray.shift();
    };

});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", ()=>{
    if(opArray.length == 2){

    } else{
         opArray.push("4o")
         console.log("pushing");
        };

    symbol("/");
    if(sumPress == false){
    numArray.push(Number(num));
    console.log("else");
    displayArray = [];
    };

    if(numArray.length == 2){
        delegateOPS("/", "4o");
       opArray.shift();
    };

});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click",() =>{
    if(opArray.length == 2){

    } else{
         opArray.push("2o")
         console.log("pushing");
        };

    symbol("-");
    if(sumPress == false){
    numArray.push(Number(num));
    console.log("else");
    displayArray = [];
    };

    if(numArray.length == 2){
        delegateOPS("-", "2o");
       opArray.shift();
    };

})

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
    if(opArray.length == 2){

    } else{
         opArray.push("1o")
         console.log("pushing");
        };

    symbol("+");
    if(sumPress == false){
    numArray.push(Number(num));
    console.log("else");
    displayArray = [];
    };

    if(numArray.length == 2){
        delegateOPS("+", "1o");
       opArray.shift();
    };

});

function delegateOPS(sym, baseOp,){
    console.log(currentNum, num, sum, numArray, opArray, display.textContent);
        sum = operate(numArray[0], numArray[1], opArray[0]);
        numArray = [];
        numArray.push(Number(sum));
        currentNum = Number(num);
        num = null;
        numArray.pop;
        display.textContent = sum;
        sum = null;
        console.log(currentNum, num, sum, numArray, opArray, display.textContent);
};

const sumButton = document.querySelector("#sum");
sumButton.addEventListener("click", ()=>{
    console.log(currentNum, num, sum, numArray, opArray, display.textContent);
    if(numArray.length == 0){
        if(sumPress == true){

            sumPress = false;
        }
    } else if(opArray.length == 2){
            numArray.push(Number(num));

            opArray.pop();
            sum = operate(numArray[0], numArray[1], opArray[0]);
            currentNum = Number(sum);
            numArray = [];
            numArray.push(Number(sum));
            num = null;
            display.textContent = sum;
            displayArray = [];
            opArray = []
        } else{
        numArray.push(Number(num));

        sum = operate(numArray[0], numArray[1], opArray[0]);
        currentNum = Number(sum);
        numArray = [];
        numArray.push(Number(sum));
        num = null;
        display.textContent = sum;
        displayArray = [];
        opArray = [];
        };
        sumPress = true;
        console.log(sumPress);


    

    //console.log("------SUM------")
    //console.log(displayArray + " Display array");
   // console.log(display.textContent + " text Content");
    //console.log(numArray + " numArray");
    //console.log("------SUM------")
});

const negativeButton = document.querySelector("#negative");
negativeButton.addEventListener("click", () =>{
    if(boolNegative == false){
        num = -Math.abs(num);
        display.textContent = num;
        boolNegative = true;
    } else {
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
clearButton.addEventListener("click", ()=>{
    numArray = [];
    displayArray = [];
    sum = null;
    display.textContent = "";
    opPressed = false;
})