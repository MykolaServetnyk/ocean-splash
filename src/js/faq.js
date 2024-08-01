(() => {
  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach(button => {
    button.addEventListener('click', e => {
      const faqAnswer = button.nextElementSibling;
      const iconArrow = button.querySelector('.icon-arrow');

      faqAnswer.classList.toggle('visually-hidden');
      iconArrow.classList.toggle('arrow-reverse');
    });
  });
})();
