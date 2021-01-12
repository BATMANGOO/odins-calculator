'use strict';
const input = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('.all-clear');
const equalButton = document.querySelector('.equal-sign');

const calculator = {
  display: '',
  operation: null,
  prevNum: '',
  currentNum: ''
}

function additon(a,b) {
  return a + b;
}

function subtraction(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divison(a,b) {
  return (a / b);
}

//get the input and slice the before and after inputs from where the operator is.
//depending on the value of the operator, do the proper operation.
//sum up the first two numbers if a second operation has been selected.
function operate(operator, input) {
  let operand;
  let result;
  console.log(calculator.display);
}

function chooseOperation(operation) {

}

function updateDisplay(e) {
  let { target } = e;
  if(target.innerText === '.' && calculator.display.includes('.')) return;
  calculator.display += target.innerText;
  input.textContent = calculator.display;
}

numberButtons.forEach(btn => btn.addEventListener('click', updateDisplay));
clearButton.addEventListener('click', () => console.log('AC fired'))
equalButton.addEventListener('click', () => console.log('equal fired'))