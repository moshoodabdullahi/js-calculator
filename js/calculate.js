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

  return { operandOne, operandTwo, displayValue, operator };
}

module.exports = calculate;
