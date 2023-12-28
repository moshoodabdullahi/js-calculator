const operate = (operandOne, operandTwo, operator) => {
  if (typeof operandOne !== 'number' || typeof operandTwo !== 'number') {
    return 'NOT A NUMBER';
  }

  if (Math.abs(operandOne) > 1e13 || Math.abs(operandTwo) > 1e13) {
    return 'OUT OF RANGE';
  }

  let result;

  switch (operator) {
    case '+':
      result = operandOne + operandTwo;
      break;
    case '-':
      result = operandOne - operandTwo;
      break;
    case '*':
      result = operandOne * operandTwo;
      break;
    case '/':
      if (operandTwo === 0) {
        return 'UNDEFINED';
      }
      result = operandOne / operandTwo;
      break;

    default:
      return 'INVALID OPERATOR';
  }
  if (Math.abs(result) > 1e13) {
    return 'OUT OF RANGE';
  }
  return parseFloat(result.toFixed(12));
};

module.exports = operate;
