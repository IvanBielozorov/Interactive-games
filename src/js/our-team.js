const list = document.querySelector('.our-team__list');
const dots = document.querySelectorAll('.our-team__dot');
const nextBtn = document.querySelector('.slider-btn--next');
const prevBtn = document.querySelector('.slider-btn--prev');
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = dot.dataset.index;
    const width = list.clientWidth;
    list.scrollTo({ left: width * index, behavior: 'smooth' });
    document.querySelector('.our-team__dot.active')?.classList.remove('active');
    dot.classList.add('active');
  });
});

nextBtn.addEventListener('click', () => {
  const activeDot = document.querySelector('.our-team__dot.active');
  const index = (parseInt(activeDot.dataset.index) + 1) % dots.length;
  const width = list.clientWidth;
  list.scrollTo({ left: width * index, behavior: 'smooth' });
  activeDot.classList.remove('active');
  dots[index].classList.add('active');
});
prevBtn.addEventListener('click', () => {
  const activeDot = document.querySelector('.our-team__dot.active');
  const index =
    (parseInt(activeDot.dataset.index) - 1 + dots.length) % dots.length;
  const width = list.clientWidth;
  list.scrollTo({ left: width * index, behavior: 'smooth' });
  activeDot.classList.remove('active');
  dots[index].classList.add('active');
});
