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
    operator == '+' ? add(a, b) : operator == '-' ? subtract(a, b) : operator == '*' ? multiply(a, b) : operator == '/' ? divide(a, b) : "Wrong operator";
}