'use strict';
const currentOuputText = document.querySelector('[data-input]');
const previousOutputText = document.querySelector('[data-previousOutput]')
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('.all-clear');
const equalButton = document.querySelector('[data-equal]');

class Calculator {
  constructor(previousOutputText, currentOuputText) {
    this.previousOutputText = previousOutputText;
    this.currentOuputText = currentOuputText;
    this.clear()
  }

  clear() {
    this.currentOuput = '';
    this.previousOutput = '';
    this.operation = null;
  }

  appendNumber(number) {
    if(number === '.' && this.currentOuput.includes('.')) return;
    this.currentOuput = this.currentOuput.toString() + number.toString();
  }

  chooseOperant(operation) {
    if (this.currentOuput === '') return;
    if(this.previousOutput !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOutput = this.currentOuput;
    this.currentOuput = '';
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOutput);
    const current = parseFloat(this.currentOuput);
    if (isNaN(prev) || isNaN(current)) alert('ERROR');
    switch(this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    this.currentOuput = result;
    this.previousOutput = ''
    this.operation = null;
  }

  updateDisplay() {
    this.currentOuputText.innerText = this.currentOuput;
    if(this.operation !== null) {
      this.previousOutputText.innerText = `${this.previousOutput} ${this.operation}`
    } else {
      this.previousOutputText.innerText = '';
    }
  }
} 


const calculator = new Calculator(previousOutputText, currentOuputText);

numberButtons.forEach(button => button.addEventListener('click', () => {
  calculator.appendNumber(button.innerText);
  calculator.updateDisplay();
}));

clearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay()
});

operatorButtons.forEach(button => button.addEventListener('click', () => {
  calculator.chooseOperant(button.value);
  calculator.updateDisplay();
}));

equalButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});


