const list = document.querySelector('.our-team__list');
const dots = document.querySelectorAll('.our-team__dot');
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = dot.dataset.index;
    const width = list.clientWidth;
    list.scrollTo({ left: width * index, behavior: 'smooth' });
    document.querySelector('.our-team__dot.active')?.classList.remove('active');
    dot.classList.add('active');
  });
});
