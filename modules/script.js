import projectsArr from './projects.js';

const body = document.querySelector('.body');

const menu = document.querySelector('.header__menu');
const menuOptions = document.querySelectorAll('.header__menu-link');
const openMenuBtn = document.querySelector('.header__hamburger');
const closeMenuBtn = document.querySelector('.header__menu-btn');

const openMenu = () => {
  const overlay = document.querySelector('.overlay');

  menu.classList.remove('close');
  overlay.classList.remove('close');
  menu.classList.add('open');
  overlay.classList.add('open');
  body.classList.add('noscroll');
};

const closeMenu = () => {
  const overlay = document.querySelector('.overlay');

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

// Project details popup window

const projectButtons = document.querySelectorAll('.project__cta');
const popupCancelBtn = document.querySelector('.project__details-cancel-icon');

const popupTitle = document.querySelector('.project__feature-title');
const popupDescrption = document.querySelector('.project__details-description');

// Open popup
const activatePopup = () => {
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.overlay');

  popup.classList.remove('close');
  popup.classList.add('open');
  overlay.classList.add('open');
  overlay.classList.remove('close');
  body.classList.add('noscroll');

  overlay.style.zIndex = 1001;
};

// Close popup
const deactivatePopup = () => {
  const popup = document.querySelector('.popup');
  const popupTechList = document.querySelector('.project__details-languages');
  const overlay = document.querySelector('.overlay');

  popup.classList.remove('open');
  popup.classList.add('close');
  body.classList.remove('noscroll');
  overlay.classList.remove('open');
  overlay.classList.add('close');
  overlay.style.zIndex = 999;
  popupTechList.innerHTML = '';
};

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activatePopup();

    // fill in text inside popup
    projectsArr.forEach((project) => {
      const popup = document.querySelector('.popup');
      const popupfeatureImg = document.querySelector('.project__details-featured-image');
      const popupTechList = document.querySelector('.project__details-languages');
      const popupSource = document.querySelector('.project__details-source');
      const popupLive = document.querySelector('.project__details-live');

      if (project.ctaId === button.id) {
        popup.style.top = `${window.scrollY}px`;

        popupTitle.textContent = project.name;
        popupDescrption.textContent = project.description;
        popupSource.href = project.source;
        popupLive.href = project.live;
        project.technologies.forEach((tech) => {
          // Create an 'li' element containg an 'a' element with classes and name of technology.
          const techList = document.createElement('li');
          const techListLink = document.createElement('a');

          // Add classes and text(technology name) to 'a' element
          techListLink.className = 'project__details-language section__card-btn';
          techListLink.href = project.source;
          techListLink.target = '_blank';
          techListLink.textContent = tech;

          // Add the 'li' into the 'ul' element
          techList.appendChild(techListLink);
          popupTechList.appendChild(techList);
        });

        popupfeatureImg.src = project.image;
      }
    });
  });
});

popupCancelBtn.addEventListener('click', () => {
  deactivatePopup();
});

// Contact form validation

const contactForm = document.querySelector('.footer__form');
const userEmail = document.querySelector('#email');

// Check if the email value is in lowercase
const isLowerCase = () => !/[A-Z]/g.test(userEmail.value);

const showCaseError = () => {
  const formField = userEmail.parentElement;

  formField.classList.remove('valid');
  formField.classList.add('invalid');

  const caseError = formField.querySelector('.footer__form-error-msg');
  caseError.textContent = 'All letters must be lowercase';
};

const showCaseSuccess = () => {
  const formField = userEmail.parentElement;

  formField.classList.remove('invalid');
  formField.classList.add('valid');

  const caseError = formField.querySelector('.footer__form-error-msg');
  caseError.textContent = '';
};

// Store and retrieve user information

// Store user info
const storeUserInfo = () => {
  const theUser = {};
  const userName = document.querySelector('#name').value;
  const userEmail = document.querySelector('#email').value;
  const userMessage = document.querySelector('#message').value;

  theUser.name = userName;
  theUser.email = userEmail;
  theUser.message = userMessage;

  // Saving to local storage
  localStorage.setItem('theUser', JSON.stringify(theUser));
};

// Get user info
const userInfo = JSON.parse(localStorage.getItem('theUser'));

const retrieveUserInfo = () => {
  if (userInfo) {
    document.querySelector('#name').value = userInfo.name;
    document.querySelector('#email').value = userInfo.email;
    document.querySelector('#message').value = userInfo.message;
  }
};

retrieveUserInfo();

contactForm.addEventListener('change', storeUserInfo);

contactForm.addEventListener('submit', (e) => {
  if (isLowerCase()) {
    showCaseSuccess();
  } else {
    showCaseError();
    e.preventDefault();
  }
});
