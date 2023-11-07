const theme1Element = document.querySelector('#theme-1-attr');
const theme2Element = document.querySelector('#theme-2-attr');
const theme3Element = document.querySelector('#theme-3-attr');

theme1Element.addEventListener('change', () => {
  if (theme1Element.checked === true) {
    document.body.classList.remove('theme2');
    document.body.classList.remove('theme3');
  }
});

theme2Element.addEventListener('change', () => {
  if (theme2Element.checked === true) {
    document.body.classList.remove('theme3');
    document.body.classList.add('theme2');
  }
});

theme3Element.addEventListener('change', () => {
  if (theme3Element.checked === true) {
    document.body.classList.remove('theme2');
    document.body.classList.add('theme3');
  }
});
