const calculate = require('./calculate');

let data;
beforeEach(() => {
  data = { operandOne: null, operandTwo: null, displayValue: null, operator: null };
});

describe("when 'input' is a number", () => {
  it('updates operandOne and displayValue when operandOne is null', () => {
    data = { operandOne: null, operandTwo: null, displayValue: null, operator: null };
    const calculation = calculate('2', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2');
    expect(calculation).toHaveProperty('operator', null);
  });

  it('updates operandOne and displayValue when operandOne is not null, and operator is null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: null };
    const calculation = calculate('3', data);
    expect(calculation).toHaveProperty('operandOne', '23');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '23');
    expect(calculation).toHaveProperty('operator', null);
  });

  it('updates operandTwo and displayValue when operandOne, and operator are not null, operandTwo is null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: '+' };
    const calculation = calculate('3', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', '3');
    expect(calculation).toHaveProperty('displayValue', '3');
    expect(calculation).toHaveProperty('operator', '+');
  });

  it('updates operandTwo and displayValue when operandOne, operator, and operandTwo are not null', () => {
    data = { operandOne: '2', operandTwo: '3', displayValue: '3', operator: '+' };
    const calculation = calculate('5', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', '35');
    expect(calculation).toHaveProperty('displayValue', '35');
    expect(calculation).toHaveProperty('operator', '+');
  });
});

describe("when 'input' is an operator", () => {
  it('does not update any value when all value are null', () => {
    data = { operandOne: null, operandTwo: null, displayValue: null, operator: null };
    const calculation = calculate('+', data);
    expect(calculation).toHaveProperty('operandOne', null);
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });

  it('updates operator when operator is null and, operandOne is not null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: null };
    const calculation = calculate('+', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2');
    expect(calculation).toHaveProperty('operator', '+');
  });

  it('updates operator when operandTwo is null, operandOne and operator are not null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: '+' };
    const calculation = calculate('-', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2');
    expect(calculation).toHaveProperty('operator', '-');
  });

  it('updates all values when all values are not null', () => {
    data = { operandOne: '2', operandTwo: '3', displayValue: '3', operator: '+' };
    const calculation = calculate('-', data);
    expect(calculation).toHaveProperty('operandOne', '5');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '5');
    expect(calculation).toHaveProperty('operator', '-');
  });
});
