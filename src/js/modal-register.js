(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    input: document.querySelector('.js-input'),
    form: document.querySelector('.js-register-modal-form'),
  };
  document.body.classList.add('no-scroll');
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscPress);

  // Input
  refs.form.addEventListener('submit', onInputChange);
  function onInputChange(event) {
    event.preventDefault();
    const word = refs.input.value;
    // console.log(word);
    toggleModal();
  }
  // Toggle modal
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
  function onBackdropClick(e) {
    if (e.target === refs.modal) {
      toggleModal();
    }
  }

  function onEscPress(e) {
    if (e.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  }
})();
