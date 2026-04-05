const refs = {
  containerEl: document.querySelector('.container-football-js'),
  titleEl: document.createElement('h2'),
  footballFieldEl: document.createElement('div'),
  ballEl: document.createElement('div'),
};
refs.titleEl.textContent = 'Футбол';
refs.titleEl.classList.add('title');
refs.containerEl.append(refs.titleEl);
refs.footballFieldEl.style.cssText =
  'border: 2px solid #000; border-radius: 37px; width: 720px; height: 220px; background: #5abb58;';
refs.titleEl.append(refs.footballFieldEl);
