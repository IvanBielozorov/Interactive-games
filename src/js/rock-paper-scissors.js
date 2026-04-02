const refs = {
  titleEl: document.querySelector('.rps-title'),
  listEl: document.querySelector('.rps-list'),
  allbuttonsEl: document.querySelectorAll('.rps-item-button'),
  winEl: document.createElement('p'),
  copmButtonEl: document.querySelector('.rps-button'),
  countYouEl: document.createElement('p'),
  countCopmEl: document.createElement('p'),
  rpsContainer: document.querySelector('.rps-wrap'),
  rpsTitleEl: document.querySelector('.rps-count-title'),
};

let userChoice = 0;
let compChoice = 0;
let scoreYou = 0;
let scoreComp = 0;

// Setup UI
refs.winEl.classList.add('rps-win');
refs.winEl.textContent = 'Виберіть, щоб почати!';
refs.winEl.style.margin = '36px 0';
refs.rpsContainer.after(refs.winEl);

refs.countYouEl.classList.add('rps-count-you');
refs.countCopmEl.classList.add('rps-count-comp');
refs.countYouEl.textContent = `Ви - ${scoreYou}`;
refs.countCopmEl.textContent = `Комп’ютер - ${scoreComp}`;
refs.rpsTitleEl.append(refs.countYouEl, refs.countCopmEl);

// Determine winner function
function determineWinner(user, comp) {
  if (user === comp) return 'draw';
  if (
    (user === 1 && comp === 3) ||
    (user === 2 && comp === 1) ||
    (user === 3 && comp === 2)
  )
    return 'user';
  return 'comp';
}

// Handle user choice
function handleChoice(choice) {
  userChoice = choice;
  compChoice = Math.floor(Math.random() * 3) + 1;

  const winner = determineWinner(userChoice, compChoice);

  if (winner === 'user') {
    refs.winEl.textContent = 'Ви виграли раунд!';
    refs.winEl.style.color = '#039900';
    scoreYou += 1;
  } else if (winner === 'comp') {
    refs.winEl.textContent = 'Комп’ютер виграв раунд!';
    refs.winEl.style.color = '#900';
    scoreComp += 1;
  } else {
    refs.winEl.textContent = 'Нічия!';
    refs.winEl.style.color = '#000';
  }

  refs.countYouEl.textContent = `Ви - ${scoreYou}`;
  refs.countCopmEl.textContent = `Комп’ютер - ${scoreComp}`;
}

// Attach click events to buttons
refs.allbuttonsEl.forEach((btn, index) => {
  btn.addEventListener('click', () => handleChoice(index + 1));
});

// Highlight computer choice
refs.copmButtonEl.style.cursor = 'pointer';
refs.copmButtonEl.addEventListener('click', () => {
  if (userChoice === 0) return;

  refs.allbuttonsEl.forEach((btn, i) => {
    if (i === compChoice - 1) {
      btn.style.border = '2px solid red'; // highlight computer choice
    } else {
      btn.style.display = 'none'; // hide others
    }
  });

  setTimeout(() => {
    refs.allbuttonsEl.forEach(btn => {
      btn.style.display = 'inline-block';
      btn.style.border = '';
    });
  }, 3000);
});
