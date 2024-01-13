import calculate from './calculate';

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
    expect(calculation).toHaveProperty('operator', '+');
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

describe('when series of input is calculated', () => {
  // 2 + 3 + 4 / - 5 * 2 = 8
  const testCases = [
    {
      buttonName: 'DEL',
      expectedOperandOne: null,
      expectedOperandTwo: null,
      expectedDisplayValue: null,
      expectedOperator: null,
    },
    {
      buttonName: '2',
      expectedOperandOne: '2',
      expectedOperandTwo: null,
      expectedDisplayValue: '2',
      expectedOperator: null,
    },
    {
      buttonName: '+',
      expectedOperandOne: '2',
      expectedOperandTwo: null,
      expectedDisplayValue: '2',
      expectedOperator: '+',
    },
    {
      buttonName: '3',
      expectedOperandOne: '2',
      expectedOperandTwo: '3',
      expectedDisplayValue: '3',
      expectedOperator: '+',
    },
    {
      buttonName: '+',
      expectedOperandOne: '5',
      expectedOperandTwo: null,
      expectedDisplayValue: '5',
      expectedOperator: '+',
    },
    {
      buttonName: '4',
      expectedOperandOne: '5',
      expectedOperandTwo: '4',
      expectedDisplayValue: '4',
      expectedOperator: '+',
    },
    {
      buttonName: '/',
      expectedOperandOne: '9',
      expectedOperandTwo: null,
      expectedDisplayValue: '9',
      expectedOperator: '/',
    },
    {
      buttonName: '-',
      expectedOperandOne: '9',
      expectedOperandTwo: null,
      expectedDisplayValue: '9',
      expectedOperator: '-',
    },
    {
      buttonName: '5',
      expectedOperandOne: '9',
      expectedOperandTwo: '5',
      expectedDisplayValue: '5',
      expectedOperator: '-',
    },
    {
      buttonName: '*',
      expectedOperandOne: '4',
      expectedOperandTwo: null,
      expectedDisplayValue: '4',
      expectedOperator: '*',
    },
    {
      buttonName: '2',
      expectedOperandOne: '4',
      expectedOperandTwo: '2',
      expectedDisplayValue: '2',
      expectedOperator: '*',
    },

    {
      buttonName: '=',
      expectedOperandOne: '8',
      expectedOperandTwo: null,
      expectedDisplayValue: '8',
      expectedOperator: null,
    },
  ];

  let calcData = { operandOne: null, operandTwo: null, displayValue: null, operator: null };

  testCases.forEach(
    ({
      buttonName,
      expectedOperandOne,
      expectedOperandTwo,
      expectedDisplayValue,
      expectedOperator,
    }) => {
      it(`returns an object with 'input' ${buttonName}`, () => {
        calcData = calculate(buttonName, calcData);
        expect(calcData).toHaveProperty('operandOne', expectedOperandOne);
        expect(calcData).toHaveProperty('operandTwo', expectedOperandTwo);
        expect(calcData).toHaveProperty('displayValue', expectedDisplayValue);
        expect(calcData).toHaveProperty('operator', expectedOperator);
      });
    },
  );
});

