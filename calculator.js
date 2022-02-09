// Function to add any quantity of values together.
const add = function (array) {
    let result = 0;
    for (const number of array) {
        result += number;
    };
    return result;
};

// Function to multiply any quantity of values together.
const multiply = function (array) {
    let result = (array.length === 0) ? 0 : 1;
    for (const number of array) {
        result *= number;
    };
    return result;
};

// Function to subtract any quantity of values from each other.
const subtract = function (array) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result -= array[i];
    };
    return result;
}

// Function to divide one value by another. 
const divide = function(array) {
    let result = 0;
    if (array[1] === 0) {
        result = "ERROR";
    } else {
        result = array[0] / array[1];
    }
    return result; 
}

// Function which takes an operator and an array of values.
// Passes the array to the corresponding operation function & returns the result.
const operate = function (operator, array) {
    if (operator === "add") {
        return add(array);
    } else if (operator === "subtract") {
        return subtract(array);
    } else if (operator === "multiply") {
        return multiply(array);
    } else if (operator === "divide") {
        return divide(array);
    }
}

// Holds the values to show in the display and history.
let displayValue = "";
let historyValue = "";

let firstValue = "";
let operator = "";

// Function to update the primary display.
const updateDisplay = function (number) {
    const displayDiv = document.querySelector('.currentNumber');
    displayDiv.textContent = number;
}

// Function to update the secondary "history" display.
const updateHistory = function (string) {
    const historyDiv = document.querySelector('.history');
    historyDiv.textContent = string;
}

//Establishing each button on the calculator:

const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {
    displayValue = displayValue + "0";
    updateDisplay(displayValue);
    historyValue = historyValue + "0";
    updateHistory(historyValue);
});

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    displayValue = displayValue + "1";
    updateDisplay(displayValue);
    historyValue = historyValue + "1";
    updateHistory(historyValue);
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    displayValue = displayValue + "2";
    updateDisplay(displayValue);
    historyValue = historyValue + "2";
    updateHistory(historyValue);
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    displayValue = displayValue + "3";
    updateDisplay(displayValue);
    historyValue = historyValue + "3";
    updateHistory(historyValue);
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    displayValue = displayValue + "4";
    updateDisplay(displayValue);
    historyValue = historyValue + "4";
    updateHistory(historyValue);
});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
    displayValue = displayValue + "5";
    updateDisplay(displayValue);
    historyValue = historyValue + "5";
    updateHistory(historyValue);
});

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {
    displayValue = displayValue + "6";
    updateDisplay(displayValue);
    historyValue = historyValue + "6";
    updateHistory(historyValue);
});

const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', () => {
    displayValue = displayValue + "7";
    updateDisplay(displayValue);
    historyValue = historyValue + "7";
    updateHistory(historyValue);
});

const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {
    displayValue = displayValue + "8";
    updateDisplay(displayValue);
    historyValue = historyValue + "8";
    updateHistory(historyValue);
});

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
    displayValue = displayValue + "9";
    updateDisplay(displayValue);
    historyValue = historyValue + "9";
    updateHistory(historyValue);
});

// OnClick events for the operator buttons:

const btnPlus = document.querySelector('#btnPlus');
btnPlus.addEventListener('click', () => {
    if (firstValue === "") {
        firstValue = displayValue;
    }
    historyValue = historyValue + " + ";
    operator = "add";
    updateHistory(historyValue);
    displayValue = "";
});

const btnMinus = document.querySelector('#btnMinus');
btnMinus.addEventListener('click', () => {
    if (firstValue === "") {
        firstValue = displayValue;
    }
    historyValue = historyValue + " - ";
    operator = "subtract";
    updateHistory(historyValue);
    displayValue = "";
});

const btnMultiply = document.querySelector('#btnMultiply');
btnMultiply.addEventListener('click', () => {
    if (firstValue === "") {
        firstValue = displayValue;
    }
    historyValue = historyValue + " × ";
    operator = "multiply";
    updateHistory(historyValue);
    displayValue = "";
});

const btnDivide = document.querySelector('#btnDivide');
btnDivide.addEventListener('click', () => {
    if (firstValue === "") {
        firstValue = displayValue;
    }
    historyValue = historyValue + " ÷ ";
    operator = "divide";
    updateHistory(historyValue);
    displayValue = "";
});

// OnClick events for functional buttons (Clear, Delete, Equals)

const btnDelete = document.querySelector('.btnDelete');
btnDelete.addEventListener('click', () => {
    displayValue = displayValue.slice(0,-1);
    updateDisplay(displayValue);
    historyValue = historyValue.slice(0, -1);
    updateHistory(historyValue);
});

const btnClear = document.querySelector('.btnClear');
btnClear.addEventListener('click', () => {
    displayValue = "";
    updateDisplay(displayValue);
    historyValue = "";
    updateHistory(historyValue);
    firstValue = "";
});

const btnEquals = document.querySelector('#btnEquals');
btnEquals.addEventListener('click', () => {
    let array = [parseInt(firstValue), parseInt(displayValue)];
    let result = operate(operator, array);
    result = result.toFixed(0);
    firstValue = result;
    updateDisplay(result);
    displayValue = "";
    historyValue = firstValue;
});