class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);

    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  clickedOut() {
    document.addEventListener("click", (e) => {
      if (
        this.navList.classList.contains("active") &&
        this.mobileMenu.classList.contains("active")
      ) {
        if (
          !this.mobileMenu.contains(e.target) &&
          !this.navList.contains(e.target)
        ) {
          this.handleClick();
        } else return;
      }
    });
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  handleClick() {
    this.mobileMenu.classList.toggle(this.activeClass);
    this.navList.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  init() {
    this.mobileMenu && this.addClickEvent();
    this.clickedOut();
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();
