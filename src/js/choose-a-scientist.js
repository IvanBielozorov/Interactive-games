const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
// References
const refs = {
  containerScientistsEls: document.querySelector('.scientists-container-js'),
  titleEl: document.createElement('h2'),
  scientistsGridEl: document.createElement('ul'),
  scientistsEls: [],
  buttonsGridEl: document.createElement('ul'),
  buttonEls: [],
};

// Title
refs.titleEl.textContent = 'Обери вченого/их';
refs.titleEl.classList.add('title');
refs.containerScientistsEls.appendChild(refs.titleEl);
// Creating scinetists

const images = [
  './#',
  './#',
  './#',
  './#',
  './#',
  './#',
  './#',
  './#',
  './#',
  './#',
  './#',
  './#',
];

refs.scientistsGridEl.classList.add('scientists-grid');

scientists.forEach((scientist, index) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = images[index] || './#'; // fallback if no image
  img.alt = `${scientist.name} ${scientist.surname}`;
  li.appendChild(img);

  refs.scientistsGridEl.appendChild(li);
  refs.scientistsEls.push(li);
  li.classList.add('scientists-el');
});

refs.containerScientistsEls.appendChild(refs.scientistsGridEl);

// Creating buttons with its text
refs.buttonsGridEl.classList.add('scientists-buttons-grid');

const buttonTexts = [
  'Які вчені народилися в 19 ст.',
  'Знайти рік народження Albert Einshtein',
  'Відсортувати вчених за алфавітом',
  'Знайти вчених, прізвища яких починаються на на літеру “С” ',
  'Відсортувати вчених за кількістю прожитих років',
  'Видалити всіх вчених, ім’я яких починається на “А”',
  'Знайти вченого, який народився найпізніше',
  'Знайти вченого, який прожив найдовше і вченого, який прожив найменше',
  'Знайти вчених, в яких співпадають перші літери імені і прізвища',
];

buttonTexts.forEach(text => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = text; // assign the unique text
  button.classList.add('scientists-buttons');
  li.appendChild(button);
  refs.buttonsGridEl.appendChild(li);
  refs.buttonEls.push(button); // store the button in refs
});
refs.containerScientistsEls.appendChild(refs.buttonsGridEl);

refs.buttonEls[7].style.height = '50px';

// Functions for buttons

// First button
refs.buttonEls[0].addEventListener('click', onFirstButtonClicked);

function onFirstButtonClicked() {
  refs.scientistsEls.forEach(li => {
    refs.scientistsGridEl.appendChild(li);
  });
  scientists.forEach((scientist, i) => {
    if (!(scientist.born >= 1800 && scientist.born <= 1900)) {
      refs.scientistsEls[i].remove();
    }
  });
}

// Second button
refs.buttonEls[1].addEventListener('click', onSecondButtonClicked);

function onSecondButtonClicked() {
  scientists.forEach(scientist => {
    if (scientist.name === 'Albert' && scientist.surname === 'Einstein') {
      alert(`Рік народження Енштейна ${scientist.born}`);
    }
  });
}

// Third button
refs.buttonEls[2].addEventListener('click', onThirdButtonClicked);

function onThirdButtonClicked() {
  refs.scientistsEls.forEach(li => {
    refs.scientistsGridEl.appendChild(li);
  });
  const sortedScientists = [...scientists].sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );
  sortedScientists.forEach(sortedScientist => {
    const index = scientists.findIndex(s => s.id === sortedScientist.id);
    const li = refs.scientistsEls[index];
    refs.scientistsGridEl.appendChild(li);
  });
}

// Forth button
refs.buttonEls[3].addEventListener('click', onForthButtonClicked);

function onForthButtonClicked() {
  refs.scientistsEls.forEach(li => {
    refs.scientistsGridEl.appendChild(li);
  });
  scientists.forEach((scientist, i) => {
    const surnameLetters = scientist.surname.split('');
    if (surnameLetters[0] != 'C') {
      refs.scientistsEls[i].remove();
    }
  });
}

// Fifth button

refs.buttonEls[4].addEventListener('click', onFifthButtonClicked);

function onFifthButtonClicked() {
  refs.scientistsEls.forEach(li => {
    refs.scientistsGridEl.appendChild(li);
  });

  const sorted = [...scientists].sort((a, b) => {
    const lifeA = a.dead - a.born;
    const lifeB = b.dead - b.born;
    return lifeA - lifeB; // smallest → biggest
  });

  sorted.forEach(scientist => {
    const index = scientists.findIndex(s => s.id === scientist.id);
    const li = refs.scientistsEls[index];
    refs.scientistsGridEl.appendChild(li);
  });
}

// Sixth button

refs.buttonEls[5].addEventListener('click', onSixthButtonClicked);

function onSixthButtonClicked() {
  refs.scientistsEls.forEach(li => {
    refs.scientistsGridEl.appendChild(li);
  });
  scientists.forEach((scientist, i) => {
    const nameLetters = scientist.name.split('');
    if (nameLetters[0] != 'A') {
      refs.scientistsEls[i].remove();
    }
  });
}

// Seventh button

refs.buttonEls[6].addEventListener('click', onSeventhButtonClicked);

function onSeventhButtonClicked() {
  refs.scientistsEls.forEach(li => {
    refs.scientistsGridEl.appendChild(li);
  });
  let latestBirth = scientists[0];
  scientists.forEach(scientist => {
    if (scientist.born > latestBirth.born) {
      latestBirth = scientist;
    }
  });
  scientists.forEach((scientist, i) => {
    if (scientist != latestBirth) {
      refs.scientistsEls[i].remove();
    }
  });
}

// Eighth button

refs.buttonEls[7].addEventListener('click', onEighthButtonClicked);

function onEighthButtonClicked() {
  refs.scientistsEls.forEach(li => {
    refs.scientistsGridEl.appendChild(li);
  });
  let latestBirth = scientists[0];
  let earliestBirth = scientists[0];
  scientists.forEach((scientist, i) => {
    scientists.forEach(scientist => {
      if (scientist.born > latestBirth.born) {
        latestBirth = scientist;
      }
    });
    scientists.forEach(scientist => {
      if (scientist.born < earliestBirth.born) {
        earliestBirth = scientist;
      }
    });
  });
  scientists.forEach((scientist, i) => {
    if (scientist != earliestBirth && scientist != latestBirth) {
      refs.scientistsEls[i].remove();
    }
  });
  alert(
    'Katherine Blodgett was born the latest and Nicolaus Copernicus was born the earliest'
  );
}

// nineth button

refs.buttonEls[8].addEventListener('click', onNinethButtonClicked);

function onNinethButtonClicked() {
  refs.scientistsEls.forEach(li => {
    refs.scientistsGridEl.appendChild(li);
  });
  scientists.forEach((scientist, i) => {
    const firstLetterName = scientist.name[0].toLowerCase();
    const firstLetterSurname = scientist.surname[0].toLowerCase();

    if (firstLetterName !== firstLetterSurname) {
      refs.scientistsEls[i].remove();
    }
  });
}
