(() => {
  const menuBtn = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-menu]");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isMenuOpen = menuBtn.getAttribute("aria-expanded") === "true" || false;

      menuBtn.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", !isMenuOpen);
    });
  }
})();
