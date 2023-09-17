/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/projects.js":
/*!******************************!*\
  !*** ./src/data/projects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_projects_consolehub_popup_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/projects/consolehub_popup.svg */ "./images/projects/consolehub_popup.svg");
/* harmony import */ var _images_projects_budgettrail_popup_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/projects/budgettrail_popup.svg */ "./images/projects/budgettrail_popup.svg");
/* harmony import */ var _images_projects_space_popup_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/projects/space_popup.svg */ "./images/projects/space_popup.svg");
/* harmony import */ var _images_projects_blog_popup_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/projects/blog_popup.svg */ "./images/projects/blog_popup.svg");
/* harmony import */ var _images_projects_ALT_Conference_popup_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/projects/ALT-Conference-popup.svg */ "./images/projects/ALT-Conference-popup.svg");
/* harmony import */ var _images_projects_todo_app_detail_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/projects/todo_app_detail.svg */ "./images/projects/todo_app_detail.svg");
/* harmony import */ var _images_projects_Awesome_books_popup_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/projects/Awesome-books-popup.svg */ "./images/projects/Awesome-books-popup.svg");
// import project images







var projectsArr = [{
  ctaId: '1',
  name: 'ConsoleHub',
  description: ['ConsoleHub makes it easy for users to reserve their preferred gaming console at a time slot by simplifying the process of scheduling gaming sessions. The platform has an extensive library of gaming consoles, ensuring a wide variety of choices for users with varied gaming preferences.', "The application's front end is developed using React, a popular JavaScript library for building user interfaces. This choice provides a responsive and user-friendly interface that enhances the overall user experience. On the back end, ConsoleHub relies on Ruby on Rails, serving as the foundation for its API. Rails efficiently handles data management, ensuring robust performance and data security.", 'For user authentication, ConsoleHub relies on Devise, a trusted and widely used authentication solution in the Ruby on Rails ecosystem. This ensures that user accounts are secure and easily manageable. To provide an appealing and customizable design, the platform utilizes Tailwind CSS. This allows for visually appealing and responsive layouts, enhancing the user interface aesthetics.', 'In summary, ConsoleHub is a well-crafted web application that streamlines the booking of gaming consoles. It leverages React and Ruby on Rails for its front-end and back-end respectively, with Devise for authentication and Tailwind CSS for stylish design. The combination of these technologies ensures a seamless and enjoyable user experience for users.'],
  image: _images_projects_consolehub_popup_svg__WEBPACK_IMPORTED_MODULE_0__,
  technologies: ['Ruby on Rails', 'React', 'Tailwind CSS', 'Redux', 'PostgreSQL', 'Devise', 'Rspec-rails'],
  source: 'https://github.com/stephenkati/gaming_console_reservation_front_end',
  live: 'https://console-hub.netlify.app/'
}, {
  ctaId: '2',
  name: 'BudgetTrail',
  description: ['This handy mobile web app is carefully designed for users to track and optimize their finances. The app allows users to take control of their budget and manage their income and expenses in a comprehensive way.', "It is built on a robust architecture that combines the power of Ruby on Rails, PostgreSQL, and SASS to ensure a seamless and responsive user experience. This synergy not only guarantees the application's reliability, but also enables it to efficiently process and store data, safeguarding users' financial information.", 'Navigating through this user-friendly platform, individuals can effortlessly input and monitor their day-to-day transactions, assigning them to specific categories that align with their personal financial schema. By categorizing transactions, users gain unparalleled clarity into their spending patterns, unveiling insights that are instrumental in making informed financial decisions.', "The backbone of this application's user experience is fortified by Devise, an authentication solution that guarantees not only the security of user data but also a streamlined and hassle-free login process. Our implementation of Rspec-rails and Capybara further ensures that the application's functionalities are rigorously tested, guaranteeing its reliability and minimizing potential disruptions.", "With this mobile web application, you can turn financial prudence into a reachable goal. Explore the capabilities of comprehensive financial management, organized categorization, and insights driven by data. All these are wrapped in an interface that focuses on user experience while ensuring security and functionality aren't compromised. Start stepping towards the future of budget management today."],
  image: _images_projects_budgettrail_popup_svg__WEBPACK_IMPORTED_MODULE_1__,
  technologies: ['Ruby on Rails', 'PostgreSQL', 'SASS', 'Devise', 'Rspec-rails', 'Capybara', 'Rubocop', 'Github', 'Terminal'],
  source: 'https://github.com/Timbar09/BudgetTrail',
  live: 'https://budgettrail.onrender.com/'
}, {
  ctaId: '3',
  name: "Space Traveler's Hub",
  description: ['This web application showcases a comprehensive array of commercial and scientific space travel services. Its core functionality relies on fetching real-time data from the SpaceX API, providing users with up-to-date information on space exploration opportunities.', 'Users are not just passive observers; they can actively engage with the application by booking rockets for their space journeys and participating in selected space missions. This interactivity adds an immersive dimension to the user experience, allowing individuals to become part of the exciting world of space travel.', 'The web application is built using a combination of advanced technologies. React.js forms the foundation, offering a dynamic and responsive user interface that ensures a smooth and enjoyable browsing experience. Redux-toolkit enhances state management, making the application more efficient and user-friendly.', 'To enhance the visual appeal and user experience, Bootstrap is employed for crafting stylish and responsive layouts. Additionally, the application leverages REST APIs to seamlessly connect and retrieve data, ensuring that users have access to the most accurate and relevant information.', 'In summary, this web application is a gateway to the universe of commercial and scientific space travel. Its utilization of React.js, Redux-toolkit, Bootstrap, and Rest APIs ensures a sophisticated and engaging platform where users can explore, book, and embark on space adventures.'],
  image: _images_projects_space_popup_svg__WEBPACK_IMPORTED_MODULE_2__,
  technologies: ['React', 'Redux', 'Bootstrap', 'REST API'],
  source: 'https://github.com/Timbar09/React-Redux-Group-Project-Space-Travelers-Hub',
  live: 'https://spacetravelershub-react.onrender.com/'
}, {
  ctaId: '4',
  name: 'Blogister',
  description: ["This seamlessly operational web application serves as an interactive canvas, presenting a collection of posts that allows users to engage actively. Within this app, users can actively participate in conversations  by appending comments and expressing appreciation through likes. Designed to cater to bloggers' goals, this platform provides a way to share thoughts, concepts, and personal experiences with an interested audience.", 'The foundation of this dynamic experience is built using a combination of technologies, including Ruby on Rails, PostgreSQL, and SASS. These components work together to create a seamless, responsive, and secure application environment, allowing users to explore and contribute with confidence.', 'In this user-friendly environment, users encounter a carefully selected collection of posts, encouraging them to explore stories that align with their interests. This platform promotes active engagement, an embodiment of the contemporary digital experience where opinions and reactions play a role in shaping the narrative.', 'Powered by the versatility of Devise, a trusted authentication solution, the application ensures user data remains shielded, while the confluence of Rspec-rails and Capybara guarantees a meticulous validation of its functionalities, minimizing any potential disruptions.', 'In essence, what emerges is an immersive web application that not only disseminates information but also fosters a thriving community of discourse. This platform offers bloggers an avenue to broadcast their insights, opinions, and stories to an enthusiastic audience. Amidst the world of technology and communication, this application serves as a reminder of the impact of connectivity and the art of digital expression.'],
  image: _images_projects_blog_popup_svg__WEBPACK_IMPORTED_MODULE_3__,
  technologies: ['Ruby on Rails', 'PostgreSQL', 'SASS', 'Devise', 'Rspec-rails', 'CanCanCan', 'Capybara', 'Rubocop', 'Github', 'Terminal'],
  source: 'https://github.com/Timbar09/Blogister',
  live: 'https://github.com/Timbar09/Blogister'
}, {
  ctaId: '5',
  name: "Africa's Leading Tech Confrence 2023",
  description: ['This project is a responsive website consisting of multiple pages, including a home page and an about page. The website is designed and developed to provide an optimal viewing experience on both mobile and desktop devices, ensuring seamless navigation and functionality.', 'The home page serves as the central hub of the website, featuring a menu with a link to the about page. Users can easily navigate to the about page to access additional information about the project or organization.', 'In the header section of the website, the logo is strategically placed and links back to the home page, allowing users to quickly return to the main page regardless of their location within the website.', 'For mobile devices, a mobile menu is implemented. When users click or tap the hamburger button in the header, the mobile menu overlays the page, providing easy access to different sections and pages. The mobile menu is designed to be visually consistent with the overall website design, incorporating appropriate colors, typography, and spacing. To close the mobile menu, a close (X) button is provided, allowing users to seamlessly return to the main content.', "A dynamic page feature is implemented, specifically in the 'Featured speakers' section. The speaker data is stored in a JavaScript variable and utilized during the page load to dynamically generate the HTML content for this section. This dynamic approach allows for easy updating and modification of the featured speakers without directly modifying the HTML code.", 'The responsive design of the website ensures that it adapts to different screen sizes and devices. Whether accessed on a mobile device with a narrow viewport or a desktop computer, the website layout and content are optimized for the respective screen size, providing users with a visually appealing and user-friendly experience.', "In summary, this project encompasses a responsive website with multiple pages, including a home page and an about page. It features a mobile menu for smaller screen sizes, dynamic content generation for the 'Featured speakers' section, and a cohesive navigation system that allows users to seamlessly explore the website on both mobile and desktop devices."],
  image: _images_projects_ALT_Conference_popup_svg__WEBPACK_IMPORTED_MODULE_4__,
  technologies: ['JavaScript', 'CSS3', 'HTML5', 'GitHub', 'Terminal'],
  source: 'https://github.com/Timbar09/Africas-Leading-Tech-Conference',
  live: 'https://timbar09.github.io/Africas-Leading-Tech-Conference/'
}, {
  ctaId: '6',
  name: 'Todo App',
  description: ['This project is a to-do list web app that allows users to manage their tasks effectively. It provides a user-friendly interface to display a list of tasks and enables users to add new tasks and remove existing ones.', '', 'The project was developed using Webpack, JavaScript, CSS, and HTML. Webpack is used as the module bundler to manage dependencies and optimize the build process. JavaScript is used to implement the interactive functionality of the to-do list, such as adding and removing tasks dynamically. CSS is used for styling the user interface and providing a visually appealing design. HTML is used for the structure and layout of the web app.', '', 'Overall, this project showcases the utilization of essential web development technologies and techniques to create a functional and user-friendly to-do list web app.'],
  image: _images_projects_todo_app_detail_svg__WEBPACK_IMPORTED_MODULE_5__,
  technologies: ['React', 'CSS3', 'Git', 'Github', 'HTML5', 'Terminal'],
  source: 'https://github.com/Timbar09/Todo-list-vol-2',
  live: 'https://timbar09.github.io/Todo-list-vol-2/dist/'
}, {
  ctaId: '7',
  name: 'Awesome books',
  description: ['Awesome Books is a feature-rich single-page web application designed to provide an interactive and user-friendly platform for managing a list of books. <br /> With its dynamic functionality, users can effortlessly add and remove books from the list, creating a personalized library experience.', 'The core of Awesome Books revolves around the effective utilization of classes and helper functions. By employing object-oriented programming principles, the application leverages classes to encapsulate book-related data and behaviors. Each book is represented by an instance of a class, allowing for easy manipulation and organization of book information.', "The application seamlessly integrates with the browser's local storage, providing persistent data storage for the book collection. This means that users can add and remove books without worrying about losing their progress or having to recreate their library each time they visit the website. The data is securely stored within the browser, ensuring a seamless and uninterrupted experience across sessions.", 'Through a clean and intuitive user interface, Awesome Books offers a smooth and engaging browsing experience. Users can quickly add new books to the list, specifying details such as the title and author. The application also allows for effortless removal of books, providing a streamlined way to manage the library based on individual preferences and reading habits.', 'Whether users are avid readers, book enthusiasts, or simply looking for an organized way to keep track of their favorite titles, Awesome Books caters to their needs. With its user-centric design and efficient implementation, the application aims to enhance the book management experience, making it more enjoyable and convenient.', 'Overall, Awesome Books represents a powerful yet user-friendly solution for book lovers, providing an efficient way to manage and organize a personalized book collection. With its dynamic features, seamless integration with local storage, and intuitive user interface, it sets out to redefine the way users interact with their books online.'],
  image: _images_projects_Awesome_books_popup_svg__WEBPACK_IMPORTED_MODULE_6__,
  technologies: ['JavaScript', 'CSS3', 'HTML5', 'Luxon', 'Github', 'Terminal'],
  source: 'https://github.com/Timbar09/Awesome-books-vol-2',
  live: 'https://timbar09.github.io/Awesome-books-vol-2/'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsArr);

/***/ }),

/***/ "./src/modules/darkmode.js":
/*!*********************************!*\
  !*** ./src/modules/darkmode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableDarkMode: () => (/* binding */ disableDarkMode),
/* harmony export */   enableDarkMode: () => (/* binding */ enableDarkMode)
/* harmony export */ });
var body = document.querySelector('body');
var toggleButton = document.querySelector('.header__toggle');
var toggleIcon = document.querySelector('.header__toggle span');
var enableDarkMode = function enableDarkMode() {
  if (body && toggleButton && toggleIcon) {
    body.classList.add('darkmode');
    toggleButton.title = 'Switch to light mode';
    toggleIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
    localStorage.setItem('darkMode', 'enabled');
  }
};
var disableDarkMode = function disableDarkMode() {
  body.classList.remove('darkmode');
  toggleButton.title = 'Switch to dark mode';
  toggleIcon.innerHTML = '<i class="fa-regular fa-sun"></i>';
  localStorage.setItem('darkMode', null);
};


/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmailLowerCase: () => (/* binding */ isEmailLowerCase),
/* harmony export */   showCaseError: () => (/* binding */ showCaseError),
/* harmony export */   showCaseSuccess: () => (/* binding */ showCaseSuccess)
/* harmony export */ });
var isEmailLowerCase = function isEmailLowerCase() {
  var userEmail = document.querySelector('#email');
  return userEmail.value === userEmail.value.toLowerCase();
};
var showCaseError = function showCaseError() {
  var userEmail = document.querySelector('#email');
  var formField = userEmail.parentElement;
  formField.classList.remove('valid');
  formField.classList.add('invalid');
  var caseError = formField.querySelector('.footer__form-error-msg');
  caseError.textContent = 'All letters must be lowercase';
};
var showCaseSuccess = function showCaseSuccess() {
  var userEmail = document.querySelector('#email');
  var formField = userEmail.parentElement;
  formField.classList.remove('invalid');
  formField.classList.add('valid');
  var caseError = formField.querySelector('.footer__form-error-msg');
  caseError.textContent = '';
};


/***/ }),

/***/ "./src/modules/intersectionObserver.js":
/*!*********************************************!*\
  !*** ./src/modules/intersectionObserver.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var projectCards = document.querySelectorAll('.project__card');
var aboutDescrition = document.querySelector('.about__flexbox');
var aboutCards = document.querySelectorAll('.about__card');
var footerContent = document.querySelector('.footer__flexbox');
var options = {
  root: null,
  threshold: 0.25,
  rootMargin: '0px'
};
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.target && entry.target instanceof Element) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    }
  });
}, options);
var observe = function observe() {
  if (projectCards && aboutCards && footerContent && aboutDescrition) {
    projectCards.forEach(function (card) {
      observer.observe(card);
    });
    observer.observe(aboutDescrition);
    aboutCards.forEach(function (card) {
      observer.observe(card);
    });
    observer.observe(footerContent);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observe);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeMenu: () => (/* binding */ closeMenu),
