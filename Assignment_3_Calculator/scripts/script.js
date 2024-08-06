
let currentOperation = null;
let firstOperand = null;
let memory = 0;

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function setOperation(operation) {
    firstOperand = parseFloat(document.getElementById('result').value);
    currentOperation = operation;
    document.getElementById('result').value = '';
}

function clearResult() {
    document.getElementById('result').value = '';
    firstOperand = null;
    currentOperation = null;
}

function clearEntry() {
    document.getElementById('result').value = '';
}

function toggleSign() {
    let currentValue = document.getElementById('result').value;
    if (currentValue) {
        document.getElementById('result').value = parseFloat(currentValue) * -1;
    }
}

function calculateSquareRoot() {
    let currentValue = parseFloat(document.getElementById('result').value);
    if (currentValue >= 0) {
        document.getElementById('result').value = Math.sqrt(currentValue);
    }
}

function calculateInverse() {
    let currentValue = parseFloat(document.getElementById('result').value);
    if (currentValue !== 0) {
        document.getElementById('result').value = 1 / currentValue;
    }
}

function calculateResult() {
    const secondOperand = parseFloat(document.getElementById('result').value);
    let result = null;
    if (currentOperation && firstOperand != null) {
        switch (currentOperation) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        document.getElementById('result').value = result;
        firstOperand = null;
        currentOperation = null;
    }
}

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    document.getElementById('result').value = memory;
}

function storeMemory() {
    memory = parseFloat(document.getElementById('result').value);
}

function addToMemory() {
    memory += parseFloat(document.getElementById('result').value);
}

function subtractFromMemory() {
    memory -= parseFloat(document.getElementById('result').value);
}

function minimizeCalculator() {
    document.querySelector('.calculator-card').classList.toggle('minimized');
}

function maximizeCalculator() {
    document.querySelector('.calculator-card').classList.toggle('maximized');
}

function closeCalculator() {
    document.querySelector('.calculator-card').style.display = 'none';
}

document.getElementById('result').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateResult();
    }
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+') {
        setOperation('+');
    } else if (key === '-') {
        setOperation('-');
    } else if (key === '*') {
        setOperation('*');
    } else if (key === '/') {
        setOperation('/');
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearResult();
    }
});