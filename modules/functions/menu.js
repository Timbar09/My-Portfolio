const openMenu = () => {
  const body = document.querySelector('.body');
  const menu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.overlay');

  menu.classList.remove('close');
  overlay.classList.remove('close');
  menu.classList.add('open');
  overlay.classList.add('open');
  body.classList.add('noscroll');
};

const closeMenu = () => {
  const body = document.querySelector('.body');
  const menu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.overlay');

  menu.classList.remove('open');
  overlay.classList.remove('open');
  body.classList.remove('noscroll');
  menu.classList.add('close');
  overlay.classList.add('close');
};

export { openMenu, closeMenu };
