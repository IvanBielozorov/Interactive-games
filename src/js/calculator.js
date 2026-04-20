const elements = {
  first: document.querySelector('.calculator-1'),
  second: document.querySelector('.calculator-2'),
  result: document.querySelector('.calculator .result'),
  plus: document.querySelector('.plus'),
  minus: document.querySelector('.minus'),
  multiply: document.querySelector('.multiply'),
  divide: document.querySelector('.divide'),
  equals: document.querySelector('.equals'),
};
let operation;

const button = document.querySelectorAll('.operators-button');
button.forEach(btn =>
  btn.addEventListener('click', () => {
    operation = btn.dataset.operation;
  })
);

elements.equals.addEventListener('click', () => {
  const a = +elements.first.value;
  const b = +elements.second.value;
  let result;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        elements.result.value = 'Помилка!';
        return;
      } else {
        result = a / b;
      }
      break;
    default:
      elements.result.value = 'Невідома операція!';
  }
  elements.result.value = result;
});
