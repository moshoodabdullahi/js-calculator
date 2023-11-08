const operate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      if (operand2 !== 0) {
        return operand1 / operand2;
      }
      return 'Cannot Divide By Zero';

    default:
      return 'Invalid operator';
  }
};

operate();

module.exports = operate;
