'use strict';
const currentOuputText = document.querySelector('[data-input]');
const previousOutputText = document.querySelector('[data-previousOutput]')
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('.all-clear');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');

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

  delete() {
    this.currentOuput = this.currentOuput.slice(0,-1);
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

  addComma(number) {
    const stringNum = number.toString();
    const integerNums = parseFloat(stringNum.split('.')[0]);
    const decimalNums = stringNum.split('.')[1];
    let integerDisplay = '';
    if (isNaN(integerNums)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerNums.toLocaleString('en', {
        maximumFractionDigits: 0
      });
    }
    if (decimalNums != null) {
      return `${integerDisplay}.${decimalNums}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOuputText.innerText = this.addComma(this.currentOuput);
    if(this.operation !== null) {
      this.previousOutputText.innerText = `${this.addComma(this.previousOutput)} ${this.operation}`
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

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
})

numberButtons.forEach(btn => btn.style.backgroundColor = '#BFBFBF');


