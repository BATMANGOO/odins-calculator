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

  }

  chooseOperant(operation) {

  }

  compute() {

  }

  displayOutput() {

  }
} 


const calculator = new Calculator(previousOutputText, currentOuputText);

