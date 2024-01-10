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

describe("when 'input' is an Equals-to", () => {
  it('does not update input when all values are null', () => {
    data = { operandOne: null, operandTwo: null, displayValue: null, operator: null };
    const calculation = calculate('=', data);
    expect(calculation).toHaveProperty('operandOne', null);
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });

  it('does not update input when operator is null and, operandOne is not null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: null };
    const calculation = calculate('=', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2');
    expect(calculation).toHaveProperty('operator', null);
  });

  it('does not update input when operandTwo is null, operandOne and operator are not null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: '+' };
    const calculation = calculate('=', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2');
    expect(calculation).toHaveProperty('operator', '+');
  });

  it('updates input when all values are not null', () => {
    data = { operandOne: '2', operandTwo: '3', displayValue: '5', operator: '+' };
    const calculation = calculate('=', data);
    expect(calculation).toHaveProperty('operandOne', '5');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '5');
    expect(calculation).toHaveProperty('operator', null);
  });
});

describe("when 'input' is DEL", () => {
  it('does not update input when all values are null', () => {
    data = { operandOne: null, operandTwo: null, displayValue: null, operator: null };
    const calculation = calculate('DEL', data);
    expect(calculation).toHaveProperty('operandOne', null);
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });

  it('update input when operator and operandTwo are null, and operandOne is not null ', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: null };
    const calculation = calculate('DEL', data);
    expect(calculation).toHaveProperty('operandOne', null);
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });

  it('update input when operandTwo is null, operandOne and operator are not null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: '+' };
    const calculation = calculate('DEL', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2');
    expect(calculation).toHaveProperty('operator', null);
  });

  it('updates input when all values are not null', () => {
    data = { operandOne: '2', operandTwo: '3', displayValue: '3', operator: '+' };
    const calculation = calculate('DEL', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2');
    expect(calculation).toHaveProperty('operator', '+');
  });

  it('update input when operator and operandTwo are null, and operandOne is not null', () => {
    data = { operandOne: '2345', operandTwo: null, displayValue: '2345', operator: null };
    const calculation = calculate('DEL', data);
    expect(calculation).toHaveProperty('operandOne', '234');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '234');
    expect(calculation).toHaveProperty('operator', null);
  });

  it('update input when operandOne, operator, and operandTwo are not null', () => {
    data = { operandOne: '2', operandTwo: '6789', displayValue: '6789', operator: '+' };
    const calculation = calculate('DEL', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', '678');
    expect(calculation).toHaveProperty('displayValue', '678');
    expect(calculation).toHaveProperty('operator', '+');
  });
});

describe("when 'input' is '.'", () => {
  it('updates operandOne and displayValue when all values are null', () => {
    data = { operandOne: null, operandTwo: null, displayValue: null, operator: null };
    const calculation = calculate('.', data);
    expect(calculation).toHaveProperty('operandOne', '0.');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '0.');
    expect(calculation).toHaveProperty('operator', null);
  });

  it('updates operandOne and displayValue when operator and operandTwo are null, and operandOne is not null ', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: null };
    const calculation = calculate('.', data);
    expect(calculation).toHaveProperty('operandOne', '2.');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2.');
    expect(calculation).toHaveProperty('operator', null);
  });

  it('updates opearandTwo and displayValue when operandTwo is null, operandOne and operator are not null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: '+' };
    const calculation = calculate('.', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', '0.');
    expect(calculation).toHaveProperty('displayValue', '0.');
    expect(calculation).toHaveProperty('operator', '+');
  });

  it('updates operandTwo and displayValue when all values are not null', () => {
    data = { operandOne: '2', operandTwo: '3', displayValue: '3', operator: '+' };
    const calculation = calculate('.', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', '3.');
    expect(calculation).toHaveProperty('displayValue', '3.');
    expect(calculation).toHaveProperty('operator', '+');
  });

  it('does not updates operandOne when operator and operandTwo are null, operandOne and input are not null', () => {
    data = { operandOne: '2.', operandTwo: null, displayValue: '2.', operator: null };
    const calculation = calculate('.', data);
    expect(calculation).toHaveProperty('operandOne', '2.');
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', '2.');
    expect(calculation).toHaveProperty('operator', null);
  });

  it('does not updates operandTwo when operandOne, operator, operandTwo and input are not null', () => {
    data = { operandOne: '2', operandTwo: '3.', displayValue: '3.', operator: '+' };
    const calculation = calculate('.', data);
    expect(calculation).toHaveProperty('operandOne', '2');
    expect(calculation).toHaveProperty('operandTwo', '3.');
    expect(calculation).toHaveProperty('displayValue', '3.');
    expect(calculation).toHaveProperty('operator', '+');
  });
});

describe("when 'input' is RESET", () => {
  it('does not update input when all values are null', () => {
    data = { operandOne: null, operandTwo: null, displayValue: null, operator: null };
    const calculation = calculate('RESET', data);
    expect(calculation).toHaveProperty('operandOne', null);
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });

  it('update input when operator and operandTwo are null, and operandOne is not null ', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: null };
    const calculation = calculate('RESET', data);
    expect(calculation).toHaveProperty('operandOne', null);
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });

  it('update input when operandTwo is null, operandOne and operator are not null', () => {
    data = { operandOne: '2', operandTwo: null, displayValue: '2', operator: '+' };
    const calculation = calculate('RESET', data);
    expect(calculation).toHaveProperty('operandOne', null);
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });

  it('updates input when all values are not null', () => {
    data = { operandOne: '2', operandTwo: '3', displayValue: '3', operator: '+' };
    const calculation = calculate('RESET', data);
    expect(calculation).toHaveProperty('operandOne', null);
    expect(calculation).toHaveProperty('operandTwo', null);
    expect(calculation).toHaveProperty('displayValue', null);
    expect(calculation).toHaveProperty('operator', null);
  });
});
