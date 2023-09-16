import projectsArr from './data/projects.js';
import renderProjects from './modules/renderProjects.js';
import observe from './modules/intersectionObserver.js';
import { openMenu, closeMenu } from './modules/menu.js';
import { enableDarkMode, disableDarkMode } from './modules/darkmode.js';
import { storeUserInfo, retrieveUserInfo } from './modules/storage.js';
import {
  isEmailLowerCase,
  showCaseError,
  showCaseSuccess,
} from './modules/form.js';
import {
  activatePopup,
  deactivatePopup,
  fillInPopupText,
  clearPopupText,
} from './modules/popup.js';
import './styles/main.scss';

// Dark mode functionality
const dakModeToggle = document.querySelector('.header__toggle');
let darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
  enableDarkMode();
}

if (dakModeToggle) {
  dakModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

// Mobile menu functionality
const menuOptions = document.querySelectorAll('.header__menu-link');
const MenuToggleBtn = document.querySelector('.header__hamburger');
const overlay = document.querySelector('.overlay');

if (MenuToggleBtn) {
  MenuToggleBtn.addEventListener('click', () => {
    if (MenuToggleBtn.classList.contains('hamburger__close')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}

if (menuOptions) {
  menuOptions.forEach((option) => {
    option.addEventListener('click', () => {
      closeMenu();
    });
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    closeMenu();
    clearPopupText();
    deactivatePopup();
  });
}

// Render projects
renderProjects();

// Intersection observer
observe();

// Project details popup window
const projectButtons = document.querySelectorAll('.project__cta');
const popupCancelBtn = document.querySelector('.popup__cancel-btn_icon');

if (projectButtons) {
  projectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      fillInPopupText(projectsArr, button);
      setTimeout(() => {
        activatePopup();
      }, 175);
    });
  });
}

if (popupCancelBtn) {
  popupCancelBtn.addEventListener('click', () => {
    clearPopupText();
    deactivatePopup();
  });
}

// Contact form validation
const contactForm = document.querySelector('.footer__form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    if (isEmailLowerCase()) {
      showCaseSuccess();
    } else {
      showCaseError();
      e.preventDefault();
    }
  });
}

// Store and retrieve user information
retrieveUserInfo();

if (contactForm) {
  contactForm.addEventListener('submit', storeUserInfo);
}
