const refs = {
  containerEl: document.querySelector('.container-football-js'),
  titleEl: document.createElement('h2'),
  footballFieldEl: document.createElement('div'),
  ballEl: document.createElement('div'),
};
// Title
refs.titleEl.textContent = 'Футбол';
refs.titleEl.classList.add('title');
refs.containerEl.append(refs.titleEl);

// Field
refs.footballFieldEl.classList.add('football-field');
refs.containerEl.append(refs.footballFieldEl);

// Ball
refs.ballEl.classList.add('football-ball');
refs.footballFieldEl.append(refs.ballEl);

// function

refs.footballFieldEl.addEventListener('click', onFiendElClicked);

function onFiendElClicked(event) {
  const fieldRect = refs.footballFieldEl.getBoundingClientRect();
  const ballRect = refs.ballEl.getBoundingClientRect();

  // координати кліку відносно поля
  let x = event.clientX - fieldRect.left;
  let y = event.clientY - fieldRect.top;

  // зміщуємо, щоб центр м'яча був на курсорі
  x = x - ballRect.width / 2;
  y = y - ballRect.height / 2;

  // обмеження (щоб не виходив за межі)
  const maxX = refs.footballFieldEl.clientWidth - ballRect.width;
  const maxY = refs.footballFieldEl.clientHeight - ballRect.height;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  // рух
  refs.ballEl.style.left = x + 'px';
  refs.ballEl.style.top = y + 'px';
}
