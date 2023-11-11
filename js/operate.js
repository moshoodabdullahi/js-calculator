const operate = (operand1, operand2, operator) => {
  let result;

  if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
    return 'Both operands must be numbers';
  }
  if (operand1 > 1e13 || operand1 < -1e13 || operand2 > 1e13 || operand2 < -1e13) {
    return 'Out Of Range';
  }

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
        return 'Cannot Divide By Zero';
      }
      result = operand1 / operand2;
      break;

    default:
      return 'Invalid Operator';
  }
  if (result > 1e13) {
    return 'Out Of Range';
  }
  const outcome = parseFloat(result.toFixed(12));

  return outcome;
};

module.exports = operate;
