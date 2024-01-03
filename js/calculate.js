const operate = require('./operate');

function calculate(input, calcObject) {
  let { operandOne = null, operandTwo = null, displayValue = null, operator = null } = calcObject;
  if (
    input === '0' ||
    input === '1' ||
    input === '2' ||
    input === '3' ||
    input === '4' ||
    input === '5' ||
    input === '6' ||
    input === '7' ||
    input === '8' ||
    input === '9'
  ) {
    if (operandOne === null) {
      operandOne = input;
      displayValue = operandOne;
    } else if (operator === null) {
      operandOne = `${operandOne}${input}`;
      displayValue = operandOne;
    } else if (operandTwo === null) {
      operandTwo = input;
      displayValue = operandTwo;
    } else {
      operandTwo = `${operandTwo}${input}`;
      displayValue = operandTwo;
    }
  }

  if (input === '+' || input === '-' || input === '*' || input === '/') {
    if (operandOne === null) {
      return { operandOne, operandTwo, displayValue, operator };
    }
    if (operator === null) {
      operator = input;
    } else if (operandTwo === null) {
      displayValue = operandOne;
      operator = input;
    } else {
      const result = operate(operandOne, operandTwo, operator);
      operandOne = result;
      operandTwo = null;
      displayValue = result;
      operator = input;
    }
  }

  if (input === '=') {
    if (operandOne === null) {
      return { operandOne, operandTwo, displayValue, operator };
    }
    if (operator === null) {
      return { operandOne, operandTwo, displayValue, operator };
    }
    if (operandTwo === null) {
      operandTwo = null;
      displayValue = operandOne;
    } else {
      const result = operate(operandOne, operandTwo, operator);
      operandOne = result;
      operandTwo = null;
      displayValue = result;
      operator = null;
    }
  }

  if (input === 'DEL') {
    if (operandOne === null) {
      return { operandOne, operandTwo, displayValue, operator };
    }
    if (operator === null) {
      operandOne = null;
      displayValue = operandOne;
      operator = null;
    } else if (operandTwo === null) {
      operandTwo = null;
      displayValue = operandOne;
      operator = null;
    } else {
      operandOne = null;
      operandTwo = null;
      displayValue = operandOne;
      operator = null;
    }
  }

  return { operandOne, operandTwo, displayValue, operator };
}

module.exports = calculate;