/* harmony export */   openMenu: () => (/* binding */ openMenu)
/* harmony export */ });
var openMenu = function openMenu() {
  var body = document.querySelector('.body');
  var hamburger = document.querySelector('.header__hamburger');
  var menu = document.querySelector('.header__menu');
  var overlay = document.querySelector('.overlay');
  hamburger.classList.remove('hamburger__close');
  menu.classList.remove('menu-close');
  overlay.classList.remove('close');
  hamburger.classList.add('hamburger__open');
  menu.classList.add('menu-open');
  overlay.classList.add('open');
  body.classList.add('noscroll');
};
var closeMenu = function closeMenu() {
  var body = document.querySelector('.body');
  var hamburger = document.querySelector('.header__hamburger');
  var menu = document.querySelector('.header__menu');
  var overlay = document.querySelector('.overlay');
  hamburger.classList.remove('hamburger__open');
  menu.classList.remove('menu-open');
  overlay.classList.remove('open');
  body.classList.remove('noscroll');
  hamburger.classList.add('hamburger__close');
  menu.classList.add('menu-close');
  overlay.classList.add('close');
};


/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activatePopup: () => (/* binding */ activatePopup),
/* harmony export */   clearPopupText: () => (/* binding */ clearPopupText),
/* harmony export */   deactivatePopup: () => (/* binding */ deactivatePopup),
/* harmony export */   fillInPopupText: () => (/* binding */ fillInPopupText)
/* harmony export */ });
var activatePopup = function activatePopup() {
  var body = document.querySelector('.body');
  var popup = document.querySelector('.popup');
  var overlay = document.querySelector('.overlay');
  popup.classList.remove('close');
  popup.classList.add('open');
  overlay.classList.add('open');
  overlay.classList.remove('close');
  body.classList.add('noscroll');
  overlay.style.zIndex = 1001;
};
var deactivatePopup = function deactivatePopup() {
  var body = document.querySelector('.body');
  var popup = document.querySelector('.popup');
  var popupTechList = document.querySelector('.popup__languages');
  var overlay = document.querySelector('.overlay');
  popup.classList.remove('open');
  popup.classList.add('close');
  body.classList.remove('noscroll');
  overlay.classList.remove('open');
  overlay.classList.add('close');
  overlay.style.zIndex = 999;
  popupTechList.innerHTML = '';
};
var fillInPopupText = function fillInPopupText(projectsArr, button) {
  projectsArr.forEach(function (project) {
    var popup = document.querySelector('.popup');
    var popupTitle = document.querySelector('.popup__title');
    var popupDescrption = document.querySelector('.popup__description');
    var popupImage = document.querySelector('.popup__image img');
    var popupTechList = document.querySelector('.popup__languages');
    var popupSource = document.querySelector('.popup__cta-source');
    var popupLive = document.querySelector('.popup__cta-live');
    if (project.ctaId === button.id) {
      popup.style.top = "".concat(window.scrollY, "px");
      popupTitle.textContent = project.name;
      project.description.forEach(function (paragraph) {
        var popupDescriptionParagraph = document.createElement('p');
        popupDescriptionParagraph.innerHTML = paragraph;
        popupDescrption.appendChild(popupDescriptionParagraph);
      });
      // popupDescrption.textContent = project.description;
      popupSource.href = project.source;
      popupLive.href = project.live;
      project.technologies.forEach(function (tech) {
        // Create an 'li' element containg an 'a' element with classes and name of technology.
        var techList = document.createElement('li');
        var techListLink = document.createElement('a');

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
var clearPopupText = function clearPopupText() {
  document.querySelector('.popup__title').textContent = '';
  document.querySelector('.popup__description').textContent = '';
  document.querySelector('.popup__image img').src = '';
  document.querySelector('.popup__languages').innerHTML = '';
  document.querySelector('.popup__cta-source').href = '';
  document.querySelector('.popup__cta-live').href = '';
};

// eslint-disable-next-line object-curly-newline


/***/ }),

/***/ "./src/modules/renderProjects.js":
/*!***************************************!*\
  !*** ./src/modules/renderProjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/projects.js */ "./src/data/projects.js");

var renderProjects = function renderProjects() {
  var projects = _data_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].slice(0, 4);
  var projectCards = document.querySelectorAll('.project__card');
  projectCards.forEach(function (card, index) {
    // Create a new image element and its conainer
    var imageWrap = document.createElement('div');
    imageWrap.className = 'project__card-image';
    var image = document.createElement('img');
    image.src = projects[index].image;
    image.alt = projects[index].name;
    imageWrap.appendChild(image);

    // Create a new content container
    var content = document.createElement('div');
    content.className = 'project__card-content';

    // Create content elements
    var title = document.createElement('h3');
    title.className = 'project__card-title section__card-title';
    title.textContent = projects[index].name;
    var techList = document.createElement('ul');
    techList.className = 'project__card-tech section__card-btns';
    projects[index].technologies.slice(0, 3).forEach(function (tech) {
      var techItem = document.createElement('li');
      techItem.className = 'project__tech-item section__card-btn';
      techItem.textContent = tech;
      techList.appendChild(techItem);
    });
    var ctaWrap = document.createElement('div');
    ctaWrap.className = 'project__card-cta-wrap';
    var cta = document.createElement('button');
    cta.id = projects[index].ctaId;
    cta.className = 'project__cta section__cta';
    var ctaText = document.createElement('span');
    ctaText.textContent = 'View project';
    var ctaIcon = document.createElement('i');
    ctaIcon.className = 'fa-solid fa-arrow-right-long';
    cta.appendChild(ctaText);
    cta.appendChild(ctaIcon);
    ctaWrap.appendChild(cta);

    // Append content elements to content container
    content.appendChild(title);
    content.appendChild(techList);
    content.appendChild(ctaWrap);

    // Append image and content containers to card
    card.appendChild(imageWrap);
    card.appendChild(content);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProjects);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retrieveUserInfo: () => (/* binding */ retrieveUserInfo),
/* harmony export */   storeUserInfo: () => (/* binding */ storeUserInfo)
/* harmony export */ });
// Storage functions

var storeUserInfo = function storeUserInfo() {
  var theUser = {};
  var userName = document.querySelector('#name').value;
  var userEmail = document.querySelector('#email').value;
  var userMessage = document.querySelector('#message').value;
  if (userName && userEmail && userMessage) {
    theUser.name = userName;
    theUser.email = userEmail;
    theUser.message = userMessage;

    // Saving to local storage
    localStorage.setItem('theUser', JSON.stringify(theUser));
  }
};
var retrieveUserInfo = function retrieveUserInfo() {
  // Retrieving from local storage
  var userInfo = JSON.parse(localStorage.getItem('theUser'));
  if (userInfo) {
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var message = document.querySelector('#message');
    if (name) {
      name.value = userInfo.name;
    }
    if (email) {
      email.value = userInfo.email;
    }
    if (message) {
      message.value = userInfo.message;
    }
  }
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/header-illsutration-mobile.svg */ "./images/header-illsutration-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/Header-llustration-desktop.svg */ "./images/Header-llustration-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/illustration-about-me-mobile.svg */ "./images/illustration-about-me-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/illustration1-about-me-mobile.svg */ "./images/illustration1-about-me-mobile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/illustration-about-me-2-desktop.svg */ "./images/illustration-about-me-2-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/illustration-about-me-1-desktop.svg */ "./images/illustration-about-me-1-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/self.JPG */ "./images/self.JPG"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/cf-1-desktop.svg */ "./images/cf-1-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/cf-bg-2-desktop.svg */ "./images/cf-bg-2-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/cf-bg-3-desktop.svg */ "./images/cf-bg-3-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Pacifico&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  font-size: 100%;
  scroll-behavior: smooth;
  scroll-padding-top: 4.5rem;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

:root {
  --ff-montserrat: "Montserrat", "Inter", sans-serif;
  --ff-pacifico: "Pacifico", cursive;
  --opaqueWhite: #fffc;
  --opaqueDark: hsla(219, 59%, 6%, 0.025);
  --white: #fdfdfd;
  --lightGrey: #ebf0ee;
  --grey: #d0d9d4;
  --midGrey: #8e9691;
  --darkGrey: #5c625e;
  --lightGreen: #c5e9da;
  --opaqueGreen: #00855247;
  --lime: #36b37f;
  --green: #008552;
  --pressed: #006c3a;
  --darkBlue: #344563;
  --darkerBlue: #172b4d;
  --shadow1: 0 8px 16px rgba(22, 69, 49, 0.15);
  --shadowLime1: 0 8px 16px rgba(54, 179, 127, 0.25);
  --shadowLime2: 0 16px 32px rgba(54, 179, 127, 0.3);
}

body {
  margin: 0;
  padding: 0;
  position: relative;
  line-height: 1.5rem;
  font-family: var(--ff-montserrat);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--darkGrey);
  background-color: var(--white);
}
@media (min-width: 64em) {
  body {
    font-size: 1rem;
  }
}
body::-webkit-scrollbar {
  width: 0.75rem;
}
body::-webkit-scrollbar-track {
  background-color: var(--white);
  border-radius: 5rem;
}
body::-webkit-scrollbar-thumb {
  background-color: var(--grey);
  border-radius: 5rem;
  border: 3px solid var(--white);
}
body::-webkit-scrollbar-thumb:hover {
  background-color: var(--darkBlue);
}
body::-webkit-scrollbar-thumb:active {
  background-color: var(--darkerBlue);
}

.noscroll {
  overflow: hidden;
}

.overlay {
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 133, 82, 0.4156862745);
  backdrop-filter: blur(5px);
  z-index: 999;
}

/* When the menu button is clicked */
.open {
  animation: appear 100ms ease-in-out 0ms 1 forwards;
}

/* When the cancel-menu button is clicked */
.close {
  animation: disappear 100ms ease-in-out 0ms 1 forwards;
}

.darkmode {
  --opaqueWhite: #060d18cc;
  --opaqueDark: hsla(0, 0%, 100%, 0.025);
  --white: #060c17;
  --lightGrey: #0e1b31;
  --grey: #172b4d;
  --darkGrey: #b2b8b4;
  --darkBlue: #d0d9d4;
  --darkerBlue: #ebf0ee;
}

@keyframes appear {
  from {
    visibility: hidden;
    opacity: 0;
  }
  1% {
    visibility: visible;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}
@keyframes disappear {
  from {
    visibility: visible;
    opacity: 1;
  }
  99% {
    visibility: visible;
    opacity: 0;
  }
  to {
    visibility: hidden;
    opacity: 0;
  }
}
@keyframes fade-slide-up {
  from {
    translate: 0 1rem;
    opacity: 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
@keyframes rotate-fade {
  from {
    perspective: 1000px;
    opacity: 0;
    rotate: y -90deg;
  }
  50% {
    opacity: 1;
  }
  to {
    perspective: 1000px;
    opacity: 1;
    rotate: y 0deg;
  }
}
@keyframes menu-open {
  from {
    visibility: hidden;
    opacity: 0;
    top: 80%;
  }
  1% {
    visibility: visible;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
    top: 110%;
  }
}
@keyframes menu-close {
  from {
    visibility: visible;
    opacity: 1;
    top: 110%;
  }
  99% {
    visibility: visible;
    opacity: 0;
  }
  to {
    visibility: hidden;
    opacity: 0;
    top: 80%;
  }
}
@keyframes popup-appear {
  from {
    visibility: hidden;
    opacity: 0;
    scale: 0.5;
  }
  1% {
    visibility: visible;
    opacity: 0;
    scale: 0.5;
  }
  to {
    visibility: visible;
    opacity: 1;
    scale: 1;
  }
}
@keyframes popup-disappear {
  from {
    visibility: visible;
    opacity: 1;
    scale: 1;
  }
  99% {
    visibility: visible;
    opacity: 0;
    scale: 0.5;
  }
  to {
    visibility: hidden;
    opacity: 0;
    scale: 0.5;
  }
}
h1,
h2,
h3,
h4 {
  color: var(--darkerBlue);
  margin: 0;
  font-weight: 500;
}

a,
a::before,
a::after {
  text-decoration: none;
  color: inherit;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

p {
  margin-top: 0;
}

.section {
  text-align: center;
}
.section__overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(5px);
}
.section__title {
  position: relative;
  font-size: 1.75rem;
  line-height: 2.5rem;
  padding-bottom: 1rem;
  margin-bottom: 2.5rem;
}
@media (min-width: 40em) {
  .section__title {
    font-size: 2.5rem;
    line-height: 3.25rem;
    margin-bottom: 3.5rem;
  }
}
.section__title::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  translate: -50%;
  height: 0.15rem;
  width: 3rem;
  background-color: var(--lime);
  border-radius: 3rem;
}
@media (min-width: 40em) {
  .section__title::before {
    height: 0.25rem;
  }
}
.section__grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
}
@media (min-width: 64em) {
  .section__grid {
    grid-template-columns: 1fr 1fr;
  }
}
.section__cta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  color: var(--white);
  border-radius: 0.25rem;
  border: 0;
  background-color: var(--lime);
  cursor: pointer;
  box-shadow: var(--shadowLime1);
  transition: background-color 150ms ease-in-out, box-shadow 150ms ease-in-out, scale 150ms ease-in-out;
}
.section__cta i {
  position: relative;
  left: 0;
  transition: left 350ms ease-in-out;
}
.section__cta:hover {
  box-shadow: var(--shadowLime2);
}
.section__cta:hover i {
  left: 0.25rem;
}
.section__cta:active {
  background-color: var(--pressed);
  box-shadow: var(--shadowLime1);
  scale: 0.95;
}
.section__card {
  position: relative;
  padding: 0.75rem;
  margin: 0 auto;
  width: 100%;
  max-width: 23.0625rem;
  border-radius: 0.5rem;
  border: solid 2px var(--lightGrey);
  background-color: var(--lightGrey);
  overflow: hidden;
}
.section__card-title {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
}
.section__card-btns {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.section__card-btn {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.03em;
  background-color: var(--btn-bg);
  border-radius: 0.25rem;
  pointer-events: none;
}

.container {
  min-width: 20rem;
  max-width: 90rem;
  margin: auto;
}
.container-pall {
  padding: 0.5rem;
}
@media (min-width: 40em) {
  .container-pall {
    padding: 1rem;
  }
}
@media (min-width: 64em) {
  .container-pall {
    padding: 1.5rem;
  }
}
.container-px {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
@media (min-width: 40em) {
  .container-px {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
@media (min-width: 64em) {
  .container-px {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

.social-wrap {
  margin: 0;
  list-style: none;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
}
.social-sm {
  display: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: solid 1px var(--lightGrey);
  margin: 0;
  gap: 0.75rem;
}
@media (min-width: 64em) {
  .social-sm {
    display: flex;
  }
}
.social-link {
  display: grid;
}
.social-link:hover {
  color: var(--lime);
}
.social-link:active {
  color: var(--pressed);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.5rem 0.5rem 0;
}
@media screen and (min-width: 40em) {
  .header {
    padding: 1rem 1rem 0.25rem;
  }
}
@media screen and (min-width: 64em) {
  .header {
    padding: 1.5rem 1.5rem 0.5rem;
  }
}
.header__logo {
  font-family: var(--ff-pacifico);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 28px;
  color: var(--darkerBlue);
  transition: color 150ms ease-in-out;
}
.header__logo:hover {
  color: var(--lime);
}
@media (max-width: 64em) {
  .header__logo span {
    display: none;
  }
}
.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px var(--lightGrey);
  border-radius: 0.5rem;
  background-color: var(--opaqueWhite);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow1);
}
.header__links {
  display: none;
  padding: 0;
  margin: 0;
  list-style: none;
}
@media (min-width: 64em) {
  .header__links {
    display: flex;
    gap: 2rem;
  }
}
.header__link {
  padding: 1.5rem 0;
  display: inline-block;
  position: relative;
  font-weight: 500;
  line-height: 1.25rem;
  transition: color 150ms ease-in-out;
}
.header__link::before {
  content: "";
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  translate: -50%;
  width: 0.25rem;
  height: 0.15rem;
  background-color: var(--lime);
  border-radius: 10rem;
  opacity: 0;
  transition: bottom 150ms 250ms ease-in-out, opacity 150ms 250ms ease-in-out, width 150ms 415ms ease-in-out;
}
.header__link:hover {
  color: var(--lime);
}
.header__link:hover::before {
  bottom: 0;
  opacity: 1;
  width: 100%;
}
.header__hamburger {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  background-color: transparent;
  cursor: pointer;
}
@media (min-width: 64em) {
  .header__hamburger {
    display: none;
  }
}
.header__hamburger span {
  position: relative;
  top: 0;
  display: inline-block;
  width: 1.5rem;
  height: 0.15rem;
  background-color: var(--darkerBlue);
  border-radius: 5rem;
  transition: background-color 150ms ease-in-out;
}
.header__hamburger span:not(:last-child) {
  margin-bottom: 0.25rem;
}
.header__hamburger.hamburger__open .stroke {
  transition: top 100ms ease-in-out, rotate 100ms 100ms ease-in-out, opacity 100ms 50ms ease-in-out;
}
.header__hamburger.hamburger__open .stroke.top {
  rotate: 45deg;
  top: 7px;
}
.header__hamburger.hamburger__open .stroke.middle {
  opacity: 0;
}
.header__hamburger.hamburger__open .stroke.bottom {
  rotate: -45deg;
  top: -6px;
}
.header__hamburger.hamburger__close .stroke {
  transition: top 100ms 100ms ease-in-out, rotate 100ms ease-in-out, opacity 100ms 50ms ease-in-out;
}
.header__hamburger.hamburger__close .stroke.top {
  rotate: 0deg;
  top: 0;
}
.header__hamburger.hamburger__close .stroke.middle {
  opacity: 1;
}
.header__hamburger.hamburger__close .stroke.bottom {
  rotate: 0deg;
  top: 0;
}
.header__hamburger:hover span {
  background-color: var(--lime);
}
.header__hamburger:active {
  background-color: var(--opaqueGreen);
}
.header__menu {
  visibility: hidden;
  position: absolute;
  top: 110%;
  left: -1px;
  right: -1px;
  z-index: 1;
  text-align: end;
  border-radius: 0.5rem;
  border: solid 1px var(--lightGrey);
  background-color: var(--white);
}
.header__menu.menu-open {
  animation: menu-open 150ms ease-in-out 0ms 1 forwards;
}
.header__menu.menu-close {
  animation: menu-close 150ms ease-in-out 0ms 1 forwards;
}
.header__menu-social {
  justify-content: start;
}
.header__menu-content {
  padding: 0.875rem 0 0;
  list-style: none;
  text-align: left;
  height: 70vh;
}
.header__menu-link {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  position: relative;
  font-size: 2rem;
  color: var(--darkerBlue);
  width: 100%;
  left: 0;
  padding: 1.25rem;
  font-weight: 600;
  transition: color 150ms ease-in-out, left 150ms ease-in-out;
}
.header__menu-link-wrap:hover .header__menu-link {
  left: 2rem;
  color: var(--lime);
}
.header__menu-link i {
  font-size: 1.5rem;
}
.header__toggle {
  width: 2rem;
  height: 2rem;
  border: solid 1px var(--lightGrey);
  border-radius: 0.25rem;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 150ms ease-in-out, background-color 150ms ease-in-out;
}
.header__toggle-container {
  padding: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.header__toggle:hover {
  border-color: var(--lime);
  background-color: var(--opaqueGreen);
}

.intro {
  position: relative;
}
.intro .container {
  /* stylelint-disable-next-line csstree/validator */
  padding-top: min(10vh, 4rem);
  height: 100vh;
  min-height: 31.5625rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* stylelint-disable-next-line csstree/validator */
  gap: min(5vh, 2rem);
}
@media (min-width: 64em) {
  .intro .container {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  }
}
.intro__title {
  position: relative;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  opacity: 0;
  animation: fade-slide-up 1500ms ease-in-out 1 forwards;
}
@media (min-width: 40em) {
  .intro__title {
    font-size: 2rem;
    letter-spacing: 0.37px;
  }
}
.intro__title span {
  display: block;
  font-weight: 700;
  font-size: 3rem;
  color: var(--lime);
  text-shadow: -1px -1px 0 var(--green), 1px -1px 0 var(--green), -1px 1px 0 var(--green), 1px 1px 0 var(--green);
}
@media (min-width: 40em) {
  .intro__title span {
    font-size: 4.5rem;
  }
}
.intro__description {
  position: relative;
  margin: 0 auto;
  max-width: 51.5625rem;
  font-size: 1.15rem;
  line-height: 1.5rem;
  opacity: 0;
  animation: fade-slide-up 1500ms 1000ms ease-in-out 1 forwards;
}
@media (min-width: 40em) {
  .intro__description {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}
.intro__tech {
  border: solid 1px var(--lightGrey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  width: max-content;
  border-radius: 0.5rem;
  opacity: 0;
  animation: fade-slide-up 1500ms 1500ms ease-in-out 1 forwards;
}
@media (min-width: 40em) {
  .intro__tech {
    flex-direction: row;
  }
}
.intro__tech-title {
  margin: 0;
  color: var(--darkerGrey);
  font-size: 1rem;
  font-weight: 500;
  line-height: 2rem;
  width: max-content;
}
.intro__tech-title-source {
  transition: color 100ms ease-in-out;
}
.intro__tech-title-source:hover {
  color: var(--lime);
  text-decoration: underline;
}
.intro__tech-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.intro__tech-item:first-child {
  color: #e34f26;
}
.intro__tech-item:nth-child(2) {
  color: #2965f1;
}
.intro__tech-item:nth-child(3) {
  color: #f0db4f;
}
.intro__tech-link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--lightGrey);
  font-size: 2rem;
}
@media (min-width: 40em) {
  .intro__tech-link {
    font-size: 1.5rem;
    gap: 0.5rem;
  }
}
.intro__tech-link span {
  display: none;
  font-size: 0.75rem;
  color: var(--darkGrey);
}
@media (min-width: 40em) {
  .intro__tech-link span {
    display: block;
  }
}
.intro__down-btn {
  display: inline-block;
  padding: 0.75rem;
  line-height: 0;
  border: solid 2px var(--lightGreen);
  border-radius: 50%;
  opacity: 0;
  rotate: y -90deg;
  transition: 150ms background-color ease-in-out;
  animation: rotate-fade 1500ms 2000ms ease-in-out 1 forwards;
}
.intro__down-btn:hover {
  border: solid 2px var(--lime);
  background-color: var(--opaqueGreen);
}

.project {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
@media (min-width: 40em) {
  .project {
    padding-top: 5rem;
    padding-bottom: 7.5rem;
  }
}
@media (min-width: 40em) {
  .project__title {
    position: relative;
    margin-bottom: 3.25rem;
  }
}
.project__list {
  max-width: 29.875em;
  margin: 0 auto;
}
@media (min-width: 64em) {
  .project__list {
    max-width: 61.25rem;
  }
}
.project__card {
  --btn-bg: var(--lightGrey);
  border: solid 2px var(--lightGrey);
  border-radius: 0.5rem;
  background-color: var(--white);
  opacity: 0;
  transition: border 150ms ease-in-out, background-color 150ms ease-in-out;
}
.project__card.animate:first-child {
  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;
}
.project__card.animate:nth-child(2) {
  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;
}
.project__card.animate:nth-child(3) {
  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;
}
.project__card.animate:nth-child(4) {
  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;
}
.project__card-title {
  color: currentColor;
}
@media (hover: none) {
  .project__card-title {
    color: var(--darkBlue);
  }
}
.project__card-image {
  padding: 0.25rem;
  height: 12rem;
}
.project__card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
  border: solid 1px transparent;
  transition: border 150ms ease-in-out;
}
.project__card:hover, .project__card:focus-within {
  border: solid 2px var(--opaqueGreen);
  background-color: var(--opaqueDark);
}
.project__card:hover .project__card-title, .project__card:focus-within .project__card-title {
  color: var(--darkerBlue);
}
.project__card:hover .project__card-image img, .project__card:focus-within .project__card-image img {
  border: solid 1px var(--lightGrey);
}
.project__card-content {
  border-top: solid 2px var(--lightGrey);
  padding: 1rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.project__card-cta-wrap {
  display: grid;
  place-items: center;
}

.popup {
  visibility: hidden;
  position: absolute;
  margin-top: 4em;
  text-align: left;
  width: 95%;
  max-width: 60em;
  left: 50%;
  translate: -50%;
  z-index: 1010;
}
@media (min-width: 40em) {
  .popup {
    width: 80%;
  }
}
.popup.open {
  animation: popup-appear 250ms ease-in-out 0ms 1 forwards;
}
.popup.close {
  animation: popup-disappear 200ms ease-in-out 0ms 1 forwards;
}
.popup__cancel-btn {
  text-align: right;
}
.popup__cancel-btn_icon {
  position: relative;
  bottom: -17px;
  left: 12px;
  padding: 0.35rem 0.475rem;
  font-size: 1.25rem;
  border-radius: 5rem;
  border: solid 2px var(--grey);
  cursor: pointer;
  background-color: var(--white);
  transition: background-color 150ms ease-in-out, color 150ms ease-in-out;
}
.popup__cancel-btn_icon:hover {
  color: var(--lightGrey);
  background-color: rgb(247, 57, 57);
}
.popup__content {
  padding: 1rem;
  height: 80vh;
  overflow-y: scroll;
  background-color: var(--white);
  border: 2px solid var(--grey);
  border-radius: 0.5rem;
  box-shadow: var(--shadow1);
}
@media (min-width: 40em) {
  .popup__content {
    padding: 1.5rem;
    height: 80vh;
  }
}
.popup__content::-webkit-scrollbar {
  width: 0.75rem;
}
.popup__content::-webkit-scrollbar-track {
  background-color: var(--white);
  border-radius: 5rem;
}
.popup__content::-webkit-scrollbar-thumb {
  background-color: var(--grey);
  border-radius: 5rem;
  border: 3px solid var(--white);
}
.popup__content::-webkit-scrollbar-thumb:hover {
  background-color: var(--darkBlue);
}
.popup__content::-webkit-scrollbar-thumb:active {
  background-color: var(--darkerBlue);
}
.popup__content-text {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.75rem;
}
@media (min-width: 64em) {
  .popup__content-text {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 1.25rem;
    padding-top: 1.5rem;
  }
}
.popup__image {
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: var(--lightGrey);
}
.popup__image img {
  width: 100%;
  border-radius: 0.3rem;
}
.popup__title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.75rem;
}
@media (min-width: 64em) {
  .popup__title {
    font-size: 2rem;
    grid-column: 1/2;
    grid-row: 1/2;
  }
}
.popup__languages {
  justify-content: start;
}
@media (min-width: 64em) {
  .popup__languages {
    grid-column: 1/3;
    grid-row: 2/3;
  }
}
.popup__language {
  --btn-bg: var(--lightGrey);
  --btn-hover: var(--grey);
  --btn-pressed: var(--lightGreen);
}
.popup__description {
  margin: 0;
}
@media (min-width: 64em) {
  .popup__description {
    grid-column: 1/3;
    grid-row: 3/4;
    padding-top: 0.75rem;
  }
}
.popup__ctas {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
@media (min-width: 64em) {
  .popup__ctas {
    grid-column: 2/3;
    grid-row: 1/2;
  }
}
.popup__cta {
  width: max-content;
}

.about {
  position: relative;
  padding-bottom: 4rem;
}
@media (min-width: 40em) {
  .about {
    padding-bottom: 7.5rem;
  }
}
.about__wrap {
  position: relative;
  padding: 5rem 0;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}), url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: left bottom, right top;
  background-repeat: no-repeat;
}
@media (min-width: 40em) {
  .about__wrap {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}), url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-position: left bottom, right top;
    background-repeat: no-repeat;
  }
}
@media (min-width: 40em) {
  .about__title {
    padding-top: 4.5rem;
  }
}
.about__flexbox {
  position: relative;
  display: flex;
  padding: 0 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 60rem;
  margin: 0 auto;
  opacity: 0;
}
.about__flexbox.animate {
  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;
}
@media (min-width: 40em) {
  .about__flexbox {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }
}
.about__details {
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  rotate: y 180deg;
  background-color: var(--lightGrey);
  transition: opacity 50ms 300ms ease-in-out, visibility 50ms 300ms ease-in-out;
}
@media (hover: none) and (pointer: coarse) {
  .about__details {
    display: none;
  }
}
.about__bio {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: max-content;
}
@media (hover: none) and (pointer: coarse) {
  .about__bio {
    pointer-events: none;
  }
}
.about__bio-photo {
  --dimension: 12.5rem;
  width: var(--dimension);
  height: var(--dimension);
  border-radius: 0.35rem;
  background-color: var(--lightGrey);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  perspective: 1000px;
  transition: rotate 600ms ease-in-out;
}
.about__bio:hover .about__bio-photo {
  rotate: y 180deg;
}
.about__bio:hover .about__details {
  visibility: visible;
  opacity: 1;
}
.about__mobile {
  display: none;
}
@media (hover: none) and (pointer: coarse) {
  .about__mobile {
    display: block;
  }
}
.about__mobile-name {
  font-size: 1.5rem;
}
.about__mobile-socials-link {
  display: inline-block;
  padding: 0.75rem;
  font-size: 1.75rem;
}
.about__mobile-socials-link:active {
  color: var(--lime);
}
.about__description {
  text-align: left;
  text-shadow: -1px -1px 0 var(--white), 1px -1px 0 var(--white), -1px 1px 0 var(--white), 1px 1px 0 var(--white);
}
.about__skills {
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
@media (min-width: 64em) {
  .about__skills {
    flex-direction: row;
  }
}
.about__card {
  border: solid 1px var(--lightGrey);
  border-radius: 0.5rem;
  flex: 1;
  opacity: 0;
}
.about__card.animate {
  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;
}
.about__card-header {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: solid 1px var(--lightGrey);
  background-color: var(--opaqueDark);
}
.about__card-icon {
  padding: 0.75rem;
  border-radius: 0.25rem;
  font-size: 2rem;
  color: var(--lime);
  background-color: var(--lightGrey);
}
@media (min-width: 40em) {
  .about__card-icon {
    padding: 1rem;
    font-size: 2.5rem;
  }
}
.about__card-title {
  position: relative;
  padding: 0.25rem 0;
  font-size: 1rem;
}
@media (min-width: 40em) {
  .about__card-title {
    font-size: 1.25rem;
    padding: 1rem 0;
  }
}
.about__card-title::before {
  content: "";
  position: absolute;
  bottom: 1rem;
  right: 0;
  height: 0.15rem;
  width: 3rem;
  background-color: var(--lime);
  border-radius: 3rem;
}
.about__card-list {
  padding: 1rem;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.about__card-link {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--opaqueDark);
  transition: background-color 200ms ease-in-out;
}
.about__card-link:hover {
  background-color: var(--opaqueGreen);
}

.footer {
  text-align: center;
}
@media (min-width: 64em) {
  .footer {
    text-align: left;
  }
}
.footer > .container {
  position: relative;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_7___}), url(${___CSS_LOADER_URL_REPLACEMENT_8___}), url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  background-position: left bottom, 20% 80%, right bottom;
  background-repeat: no-repeat;
}
.footer__flexbox {
  position: relative;
  padding: 2.5rem 0;
  margin: 0 auto;
  max-width: 70rem;
  opacity: 0;
}
.footer__flexbox.animate {
  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;
}
@media (min-width: 64em) {
  .footer__flexbox {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    padding: 5rem 0;
  }
}
.footer__header {
  flex: 0.75;
}
@media (min-width: 64em) {
  .footer__header {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 1.75rem;
  }
}
.footer__title {
  margin: 0 auto;
  max-width: 37.5rem;
  line-height: 3.25rem;
}
@media (min-width: 64em) {
  .footer__title {
    font-size: 1.875rem;
    max-width: none;
    text-shadow: -1px -1px 0 var(--white), 1px -1px 0 var(--white), -1px 1px 0 var(--white), 1px 1px 0 var(--white);
  }
}
.footer__form {
  --focus: var(--darkBlue);
  --valid: var(--lime);
  --invalid: #f71a1a;
  max-width: 37.5rem;
  margin: auto;
  display: flex;
  flex-direction: column;
}
@media (min-width: 64em) {
  .footer__form {
    max-width: none;
    margin: 0;
    flex: 1 11%;
  }
}
@media (min-width: 40em) {
  .footer__form-flexbox {
    display: flex;
    gap: 1.5rem;
  }
}
@media (min-width: 40em) {
  .footer__form-control {
    flex: 1;
  }
}
.footer__form-control.submit {
  display: flex;
  justify-content: center;
}
@media (min-width: 64em) {
  .footer__form-control.submit {
    justify-content: flex-start;
  }
}
.footer__form-control label {
  display: block;
  font-weight: 500;
  text-align: left;
  margin: 0.25rem 0;
  opacity: 0;
  transition: opacity 1000ms ease-in-out;
}
.footer__form-control:focus-within label {
  opacity: 1;
}
.footer__form-control textarea {
  resize: none;
  height: 6.25rem;
}
.footer__form-control.valid input {
  border: 2px solid var(--valid);
}
.footer__form-control.invalid input {
  border: 2px solid var(--invalid);
}
.footer__form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: solid 2px var(--grey);
  border-radius: 0.25rem;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  background-color: var(--opaqueWhite);
  transition: border 150ms ease-in-out, outline 150ms ease-in-out, outline-offset 150ms ease-in-out;
}
.footer__form-input:focus {
  border: solid 2px var(--focus);
  outline-offset: 2px;
  outline: solid 2px var(--grey);
}
.footer__form-error-msg {
  color: var(--invalid);
  font-size: 0.85rem;
  height: 1.5rem;
}
.footer__form-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
}
.footer__bottom {
  border-top: solid 1px var(--lightGrey);
  font-size: 0.875rem;
}
.footer__bottom .container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}
@media (min-width: 40em) {
  .footer__bottom .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}
