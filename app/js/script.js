const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const openMenuBtn = document.querySelector('.header__hamburger');
const closeMenuBtn = document.querySelector('.header__menu-btn');

const openMenu = () => {
  menu.classList.remove('close');
  menu.classList.add('open');
};

const closeMenu = () => {
  menu.classList.remove('open');
  menu.classList.add('close');
};

openMenuBtn.addEventListener('click', () => {
  openMenu();
});

closeMenuBtn.addEventListener('click', () => {
  closeMenu();
});
