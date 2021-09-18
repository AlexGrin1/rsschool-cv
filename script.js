const link = document.querySelector(".burger_nav");
const burgMenu = document.querySelector(".burger");
const nav = document.querySelector(".burger_menu_none");
const aside = document.querySelector("aside");
const body = document.querySelector("body");
burgMenu.addEventListener("click", (ev) => {
  nav.classList.toggle("burger_menu_show");
  nav.classList.toggle("burger_menu_none");
  burgMenu.classList.toggle("burger_active");
  aside.classList.toggle("aside-overlay");
  body.classList.toggle("no_scroll");
});

aside.addEventListener("click", (event) => {
  if (event.target === aside) {
    aside.classList.remove("aside-overlay");
    burgMenu.classList.remove("burger_active");
    nav.classList.remove("burger_menu_show");
    nav.classList.add("burger_menu_none");
    body.classList.remove("no_scroll");
  }
});

link.addEventListener("click", () => {
  nav.classList.remove("burger_menu_show");
  burgMenu.classList.remove("burger_active");
  aside.classList.remove("aside-overlay");
  nav.classList.add("burger_menu_none");
  body.classList.remove("no_scroll");
});
