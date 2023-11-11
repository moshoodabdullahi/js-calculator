const operate = require('./operate');

test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(operate(0.1, 0.2, '+')).toBe(0.3);
});

test('adds 1.005 + 0.005 to equal 1.01', () => {
  expect(operate(1.005, 0.005, '+')).toBe(1.01);
});

test('subtracts 2 - 1 to equal 1', () => {
  expect(operate(2, 1, '-')).toBe(1);
});

test('multiplies 3 * 4 to equal 0.3', () => {
  expect(operate(0.1, 0.2, '+')).toBe(0.3);
});

test('divide 6 / 2 to equal 3', () => {
  expect(operate(6, 2, '/')).toBe(3);
});

test('adds 2.345 + 0.345 to equal 2.7', () => {
  expect(operate(2.345, 0.345, '+')).toBe(2.69);
});

test('adds 0 + 5 to equal 5', () => {
  expect(operate(0, 5, '+')).toBe(5);
});

test('subtracts 8 + 0 to equal 8', () => {
  expect(operate(8, 0, '+')).toBe(8);
});

test('multiplies 0 * 3 to equal 0', () => {
  expect(operate(0, 3, '*')).toBe(0);
});

test('divide 0 / 2 to equal 0', () => {
  expect(operate(0, 2, '/')).toBe(0);
});

test('divide 6 / 0 to equal Cannot Divide By Zero', () => {
  expect(operate(6, 0, '/')).toBe('Cannot Divide By Zero');
});

test('divide 0 / 0 to equal Cannot Divide By Zero', () => {
  expect(operate(0, 0, '/')).toBe('Cannot Divide By Zero');
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(operate(0.1, 0.2, '+')).toBe(0.3);
});

test('subtracts 1.5 - 0.5 to equal 1.0', () => {
  expect(operate(1.5, 0.5, '-')).toBe(1.0);
});

test('multiplies 0.2 * 0.3 to equal 0.06', () => {
  expect(operate(0.2, 0.3, '*')).toBe(0.06);
});

test('divide 0.9 / 0.3 to equal 3.0', () => {
  expect(operate(0.9, 0.3, '/')).toBe(3.0);
});

test('adds 1000000 + 500000  to equal 1500000', () => {
  expect(operate(1000000, 500000, '+')).toBe(1500000);
});

test('subtracts 999999 - 500000 to equal 499999', () => {
  expect(operate(999999, 500000, '-')).toBe(499999);
});

test('multiplies 123456 * 789012 to equal 97408265472', () => {
  expect(operate(123456, 789012, '*')).toBe(97408265472);
});

test('divide 1000000 / 10 to equal 100000', () => {
  expect(operate(1000000, 10, '/')).toBe(100000);
});

test('adds -2 + 4 to equal 2', () => {
  expect(operate(-2, 4, '+')).toBe(2);
});

test('subtracts 3 - -1 to equal 4', () => {
  expect(operate(3, -1, '-')).toBe(4);
});

test('multiplies -3 * -2 to equal 6', () => {
  expect(operate(-3, -2, '*')).toBe(6);
});

test('multiplies -3 * -2 to equal 6', () => {
  expect(operate(-3, -2, '*')).toBe(6);
});

test('divide 8 / -2 to equal -4', () => {
  expect(operate(8, -2, '/')).toBe(-4);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(operate(0.1, 0.2, '+')).toBe(0.3);
});

test('subtracts 0.3 - 0.2 to equal 0.1', () => {
  expect(operate(0.3, 0.2, '-')).toBe(0.1);
});

test('multiplies 0.2 * 0.1 to equal 0.02', () => {
  expect(operate(0.2, 0.1, '*')).toBe(0.02);
});

test('divide 1 / 3 to equal 0.333333333333', () => {
  expect(operate(1, 3, '/')).toBe(0.333333333333);
});

test('multiplies -3 * -2 to equal 6', () => {
  expect(operate(-3, -2, '*')).toBe(6);
});

test('adds 1e308 + 1e308 to equal Infinity', () => {
  expect(operate(1e308, 1e308, '+')).toBe(Infinity);
});

test('subtracts -1e308 - 1e308 to equal Infinity', () => {
  expect(operate(-1e308, 1e308, '-')).toBe(-Infinity);
});

test('multiplies 1e308 * 2 to equal Infinity', () => {
  expect(operate(1e308, 2, '*')).toBe(Infinity);
});

test('divide 1 / 1e-308 to equal 1e+308', () => {
  expect(operate(1, 1e-308, '/')).toBe(1e308);
});

test('adds "2" + 3 to equal Both operands must be numbers', () => {
  expect(operate('2', 3, '+')).toBe('Both operands must be numbers');
});

test('subtracts 4 - "1" to equal Both operands must be numbers', () => {
  expect(operate(4, '1', '-')).toBe('Both operands must be numbers');
});

test('5 % 2 to equal Invalid Operator', () => {
  expect(operate(5, 2, '%')).toBe('Invalid Operator');
});
