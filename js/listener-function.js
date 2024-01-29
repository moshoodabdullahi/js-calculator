import calculate from './calculate';

let calcObject = { operandOne: null, operandTwo: null, displayValue: null, operator: null };

const screenDisplay = document.querySelector('.screen-display');
const buttonKeypad = document.querySelector('.keypad');

buttonKeypad.addEventListener('click', (event) => {
  if (event.target.type === 'button') {
    const input = event.target.value;
    calcObject = calculate(input, calcObject);
    screenDisplay.textContent = calcObject.displayValue || '0';
  }
});
