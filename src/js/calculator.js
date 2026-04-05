const elements = {
  first: document.querySelector('.calculator-1'),
  second: document.querySelector('.calculator-2'),
  result: document.querySelector('.result'),
  plus: document.querySelector('.plus'),
  minus: document.querySelector('.minus'),
  multiply: document.querySelector('.multiply'),
  divide: document.querySelector('.divide'),
  equals: document.querySelector('.equals'),
}

let operation;

elements.plus.onclick = () => operation = (a, b) => a + b;
elements.minus.onclick = () => operation = (a, b) => a - b;
elements.multiply.onclick = () => operation = (a, b) => a * b;
elements.divide.onclick = () => operation = (a, b) => b ? a / b : "Помилка!";

elements.equals.onclick = () => {
  const a = +elements.first.value;
  const b = +elements.second.value;
  elements.result.value = operation(a, b);
}