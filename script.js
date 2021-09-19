console.log("-Общая оценка по самопроверке - 150 баллов");
console.log("1 + вёрстка валидная +10 ");
console.log("2 + вёрстка семантическая +20");
console.log("3 + для оформления СV используются css-стили +10");
console.log(
  "4 + контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во -всю ширину страницы +10"
);
console.log(
  "5 + вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10 "
);
console.log(
  "6 + вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10"
);
console.log(
  "7 + есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10"
);
console.log(
  "8 + на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10"
);
console.log("9 + контакты для связи и перечень навыков оформлены в виде списка ul > li +10");
console.log(
  "10 + CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10"
);
console.log("11 + CV содержит пример кода +10");
console.log(
  "12 + CV содержит изображения-ссылки на выполненные проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10"
);
console.log("12 + CV выполнено на английском языке +10");
console.log(
  "13 + выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10"
);
console.log("14 -- есть видеорезюме автора CV на английском языке - 0");
console.log(
  "15 + дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10"
);

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