.footer__sitemap-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.footer__sitemap-link {
  font-weight: 500;
  transition: color 150ms ease-in-out;
}
.footer__sitemap-link:hover {
  color: var(--darkBlue);
}
.footer__copy {
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/partials/_boilerplate.scss","webpack://./src/styles/main.scss","webpack://./src/styles/partials/_darkmode.scss","webpack://./src/styles/partials/keyframes/_global.scss","webpack://./src/styles/partials/keyframes/_menu.scss","webpack://./src/styles/partials/keyframes/_popup.scss","webpack://./src/styles/partials/_typography.scss","webpack://./src/styles/partials/_header.scss","webpack://./src/styles/partials/_intro.scss","webpack://./src/styles/partials/_projects.scss","webpack://./src/styles/partials/_popup.scss","webpack://./src/styles/partials/_about.scss","webpack://./src/styles/partials/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Pacifico&display=swap');\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  scroll-behavior: smooth;\r\n  scroll-padding-top: 4.5rem;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n:root {\r\n  // Font family\r\n  --ff-montserrat: 'Montserrat', 'Inter', sans-serif;\r\n  --ff-pacifico: 'Pacifico', cursive;\r\n  // Colors\r\n  --opaqueWhite: #fffc;\r\n  --opaqueDark: hsla(219, 59%, 6%, 0.025);\r\n  --white: #fdfdfd;\r\n  --lightGrey: #ebf0ee;\r\n  --grey: #d0d9d4;\r\n  --midGrey: #8e9691;\r\n  --darkGrey: #5c625e;\r\n  --lightGreen: #c5e9da;\r\n  --opaqueGreen: #00855247;\r\n  --lime: #36b37f;\r\n  --green: #008552;\r\n  --pressed: #006c3a;\r\n  --darkBlue: #344563;\r\n  --darkerBlue: #172b4d;\r\n  // Box shadows\r\n  --shadow1: 0 8px 16px rgba(22, 69, 49, 0.15);\r\n  --shadowLime1: 0 8px 16px rgba(54, 179, 127, 0.25);\r\n  --shadowLime2: 0 16px 32px rgba(54, 179, 127, 0.3);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  line-height: 1.5rem;\r\n  font-family: var(--ff-montserrat);\r\n  font-size: 0.875rem;\r\n  font-weight: 400;\r\n  color: var(--darkGrey);\r\n  background-color: var(--white);\r\n\r\n  @media (min-width: 64em) {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  &::-webkit-scrollbar {\r\n    width: 0.75rem;\r\n  }\r\n\r\n  &::-webkit-scrollbar-track {\r\n    background-color: var(--white);\r\n    border-radius: 5rem;\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    background-color: var(--grey);\r\n    border-radius: 5rem;\r\n    border: 3px solid var(--white);\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb:hover {\r\n    background-color: var(--darkBlue);\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb:active {\r\n    background-color: var(--darkerBlue);\r\n  }\r\n}\r\n\r\n.noscroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.overlay {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #0085526a;\r\n  backdrop-filter: blur(5px);\r\n  z-index: 999;\r\n}\r\n\r\n/* When the menu button is clicked */\r\n.open {\r\n  animation: appear 100ms ease-in-out 0ms 1 forwards;\r\n}\r\n\r\n/* When the cancel-menu button is clicked */\r\n.close {\r\n  animation: disappear 100ms ease-in-out 0ms 1 forwards;\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Pacifico&display=swap\");\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n  scroll-behavior: smooth;\n  scroll-padding-top: 4.5rem;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n:root {\n  --ff-montserrat: \"Montserrat\", \"Inter\", sans-serif;\n  --ff-pacifico: \"Pacifico\", cursive;\n  --opaqueWhite: #fffc;\n  --opaqueDark: hsla(219, 59%, 6%, 0.025);\n  --white: #fdfdfd;\n  --lightGrey: #ebf0ee;\n  --grey: #d0d9d4;\n  --midGrey: #8e9691;\n  --darkGrey: #5c625e;\n  --lightGreen: #c5e9da;\n  --opaqueGreen: #00855247;\n  --lime: #36b37f;\n  --green: #008552;\n  --pressed: #006c3a;\n  --darkBlue: #344563;\n  --darkerBlue: #172b4d;\n  --shadow1: 0 8px 16px rgba(22, 69, 49, 0.15);\n  --shadowLime1: 0 8px 16px rgba(54, 179, 127, 0.25);\n  --shadowLime2: 0 16px 32px rgba(54, 179, 127, 0.3);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  line-height: 1.5rem;\n  font-family: var(--ff-montserrat);\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--darkGrey);\n  background-color: var(--white);\n}\n@media (min-width: 64em) {\n  body {\n    font-size: 1rem;\n  }\n}\nbody::-webkit-scrollbar {\n  width: 0.75rem;\n}\nbody::-webkit-scrollbar-track {\n  background-color: var(--white);\n  border-radius: 5rem;\n}\nbody::-webkit-scrollbar-thumb {\n  background-color: var(--grey);\n  border-radius: 5rem;\n  border: 3px solid var(--white);\n}\nbody::-webkit-scrollbar-thumb:hover {\n  background-color: var(--darkBlue);\n}\nbody::-webkit-scrollbar-thumb:active {\n  background-color: var(--darkerBlue);\n}\n\n.noscroll {\n  overflow: hidden;\n}\n\n.overlay {\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 133, 82, 0.4156862745);\n  backdrop-filter: blur(5px);\n  z-index: 999;\n}\n\n/* When the menu button is clicked */\n.open {\n  animation: appear 100ms ease-in-out 0ms 1 forwards;\n}\n\n/* When the cancel-menu button is clicked */\n.close {\n  animation: disappear 100ms ease-in-out 0ms 1 forwards;\n}\n\n.darkmode {\n  --opaqueWhite: #060d18cc;\n  --opaqueDark: hsla(0, 0%, 100%, 0.025);\n  --white: #060c17;\n  --lightGrey: #0e1b31;\n  --grey: #172b4d;\n  --darkGrey: #b2b8b4;\n  --darkBlue: #d0d9d4;\n  --darkerBlue: #ebf0ee;\n}\n\n@keyframes appear {\n  from {\n    visibility: hidden;\n    opacity: 0;\n  }\n  1% {\n    visibility: visible;\n    opacity: 0;\n  }\n  to {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n@keyframes disappear {\n  from {\n    visibility: visible;\n    opacity: 1;\n  }\n  99% {\n    visibility: visible;\n    opacity: 0;\n  }\n  to {\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n@keyframes fade-slide-up {\n  from {\n    translate: 0 1rem;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n@keyframes rotate-fade {\n  from {\n    perspective: 1000px;\n    opacity: 0;\n    rotate: y -90deg;\n  }\n  50% {\n    opacity: 1;\n  }\n  to {\n    perspective: 1000px;\n    opacity: 1;\n    rotate: y 0deg;\n  }\n}\n@keyframes menu-open {\n  from {\n    visibility: hidden;\n    opacity: 0;\n    top: 80%;\n  }\n  1% {\n    visibility: visible;\n    opacity: 0;\n  }\n  to {\n    visibility: visible;\n    opacity: 1;\n    top: 110%;\n  }\n}\n@keyframes menu-close {\n  from {\n    visibility: visible;\n    opacity: 1;\n    top: 110%;\n  }\n  99% {\n    visibility: visible;\n    opacity: 0;\n  }\n  to {\n    visibility: hidden;\n    opacity: 0;\n    top: 80%;\n  }\n}\n@keyframes popup-appear {\n  from {\n    visibility: hidden;\n    opacity: 0;\n    scale: 0.5;\n  }\n  1% {\n    visibility: visible;\n    opacity: 0;\n    scale: 0.5;\n  }\n  to {\n    visibility: visible;\n    opacity: 1;\n    scale: 1;\n  }\n}\n@keyframes popup-disappear {\n  from {\n    visibility: visible;\n    opacity: 1;\n    scale: 1;\n  }\n  99% {\n    visibility: visible;\n    opacity: 0;\n    scale: 0.5;\n  }\n  to {\n    visibility: hidden;\n    opacity: 0;\n    scale: 0.5;\n  }\n}\nh1,\nh2,\nh3,\nh4 {\n  color: var(--darkerBlue);\n  margin: 0;\n  font-weight: 500;\n}\n\na,\na::before,\na::after {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\np {\n  margin-top: 0;\n}\n\n.section {\n  text-align: center;\n}\n.section__overlay {\n  position: absolute;\n  inset: 0;\n  backdrop-filter: blur(5px);\n}\n.section__title {\n  position: relative;\n  font-size: 1.75rem;\n  line-height: 2.5rem;\n  padding-bottom: 1rem;\n  margin-bottom: 2.5rem;\n}\n@media (min-width: 40em) {\n  .section__title {\n    font-size: 2.5rem;\n    line-height: 3.25rem;\n    margin-bottom: 3.5rem;\n  }\n}\n.section__title::before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  translate: -50%;\n  height: 0.15rem;\n  width: 3rem;\n  background-color: var(--lime);\n  border-radius: 3rem;\n}\n@media (min-width: 40em) {\n  .section__title::before {\n    height: 0.25rem;\n  }\n}\n.section__grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 1.5rem;\n}\n@media (min-width: 64em) {\n  .section__grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.section__cta {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n  color: var(--white);\n  border-radius: 0.25rem;\n  border: 0;\n  background-color: var(--lime);\n  cursor: pointer;\n  box-shadow: var(--shadowLime1);\n  transition: background-color 150ms ease-in-out, box-shadow 150ms ease-in-out, scale 150ms ease-in-out;\n}\n.section__cta i {\n  position: relative;\n  left: 0;\n  transition: left 350ms ease-in-out;\n}\n.section__cta:hover {\n  box-shadow: var(--shadowLime2);\n}\n.section__cta:hover i {\n  left: 0.25rem;\n}\n.section__cta:active {\n  background-color: var(--pressed);\n  box-shadow: var(--shadowLime1);\n  scale: 0.95;\n}\n.section__card {\n  position: relative;\n  padding: 0.75rem;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 23.0625rem;\n  border-radius: 0.5rem;\n  border: solid 2px var(--lightGrey);\n  background-color: var(--lightGrey);\n  overflow: hidden;\n}\n.section__card-title {\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.section__card-btns {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.section__card-btn {\n  display: inline-block;\n  padding: 0.5rem 0.75rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  letter-spacing: 0.03em;\n  background-color: var(--btn-bg);\n  border-radius: 0.25rem;\n  pointer-events: none;\n}\n\n.container {\n  min-width: 20rem;\n  max-width: 90rem;\n  margin: auto;\n}\n.container-pall {\n  padding: 0.5rem;\n}\n@media (min-width: 40em) {\n  .container-pall {\n    padding: 1rem;\n  }\n}\n@media (min-width: 64em) {\n  .container-pall {\n    padding: 1.5rem;\n  }\n}\n.container-px {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n@media (min-width: 40em) {\n  .container-px {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media (min-width: 64em) {\n  .container-px {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n\n.social-wrap {\n  margin: 0;\n  list-style: none;\n  padding: 1rem;\n  font-size: 1.5rem;\n  border-radius: 0.25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.25rem;\n}\n.social-sm {\n  display: none;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  border: solid 1px var(--lightGrey);\n  margin: 0;\n  gap: 0.75rem;\n}\n@media (min-width: 64em) {\n  .social-sm {\n    display: flex;\n  }\n}\n.social-link {\n  display: grid;\n}\n.social-link:hover {\n  color: var(--lime);\n}\n.social-link:active {\n  color: var(--pressed);\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 0.5rem 0.5rem 0;\n}\n@media screen and (min-width: 40em) {\n  .header {\n    padding: 1rem 1rem 0.25rem;\n  }\n}\n@media screen and (min-width: 64em) {\n  .header {\n    padding: 1.5rem 1.5rem 0.5rem;\n  }\n}\n.header__logo {\n  font-family: var(--ff-pacifico);\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 28px;\n  color: var(--darkerBlue);\n  transition: color 150ms ease-in-out;\n}\n.header__logo:hover {\n  color: var(--lime);\n}\n@media (max-width: 64em) {\n  .header__logo span {\n    display: none;\n  }\n}\n.header__nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: solid 1px var(--lightGrey);\n  border-radius: 0.5rem;\n  background-color: var(--opaqueWhite);\n  backdrop-filter: blur(10px);\n  box-shadow: var(--shadow1);\n}\n.header__links {\n  display: none;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n@media (min-width: 64em) {\n  .header__links {\n    display: flex;\n    gap: 2rem;\n  }\n}\n.header__link {\n  padding: 1.5rem 0;\n  display: inline-block;\n  position: relative;\n  font-weight: 500;\n  line-height: 1.25rem;\n  transition: color 150ms ease-in-out;\n}\n.header__link::before {\n  content: \"\";\n  position: absolute;\n  bottom: 1.5rem;\n  left: 50%;\n  translate: -50%;\n  width: 0.25rem;\n  height: 0.15rem;\n  background-color: var(--lime);\n  border-radius: 10rem;\n  opacity: 0;\n  transition: bottom 150ms 250ms ease-in-out, opacity 150ms 250ms ease-in-out, width 150ms 415ms ease-in-out;\n}\n.header__link:hover {\n  color: var(--lime);\n}\n.header__link:hover::before {\n  bottom: 0;\n  opacity: 1;\n  width: 100%;\n}\n.header__hamburger {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  border: 0;\n  border-radius: 0.25rem;\n  background-color: transparent;\n  cursor: pointer;\n}\n@media (min-width: 64em) {\n  .header__hamburger {\n    display: none;\n  }\n}\n.header__hamburger span {\n  position: relative;\n  top: 0;\n  display: inline-block;\n  width: 1.5rem;\n  height: 0.15rem;\n  background-color: var(--darkerBlue);\n  border-radius: 5rem;\n  transition: background-color 150ms ease-in-out;\n}\n.header__hamburger span:not(:last-child) {\n  margin-bottom: 0.25rem;\n}\n.header__hamburger.hamburger__open .stroke {\n  transition: top 100ms ease-in-out, rotate 100ms 100ms ease-in-out, opacity 100ms 50ms ease-in-out;\n}\n.header__hamburger.hamburger__open .stroke.top {\n  rotate: 45deg;\n  top: 7px;\n}\n.header__hamburger.hamburger__open .stroke.middle {\n  opacity: 0;\n}\n.header__hamburger.hamburger__open .stroke.bottom {\n  rotate: -45deg;\n  top: -6px;\n}\n.header__hamburger.hamburger__close .stroke {\n  transition: top 100ms 100ms ease-in-out, rotate 100ms ease-in-out, opacity 100ms 50ms ease-in-out;\n}\n.header__hamburger.hamburger__close .stroke.top {\n  rotate: 0deg;\n  top: 0;\n}\n.header__hamburger.hamburger__close .stroke.middle {\n  opacity: 1;\n}\n.header__hamburger.hamburger__close .stroke.bottom {\n  rotate: 0deg;\n  top: 0;\n}\n.header__hamburger:hover span {\n  background-color: var(--lime);\n}\n.header__hamburger:active {\n  background-color: var(--opaqueGreen);\n}\n.header__menu {\n  visibility: hidden;\n  position: absolute;\n  top: 110%;\n  left: -1px;\n  right: -1px;\n  z-index: 1;\n  text-align: end;\n  border-radius: 0.5rem;\n  border: solid 1px var(--lightGrey);\n  background-color: var(--white);\n}\n.header__menu.menu-open {\n  animation: menu-open 150ms ease-in-out 0ms 1 forwards;\n}\n.header__menu.menu-close {\n  animation: menu-close 150ms ease-in-out 0ms 1 forwards;\n}\n.header__menu-social {\n  justify-content: start;\n}\n.header__menu-content {\n  padding: 0.875rem 0 0;\n  list-style: none;\n  text-align: left;\n  height: 70vh;\n}\n.header__menu-link {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  position: relative;\n  font-size: 2rem;\n  color: var(--darkerBlue);\n  width: 100%;\n  left: 0;\n  padding: 1.25rem;\n  font-weight: 600;\n  transition: color 150ms ease-in-out, left 150ms ease-in-out;\n}\n.header__menu-link-wrap:hover .header__menu-link {\n  left: 2rem;\n  color: var(--lime);\n}\n.header__menu-link i {\n  font-size: 1.5rem;\n}\n.header__toggle {\n  width: 2rem;\n  height: 2rem;\n  border: solid 1px var(--lightGrey);\n  border-radius: 0.25rem;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  transition: border-color 150ms ease-in-out, background-color 150ms ease-in-out;\n}\n.header__toggle-container {\n  padding: 1rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.header__toggle:hover {\n  border-color: var(--lime);\n  background-color: var(--opaqueGreen);\n}\n\n.intro {\n  position: relative;\n}\n.intro .container {\n  /* stylelint-disable-next-line csstree/validator */\n  padding-top: min(10vh, 4rem);\n  height: 100vh;\n  min-height: 31.5625rem;\n  background-image: url(\"../../images/header-illsutration-mobile.svg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* stylelint-disable-next-line csstree/validator */\n  gap: min(5vh, 2rem);\n}\n@media (min-width: 64em) {\n  .intro .container {\n    background-image: url(\"../../images/Header-llustration-desktop.svg\");\n  }\n}\n.intro__title {\n  position: relative;\n  font-size: 1.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n  opacity: 0;\n  animation: fade-slide-up 1500ms ease-in-out 1 forwards;\n}\n@media (min-width: 40em) {\n  .intro__title {\n    font-size: 2rem;\n    letter-spacing: 0.37px;\n  }\n}\n.intro__title span {\n  display: block;\n  font-weight: 700;\n  font-size: 3rem;\n  color: var(--lime);\n  text-shadow: -1px -1px 0 var(--green), 1px -1px 0 var(--green), -1px 1px 0 var(--green), 1px 1px 0 var(--green);\n}\n@media (min-width: 40em) {\n  .intro__title span {\n    font-size: 4.5rem;\n  }\n}\n.intro__description {\n  position: relative;\n  margin: 0 auto;\n  max-width: 51.5625rem;\n  font-size: 1.15rem;\n  line-height: 1.5rem;\n  opacity: 0;\n  animation: fade-slide-up 1500ms 1000ms ease-in-out 1 forwards;\n}\n@media (min-width: 40em) {\n  .intro__description {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n.intro__tech {\n  border: solid 1px var(--lightGrey);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem;\n  margin: 0 auto;\n  width: max-content;\n  border-radius: 0.5rem;\n  opacity: 0;\n  animation: fade-slide-up 1500ms 1500ms ease-in-out 1 forwards;\n}\n@media (min-width: 40em) {\n  .intro__tech {\n    flex-direction: row;\n  }\n}\n.intro__tech-title {\n  margin: 0;\n  color: var(--darkerGrey);\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 2rem;\n  width: max-content;\n}\n.intro__tech-title-source {\n  transition: color 100ms ease-in-out;\n}\n.intro__tech-title-source:hover {\n  color: var(--lime);\n  text-decoration: underline;\n}\n.intro__tech-list {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.intro__tech-item:first-child {\n  color: #e34f26;\n}\n.intro__tech-item:nth-child(2) {\n  color: #2965f1;\n}\n.intro__tech-item:nth-child(3) {\n  color: #f0db4f;\n}\n.intro__tech-link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  background-color: var(--lightGrey);\n  font-size: 2rem;\n}\n@media (min-width: 40em) {\n  .intro__tech-link {\n    font-size: 1.5rem;\n    gap: 0.5rem;\n  }\n}\n.intro__tech-link span {\n  display: none;\n  font-size: 0.75rem;\n  color: var(--darkGrey);\n}\n@media (min-width: 40em) {\n  .intro__tech-link span {\n    display: block;\n  }\n}\n.intro__down-btn {\n  display: inline-block;\n  padding: 0.75rem;\n  line-height: 0;\n  border: solid 2px var(--lightGreen);\n  border-radius: 50%;\n  opacity: 0;\n  rotate: y -90deg;\n  transition: 150ms background-color ease-in-out;\n  animation: rotate-fade 1500ms 2000ms ease-in-out 1 forwards;\n}\n.intro__down-btn:hover {\n  border: solid 2px var(--lime);\n  background-color: var(--opaqueGreen);\n}\n\n.project {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n@media (min-width: 40em) {\n  .project {\n    padding-top: 5rem;\n    padding-bottom: 7.5rem;\n  }\n}\n@media (min-width: 40em) {\n  .project__title {\n    position: relative;\n    margin-bottom: 3.25rem;\n  }\n}\n.project__list {\n  max-width: 29.875em;\n  margin: 0 auto;\n}\n@media (min-width: 64em) {\n  .project__list {\n    max-width: 61.25rem;\n  }\n}\n.project__card {\n  --btn-bg: var(--lightGrey);\n  border: solid 2px var(--lightGrey);\n  border-radius: 0.5rem;\n  background-color: var(--white);\n  opacity: 0;\n  transition: border 150ms ease-in-out, background-color 150ms ease-in-out;\n}\n.project__card.animate:first-child {\n  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\n}\n.project__card.animate:nth-child(2) {\n  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\n}\n.project__card.animate:nth-child(3) {\n  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\n}\n.project__card.animate:nth-child(4) {\n  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\n}\n.project__card-title {\n  color: currentColor;\n}\n@media (hover: none) {\n  .project__card-title {\n    color: var(--darkBlue);\n  }\n}\n.project__card-image {\n  padding: 0.25rem;\n  height: 12rem;\n}\n.project__card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 0.25rem;\n  border: solid 1px transparent;\n  transition: border 150ms ease-in-out;\n}\n.project__card:hover, .project__card:focus-within {\n  border: solid 2px var(--opaqueGreen);\n  background-color: var(--opaqueDark);\n}\n.project__card:hover .project__card-title, .project__card:focus-within .project__card-title {\n  color: var(--darkerBlue);\n}\n.project__card:hover .project__card-image img, .project__card:focus-within .project__card-image img {\n  border: solid 1px var(--lightGrey);\n}\n.project__card-content {\n  border-top: solid 2px var(--lightGrey);\n  padding: 1rem 1rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.project__card-cta-wrap {\n  display: grid;\n  place-items: center;\n}\n\n.popup {\n  visibility: hidden;\n  position: absolute;\n  margin-top: 4em;\n  text-align: left;\n  width: 95%;\n  max-width: 60em;\n  left: 50%;\n  translate: -50%;\n  z-index: 1010;\n}\n@media (min-width: 40em) {\n  .popup {\n    width: 80%;\n  }\n}\n.popup.open {\n  animation: popup-appear 250ms ease-in-out 0ms 1 forwards;\n}\n.popup.close {\n  animation: popup-disappear 200ms ease-in-out 0ms 1 forwards;\n}\n.popup__cancel-btn {\n  text-align: right;\n}\n.popup__cancel-btn_icon {\n  position: relative;\n  bottom: -17px;\n  left: 12px;\n  padding: 0.35rem 0.475rem;\n  font-size: 1.25rem;\n  border-radius: 5rem;\n  border: solid 2px var(--grey);\n  cursor: pointer;\n  background-color: var(--white);\n  transition: background-color 150ms ease-in-out, color 150ms ease-in-out;\n}\n.popup__cancel-btn_icon:hover {\n  color: var(--lightGrey);\n  background-color: rgb(247, 57, 57);\n}\n.popup__content {\n  padding: 1rem;\n  height: 80vh;\n  overflow-y: scroll;\n  background-color: var(--white);\n  border: 2px solid var(--grey);\n  border-radius: 0.5rem;\n  box-shadow: var(--shadow1);\n}\n@media (min-width: 40em) {\n  .popup__content {\n    padding: 1.5rem;\n    height: 80vh;\n  }\n}\n.popup__content::-webkit-scrollbar {\n  width: 0.75rem;\n}\n.popup__content::-webkit-scrollbar-track {\n  background-color: var(--white);\n  border-radius: 5rem;\n}\n.popup__content::-webkit-scrollbar-thumb {\n  background-color: var(--grey);\n  border-radius: 5rem;\n  border: 3px solid var(--white);\n}\n.popup__content::-webkit-scrollbar-thumb:hover {\n  background-color: var(--darkBlue);\n}\n.popup__content::-webkit-scrollbar-thumb:active {\n  background-color: var(--darkerBlue);\n}\n.popup__content-text {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 0.75rem;\n}\n@media (min-width: 64em) {\n  .popup__content-text {\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: repeat(3, auto);\n    grid-gap: 1.25rem;\n    padding-top: 1.5rem;\n  }\n}\n.popup__image {\n  padding: 1rem;\n  border-radius: 0.4rem;\n  background-color: var(--lightGrey);\n}\n.popup__image img {\n  width: 100%;\n  border-radius: 0.3rem;\n}\n.popup__title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 2.75rem;\n}\n@media (min-width: 64em) {\n  .popup__title {\n    font-size: 2rem;\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n}\n.popup__languages {\n  justify-content: start;\n}\n@media (min-width: 64em) {\n  .popup__languages {\n    grid-column: 1/3;\n    grid-row: 2/3;\n  }\n}\n.popup__language {\n  --btn-bg: var(--lightGrey);\n  --btn-hover: var(--grey);\n  --btn-pressed: var(--lightGreen);\n}\n.popup__description {\n  margin: 0;\n}\n@media (min-width: 64em) {\n  .popup__description {\n    grid-column: 1/3;\n    grid-row: 3/4;\n    padding-top: 0.75rem;\n  }\n}\n.popup__ctas {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n@media (min-width: 64em) {\n  .popup__ctas {\n    grid-column: 2/3;\n    grid-row: 1/2;\n  }\n}\n.popup__cta {\n  width: max-content;\n}\n\n.about {\n  position: relative;\n  padding-bottom: 4rem;\n}\n@media (min-width: 40em) {\n  .about {\n    padding-bottom: 7.5rem;\n  }\n}\n.about__wrap {\n  position: relative;\n  padding: 5rem 0;\n  background: url(\"../../images/illustration-about-me-mobile.svg\"), url(\"../../images/illustration1-about-me-mobile.svg\");\n  background-position: left bottom, right top;\n  background-repeat: no-repeat;\n}\n@media (min-width: 40em) {\n  .about__wrap {\n    background: url(\"../../images/illustration-about-me-2-desktop.svg\"), url(\"../../images/illustration-about-me-1-desktop.svg\");\n    background-position: left bottom, right top;\n    background-repeat: no-repeat;\n  }\n}\n@media (min-width: 40em) {\n  .about__title {\n    padding-top: 4.5rem;\n  }\n}\n.about__flexbox {\n  position: relative;\n  display: flex;\n  padding: 0 1.5rem;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  max-width: 60rem;\n  margin: 0 auto;\n  opacity: 0;\n}\n.about__flexbox.animate {\n  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\n}\n@media (min-width: 40em) {\n  .about__flexbox {\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2rem;\n  }\n}\n.about__details {\n  visibility: hidden;\n  opacity: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  height: 100%;\n  border-radius: 0.25rem;\n  rotate: y 180deg;\n  background-color: var(--lightGrey);\n  transition: opacity 50ms 300ms ease-in-out, visibility 50ms 300ms ease-in-out;\n}\n@media (hover: none) and (pointer: coarse) {\n  .about__details {\n    display: none;\n  }\n}\n.about__bio {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: max-content;\n}\n@media (hover: none) and (pointer: coarse) {\n  .about__bio {\n    pointer-events: none;\n  }\n}\n.about__bio-photo {\n  --dimension: 12.5rem;\n  width: var(--dimension);\n  height: var(--dimension);\n  border-radius: 0.35rem;\n  background-color: var(--lightGrey);\n  background-image: url(\"../../images/self.JPG\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  perspective: 1000px;\n  transition: rotate 600ms ease-in-out;\n}\n.about__bio:hover .about__bio-photo {\n  rotate: y 180deg;\n}\n.about__bio:hover .about__details {\n  visibility: visible;\n  opacity: 1;\n}\n.about__mobile {\n  display: none;\n}\n@media (hover: none) and (pointer: coarse) {\n  .about__mobile {\n    display: block;\n  }\n}\n.about__mobile-name {\n  font-size: 1.5rem;\n}\n.about__mobile-socials-link {\n  display: inline-block;\n  padding: 0.75rem;\n  font-size: 1.75rem;\n}\n.about__mobile-socials-link:active {\n  color: var(--lime);\n}\n.about__description {\n  text-align: left;\n  text-shadow: -1px -1px 0 var(--white), 1px -1px 0 var(--white), -1px 1px 0 var(--white), 1px 1px 0 var(--white);\n}\n.about__skills {\n  padding-top: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n@media (min-width: 64em) {\n  .about__skills {\n    flex-direction: row;\n  }\n}\n.about__card {\n  border: solid 1px var(--lightGrey);\n  border-radius: 0.5rem;\n  flex: 1;\n  opacity: 0;\n}\n.about__card.animate {\n  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\n}\n.about__card-header {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: solid 1px var(--lightGrey);\n  background-color: var(--opaqueDark);\n}\n.about__card-icon {\n  padding: 0.75rem;\n  border-radius: 0.25rem;\n  font-size: 2rem;\n  color: var(--lime);\n  background-color: var(--lightGrey);\n}\n@media (min-width: 40em) {\n  .about__card-icon {\n    padding: 1rem;\n    font-size: 2.5rem;\n  }\n}\n.about__card-title {\n  position: relative;\n  padding: 0.25rem 0;\n  font-size: 1rem;\n}\n@media (min-width: 40em) {\n  .about__card-title {\n    font-size: 1.25rem;\n    padding: 1rem 0;\n  }\n}\n.about__card-title::before {\n  content: \"\";\n  position: absolute;\n  bottom: 1rem;\n  right: 0;\n  height: 0.15rem;\n  width: 3rem;\n  background-color: var(--lime);\n  border-radius: 3rem;\n}\n.about__card-list {\n  padding: 1rem;\n  margin-top: 0.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.about__card-link {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  background-color: var(--opaqueDark);\n  transition: background-color 200ms ease-in-out;\n}\n.about__card-link:hover {\n  background-color: var(--opaqueGreen);\n}\n\n.footer {\n  text-align: center;\n}\n@media (min-width: 64em) {\n  .footer {\n    text-align: left;\n  }\n}\n.footer > .container {\n  position: relative;\n  background: url(\"../../images/cf-1-desktop.svg\"), url(\"../../images/cf-bg-2-desktop.svg\"), url(\"../../images/cf-bg-3-desktop.svg\");\n  background-position: left bottom, 20% 80%, right bottom;\n  background-repeat: no-repeat;\n}\n.footer__flexbox {\n  position: relative;\n  padding: 2.5rem 0;\n  margin: 0 auto;\n  max-width: 70rem;\n  opacity: 0;\n}\n.footer__flexbox.animate {\n  animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\n}\n@media (min-width: 64em) {\n  .footer__flexbox {\n    display: flex;\n    align-items: flex-start;\n    gap: 3rem;\n    padding: 5rem 0;\n  }\n}\n.footer__header {\n  flex: 0.75;\n}\n@media (min-width: 64em) {\n  .footer__header {\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding-top: 1.75rem;\n  }\n}\n.footer__title {\n  margin: 0 auto;\n  max-width: 37.5rem;\n  line-height: 3.25rem;\n}\n@media (min-width: 64em) {\n  .footer__title {\n    font-size: 1.875rem;\n    max-width: none;\n    text-shadow: -1px -1px 0 var(--white), 1px -1px 0 var(--white), -1px 1px 0 var(--white), 1px 1px 0 var(--white);\n  }\n}\n.footer__form {\n  --focus: var(--darkBlue);\n  --valid: var(--lime);\n  --invalid: #f71a1a;\n  max-width: 37.5rem;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 64em) {\n  .footer__form {\n    max-width: none;\n    margin: 0;\n    flex: 1 11%;\n  }\n}\n@media (min-width: 40em) {\n  .footer__form-flexbox {\n    display: flex;\n    gap: 1.5rem;\n  }\n}\n@media (min-width: 40em) {\n  .footer__form-control {\n    flex: 1;\n  }\n}\n.footer__form-control.submit {\n  display: flex;\n  justify-content: center;\n}\n@media (min-width: 64em) {\n  .footer__form-control.submit {\n    justify-content: flex-start;\n  }\n}\n.footer__form-control label {\n  display: block;\n  font-weight: 500;\n  text-align: left;\n  margin: 0.25rem 0;\n  opacity: 0;\n  transition: opacity 1000ms ease-in-out;\n}\n.footer__form-control:focus-within label {\n  opacity: 1;\n}\n.footer__form-control textarea {\n  resize: none;\n  height: 6.25rem;\n}\n.footer__form-control.valid input {\n  border: 2px solid var(--valid);\n}\n.footer__form-control.invalid input {\n  border: 2px solid var(--invalid);\n}\n.footer__form-input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: solid 2px var(--grey);\n  border-radius: 0.25rem;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  background-color: var(--opaqueWhite);\n  transition: border 150ms ease-in-out, outline 150ms ease-in-out, outline-offset 150ms ease-in-out;\n}\n.footer__form-input:focus {\n  border: solid 2px var(--focus);\n  outline-offset: 2px;\n  outline: solid 2px var(--grey);\n}\n.footer__form-error-msg {\n  color: var(--invalid);\n  font-size: 0.85rem;\n  height: 1.5rem;\n}\n.footer__form-button {\n  margin-top: 1rem;\n  padding: 0.75rem 1.5rem;\n}\n.footer__bottom {\n  border-top: solid 1px var(--lightGrey);\n  font-size: 0.875rem;\n}\n.footer__bottom .container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n}\n@media (min-width: 40em) {\n  .footer__bottom .container {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n}\n.footer__sitemap-links {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.footer__sitemap-link {\n  font-weight: 500;\n  transition: color 150ms ease-in-out;\n}\n.footer__sitemap-link:hover {\n  color: var(--darkBlue);\n}\n.footer__copy {\n  margin: 0;\n}",".darkmode {\r\n  --opaqueWhite: #060d18cc;\r\n  --opaqueDark: hsla(0, 0%, 100%, 0.025);\r\n  --white: #060c17; // extraDarkBlue\r\n  --lightGrey: #0e1b31; // veryDarkBlue\r\n  --grey: #172b4d; // darkBlue\r\n  --darkGrey: #b2b8b4; // midGrey\r\n  --darkBlue: #d0d9d4; // grey\r\n  --darkerBlue: #ebf0ee; // lightGrey\r\n}\r\n","@keyframes appear {\r\n  from {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n  }\r\n\r\n  1% {\r\n    visibility: visible;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes disappear {\r\n  from {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n  99% {\r\n    visibility: visible;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fade-slide-up {\r\n  from {\r\n    translate: 0 1rem;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    translate: 0 0;\r\n  }\r\n}\r\n\r\n@keyframes rotate-fade {\r\n  from {\r\n    perspective: 1000px;\r\n    opacity: 0;\r\n    rotate: y -90deg;\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    perspective: 1000px;\r\n    opacity: 1;\r\n    rotate: y 0deg;\r\n  }\r\n}\r\n","@keyframes menu-open {\r\n  from {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    top: 80%;\r\n  }\r\n\r\n  1% {\r\n    visibility: visible;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    top: 110%;\r\n  }\r\n}\r\n\r\n@keyframes menu-close {\r\n  from {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    top: 110%;\r\n  }\r\n\r\n  99% {\r\n    visibility: visible;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    top: 80%;\r\n  }\r\n}\r\n","@keyframes popup-appear {\r\n  from {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    scale: 0.5;\r\n  }\r\n\r\n  1% {\r\n    visibility: visible;\r\n    opacity: 0;\r\n    scale: 0.5;\r\n  }\r\n\r\n  to {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    scale: 1;\r\n  }\r\n}\r\n\r\n@keyframes popup-disappear {\r\n  from {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    scale: 1;\r\n  }\r\n\r\n  99% {\r\n    visibility: visible;\r\n    opacity: 0;\r\n    scale: 0.5;\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    scale: 0.5;\r\n  }\r\n}\r\n","h1,\r\nh2,\r\nh3,\r\nh4 {\r\n  color: var(--darkerBlue);\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\na,\r\na::before,\r\na::after {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style-type: none;\r\n}\r\n\r\np {\r\n  margin-top: 0;\r\n}\r\n\r\n.section {\r\n  text-align: center;\r\n\r\n  &__overlay {\r\n    position: absolute;\r\n    inset: 0;\r\n    backdrop-filter: blur(5px);\r\n  }\r\n\r\n  &__title {\r\n    position: relative;\r\n    font-size: 1.75rem;\r\n    line-height: 2.5rem;\r\n    padding-bottom: 1rem;\r\n    margin-bottom: 2.5rem;\r\n\r\n    @media (min-width: 40em) {\r\n      font-size: 2.5rem;\r\n      line-height: 3.25rem;\r\n      margin-bottom: 3.5rem;\r\n    }\r\n\r\n    &::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 100%;\r\n      left: 50%;\r\n      translate: -50%;\r\n      height: 0.15rem;\r\n      width: 3rem;\r\n      background-color: var(--lime);\r\n      border-radius: 3rem;\r\n\r\n      @media (min-width: 40em) {\r\n        height: 0.25rem;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-gap: 1.5rem;\r\n\r\n    @media (min-width: 64em) {\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n\r\n  &__cta {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.5rem 1rem;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    font-weight: 500;\r\n    color: var(--white);\r\n    border-radius: 0.25rem;\r\n    border: 0;\r\n    background-color: var(--lime);\r\n    cursor: pointer;\r\n    box-shadow: var(--shadowLime1);\r\n    transition:\r\n      background-color 150ms ease-in-out,\r\n      box-shadow 150ms ease-in-out,\r\n      scale 150ms ease-in-out;\r\n\r\n    i {\r\n      position: relative;\r\n      left: 0;\r\n      transition: left 350ms ease-in-out;\r\n    }\r\n\r\n    &:hover {\r\n      box-shadow: var(--shadowLime2);\r\n\r\n      i {\r\n        left: 0.25rem;\r\n      }\r\n    }\r\n\r\n    &:active {\r\n      background-color: var(--pressed);\r\n      box-shadow: var(--shadowLime1);\r\n      scale: 0.95;\r\n    }\r\n  }\r\n\r\n  &__card {\r\n    position: relative;\r\n    padding: 0.75rem;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 23.0625rem;\r\n    border-radius: 0.5rem;\r\n    border: solid 2px var(--lightGrey);\r\n    background-color: var(--lightGrey);\r\n    overflow: hidden;\r\n\r\n    &-title {\r\n      font-weight: 500;\r\n      font-size: 1.5rem;\r\n      line-height: 2rem;\r\n    }\r\n\r\n    &-btns {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style-type: none;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 0.5rem;\r\n      flex-wrap: wrap;\r\n    }\r\n\r\n    &-btn {\r\n      display: inline-block;\r\n      padding: 0.5rem 0.75rem;\r\n      font-weight: 600;\r\n      font-size: 0.75rem;\r\n      line-height: 1rem;\r\n      letter-spacing: 0.03em;\r\n      background-color: var(--btn-bg);\r\n      border-radius: 0.25rem;\r\n      pointer-events: none;\r\n    }\r\n  }\r\n}\r\n\r\n.container {\r\n  min-width: 20rem;\r\n  max-width: 90rem;\r\n  margin: auto;\r\n\r\n  &-pall {\r\n    padding: 0.5rem;\r\n\r\n    @media (min-width: 40em) {\r\n      padding: 1rem;\r\n    }\r\n\r\n    @media (min-width: 64em) {\r\n      padding: 1.5rem;\r\n    }\r\n  }\r\n\r\n  &-px {\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n\r\n    @media (min-width: 40em) {\r\n      padding-left: 1rem;\r\n      padding-right: 1rem;\r\n    }\r\n\r\n    @media (min-width: 64em) {\r\n      padding-left: 1.5rem;\r\n      padding-right: 1.5rem;\r\n    }\r\n  }\r\n}\r\n\r\n.social {\r\n  &-wrap {\r\n    margin: 0;\r\n    list-style: none;\r\n    padding: 1rem;\r\n    font-size: 1.5rem;\r\n    border-radius: 0.25rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1.25rem;\r\n  }\r\n\r\n  &-sm {\r\n    display: none;\r\n    padding: 0.5rem 0.75rem;\r\n    font-size: 1rem;\r\n    border: solid 1px var(--lightGrey);\r\n    margin: 0;\r\n    gap: 0.75rem;\r\n\r\n    @media (min-width: 64em) {\r\n      display: flex;\r\n    }\r\n  }\r\n\r\n  &-link {\r\n    display: grid;\r\n\r\n    &:hover {\r\n      color: var(--lime);\r\n    }\r\n\r\n    &:active {\r\n      color: var(--pressed);\r\n    }\r\n  }\r\n}\r\n",".header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  padding: 0.5rem 0.5rem 0;\r\n\r\n  @media screen and (min-width: 40em) {\r\n    padding: 1rem 1rem 0.25rem;\r\n  }\r\n\r\n  @media screen and (min-width: 64em) {\r\n    padding: 1.5rem 1.5rem 0.5rem;\r\n  }\r\n\r\n  &__logo {\r\n    font-family: var(--ff-pacifico);\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    line-height: 28px;\r\n    color: var(--darkerBlue);\r\n    transition: color 150ms ease-in-out;\r\n\r\n    &:hover {\r\n      color: var(--lime);\r\n    }\r\n\r\n    @media (max-width: 64em) {\r\n      span {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: solid 1px var(--lightGrey);\r\n    border-radius: 0.5rem;\r\n    background-color: var(--opaqueWhite);\r\n    backdrop-filter: blur(10px);\r\n    box-shadow: var(--shadow1);\r\n  }\r\n\r\n  &__links {\r\n    display: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n\r\n    @media (min-width: 64em) {\r\n      display: flex;\r\n      gap: 2rem;\r\n    }\r\n  }\r\n\r\n  &__link {\r\n    padding: 1.5rem 0;\r\n    display: inline-block;\r\n    position: relative;\r\n    font-weight: 500;\r\n    line-height: 1.25rem;\r\n    transition: color 150ms ease-in-out;\r\n\r\n    &::before {\r\n      content: '';\r\n      position: absolute;\r\n      bottom: 1.5rem;\r\n      left: 50%;\r\n      translate: -50%;\r\n      width: 0.25rem;\r\n      height: 0.15rem;\r\n      background-color: var(--lime);\r\n      border-radius: 10rem;\r\n      opacity: 0;\r\n      transition:\r\n        bottom 150ms 250ms ease-in-out,\r\n        opacity 150ms 250ms ease-in-out,\r\n        width 150ms 415ms ease-in-out;\r\n    }\r\n\r\n    &:hover {\r\n      color: var(--lime);\r\n\r\n      &::before {\r\n        bottom: 0;\r\n        opacity: 1;\r\n        width: 100%;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__hamburger {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0.5rem;\r\n    border: 0;\r\n    border-radius: 0.25rem;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n\r\n    @media (min-width: 64em) {\r\n      display: none;\r\n    }\r\n\r\n    span {\r\n      position: relative;\r\n      top: 0;\r\n      display: inline-block;\r\n      width: 1.5rem;\r\n      height: 0.15rem;\r\n      background-color: var(--darkerBlue);\r\n      border-radius: 5rem;\r\n      transition: background-color 150ms ease-in-out;\r\n\r\n      &:not(:last-child) {\r\n        margin-bottom: 0.25rem;\r\n      }\r\n    }\r\n\r\n    &.hamburger__open {\r\n      .stroke {\r\n        transition:\r\n          top 100ms ease-in-out,\r\n          rotate 100ms 100ms ease-in-out,\r\n          opacity 100ms 50ms ease-in-out;\r\n\r\n        &.top {\r\n          rotate: 45deg;\r\n          top: 7px;\r\n        }\r\n\r\n        &.middle {\r\n          opacity: 0;\r\n        }\r\n\r\n        &.bottom {\r\n          rotate: -45deg;\r\n          top: -6px;\r\n        }\r\n      }\r\n    }\r\n\r\n    &.hamburger__close {\r\n      .stroke {\r\n        transition:\r\n          top 100ms 100ms ease-in-out,\r\n          rotate 100ms ease-in-out,\r\n          opacity 100ms 50ms ease-in-out;\r\n\r\n        &.top {\r\n          rotate: 0deg;\r\n          top: 0;\r\n        }\r\n\r\n        &.middle {\r\n          opacity: 1;\r\n        }\r\n\r\n        &.bottom {\r\n          rotate: 0deg;\r\n          top: 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    &:hover span {\r\n      background-color: var(--lime);\r\n    }\r\n\r\n    &:active {\r\n      background-color: var(--opaqueGreen);\r\n    }\r\n  }\r\n\r\n  &__menu {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    top: 110%;\r\n    left: -1px;\r\n    right: -1px;\r\n    z-index: 1;\r\n    text-align: end;\r\n    border-radius: 0.5rem;\r\n    border: solid 1px var(--lightGrey);\r\n    background-color: var(--white);\r\n\r\n    &.menu-open {\r\n      animation: menu-open 150ms ease-in-out 0ms 1 forwards;\r\n    }\r\n\r\n    &.menu-close {\r\n      animation: menu-close 150ms ease-in-out 0ms 1 forwards;\r\n    }\r\n\r\n    &-social {\r\n      justify-content: start;\r\n    }\r\n\r\n    &-content {\r\n      padding: 0.875rem 0 0;\r\n      list-style: none;\r\n      text-align: left;\r\n      height: 70vh;\r\n    }\r\n\r\n    &-link {\r\n      &-wrap {\r\n        &:hover {\r\n          .header__menu-link {\r\n            left: 2rem;\r\n            color: var(--lime);\r\n          }\r\n        }\r\n      }\r\n\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 1.25rem;\r\n      position: relative;\r\n      font-size: 2rem;\r\n      color: var(--darkerBlue);\r\n      width: 100%;\r\n      left: 0;\r\n      padding: 1.25rem;\r\n      font-weight: 600;\r\n      transition: color 150ms ease-in-out, left 150ms ease-in-out;\r\n\r\n      i {\r\n        font-size: 1.5rem;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__toggle {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    border: solid 1px var(--lightGrey);\r\n    border-radius: 0.25rem;\r\n    color: inherit;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    transition:\r\n      border-color 150ms ease-in-out,\r\n      background-color 150ms ease-in-out;\r\n\r\n    &-container {\r\n      padding: 1rem 0;\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 0.75rem;\r\n    }\r\n\r\n    &:hover {\r\n      border-color: var(--lime);\r\n      background-color: var(--opaqueGreen);\r\n    }\r\n  }\r\n}\r\n",".intro {\r\n  position: relative;\r\n\r\n  .container {\r\n    /* stylelint-disable-next-line csstree/validator */\r\n    padding-top: min(10vh, 4rem);\r\n    height: 100vh;\r\n    min-height: 31.5625rem;\r\n    background-image: url('../../images/header-illsutration-mobile.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    /* stylelint-disable-next-line csstree/validator */\r\n    gap: min(5vh, 2rem);\r\n\r\n    @media (min-width: 64em) {\r\n      background-image: url('../../images/Header-llustration-desktop.svg');\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    position: relative;\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    line-height: 1.2;\r\n    opacity: 0;\r\n    animation: fade-slide-up 1500ms ease-in-out 1 forwards;\r\n\r\n    @media (min-width: 40em) {\r\n      font-size: 2rem;\r\n      letter-spacing: 0.37px;\r\n    }\r\n\r\n    span {\r\n      display: block;\r\n      font-weight: 700;\r\n      font-size: 3rem;\r\n      color: var(--lime);\r\n      text-shadow: -1px -1px 0 var(--green), 1px -1px 0 var(--green),\r\n        -1px 1px 0 var(--green), 1px 1px 0 var(--green);\r\n\r\n      @media (min-width: 40em) {\r\n        font-size: 4.5rem;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    max-width: 51.5625rem;\r\n    font-size: 1.15rem;\r\n    line-height: 1.5rem;\r\n    opacity: 0;\r\n    animation: fade-slide-up 1500ms 1000ms ease-in-out 1 forwards;\r\n\r\n    @media (min-width: 40em) {\r\n      font-size: 1.25rem;\r\n      line-height: 1.75rem;\r\n    }\r\n  }\r\n\r\n  &__tech {\r\n    border: solid 1px var(--lightGrey);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    padding: 1rem;\r\n    margin: 0 auto;\r\n    width: max-content;\r\n    border-radius: 0.5rem;\r\n    opacity: 0;\r\n    animation: fade-slide-up 1500ms 1500ms ease-in-out 1 forwards;\r\n\r\n    @media (min-width: 40em) {\r\n      flex-direction: row;\r\n    }\r\n\r\n    &-title {\r\n      margin: 0;\r\n      color: var(--darkerGrey);\r\n      font-size: 1rem;\r\n      font-weight: 500;\r\n      line-height: 2rem;\r\n      width: max-content;\r\n\r\n      &-source {\r\n        transition: color 100ms ease-in-out;\r\n\r\n        &:hover {\r\n          color: var(--lime);\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n    }\r\n\r\n    &-list {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 1rem;\r\n    }\r\n\r\n    &-item {\r\n      &:first-child {\r\n        color: #e34f26;\r\n      }\r\n\r\n      &:nth-child(2) {\r\n        color: #2965f1;\r\n      }\r\n\r\n      &:nth-child(3) {\r\n        color: #f0db4f;\r\n      }\r\n    }\r\n\r\n    &-link {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      padding: 0.25rem 0.5rem;\r\n      border-radius: 0.25rem;\r\n      background-color: var(--lightGrey);\r\n      font-size: 2rem;\r\n\r\n      @media (min-width: 40em) {\r\n        font-size: 1.5rem;\r\n        gap: 0.5rem;\r\n      }\r\n\r\n      span {\r\n        display: none;\r\n        font-size: 0.75rem;\r\n        color: var(--darkGrey);\r\n\r\n        @media (min-width: 40em) {\r\n          display: block;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__down-btn {\r\n    display: inline-block;\r\n    padding: 0.75rem;\r\n    line-height: 0;\r\n    border: solid 2px var(--lightGreen);\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n    rotate: y -90deg;\r\n    transition: 150ms background-color ease-in-out;\r\n    animation: rotate-fade 1500ms 2000ms ease-in-out 1 forwards;\r\n\r\n    &:hover {\r\n      border: solid 2px var(--lime);\r\n      background-color: var(--opaqueGreen);\r\n    }\r\n  }\r\n}\r\n",".project {\r\n  padding-top: 4rem;\r\n  padding-bottom: 4rem;\r\n\r\n  @media (min-width: 40em) {\r\n    padding-top: 5rem;\r\n    padding-bottom: 7.5rem;\r\n  }\r\n\r\n  &__title {\r\n    @media (min-width: 40em) {\r\n      position: relative;\r\n      margin-bottom: 3.25rem;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    max-width: 29.875em;\r\n    margin: 0 auto;\r\n\r\n    @media (min-width: 64em) {\r\n      max-width: 61.25rem;\r\n    }\r\n  }\r\n\r\n  &__card {\r\n    --btn-bg: var(--lightGrey);\r\n\r\n    border: solid 2px var(--lightGrey);\r\n    border-radius: 0.5rem;\r\n    background-color: var(--white);\r\n    opacity: 0;\r\n    transition: border 150ms ease-in-out, background-color 150ms ease-in-out;\r\n\r\n    &.animate {\r\n      &:first-child {\r\n        animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\r\n      }\r\n\r\n      &:nth-child(2) {\r\n        animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\r\n      }\r\n\r\n      &:nth-child(3) {\r\n        animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\r\n      }\r\n\r\n      &:nth-child(4) {\r\n        animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\r\n      }\r\n    }\r\n\r\n    &-title {\r\n      color: currentColor;\r\n\r\n      @media (hover: none) {\r\n        color: var(--darkBlue);\r\n      }\r\n    }\r\n\r\n    &-image {\r\n      padding: 0.25rem;\r\n      height: 12rem;\r\n\r\n      img {\r\n        width: 100%;\r\n        height: 100%;\r\n        object-fit: cover;\r\n        border-radius: 0.25rem;\r\n        border: solid 1px transparent;\r\n        transition: border 150ms ease-in-out;\r\n      }\r\n    }\r\n\r\n    &:hover,\r\n    &:focus-within {\r\n      border: solid 2px var(--opaqueGreen);\r\n      background-color: var(--opaqueDark);\r\n\r\n      .project__card {\r\n        &-title {\r\n          color: var(--darkerBlue);\r\n        }\r\n\r\n        &-image img {\r\n          border: solid 1px var(--lightGrey);\r\n        }\r\n      }\r\n    }\r\n\r\n    &-content {\r\n      border-top: solid 2px var(--lightGrey);\r\n      padding: 1rem 1rem 1.5rem;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 1rem;\r\n    }\r\n\r\n    &-cta-wrap {\r\n      display: grid;\r\n      place-items: center;\r\n    }\r\n  }\r\n}\r\n",".popup {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  margin-top: 4em;\r\n  text-align: left;\r\n  width: 95%;\r\n  max-width: 60em;\r\n  left: 50%;\r\n  translate: -50%;\r\n  z-index: 1010;\r\n\r\n  @media (min-width: 40em) {\r\n    width: 80%;\r\n  }\r\n\r\n  &.open {\r\n    animation: popup-appear 250ms ease-in-out 0ms 1 forwards;\r\n  }\r\n\r\n  &.close {\r\n    animation: popup-disappear 200ms ease-in-out 0ms 1 forwards;\r\n  }\r\n\r\n  &__cancel-btn {\r\n    text-align: right;\r\n\r\n    &_icon {\r\n      position: relative;\r\n      bottom: -17px;\r\n      left: 12px;\r\n      padding: 0.35rem 0.475rem;\r\n      font-size: 1.25rem;\r\n      border-radius: 5rem;\r\n      border: solid 2px var(--grey);\r\n      cursor: pointer;\r\n      background-color: var(--white);\r\n      transition: background-color 150ms ease-in-out, color 150ms ease-in-out;\r\n\r\n      &:hover {\r\n        color: var(--lightGrey);\r\n        background-color: rgb(247, 57, 57);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__content {\r\n    padding: 1rem;\r\n    height: 80vh;\r\n    overflow-y: scroll;\r\n    background-color: var(--white);\r\n    border: 2px solid var(--grey);\r\n    border-radius: 0.5rem;\r\n    box-shadow: var(--shadow1);\r\n\r\n    @media (min-width: 40em) {\r\n      padding: 1.5rem;\r\n      height: 80vh;\r\n    }\r\n\r\n    &::-webkit-scrollbar {\r\n      width: 0.75rem;\r\n    }\r\n\r\n    &::-webkit-scrollbar-track {\r\n      background-color: var(--white);\r\n      border-radius: 5rem;\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: var(--grey);\r\n      border-radius: 5rem;\r\n      border: 3px solid var(--white);\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb:hover {\r\n      background-color: var(--darkBlue);\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb:active {\r\n      background-color: var(--darkerBlue);\r\n    }\r\n\r\n    &-text {\r\n      display: grid;\r\n      grid-template-columns: 1fr;\r\n      grid-gap: 0.75rem;\r\n\r\n      @media (min-width: 64em) {\r\n        grid-template-columns: 3fr 1fr;\r\n        grid-template-rows: repeat(3, auto);\r\n        grid-gap: 1.25rem;\r\n        padding-top: 1.5rem;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__image {\r\n    padding: 1rem;\r\n    border-radius: 0.4rem;\r\n    background-color: var(--lightGrey);\r\n\r\n    img {\r\n      width: 100%;\r\n      border-radius: 0.3rem;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    line-height: 2.75rem;\r\n\r\n    @media (min-width: 64em) {\r\n      font-size: 2rem;\r\n      grid-column: 1/2;\r\n      grid-row: 1/2;\r\n    }\r\n  }\r\n\r\n  &__languages {\r\n    justify-content: start;\r\n\r\n    @media (min-width: 64em) {\r\n      grid-column: 1/3;\r\n      grid-row: 2/3;\r\n    }\r\n  }\r\n\r\n  &__language {\r\n    --btn-bg: var(--lightGrey);\r\n    --btn-hover: var(--grey);\r\n    --btn-pressed: var(--lightGreen);\r\n  }\r\n\r\n  &__description {\r\n    margin: 0;\r\n\r\n    @media (min-width: 64em) {\r\n      grid-column: 1/3;\r\n      grid-row: 3/4;\r\n      padding-top: 0.75rem;\r\n    }\r\n  }\r\n\r\n  &__ctas {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n\r\n    @media (min-width: 64em) {\r\n      grid-column: 2/3;\r\n      grid-row: 1/2;\r\n    }\r\n  }\r\n\r\n  &__cta {\r\n    width: max-content;\r\n  }\r\n}\r\n",".about {\r\n  position: relative;\r\n  padding-bottom: 4rem;\r\n\r\n  @media (min-width: 40em) {\r\n    padding-bottom: 7.5rem;\r\n  }\r\n\r\n  &__wrap {\r\n    position: relative;\r\n    padding: 5rem 0;\r\n    background:\r\n      url('../../images/illustration-about-me-mobile.svg'),\r\n      url('../../images/illustration1-about-me-mobile.svg');\r\n    background-position: left bottom, right top;\r\n    background-repeat: no-repeat;\r\n\r\n    @media (min-width: 40em) {\r\n      background:\r\n        url('../../images/illustration-about-me-2-desktop.svg'),\r\n        url('../../images/illustration-about-me-1-desktop.svg');\r\n      background-position: left bottom, right top;\r\n      background-repeat: no-repeat;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    @media (min-width: 40em) {\r\n      padding-top: 4.5rem;\r\n    }\r\n  }\r\n\r\n  &__flexbox {\r\n    position: relative;\r\n    display: flex;\r\n    padding: 0 1.5rem;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1.5rem;\r\n    max-width: 60rem;\r\n    margin: 0 auto;\r\n    opacity: 0;\r\n\r\n    &.animate {\r\n      animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\r\n    }\r\n\r\n    @media (min-width: 40em) {\r\n      flex-direction: row;\r\n      align-items: flex-start;\r\n      gap: 2rem;\r\n    }\r\n  }\r\n\r\n  &__details {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 0.25rem;\r\n    rotate: y 180deg;\r\n    background-color: var(--lightGrey);\r\n    transition:\r\n      opacity 50ms 300ms ease-in-out,\r\n      visibility 50ms 300ms ease-in-out;\r\n\r\n    @media (hover: none) and (pointer: coarse) {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__bio {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: max-content;\r\n\r\n    @media (hover: none) and (pointer: coarse) {\r\n      pointer-events: none;\r\n    }\r\n\r\n    &-photo {\r\n      --dimension: 12.5rem;\r\n\r\n      width: var(--dimension);\r\n      height: var(--dimension);\r\n      border-radius: 0.35rem;\r\n      background-color: var(--lightGrey);\r\n      background-image: url('../../images/self.JPG');\r\n      background-size: cover;\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      perspective: 1000px;\r\n      transition: rotate 600ms ease-in-out;\r\n    }\r\n\r\n    &:hover {\r\n      .about__bio-photo {\r\n        rotate: y 180deg;\r\n      }\r\n\r\n      .about__details {\r\n        visibility: visible;\r\n        opacity: 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__mobile {\r\n    display: none;\r\n\r\n    @media (hover: none) and (pointer: coarse) {\r\n      display: block;\r\n    }\r\n\r\n    &-name {\r\n      font-size: 1.5rem;\r\n    }\r\n\r\n    &-socials {\r\n      &-link {\r\n        display: inline-block;\r\n        padding: 0.75rem;\r\n        font-size: 1.75rem;\r\n\r\n        &:active {\r\n          color: var(--lime);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    text-align: left;\r\n    text-shadow:\r\n      -1px -1px 0 var(--white),\r\n      1px -1px 0 var(--white),\r\n      -1px 1px 0 var(--white),\r\n      1px 1px 0 var(--white);\r\n  }\r\n\r\n  &__skills {\r\n    padding-top: 2.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n\r\n    @media (min-width: 64em) {\r\n      flex-direction: row;\r\n    }\r\n  }\r\n\r\n  &__card {\r\n    border: solid 1px var(--lightGrey);\r\n    border-radius: 0.5rem;\r\n    flex: 1;\r\n    opacity: 0;\r\n\r\n    &.animate {\r\n      animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\r\n    }\r\n\r\n    &-header {\r\n      display: flex;\r\n      gap: 1rem;\r\n      // padding-bottom: 0.5rem;\r\n      padding: 1rem;\r\n      border-bottom: solid 1px var(--lightGrey);\r\n      background-color: var(--opaqueDark);\r\n    }\r\n\r\n    &-icon {\r\n      padding: 0.75rem;\r\n      border-radius: 0.25rem;\r\n      font-size: 2rem;\r\n      color: var(--lime);\r\n      background-color: var(--lightGrey);\r\n\r\n      @media (min-width: 40em) {\r\n        padding: 1rem;\r\n        font-size: 2.5rem;\r\n      }\r\n    }\r\n\r\n    &-title {\r\n      position: relative;\r\n      padding: 0.25rem 0;\r\n      font-size: 1rem;\r\n\r\n      @media (min-width: 40em) {\r\n        font-size: 1.25rem;\r\n        padding: 1rem 0;\r\n      }\r\n\r\n      &::before {\r\n        content: '';\r\n        position: absolute;\r\n        bottom: 1rem;\r\n        right: 0;\r\n        height: 0.15rem;\r\n        width: 3rem;\r\n        background-color: var(--lime);\r\n        border-radius: 3rem;\r\n      }\r\n    }\r\n\r\n    &-list {\r\n      padding: 1rem;\r\n      margin-top: 0.5rem;\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      gap: 0.5rem;\r\n    }\r\n\r\n    &-link {\r\n      display: inline-block;\r\n      padding: 0.25rem 0.5rem;\r\n      border-radius: 0.25rem;\r\n      background-color: var(--opaqueDark);\r\n      transition: background-color 200ms ease-in-out;\r\n\r\n      &:hover {\r\n        background-color: var(--opaqueGreen);\r\n      }\r\n    }\r\n  }\r\n}\r\n",".footer {\r\n  text-align: center;\r\n\r\n  @media (min-width: 64em) {\r\n    text-align: left;\r\n  }\r\n\r\n  > .container {\r\n    position: relative;\r\n    background:\r\n      url('../../images/cf-1-desktop.svg'),\r\n      url('../../images/cf-bg-2-desktop.svg'),\r\n      url('../../images/cf-bg-3-desktop.svg');\r\n    background-position: left bottom, 20% 80%, right bottom;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  &__flexbox {\r\n    position: relative;\r\n    padding: 2.5rem 0;\r\n    margin: 0 auto;\r\n    max-width: 70rem;\r\n    opacity: 0;\r\n\r\n    &.animate {\r\n      animation: fade-slide-up 1000ms ease-in-out 0ms 1 forwards;\r\n    }\r\n\r\n    @media (min-width: 64em) {\r\n      display: flex;\r\n      align-items: flex-start;\r\n      gap: 3rem;\r\n      padding: 5rem 0;\r\n    }\r\n  }\r\n\r\n  &__header {\r\n    flex: 0.75;\r\n\r\n    @media (min-width: 64em) {\r\n      display: flex;\r\n      flex-direction: column-reverse;\r\n      justify-content: flex-start;\r\n      align-items: flex-start;\r\n      padding-top: 1.75rem;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    margin: 0 auto;\r\n    max-width: 37.5rem;\r\n    line-height: 3.25rem;\r\n\r\n    @media (min-width: 64em) {\r\n      font-size: 1.875rem;\r\n      max-width: none;\r\n      // height: max-content;\r\n      text-shadow:\r\n        -1px -1px 0 var(--white),\r\n        1px -1px 0 var(--white),\r\n        -1px 1px 0 var(--white),\r\n        1px 1px 0 var(--white);\r\n    }\r\n  }\r\n\r\n  &__form {\r\n    --focus: var(--darkBlue);\r\n    --valid: var(--lime);\r\n    --invalid: #f71a1a;\r\n\r\n    max-width: 37.5rem;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    @media (min-width: 64em) {\r\n      max-width: none;\r\n      margin: 0;\r\n      flex: 1 11%;\r\n    }\r\n\r\n    &-flexbox {\r\n      @media (min-width: 40em) {\r\n        display: flex;\r\n        gap: 1.5rem;\r\n      }\r\n    }\r\n\r\n    &-control {\r\n      @media (min-width: 40em) {\r\n        flex: 1;\r\n      }\r\n\r\n      &.submit {\r\n        display: flex;\r\n        justify-content: center;\r\n\r\n        @media (min-width: 64em) {\r\n          justify-content: flex-start;\r\n        }\r\n      }\r\n\r\n      label {\r\n        display: block;\r\n        font-weight: 500;\r\n        text-align: left;\r\n        margin: 0.25rem 0;\r\n        opacity: 0;\r\n        transition: opacity 1000ms ease-in-out;\r\n      }\r\n\r\n      &:focus-within label {\r\n        opacity: 1;\r\n      }\r\n\r\n      textarea {\r\n        resize: none;\r\n        height: 6.25rem;\r\n      }\r\n\r\n      &.valid input {\r\n        border: 2px solid var(--valid);\r\n      }\r\n\r\n      &.invalid input {\r\n        border: 2px solid var(--invalid);\r\n      }\r\n    }\r\n\r\n    &-input {\r\n      width: 100%;\r\n      padding: 0.75rem 1rem;\r\n      border: solid 2px var(--grey);\r\n      border-radius: 0.25rem;\r\n      font-family: inherit;\r\n      font-weight: inherit;\r\n      color: inherit;\r\n      background-color: var(--opaqueWhite);\r\n      transition:\r\n        border 150ms ease-in-out,\r\n        outline 150ms ease-in-out,\r\n        outline-offset 150ms ease-in-out;\r\n\r\n      &:focus {\r\n        border: solid 2px var(--focus);\r\n        outline-offset: 2px;\r\n        outline: solid 2px var(--grey);\r\n      }\r\n    }\r\n\r\n    &-error-msg {\r\n      color: var(--invalid);\r\n      font-size: 0.85rem;\r\n      height: 1.5rem;\r\n    }\r\n\r\n    &-button {\r\n      margin-top: 1rem;\r\n      padding: 0.75rem 1.5rem;\r\n    }\r\n  }\r\n\r\n  &__bottom {\r\n    border-top: solid 1px var(--lightGrey);\r\n    font-size: 0.875rem;\r\n\r\n    .container {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      align-items: center;\r\n\r\n      @media (min-width: 40em) {\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: flex-start;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__sitemap {\r\n    &-links {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 1.5rem;\r\n    }\r\n\r\n    &-link {\r\n      font-weight: 500;\r\n      transition: color 150ms ease-in-out;\r\n\r\n      &:hover {\r\n        color: var(--darkBlue);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__copy {\r\n    margin: 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./images/Header-llustration-desktop.svg":
/*!***********************************************!*\
  !*** ./images/Header-llustration-desktop.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Header-llustration-desktop.svg";

/***/ }),

