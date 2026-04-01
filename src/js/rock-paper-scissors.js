const refs = {
  titleEl: document.querySelector('.rps-title'),
  listEl: document.querySelector('.rps-list'),
  allbuttonsEl: document.querySelectorAll('.rps-item-button'),
  winEl: document.createElement('p'),
  buttonCompEl: document.createElement('button'),
  count: document.createElement('p'),
  countCopmEl: document.createElement('p'),
  scoreYou: document.createElement('span'),
  countYouEl: document.createElement('p'),
  scoreComp: document.createElement('span'),
  copmButtonEl: document.querySelector('.rps-button'),
};

refs.winEl.classList.add('rps-win');
refs.buttonCompEl.classList.add('rps-button');
refs.count.classList.add('rps-count');
refs.countCopmEl.classList.add('rps-count-comp');
refs.scoreComp.classList.add('rps-count-comp-span');
refs.countYouEl.classList.add('rps-count-you');
refs.scoreYou.classList.add('rps-count-you-span');

const firstButton = refs.allbuttonsEl[0];
const secondButton = refs.allbuttonsEl[1];
const thirdButton = refs.allbuttonsEl[2];

refs.winEl.textContent = 'Вибіріть щоб почати!';
refs.winEl.style.marginTop = '36px';
refs.winEl.style.marginBottom = '36px';
refs.listEl.after(refs.winEl);

refs.scoreYou = 0;
refs.scoreComp = 0;

refs.countYouEl.textContent = `Ви - ${refs.scoreYou}`;
refs.countCopmEl.textContent = `Комп’ютер - ${refs.scoreComp}`;
refs.winEl.append(refs.countYouEl);
refs.countYouEl.append(refs.countCopmEl);

let option = 0;

firstButton.addEventListener('click', onRockButtonClicked);
function onRockButtonClicked(event) {
  option = 1;
  let compOption = Math.floor(Math.random() * 3) + 1;
  if (compOption == 2) {
    refs.winEl.textContent = 'Ви виграли раунд!';
    refs.winEl.style.color = '#039900';
    refs.scoreYou += 1;
  } else if (option === compOption) {
    refs.winEl.textContent = 'Нічия!';
    refs.winEl.style.color = '#000';
  } else {
    refs.winEl.textContent = 'Комп’ютер виграв раунд!';
    refs.winEl.style.color = '#900';
    refs.scoreCompl += 1;
  }
}
secondButton.addEventListener('click', onPaperButtonClicked);
function onPaperButtonClicked(event) {
  option = 2;
  let compOption = Math.floor(Math.random() * 3) + 1;
  if (compOption == 1) {
    refs.winEl.textContent = 'Ви виграли раунд!';
    refs.winEl.style.color = '#039900';
    refs.scoreYou += 1;
  } else if (option === compOption) {
    refs.winEl.textContent = 'Нічия!';
    refs.winEl.style.color = '#000';
  } else {
    refs.winEl.textContent = 'Комп’ютер виграв раунд!';
    refs.winEl.style.color = '#900';
    refs.scoreComp += 1;
  }
}

thirdButton.addEventListener('click', onScissorsButtonClicked);
function onScissorsButtonClicked(event) {
  option = 3;
  let compOption = Math.floor(Math.random() * 3) + 1;
  if (compOption == 2) {
    refs.winEl.textContent = 'Ви виграли раунд!';
    refs.winEl.style.color = '#039900';
    refs.scoreYou += 1;
  } else if (option === compOption) {
    refs.winEl.textContent = 'Нічия!';
    refs.winEl.style.color = '#000';
  } else {
    refs.winEl.textContent = 'Комп’ютер виграв раунд!';
    refs.winEl.style.color = '#900';
    refs.scoreComp += 1;
  }
}
refs.copmButtonEl.style.cursor = 'pointer';
refs.copmButtonEl.addEventListener('click', onCompButtonElClicked);
function onCompButtonElClicked(event) {
  console.log("comp next")
}
