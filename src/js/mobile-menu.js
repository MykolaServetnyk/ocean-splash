(() => {
  const menuBtn = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-menu]");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link a");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isMenuOpen = menuBtn.getAttribute("aria-expanded") === "true" || false;

      menuBtn.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", !isMenuOpen);
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("is-open")) {
        menuBtn.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", false);
      }
    });
  });
})();