/***/ "./images/cf-1-desktop.svg":
/*!*********************************!*\
  !*** ./images/cf-1-desktop.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cf-1-desktop.svg";

/***/ }),

/***/ "./images/cf-bg-2-desktop.svg":
/*!************************************!*\
  !*** ./images/cf-bg-2-desktop.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cf-bg-2-desktop.svg";

/***/ }),

/***/ "./images/cf-bg-3-desktop.svg":
/*!************************************!*\
  !*** ./images/cf-bg-3-desktop.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cf-bg-3-desktop.svg";

/***/ }),

/***/ "./images/header-illsutration-mobile.svg":
/*!***********************************************!*\
  !*** ./images/header-illsutration-mobile.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/header-illsutration-mobile.svg";

/***/ }),

/***/ "./images/illustration-about-me-1-desktop.svg":
/*!****************************************************!*\
  !*** ./images/illustration-about-me-1-desktop.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/illustration-about-me-1-desktop.svg";

/***/ }),

/***/ "./images/illustration-about-me-2-desktop.svg":
/*!****************************************************!*\
  !*** ./images/illustration-about-me-2-desktop.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/illustration-about-me-2-desktop.svg";

/***/ }),

/***/ "./images/illustration-about-me-mobile.svg":
/*!*************************************************!*\
  !*** ./images/illustration-about-me-mobile.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/illustration-about-me-mobile.svg";

/***/ }),

