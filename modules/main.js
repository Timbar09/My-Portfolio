import projectsArr from './projectData.js';
import * as f from './functions/index.js';

// Dark mode functionality
const dakModeToggle = document.querySelector('.header__toggle');
let darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
  f.enableDarkMode();
}

dakModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    f.enableDarkMode();
  } else {
    f.disableDarkMode();
  }
});

// Mobile menu functionality
const menuOptions = document.querySelectorAll('.header__menu-link');
const MenuToggleBtn = document.querySelector('.header__hamburger');
const overlay = document.querySelector('.overlay');

MenuToggleBtn.addEventListener('click', () => {
  if (MenuToggleBtn.classList.contains('hamburger__close')) {
    f.openMenu();
  } else {
    f.closeMenu();
  }
});

menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    f.closeMenu();
  });
});

overlay.addEventListener('click', () => {
  f.closeMenu();
  f.clearPopupText();
  f.deactivatePopup();
});

// Render projects
f.renderProjects();

// Intersection observer
f.observe();

// Project details popup window
const projectButtons = document.querySelectorAll('.project__cta');
const popupCancelBtn = document.querySelector('.popup__cancel-btn_icon');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    f.fillInPopupText(projectsArr, button);
    setTimeout(() => {
      f.activatePopup();
    }, 175);
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
