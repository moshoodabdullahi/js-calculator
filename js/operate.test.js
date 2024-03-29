import operate from './operate';

describe('With Basic Arithmetic Operations', () => {
  test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(operate('0.1', '0.2', '+')).toBe('0.3');
  });

  test('adds 1.005 + 0.005 to equal 1.01', () => {
    expect(operate('1.005', '0.005', '+')).toBe('1.01');
  });

  test('subtracts 2 - 1 to equal 1', () => {
    expect(operate('2', '1', '-')).toBe('1');
  });

  test('multiplies 3 * 4 to equal 12', () => {
    expect(operate('3', '4', '*')).toBe('12');
  });

  test('divide 6 / 2 to equal 3', () => {
    expect(operate('6', '2', '/')).toBe('3');
  });

  test('adds 2.345 + 0.345 to equal 2.69', () => {
    expect(operate('2.345', '0.345', '+')).toBe('2.69');
  });
});

describe('With Zero as Operand', () => {
  test('adds 0 + 5 to equal 5', () => {
    expect(operate('0', '5', '+')).toBe('5');
  });

  test('subtracts 8 + 0 to equal 8', () => {
    expect(operate('8', '0', '+')).toBe('8');
  });

  test('multiplies 0 * 3 to equal 0', () => {
    expect(operate('0', '3', '*')).toBe('0');
  });

  test('divide 0 / 2 to equal 0', () => {
    expect(operate('0', '2', '/')).toBe('0');
  });
});

describe('With Division by Zero', () => {
  test('divide 6 / 0 to equal MATH ERR', () => {
    expect(operate('6', '0', '/')).toBe('MATH ERR');
  });

  test('divide 0 / 0 to equal MATH ERR', () => {
    expect(operate('0', '0', '/')).toBe('MATH ERR');
  });
});

describe('With Decimal Operands', () => {
  test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(operate('0.1', '0.2', '+')).toBe('0.3');
  });

  test('subtracts 1.5 - 0.5 to equal 1', () => {
    expect(operate('1.5', '0.5', '-')).toBe('1');
  });

  test('multiplies 0.2 * 0.3 to equal 0.06', () => {
    expect(operate('0.2', '0.3', '*')).toBe('0.06');
  });

  test('divide 0.9 / 0.3 to equal 3', () => {
    expect(operate('0.9', '0.3', '/')).toBe('3');
  });
});

describe('With Large Numbers', () => {
  test('adds 1000000 + 500000  to equal 1500000', () => {
    expect(operate('1000000', '500000', '+')).toBe('1500000');
  });

  test('subtracts 999999 - 500000 to equal 499999', () => {
    expect(operate('999999', '500000', '-')).toBe('499999');
  });

  test('multiplies 123456 * 789012 to equal 97408265472', () => {
    expect(operate('123456', '789012', '*')).toBe('97408265472');
  });

  test('divide 1000000 / 10 to equal 100000', () => {
    expect(operate('1000000', '10', '/')).toBe('100000');
  });
});

describe('With Mixing Positive and Negative Numbers', () => {
  test('adds -2 + 4 to equal 2', () => {
    expect(operate('-2', '4', '+')).toBe('2');
  });

  test('subtracts 3 - -1 to equal 4', () => {
    expect(operate('3', '-1', '-')).toBe('4');
  });

  test('multiplies -3 * -2 to equal 6', () => {
    expect(operate('-3', '-2', '*')).toBe('6');
  });

  test('divide 8 / -2 to equal -4', () => {
    expect(operate('8', '-2', '/')).toBe('-4');
  });
});

describe('With Rounding and Precision', () => {
  test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(operate('0.1', '0.2', '+')).toBe('0.3');
  });

  test('subtracts 0.3 - 0.2 to equal 0.1', () => {
    expect(operate('0.3', '0.2', '-')).toBe('0.1');
  });

  test('multiplies 0.2 * 0.1 to equal 0.02', () => {
    expect(operate('0.2', '0.1', '*')).toBe('0.02');
  });

  test('divide 1 / 3 to equal 0.333333333333', () => {
    expect(operate('1', '3', '/')).toBe('0.333333333333');
  });
});

describe('With Extreme Values', () => {
  test('adds 1e308 + 1e308 to equal OUT OF RANGE', () => {
    expect(operate('1e308', '1e308', '+')).toBe('OUT OF RANGE');
  });

  test('multiplies 1e308 * 1e308 to equal OUT OF RANGE', () => {
    expect(operate('1e308', '1e308', '*')).toBe('OUT OF RANGE');
  });

  test('subtracts -1e308 - 1e308 to equal OUT OF RANGE', () => {
    expect(operate('-1e308', '1e308', '-')).toBe('OUT OF RANGE');
  });

  test('multiplies 1e308 * 2 to equal OUT OF RANGE', () => {
    expect(operate('1e308', '2', '*')).toBe('OUT OF RANGE');
  });

  test('divide 1 / 1e-308 to equal OUT OF RANGE', () => {
    expect(operate('1', '1e-308', '/')).toBe('OUT OF RANGE');
  });
});

describe('With Mixing Data Types', () => {
  test('adds "a" + 3 to equal NOT A NUMBER', () => {
    expect(operate('a', '3', '+')).toBe('NOT A NUMBER');
  });

  test('subtracts 4 - "a" to equal NOT A NUMBER', () => {
    expect(operate('4', 'a', '-')).toBe('NOT A NUMBER');
  });
});

describe('With Unsupported Operators', () => {
  test('5 % 2 to equal INVALID OPERATOR', () => {
    expect(operate('5', '2', '%')).toBe('INVALID OPERATOR');
  });
});