/***/ "./images/illustration1-about-me-mobile.svg":
/*!**************************************************!*\
  !*** ./images/illustration1-about-me-mobile.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/illustration1-about-me-mobile.svg";

/***/ }),

/***/ "./images/projects/ALT-Conference-popup.svg":
/*!**************************************************!*\
  !*** ./images/projects/ALT-Conference-popup.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ALT-Conference-popup.svg";

/***/ }),

/***/ "./images/projects/Awesome-books-popup.svg":
/*!*************************************************!*\
  !*** ./images/projects/Awesome-books-popup.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Awesome-books-popup.svg";

/***/ }),

/***/ "./images/projects/blog_popup.svg":
/*!****************************************!*\
  !*** ./images/projects/blog_popup.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/blog_popup.svg";

/***/ }),

/***/ "./images/projects/budgettrail_popup.svg":
/*!***********************************************!*\
  !*** ./images/projects/budgettrail_popup.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/budgettrail_popup.svg";

/***/ }),

/***/ "./images/projects/consolehub_popup.svg":
/*!**********************************************!*\
  !*** ./images/projects/consolehub_popup.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/consolehub_popup.svg";

/***/ }),

/***/ "./images/projects/space_popup.svg":
/*!*****************************************!*\
  !*** ./images/projects/space_popup.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/space_popup.svg";

/***/ }),

