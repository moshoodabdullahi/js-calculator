const operate = require('./operate');

function calculate(input, calcObject) {
  let { operandOne = null, operandTwo = null, displayValue = null, operator = null } = calcObject;
  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(input)) {
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
      if (operandOne.length >= 2) {
        operandOne = operandOne.slice(0, -1);
        displayValue = operandOne;
      } else {
        operandOne = null;
        displayValue = operandOne;
      }
    } else if (operandTwo === null) {
      displayValue = operandOne;
      operator = null;
    } else if (operandTwo.length >= 2) {
      operandTwo = operandTwo.slice(0, -1);
      displayValue = operandTwo;
    } else {
      operandTwo = null;
      displayValue = operandOne;
    }
  }

  if (input === '.') {
    if (operandOne === null) {
      operandOne = `0${input}`;
      displayValue = operandOne;
    } else if (operator === null) {
      if (!operandOne.includes('.')) {
        operandOne += input;
      }
      displayValue = operandOne;
    } else if (operandTwo === null) {
      operandTwo = `0${input}`;
      if (!operandTwo.includes('.')) {
        operandTwo += input;
      }
      displayValue = operandTwo;
    } else {
      if (!operandTwo.includes('.')) {
        operandTwo += input;
      }
      displayValue = operandTwo;
    }
  }

  if (input === 'RESET') {
    if (operandOne === null) {
      return { operandOne, operandTwo, displayValue, operator };
    }
    if (operator === null) {
      operandOne = null;
      displayValue = null;
    } else if (operandTwo === null) {
      operandOne = null;
      displayValue = null;
      operator = null;
    } else {
      operandOne = null;
      operandTwo = null;
      displayValue = null;
      operator = null;
    }
  }

  return { operandOne, operandTwo, displayValue, operator };
}

module.exports = calculate;
