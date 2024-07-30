(() => {
  const menuBtn = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-menu]");
  const headerLogo = document.querySelector(".header-logo");

  if (menuBtn && mobileMenu && headerLogo) {
    menuBtn.addEventListener("click", () => {
      const isMenuOpen = menuBtn.getAttribute("aria-expanded") === "true" || false;

      menuBtn.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open");

      if (isMenuOpen) {
        headerLogo.style.display = 'block';
      } else {
        headerLogo.style.display = 'none';
      }

      menuBtn.setAttribute("aria-expanded", !isMenuOpen);
    });
  }
})();
