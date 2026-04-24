const list = document.querySelector('.our-team__list');
const dots = document.querySelectorAll('.our-team__dot');
const nextBtn = document.querySelector('.our-team__wrapper-arrows-svg-right');
const prevBtn = document.querySelector('.our-team__wrapper-arrows-svg-left');

function goToSlide(index) {
  const width = list.clientWidth;

  list.scrollTo({ left: width * index, behavior: 'smooth' });

  document.querySelector('.our-team__dot.active')?.classList.remove('active');
  dots[index].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.dataset.index));
  });
});

nextBtn?.addEventListener('click', () => {
  const active = document.querySelector('.our-team__dot.active');
  const index = (parseInt(active.dataset.index) + 1) % dots.length;
  goToSlide(index);
});

prevBtn?.addEventListener('click', () => {
  const active = document.querySelector('.our-team__dot.active');
  const index =
    (parseInt(active.dataset.index) - 1 + dots.length) % dots.length;
  goToSlide(index);
});