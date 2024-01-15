import operate from './operate';

function calculate(input, calcObject) {
  let { operandOne = null, operandTwo = null, displayValue = null, operator = null } = calcObject;
  switch (input) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
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
      break;

    case '+':
    case '-':
    case '*':
    case '/':
      if (operandOne === null) {
        break;
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
      break;

    case '=':
      if (operandOne === null || operator === null) {
        break;
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
      break;

    case 'DEL':
      if (operandOne === null) {
        break;
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
      } else if (operandTwo.length >= 2) {
        operandTwo = operandTwo.slice(0, -1);
        displayValue = operandTwo;
      } else {
        operandTwo = null;
        displayValue = operandOne;
      }
      break;

    case '.':
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
        if (operandTwo.includes('.')) {
          operandTwo - input;
        }
        displayValue = operandTwo;
      } else {
        if (!operandTwo.includes('.')) {
          operandTwo += input;
        }
        displayValue = operandTwo;
      }
      break;

    case 'RESET':
      if (operandOne === null) {
        break;
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
      break;
    default:
      return { operandOne, operandTwo, displayValue, operator };
  }
  return { operandOne, operandTwo, displayValue, operator };
}

export default calculate;
