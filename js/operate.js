const operate = (operand1, operand2, operator) => {
  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }
  if (operator === '/') {
    return operand1 / operand2;
  }
  return '';
};

operate();
