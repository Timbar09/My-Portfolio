const body = document.querySelector('.body');
const menu = document.querySelector('.header__menu');
const openMenuBtn = document.querySelector('.header__hamburger');
const closeMenuBtn = document.querySelector('.header__menu-btn');
const menuOptions = document.querySelectorAll('.header__menu-link');

const openMenu = () => {
  menu.classList.remove('close');
  menu.classList.add('open');
  body.classList.add('noscroll');
};

const closeMenu = () => {
  menu.classList.remove('open');
  menu.classList.add('close');
  body.classList.remove('noscroll');
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
