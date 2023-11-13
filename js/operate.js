const operate = (operand1, operand2, operator) => {
  if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
    return 'NOT A NUMBER';
  }

  if (Math.abs(operand1) > 1e13 || Math.abs(operand2) > 1e13) {
    return 'OUT OF RANGE';
  }

  let result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      if (operand2 === 0) {
        return 'UNDEFINED';
      }
      result = operand1 / operand2;
      break;

    default:
      return 'INVALID OPERATOR';
  }
  if (Math.abs(result) > 1e13 || Math.abs(result) < -1e13) {
    return 'OUT OF RANGE';
  }
  return parseFloat(result.toFixed(12));
};

module.exports = operate;
