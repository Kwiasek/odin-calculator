const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, a, b) => {
    if (operator == '+') return add(a, b);
    if (operator == '-') return subtract(a, b);
    if (operator == '*') return multiply(a, b);
    if (operator == '/') return divide(a, b);
}

let displayValue = 0;
let currentOperator = '';
let firstNum = [];
let secondNum = [];

let buttons = document.querySelectorAll('.button');


const changeDisplayNum = (displayValue) => {
    document.querySelector('.display').innerHTML = displayValue;
}

changeDisplayNum(displayValue);

const clear = () => {
    displayValue = 0;
    currentOperator = '';
    firstNum = [];
    secondNum = [];
    changeDisplayNum(displayValue)
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!currentOperator && (Number(button.innerHTML) || button.innerHTML == '.')) {
            if (firstNum.length < 11) {
                firstNum.push(button.innerHTML);
                displayValue = parseFloat(firstNum.join(''));
                changeDisplayNum(displayValue);
            }
        }
        if (button.innerHTML == '+' || button.innerHTML == '-' || button.innerHTML == '*' || button.innerHTML == '/' ) {
            currentOperator = button.innerHTML;
        }
        if (currentOperator && (Number(button.innerHTML) || button.innerHTML == '.')) {
            secondNum.push(button.innerHTML);
            displayValue = parseFloat(secondNum.join(''));
            changeDisplayNum(displayValue);
        }
        if (button.innerHTML == '=') {
            if(firstNum && currentOperator && secondNum) {
                let a = parseFloat(firstNum.join(''));
                let b = parseFloat(secondNum.join(''));
                displayValue = operate(currentOperator, a, b);
                changeDisplayNum(displayValue);
            }
        }
        if (button.innerHTML == 'C') {
            clear();
        }
    })
})