/***/ "./images/projects/todo_app_detail.svg":
/*!*********************************************!*\
  !*** ./images/projects/todo_app_detail.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/todo_app_detail.svg";

/***/ }),

/***/ "./images/self.JPG":
/*!*************************!*\
  !*** ./images/self.JPG ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/self.JPG";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/projects.js */ "./src/data/projects.js");
/* harmony import */ var _modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderProjects.js */ "./src/modules/renderProjects.js");
/* harmony import */ var _modules_intersectionObserver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/intersectionObserver.js */ "./src/modules/intersectionObserver.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_darkmode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/darkmode.js */ "./src/modules/darkmode.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form.js */ "./src/modules/form.js");
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");










// Dark mode functionality
var dakModeToggle = document.querySelector('.header__toggle');
var darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
  (0,_modules_darkmode_js__WEBPACK_IMPORTED_MODULE_4__.enableDarkMode)();
}
if (dakModeToggle) {
  dakModeToggle.addEventListener('click', function () {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      (0,_modules_darkmode_js__WEBPACK_IMPORTED_MODULE_4__.enableDarkMode)();
    } else {
      (0,_modules_darkmode_js__WEBPACK_IMPORTED_MODULE_4__.disableDarkMode)();
    }
  });
}

// Mobile menu functionality
var menuOptions = document.querySelectorAll('.header__menu-link');
var MenuToggleBtn = document.querySelector('.header__hamburger');
var overlay = document.querySelector('.overlay');
if (MenuToggleBtn) {
  MenuToggleBtn.addEventListener('click', function () {
    if (MenuToggleBtn.classList.contains('hamburger__close')) {
      (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__.openMenu)();
    } else {
      (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__.closeMenu)();
    }
  });
}
if (menuOptions) {
  menuOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__.closeMenu)();
    });
  });
}
if (overlay) {
  overlay.addEventListener('click', function () {
    (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__.closeMenu)();
    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_7__.clearPopupText)();
    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_7__.deactivatePopup)();
  });
}

