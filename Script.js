// CALCULATOR BODY
const inputfield = document.getElementById("inputfield");
const key = document.getElementById("calculator");
const header = document.getElementById("header");

// BACKSPACE AND AC KEYS
let Backspace = document.getElementById("bcksp").addEventListener("click", backspace);
let reset = document.getElementById("clear").addEventListener("click", clear);

//THEMES
let radio1 = document.getElementById("radio1").addEventListener("click", Radio1);
let radio2 = document.getElementById("radio2").addEventListener("click", Radio2);
let radio3 = document.getElementById("radio3").addEventListener("click", Radio3);

//ON AND OFF BUTTON
let Toggle = document.getElementById("switch");

// EVENT LISTENERS
Toggle.addEventListener("click", toggle);
key.addEventListener("click", calc_key);

//  GLOBAL VARIABLES
let OFF = true;
let currentValue = "";
let previousAnswer = "";


//ON AND OFF BUTTON
function toggle() {
    if (OFF) {
        console.log("true oo");
        inputfield.placeholder = "0";
        Toggle.innerHTML = "OFF";
        OFF = false;
    }
    else {
        inputfield.value = "";
        inputfield.placeholder = "";
        Toggle.innerHTML = "ON";
        console.log("False oo")
        OFF = true;
    }
};

function calc_key(event) {
    if (OFF) {
        inputfield.value = "";
    }
    else {
        if (event.target.value) {
            inputfield.value += event.target.value;
        }
    }
      if (inputfield.value === "NaN") {
        console.log("error")
        inputfield.value = 0;
      }
}

//BACKSPACE AND CLEAR KEYS
function backspace() {
    inputfield.value = inputfield.value.slice(0, -1);
};
function clear() {
    if (OFF) {
        inputfield.value = "";
    }
    else {
        inputfield.value = "";
        inputfield.placeholder = "0";
    }
};

//KEYS
function appendToDisplay(value) {
    const currentValue = inputfield.value;

    // Prevent multiple operators and invalid sequences
    const isLastCharOperator = /[+\-*/]$/.test(currentValue);
    const isLastCharEmpty = currentValue === '';

    //PREVENT MULTIPLE DOTS IN A NUMBER
    if (value === ".") {
        const lastNumber = getLastNumber();
        if (lastNumber.includes(".")) {
            return;
        }
    }
    // Prevent multiple operators or starting with an operator
    if (['+', '-', '*', '/'].includes(value)) {
        if (isLastCharOperator || isLastCharEmpty) {
            return;
        }
    }
    
    function getLastNumber() {
        const operators = ["+", "-", "*", "/"];
        let lastNumber = currentValue.split(new RegExp(`[\\${operators.join("\\")}]`)).pop();
        return lastNumber || "";
    }

    // Prevent multiple operators or starting with an operator
    if (['+', '-', '*', '/'].includes(value)) {
        if (isLastCharOperator || isLastCharEmpty) {
            return;
        }
    }
    
    // Append value to the display
    inputfield.value += value;
}


//EQUAL TO BUTTON (=)
function calculate() {
    try {
        // Evaluate the expression and display the result
        currentValue = inputfield.value;
        previousAnswer = eval(currentValue);
        inputfield.value = previousAnswer;
        currentValue = "";
    } catch {
        // If there's an error, clear the display
        inputfield.value = 'Error';
    }
}

//SHOW PREVIOUS ANSWER (ANS)
function showPreviousAnswer() {
    inputfield.value = previousAnswer;
}

//THEMES
function Radio1() {
    document.body.style.backgroundColor = "rgb(102, 223, 231)";
    inputfield.style.backgroundColor = "teal";
    key.style.backgroundColor = "teal";
    header.style.backgroundColor = "teal";
    inputfield.style.color = "white";
    header.style.borderRadius = "10px";
};
function Radio2() {
    document.body.style.backgroundColor = "rgb(213, 219, 223)";
    inputfield.style.backgroundColor = "rgb(196, 205, 212)";
    key.style.backgroundColor = "rgb(163, 171, 182)";
    inputfield.style.color = "black";
    header.style.backgroundColor = "rgb(163, 171, 182)";
    header.style.borderRadius = "10px";
};
function Radio3() {
    document.body.style.backgroundColor = "rgb(1, 4, 20)";
    inputfield.style.backgroundColor = "rgb(1, 39, 70)";
    key.style.backgroundColor = "rgb(1, 39, 70)";
    inputfield.style.color = "white";
    header.style.backgroundColor = "rgb(1, 39, 70)";
    header.style.borderRadius = "10px";
};