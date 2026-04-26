import { setOnWordChange } from './modal-register.js';
const userName = document.querySelector('.header__right-user');
setOnWordChange(word => {
  // console.log('Submitted value:', word);
  userName.textContent = word;
});
const btn = document.getElementById('themeToggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  // invert colors
  const invertedEl = document.querySelectorAll('.logo-js-toggle');
  invertedEl.forEach(el => {
    el.classList.toggle('logo-js');
  });
  const arrowsEl = document.querySelectorAll(
    '.our-team__wrapper-arrows-svg-js'
  );
  arrowsEl.forEach(el => {
    el.classList.toggle('logo-js');
  });
  const canvasEl = document.querySelector('.dinosaur-game__canvas');
  canvasEl.classList.toggle('logo-js');
});
// suffics

const sufficsWord = document.body.querySelector('.nav__item');
// console.log(document.querySelector('.nav__link--arrow'));
sufficsWord.addEventListener('click', toggleSuffix);

// rest
function toggleSuffix() {
  const link = document.querySelector('.nav__link--arrow');
  link.classList.toggle('is-rotated');
}
// }
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('[data-filter]');
  const sections = document.querySelectorAll('section[id]');

  const groups = {
    number: ['1', '2', '4', '5', '8'],
    game: ['3', '6', '7'],
    intro: ['9', '10'],
  };

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const filter = link.dataset.filter;
      const allowed = groups[filter];

      sections.forEach(section => {
        const id = section.id;

        if (allowed.includes(id)) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});

const headerTeam = document.querySelector('.header-our-team-js');

headerTeam.addEventListener('click', e => {
  e.preventDefault();

  document.getElementById('9').scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
});

const headerContacts = document.querySelector('.header-our-team-js-contacts');

headerContacts.addEventListener('click', e => {
  e.preventDefault();

  document.querySelector('.footer').scrollIntoView({
    behavior: 'smooth',
  });
});
// close on press on body or escape button
const checkbox = document.querySelector('.nav__checkbox');
const navItem = document.querySelector('.nav__item');

document.addEventListener('click', e => {
  if (!navItem.contains(e.target)) {
    checkbox.checked = false;
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    checkbox.checked = false;
  }
});
