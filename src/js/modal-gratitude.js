(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-footer-modal-open]'),
    closeModalBtn: document.querySelector('[data-footer-modal-close]'),
    modal: document.querySelector('[data-footer-modal]'),
    emailInput: document.querySelector('.footer__input'),
  };

  refs.openModalBtn.addEventListener('click', () => {
    if (
      refs.emailInput.checkValidity() &&
      refs.emailInput.value.trim() !== ''
    ) {
      toggleModal();
    } else {
      alert('Будь ласка, введіть коректний email 📧');
    }
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscPress);

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
