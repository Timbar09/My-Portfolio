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

const projectsArr = [
  {
    ctaId: '1',
    name: 'Awesome books',
    description:
      'Awesome Books is a dynamic single page web app that displays a list of books and allows you to add and remove books from that list. The books are managed and manipulated using classes and helper functions within those classes. The displayed books are stored and retrieved from the local storage of the browser.',
    image: 'images/Awesome-books-popup.svg',
    technologies: ['Github', 'JavaScript', 'Terminal', 'css', 'html', 'Luxon'],
    source: 'https://github.com/Timbar09/Awesome-books-vol-2',
    live: 'https://timbar09.github.io/Awesome-books-vol-2/',
  },
  {
    ctaId: '2',
    name: "Africa's Leading Tech Confrence 2023",
    description:
      "This project is a dynamic conference web page.The project was built with JavaScript, CSS and HTML. On the speakers section, speaker data is stored in browswer's local storage and the data is lretrieved when the page loads.",
    image: 'images/ALT-Conference-popup.svg',
    technologies: ['JavaScript', 'GitHub', 'css', 'Terminal', 'html'],
    source: 'https://github.com/Timbar09/Africas-Leading-Tech-Conference',
    live: 'https://timbar09.github.io/Africas-Leading-Tech-Conference/',
  },
  {
    ctaId: '3',
    name: 'Project 3 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam libero accusantium quibusdam quis, voluptatem rem deserunt, quod iste labore tenetur dolores officia natus eaque neque consequuntur necessitatibus nemo nostrum eos nulla quo dolore cumque dolor!',
    image: 'images/project3-desktop.svg',
    technologies: ['Github', 'Bootstrap', 'Terminal'],
    source: '',
    live: '',
  },
  {
    ctaId: '4',
    name: 'Project 4 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit possimus hic dolore unde fugit suscipit, voluptas dolorum nobis debitis.',
    image: 'images/project1-desktop.svg',
    technologies: ['Github', 'JavaScript', 'Bootstrap', 'Terminal'],
    source: '',
    live: '',
  },
  {
    ctaId: '5',
    name: 'Project 5 title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas ut, maxime eos quos incidunt commodi aut libero explicabo enim laboriosam, similique quidem id ipsa. Harum reprehenderit iste ad officia beatae aperiam vel nisi nobis, dolorem nulla.',
    image: 'images/project2-desktop.svg',
    technologies: ['Codekit', 'JavaScript', 'Terminal', 'Codepen'],
    source: '',
    live: '',
  },
  {
    ctaId: '6',
    name: 'Project 6 title',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, voluptatem aliquid. Omnis similique animi doloribus ipsam, incidunt excepturi explicabo esse voluptatum sit error, adipisci dolore ipsa praesentium beatae, fugit velit accusamus.',
    image: 'images/project3-desktop.svg',
    technologies: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal'],
    source: '',
    live: '',
  },
];

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
