const input = document.querySelector(".input-btn");
const btn = document.querySelector(".button-btn");
const result = document.querySelector(".result");

let random = Math.floor(Math.random() * 10) + 1

btn.addEventListener("click", () => {
  const value = Number(input.value);

  if (value === random) {
    result.textContent = `Вітаю, ви вгадали число! (${random})`
    result.className = "result win";
  } else {
    result.textContent = `Ви програли, комп’ютер загадав (${random})`
    result.className = "result lose";
  }

  random = Math.floor(Math.random() * 10) + 1;
})