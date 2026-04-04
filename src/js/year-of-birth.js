const inputYear = document.querySelector('.year-of-birth__input');
const btnYear = document.querySelector('.year-of-birth__btn');
const textYear = document.querySelector('.year-of-birth__text');

btnYear.addEventListener('click', () => {
  const year = parseInt(inputYear.value);

  if (isNaN(year) || inputYear.value === '') {
    textYear.textContent = 'Будь ласка, введіть рік!';
    textYear.style.color = 'red';
    return;
  }

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isLeapYear) {
    textYear.textContent = 'Ви народилися у високосний рік!';
    textYear.style.color = 'green';
  } else {
    textYear.textContent = 'Ви народилися не у високосний рік!';
    textYear.style.color = 'red';
  }
});
