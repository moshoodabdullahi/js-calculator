const operate = require('./operate');

test('adds 4 + 2 to equal 6', () => {
  expect(operate(4, 2, '+')).toBe(6);
});

test('subtracts 4 - 2 to equal 2', () => {
  expect(operate(4, 2, '-')).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
  expect(operate(4, 2, '*')).toBe(8);
});

test('divide 4 / 2 to equal 2', () => {
  expect(operate(4, 2, '/')).toBe(2);
});

test('adds 400000 + 2000 to equal 402000', () => {
  expect(operate(400000, 2000, '+')).toBe(402000);
});

test('subtracts 400000 - 2000 to equal 398000', () => {
  expect(operate(400000, 2000, '-')).toBe(398000);
});

test('multiplies 400000 * 2000 to equal 800000000', () => {
  expect(operate(400000, 2000, '*')).toBe(800000000);
});

test('divide 400000 / 2000 to equal 200', () => {
  expect(operate(400000, 2000, '/')).toBe(200);
});

test('adds 0.2 + 0.4 to equal 0.6000000000000001', () => {
  expect(operate(0.2, 0.4, '+')).toBe(0.6000000000000001);
});

test('subtracts 0.4 - 0.2 to equal 0.2', () => {
  expect(operate(0.4, 0.2, '-')).toBe(0.2);
});

test('multiplies 0.2 * 0.4 to equal 0.08000000000000002', () => {
  expect(operate(0.2, 0.4, '*')).toBe(0.08000000000000002);
});

test('divide 0.4 / 0.2 to equal 2', () => {
  expect(operate(0.4, 0.2, '/')).toBe(2);
});

test('adds 4 + 0 to equal 4', () => {
  expect(operate(4, 0, '+')).toBe(4);
});

test('subtracts 4 - 0 to equal 4', () => {
  expect(operate(4, 0, '-')).toBe(4);
});

test('multiplies 4 * 0 to equal 0', () => {
  expect(operate(4, 0, '*')).toBe(0);
});

test('divide 4 / 0 to equal Cannot Divide By Zero', () => {
  expect(operate(4, 0, '/')).toBe('Cannot Divide By Zero');
});
