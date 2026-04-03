const refs = {
  input: document.querySelectorAll('.three-nunbers_input'),
  result: document.querySelector('.three-nunbers_result'),
};

function updateNumberArray() {
  let numbers = [];

  refs.input.forEach(input => {
    const value = input.value;

    if (value === '') return; 

    const num = Number(value);
    numbers.push(num);
  });

  if (numbers.length === 0) {
    refs.result.textContent = 'Введіть число';
    return;
  }

  const maxNumber = Math.max(...numbers);
  refs.result.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`;
}

refs.input.forEach(input => {
  input.addEventListener('input', updateNumberArray);
});