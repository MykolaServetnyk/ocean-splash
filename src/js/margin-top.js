document.addEventListener("DOMContentLoaded", function () {
  function adjustHeroMargin() {
    const header = document.getElementById('header');
    const hero = document.querySelector('.hero');

    const headerHeight = header.offsetHeight;

    hero.style.marginTop = `-${headerHeight}px`;

  }

  adjustHeroMargin();

  window.addEventListener('resize', adjustHeroMargin);
});
