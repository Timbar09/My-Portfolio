const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu');
const menuOptions = document.querySelectorAll('.header__menu-link');
const openMenuBtn = document.querySelector('.header__hamburger');
const closeMenuBtn = document.querySelector('.header__menu-btn');

const openMenu = () => {
  menu.classList.remove('close');
  overlay.classList.remove('close');
  menu.classList.add('open');
  overlay.classList.add('open');
  body.classList.add('noscroll');
};

const closeMenu = () => {
  menu.classList.remove('open');
  overlay.classList.remove('open');
  body.classList.remove('noscroll');
  menu.classList.add('close');
  overlay.classList.add('close');
};

openMenuBtn.addEventListener('click', () => {
  openMenu();
});

closeMenuBtn.addEventListener('click', () => {
  closeMenu();
});

menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    closeMenu();
  });
});
