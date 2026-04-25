const timeInput = document.querySelector('.time-calculator__input');
const timeResult = document.querySelector('.time-calculator__text');
const timebtn = document.querySelector('.time-calculator__btn');

timebtn.addEventListener('click', () => {
  const seconds = parseFloat(timeInput.value);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const miliSeconds = Math.round((seconds % 1) * 1000);

  timeResult.textContent = `${hours}дн. ${minutes}:${remainingSeconds}:${miliSeconds}`;
});