describe('when series of input is calculated with del button', () => {
  // 32(7, DEL)93 + (DEL) 12(5, DEL)89 - 1000 = 3582
  const testCases = [
    {
      buttonName: '3',
      expectedOperandOne: '3',
      expectedOperandTwo: null,
      expectedDisplayValue: '3',
      expectedOperator: null,
    },
    {
      buttonName: '2',
      expectedOperandOne: '32',
      expectedOperandTwo: null,
      expectedDisplayValue: '32',
      expectedOperator: null,
    },
    {
      buttonName: '7',
      expectedOperandOne: '327',
      expectedOperandTwo: null,
      expectedDisplayValue: '327',
      expectedOperator: null,
    },
    {
      buttonName: 'DEL',
      expectedOperandOne: '32',
      expectedOperandTwo: null,
      expectedDisplayValue: '32',
      expectedOperator: null,
    },
    {
      buttonName: '9',
      expectedOperandOne: '329',
      expectedOperandTwo: null,
      expectedDisplayValue: '329',
      expectedOperator: null,
    },
    {
      buttonName: '3',
      expectedOperandOne: '3293',
      expectedOperandTwo: null,
      expectedDisplayValue: '3293',
      expectedOperator: null,
    },
    {
      buttonName: '+',
      expectedOperandOne: '3293',
      expectedOperandTwo: null,
      expectedDisplayValue: '3293',
      expectedOperator: '+',
    },
    {
      buttonName: 'DEL',
      expectedOperandOne: '3293',
      expectedOperandTwo: null,
      expectedDisplayValue: '3293',
      expectedOperator: '+',
    },
    {
      buttonName: '1',
      expectedOperandOne: '3293',
      expectedOperandTwo: '1',
      expectedDisplayValue: '1',
      expectedOperator: '+',
    },
    {
      buttonName: '2',
      expectedOperandOne: '3293',
      expectedOperandTwo: '12',
      expectedDisplayValue: '12',
      expectedOperator: '+',
    },
    {
      buttonName: '5',
      expectedOperandOne: '3293',
      expectedOperandTwo: '125',
      expectedDisplayValue: '125',
      expectedOperator: '+',
    },
    {
      buttonName: 'DEL',
      expectedOperandOne: '3293',
      expectedOperandTwo: '12',
      expectedDisplayValue: '12',
      expectedOperator: '+',
    },
    {
      buttonName: '8',
      expectedOperandOne: '3293',
      expectedOperandTwo: '128',
      expectedDisplayValue: '128',
      expectedOperator: '+',
    },
    {
      buttonName: '9',
      expectedOperandOne: '3293',
      expectedOperandTwo: '1289',
      expectedDisplayValue: '1289',
      expectedOperator: '+',
    },
    {
      buttonName: '-',
      expectedOperandOne: '4582',
      expectedOperandTwo: null,
      expectedDisplayValue: '4582',
      expectedOperator: '-',
    },
    {
      buttonName: '1',
      expectedOperandOne: '4582',
      expectedOperandTwo: '1',
      expectedDisplayValue: '1',
      expectedOperator: '-',
    },
    {
      buttonName: '0',
      expectedOperandOne: '4582',
      expectedOperandTwo: '10',
      expectedDisplayValue: '10',
      expectedOperator: '-',
    },
    {
      buttonName: '0',
      expectedOperandOne: '4582',
      expectedOperandTwo: '100',
      expectedDisplayValue: '100',
      expectedOperator: '-',
    },
    {
      buttonName: '0',
      expectedOperandOne: '4582',
      expectedOperandTwo: '1000',
      expectedDisplayValue: '1000',
      expectedOperator: '-',
    },
    {
      buttonName: '=',
      expectedOperandOne: '3582',
      expectedOperandTwo: null,
      expectedDisplayValue: '3582',
      expectedOperator: null,
    },
  ];

  let calcData = { operandOne: null, operandTwo: null, displayValue: null, operator: null };

  testCases.forEach(
    ({
      buttonName,
      expectedOperandOne,
      expectedOperandTwo,
      expectedDisplayValue,
      expectedOperator,
    }) => {
      it(`returns an object with 'input' ${buttonName}`, () => {
        calcData = calculate(buttonName, calcData);
        expect(calcData).toHaveProperty('operandOne', expectedOperandOne);
        expect(calcData).toHaveProperty('operandTwo', expectedOperandTwo);
        expect(calcData).toHaveProperty('displayValue', expectedDisplayValue);
        expect(calcData).toHaveProperty('operator', expectedOperator);
      });
    },
  );
});

