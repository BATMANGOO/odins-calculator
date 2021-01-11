'use strict';

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

function operate(operator, a, b) {
  return operator(a,b);
}

console.log(operate(additon, 5, 5));