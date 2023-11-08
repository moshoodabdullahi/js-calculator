const operate = require('./operate');

test('adds 4 + 2 to equal 6', () => {
  expect(operate(4, 2, '+')).toBe(6);
  expect(operate(4, 2, '-')).toBe(2);
  expect(operate(4, 2, '*')).toBe(8);
  expect(operate(4, 2, '/')).toBe(2);
});