describe('when dividing by zero', () => {
  const testCases = [
    {
      buttonName: '0',
      expectedOperandOne: '0',
      expectedOperandTwo: null,
      expectedDisplayValue: '0',
      expectedOperator: null,
    },
    {
      buttonName: '/',
      expectedOperandOne: '0',
      expectedOperandTwo: null,
      expectedDisplayValue: '0',
      expectedOperator: '/',
    },
    {
      buttonName: '0',
      expectedOperandOne: '0',
      expectedOperandTwo: '0',
      expectedDisplayValue: '0',
      expectedOperator: '/',
    },
    {
      buttonName: '+',
      expectedOperandOne: 'MATH ERR',
      expectedOperandTwo: null,
      expectedDisplayValue: 'MATH ERR',
      expectedOperator: '+',
    },
    {
      buttonName: '2',
      expectedOperandOne: 'MATH ERR',
      expectedOperandTwo: '2',
      expectedDisplayValue: '2',
      expectedOperator: '+',
    },
    {
      buttonName: '=',
      expectedOperandOne: 'NOT A NUMBER',
      expectedOperandTwo: null,
      expectedDisplayValue: 'NOT A NUMBER',
      expectedOperator: null,
    },
  ];

  let calcData = { operandOne: null, operandTwo: null, displayValue: null, operator: null };

  testCases.forEach(
    ({
      buttonName,
      expectedOperandOne,
      expectedOperandTwo,
      expectedDisplayValue,
      expectedOperator,
    }) => {
      it(`returns an object with 'input' ${buttonName}`, () => {
        calcData = calculate(buttonName, calcData);
        expect(calcData).toHaveProperty('operandOne', expectedOperandOne);
        expect(calcData).toHaveProperty('operandTwo', expectedOperandTwo);
        expect(calcData).toHaveProperty('displayValue', expectedDisplayValue);
        expect(calcData).toHaveProperty('operator', expectedOperator);
      });
    },
  );
});

describe('when handling several inputs with decimals', () => {
  const testCases = [
    {
      buttonName: '1',
      expectedOperandOne: '1',
      expectedOperandTwo: null,
      expectedDisplayValue: '1',
      expectedOperator: null,
    },
    {
      buttonName: '.',
      expectedOperandOne: '1.',
      expectedOperandTwo: null,
      expectedDisplayValue: '1.',
      expectedOperator: null,
    },
    {
      buttonName: '2',
      expectedOperandOne: '1.2',
      expectedOperandTwo: null,
      expectedDisplayValue: '1.2',
      expectedOperator: null,
    },
    {
      buttonName: '.',
      expectedOperandOne: '1.2',
      expectedOperandTwo: null,
      expectedDisplayValue: '1.2',
      expectedOperator: null,
    },
    {
      buttonName: '3',
      expectedOperandOne: '1.23',
      expectedOperandTwo: null,
      expectedDisplayValue: '1.23',
      expectedOperator: null,
    },
    {
      buttonName: '.',
      expectedOperandOne: '1.23',
      expectedOperandTwo: null,
      expectedDisplayValue: '1.23',
      expectedOperator: null,
    },
    {
      buttonName: '+',
      expectedOperandOne: '1.23',
      expectedOperandTwo: null,
      expectedDisplayValue: '1.23',
      expectedOperator: `+`,
    },
    {
      buttonName: '.',
      expectedOperandOne: '1.23',
      expectedOperandTwo: `0.`,
      expectedDisplayValue: '0.',
      expectedOperator: `+`,
    },
    {
      buttonName: '4',
      expectedOperandOne: '1.23',
      expectedOperandTwo: `0.4`,
      expectedDisplayValue: `0.4`,
      expectedOperator: `+`,
    },
    {
      buttonName: '.',
      expectedOperandOne: '1.23',
      expectedOperandTwo: `0.4`,
      expectedDisplayValue: `0.4`,
      expectedOperator: `+`,
    },
    {
      buttonName: '5',
      expectedOperandOne: '1.23',
      expectedOperandTwo: `0.45`,
      expectedDisplayValue: `0.45`,
      expectedOperator: `+`,
    },
    {
      buttonName: '.',
      expectedOperandOne: '1.23',
      expectedOperandTwo: `0.45`,
      expectedDisplayValue: `0.45`,
      expectedOperator: `+`,
    },
    {
      buttonName: '=',
      expectedOperandOne: '1.68',
      expectedOperandTwo: null,
      expectedDisplayValue: '1.68',
      expectedOperator: null,
    },
  ];

  let calcData = { operandOne: null, operandTwo: null, displayValue: null, operator: null };

  testCases.forEach(
    ({
      buttonName,
      expectedOperandOne,
      expectedOperandTwo,
      expectedDisplayValue,
      expectedOperator,
    }) => {
      it(`returns an object with 'input' ${buttonName}`, () => {
        calcData = calculate(buttonName, calcData);
        expect(calcData).toHaveProperty('operandOne', expectedOperandOne);
        expect(calcData).toHaveProperty('operandTwo', expectedOperandTwo);
        expect(calcData).toHaveProperty('displayValue', expectedDisplayValue);
        expect(calcData).toHaveProperty('operator', expectedOperator);
      });
    },
  );
});

