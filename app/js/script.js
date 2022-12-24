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

const desktopView = window.matchMedia('(min-width: 64em');

const projectsArr = [
  {
    ctaId: '1',
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    image: ['images/project1-mobile.svg', 'images/project1-desktop.svg'],
    technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    ctaId: '2',
    name: 'Project 2 title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste consequatur vitae corporis velit. Officia, quo quam. Sit laudantium, nisi enim natus explicabo, odio architecto doloribus dolorem suscipit veritatis, asperiores numquam quia amet perferendis? Architecto obcaecati illum dolorum laudantium facilis totam sequi voluptas nulla quia. Quo, culpa! Soluta quam rem inventore.',
    image: ['images/project2-mobile.svg', 'images/project2-desktop.svg'],
    technologies: ['Codekit', 'JavaScript', 'Codepen'],
  },
  {
    ctaId: '3',
    name: 'Project 3 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam libero accusantium quibusdam quis, voluptatem rem deserunt, quod iste labore tenetur dolores officia natus eaque neque consequuntur necessitatibus nemo nostrum eos nulla quo dolore cumque dolor!',
    image: ['images/project3-mobile.svg', 'images/project3-desktop.svg'],
    technologies: ['Github', 'Bootstrap', 'Terminal'],
  },
  {
    ctaId: '4',
    name: 'Project 4 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit possimus hic dolore unde fugit suscipit, voluptas dolorum nobis debitis.',
    image: ['images/project1-mobile.svg', 'images/project1-desktop.svg'],
    technologies: ['Github', 'JavaScript', 'Bootstrap', 'Terminal'],
  },
  {
    ctaId: '5',
    name: 'Project 5 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas ut, maxime eos quos incidunt commodi aut libero explicabo enim laboriosam, similique quidem id ipsa. Harum reprehenderit iste ad officia beatae aperiam vel nisi nobis, dolorem nulla.',
    image: ['images/project2-mobile.svg', 'images/project2-desktop.svg'],
    technologies: ['Codekit', 'JavaScript', 'Terminal', 'Codepen'],
  },
  {
    ctaId: '6',
    name: 'Project 6 title',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, voluptatem aliquid. Omnis similique animi doloribus ipsam, incidunt excepturi explicabo esse voluptatum sit error, adipisci dolore ipsa praesentium beatae, fugit velit accusamus.',
    image: ['images/project3-mobile.svg', 'images/project3-desktop.svg'],
    technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal'],
  },
];

// Open popup
const activatePopup = () => {
  const popup = document.querySelector('.project__details');
  const overlay = document.querySelector('.overlay');

  popup.classList.remove('close');
  popup.classList.add('open');
  overlay.classList.add('open');
  overlay.classList.remove('close');
  overlay.style.zIndex = 1001;
};

// Close popup
const deactivatePopup = () => {
  const popup = document.querySelector('.project__details');
  const popupTechList = document.querySelector('.project__details-languages');
  const popupfeatureImg = document.querySelector('.project__details-featured-image');
  const overlay = document.querySelector('.overlay');

  popup.classList.remove('open');
  popup.classList.add('close');
  overlay.classList.remove('open');
  overlay.classList.add('close');
  overlay.style.zIndex = 999;
  popupTechList.innerHTML = '';
  popupfeatureImg.src = '';
};

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activatePopup();

    // fill in text inside popup
    projectsArr.forEach((project) => {
      const popupfeatureImg = document.querySelector('.project__details-featured-image');
      const popupTechList = document.querySelector('.project__details-languages');

      if (project.ctaId === button.id) {
        popupTitle.textContent = project.name;
        popupDescrption.textContent = project.description;
        project.technologies.forEach((tech) => {
          // Create an 'li' element containg an 'a' element with classes and name of technology.
          const techList = document.createElement('li');
          const techListLink = document.createElement('a');

          // Add classes and text(technology name) to 'a' element
          techListLink.className = 'project__details-language section__card-btn';
          techListLink.textContent = tech;

          // Add the 'li' into the 'ul' element
          techList.appendChild(techListLink);
          popupTechList.appendChild(techList);
        });

        const [mobile, desktop] = project.image;

        if (desktopView.matches) {
          popupfeatureImg.src = desktop;
        } else {
          popupfeatureImg.src = mobile;
        }
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
