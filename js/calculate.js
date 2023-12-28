function calculate(input, calcObject) {
  const { operandOne = null, operandTwo = null, displayValue = null, operator = null } = calcObject;
  console.debug({ input, operandOne, operandTwo, displayValue, operator });

  return { operandOne, operandTwo, displayValue, operator };
}

const initialObject = { operandOne: null, operandTwo: null, displayValue: null, operator: null };

const result1 = calculate('2', initialObject);
console.debug(result1);
