document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".header__burger");
  const navMenu = document.querySelector(".header__nav");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("open-menu");
    burger.classList.toggle("open-menu");
    body.classList.toggle("lock");

  });
});



