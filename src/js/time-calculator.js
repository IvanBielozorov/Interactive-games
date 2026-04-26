const timeInput = document.querySelector('.time-calculator__input');
const timeResult = document.querySelector('.time-calculator__text');
const timebtn = document.querySelector('.time-calculator__btn');

timebtn.addEventListener('click', () => {
  const value = timeInput.value.trim();

  if (value === '') {
    alert('Будь ласка введіть час');
    return;
  }

  const seconds = parseFloat(value);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  timeResult.textContent =
    `${days}дн. ` +
    `${hours.toString().padStart(2, '0')}год. ` +
    `${minutes.toString().padStart(2, '0')}хв. ` +
    `${remainingSeconds.toString().padStart(2, '0')}с.`;
});
