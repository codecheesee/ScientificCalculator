let currentInput = "";
let currentOperation = "";
let firstInput = "";
let memory = 0;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    firstInput = "";
    currentOperation = "";
    document.getElementById("display").value = "";
}

function performOperation(operation) {
    if (firstInput === "") {
        firstInput = currentInput;
        currentInput = "";
        currentOperation = operation;
    } else {
        calculate();
        currentOperation = operation;
    }
}

function calculate() {
    let result = 0;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstInput) / parseFloat(currentInput);
            break;
        case 'sqrt':
            result = Math.sqrt(parseFloat(currentInput));
            break;
        case '^':
            result = Math.pow(parseFloat(firstInput), parseFloat(currentInput));
            break;
        case 'ex':
            result = Math.pow(Math.E, parseFloat(currentInput));
            break;
        case 'ln':
            result = Math.log(parseFloat(currentInput));
            break;
        case 'sin':
            result = Math.sin(parseFloat(currentInput));
            break;
        case 'asin':
            result = Math.asin(parseFloat(currentInput));
            break;
        case 'cos':
            result = Math.cos(parseFloat(currentInput));
            break;
        case 'acos':
            result = Math.acos(parseFloat(currentInput));
            break;
        case 'tan':
            result = Math.tan(parseFloat(currentInput));
            break;
        case 'atan':
            result = Math.atan(parseFloat(currentInput));
            break;
        case 'neg':
            result = -parseFloat(currentInput);
            break;
    }
    document.getElementById("display").value = result;
    firstInput = result;
    currentInput = "";
}

function store() {
    memory = parseFloat(document.getElementById("display").value);
}

function recall() {
    document.getElementById("display").value = memory;
    currentInput = memory.toString();
}
