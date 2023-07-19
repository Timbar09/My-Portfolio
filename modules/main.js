import projectsArr from './projects.js';
import * as f from './functions/index.js';

// Mobile menu functionality

const menuOptions = document.querySelectorAll('.header__menu-link');
const openMenuBtn = document.querySelector('.header__hamburger');
const closeMenuBtn = document.querySelector('.header__menu-btn');

openMenuBtn.addEventListener('click', () => {
  f.openMenu();
});

closeMenuBtn.addEventListener('click', () => {
  f.closeMenu();
});

menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    f.closeMenu();
  });
});

// Project details popup window

const projectButtons = document.querySelectorAll('.project__cta');
const popupCancelBtn = document.querySelector('.popup__cancel-btn_icon');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    f.fillInPopupText(projectsArr, button);
    f.activatePopup();
  });
});

popupCancelBtn.addEventListener('click', () => {
  f.clearPopupText();
  f.deactivatePopup();
});

// Contact form validation

const contactForm = document.querySelector('.footer__form');

contactForm.addEventListener('submit', (e) => {
  if (f.isEmailLowerCase()) {
    f.showCaseSuccess();
  } else {
    f.showCaseError();
    e.preventDefault();
  }
});

// Store and retrieve user information

f.retrieveUserInfo();

contactForm.addEventListener('change', f.storeUserInfo);