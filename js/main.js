let navBtn = document.querySelector(".nav__burger");
let navClose = document.querySelector(".nav__close");

let navList = document.querySelector(".nav__list");

navBtn.onclick = function () {
  navList.classList.toggle("nav__list__show");
  navClose.classList.toggle("nav__close__btn");
};
navClose.onclick = function () {
  navList.classList.toggle("nav__list__show");
  navClose.classList.toggle("nav__close__btn");
};
