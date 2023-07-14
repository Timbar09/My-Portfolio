import projectsArr from './projects.js';
import {
  openMenu,
  closeMenu,
  activatePopup,
  deactivatePopup,
  isEmailLowerCase,
  showCaseSuccess,
  showCaseError,
  fillInPopupText,
  storeUserInfo,
  retrieveUserInfo,
} from './functions.js';

// Mobile menu functionality

const menuOptions = document.querySelectorAll('.header__menu-link');
const openMenuBtn = document.querySelector('.header__hamburger');
const closeMenuBtn = document.querySelector('.header__menu-btn');

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

// Project details popup window

const projectButtons = document.querySelectorAll('.project__cta');
const popupCancelBtn = document.querySelector('.popup__cancel-btn_icon');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    fillInPopupText(projectsArr, button);
    activatePopup();
  });
});

popupCancelBtn.addEventListener('click', () => {
  deactivatePopup();
});

// Contact form validation

const contactForm = document.querySelector('.footer__form');

contactForm.addEventListener('submit', (e) => {
  if (isEmailLowerCase()) {
    showCaseSuccess();
  } else {
    showCaseError();
    e.preventDefault();
  }
});

// Store and retrieve user information

retrieveUserInfo();

contactForm.addEventListener('change', storeUserInfo);
