const openMenu = () => {
  const body = document.querySelector('.body');
  const hamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.overlay');

  hamburger.classList.remove('hamburger__close');
  menu.classList.remove('close');
  overlay.classList.remove('close');
  hamburger.classList.add('hamburger__open');
  menu.classList.add('open');
  overlay.classList.add('open');
  body.classList.add('noscroll');
};

const closeMenu = () => {
  const body = document.querySelector('.body');
  const hamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.overlay');

  hamburger.classList.remove('hamburger__open');
  menu.classList.remove('open');
  overlay.classList.remove('open');
  body.classList.remove('noscroll');
  hamburger.classList.add('hamburger__close');
  menu.classList.add('close');
  overlay.classList.add('close');
};

export { openMenu, closeMenu };
