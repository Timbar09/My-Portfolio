// Menu functions

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

// Project details popup window functions

const activatePopup = () => {
  const body = document.querySelector('.body');
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.overlay');

  popup.classList.remove('close');
  popup.classList.add('open');
  overlay.classList.add('open');
  overlay.classList.remove('close');
  body.classList.add('noscroll');

  overlay.style.zIndex = 1001;
};

const deactivatePopup = () => {
  const body = document.querySelector('.body');
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

// Contact form functions

const isEmailLowerCase = () => {
  const userEmail = document.querySelector('#email');

  return userEmail.value === userEmail.value.toLowerCase();
};

const showCaseError = () => {
  const userEmail = document.querySelector('#email');
  const formField = userEmail.parentElement;

  formField.classList.remove('valid');
  formField.classList.add('invalid');

  const caseError = formField.querySelector('.footer__form-error-msg');
  caseError.textContent = 'All letters must be lowercase';
};

const showCaseSuccess = () => {
  const userEmail = document.querySelector('#email');
  const formField = userEmail.parentElement;

  formField.classList.remove('invalid');
  formField.classList.add('valid');

  const caseError = formField.querySelector('.footer__form-error-msg');
  caseError.textContent = '';
};

// Popup functions

const fillInPopupText = (projectsArr, button) => {
  projectsArr.forEach((project) => {
    const popup = document.querySelector('.popup');
    const popupTitle = document.querySelector('.popup__title');
    const popupDescrption = document.querySelector('.popup__description');
    const popupImage = document.querySelector('.popup__image img');
    const popupTechList = document.querySelector('.popup__languages');
    const popupSource = document.querySelector('.popup__cta-source');
    const popupLive = document.querySelector('.popup__cta-live');

    if (project.ctaId === button.id) {
      popup.style.top = `${window.scrollY}px`;

      popupTitle.textContent = project.name;

      project.description.forEach((paragraph) => {
        const popupDescriptionParagraph = document.createElement('p');
        popupDescriptionParagraph.innerHTML = paragraph;
        popupDescrption.appendChild(popupDescriptionParagraph);
      });
      // popupDescrption.textContent = project.description;
      popupSource.href = project.source;
      popupLive.href = project.live;
      project.technologies.forEach((tech) => {
        // Create an 'li' element containg an 'a' element with classes and name of technology.
        const techList = document.createElement('li');
        const techListLink = document.createElement('a');

        // Add classes and text(technology name) to 'a' element
        techListLink.className = 'popup__language section__card-btn';
        techListLink.href = project.source;
        techListLink.target = '_blank';
        techListLink.textContent = tech;

        // Add the 'li' into the 'ul' element
        techList.appendChild(techListLink);
        popupTechList.appendChild(techList);
      });

      popupImage.src = project.image;
    }
  });
};

// Storage functions

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

const retrieveUserInfo = () => {
  // Retrieving from local storage
  const userInfo = JSON.parse(localStorage.getItem('theUser'));

  if (userInfo) {
    document.querySelector('#name').value = userInfo.name;
    document.querySelector('#email').value = userInfo.email;
    document.querySelector('#message').value = userInfo.message;
  }
};

export {
  openMenu,
  closeMenu,
  activatePopup,
  deactivatePopup,
  isEmailLowerCase,
  showCaseError,
  showCaseSuccess,
  fillInPopupText,
  storeUserInfo,
  retrieveUserInfo,
};