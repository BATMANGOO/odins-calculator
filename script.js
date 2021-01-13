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

  }

  compute() {

  }

  updateDisplay() {
    this.currentOuputText.innerText = this.currentOuput;
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