describe('when using an operator after any logical ERROR', () => {
  const testCases = [
    {
      buttonName: '2',
      expectedOperandOne: '2',
      expectedOperandTwo: null,
      expectedDisplayValue: '2',
      expectedOperator: null,
    },
    {
      buttonName: '/',
      expectedOperandOne: '2',
      expectedOperandTwo: null,
      expectedDisplayValue: '2',
      expectedOperator: `/`,
    },
    {
      buttonName: '0',
      expectedOperandOne: '2',
      expectedOperandTwo: `0`,
      expectedDisplayValue: '0',
      expectedOperator: `/`,
    },
    {
      buttonName: '=',
      expectedOperandOne: 'MATH ERR',
      expectedOperandTwo: null,
      expectedDisplayValue: 'MATH ERR',
      expectedOperator: null,
    },
    {
      buttonName: '+',
      expectedOperandOne: 'MATH ERR',
      expectedOperandTwo: null,
      expectedDisplayValue: 'MATH ERR',
      expectedOperator: `+`,
    },
  ];

  let calcData = { operandOne: null, operandTwo: null, displayValue: null, operator: null };

  testCases.forEach(
    ({
      buttonName,
      expectedOperandOne,
      expectedOperandTwo,
      expectedDisplayValue,
      expectedOperator,
    }) => {
      it(`returns an object with 'input' ${buttonName}`, () => {
        calcData = calculate(buttonName, calcData);
        expect(calcData).toHaveProperty('operandOne', expectedOperandOne);
        expect(calcData).toHaveProperty('operandTwo', expectedOperandTwo);
        expect(calcData).toHaveProperty('displayValue', expectedDisplayValue);
        expect(calcData).toHaveProperty('operator', expectedOperator);
      });
    },
  );
});

describe('when dividing by zero', () => {
  const testCases = [
    {
      buttonName: '2',
      expectedOperandOne: '2',
      expectedOperandTwo: null,
      expectedDisplayValue: '2',
      expectedOperator: null,
    },
    {
      buttonName: '/',
      expectedOperandOne: '2',
      expectedOperandTwo: null,
      expectedDisplayValue: '2',
      expectedOperator: `/`,
    },
    {
      buttonName: '0',
      expectedOperandOne: '2',
      expectedOperandTwo: `0`,
      expectedDisplayValue: '0',
      expectedOperator: `/`,
    },
    {
      buttonName: '=',
      expectedOperandOne: 'MATH ERR',
      expectedOperandTwo: null,
      expectedDisplayValue: 'MATH ERR',
      expectedOperator: null,
    },
    {
      buttonName: '+',
      expectedOperandOne: 'MATH ERR',
      expectedOperandTwo: null,
      expectedDisplayValue: 'MATH ERR',
      expectedOperator: `+`,
    },
  ];

  let calcData = { operandOne: null, operandTwo: null, displayValue: null, operator: null };

  testCases.forEach(
    ({
      buttonName,
      expectedOperandOne,
      expectedOperandTwo,
      expectedDisplayValue,
      expectedOperator,
    }) => {
      it(`returns an object with 'input' ${buttonName}`, () => {
        calcData = calculate(buttonName, calcData);
        expect(calcData).toHaveProperty('operandOne', expectedOperandOne);
        expect(calcData).toHaveProperty('operandTwo', expectedOperandTwo);
        expect(calcData).toHaveProperty('displayValue', expectedDisplayValue);
        expect(calcData).toHaveProperty('operator', expectedOperator);
      });
    },
  );
});