// Render projects
(0,_modules_renderProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Intersection observer
(0,_modules_intersectionObserver_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

// Project details popup window
var projectButtons = document.querySelectorAll('.project__cta');
var popupCancelBtn = document.querySelector('.popup__cancel-btn_icon');
if (projectButtons) {
  projectButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_7__.fillInPopupText)(_data_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"], button);
      setTimeout(function () {
        (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_7__.activatePopup)();
      }, 175);
    });
  });
}
if (popupCancelBtn) {
  popupCancelBtn.addEventListener('click', function () {
    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_7__.clearPopupText)();
    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_7__.deactivatePopup)();
  });
}

// Contact form validation
var contactForm = document.querySelector('.footer__form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    if ((0,_modules_form_js__WEBPACK_IMPORTED_MODULE_6__.isEmailLowerCase)()) {
      (0,_modules_form_js__WEBPACK_IMPORTED_MODULE_6__.showCaseSuccess)();
    } else {
      (0,_modules_form_js__WEBPACK_IMPORTED_MODULE_6__.showCaseError)();
      e.preventDefault();
    }
  });
}

// Store and retrieve user information
(0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_5__.retrieveUserInfo)();
if (contactForm) {
  contactForm.addEventListener('submit', _modules_storage_js__WEBPACK_IMPORTED_MODULE_5__.storeUserInfo);
}
})();

/******/ })()
;
//# sourceMappingURL=bundled6d71fbc44aece214f32.js.map