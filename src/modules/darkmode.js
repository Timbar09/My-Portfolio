const body = document.querySelector('body');
const toggleButton = document.querySelector('.header__toggle');
const toggleIcon = document.querySelector('.header__toggle span');

const enableDarkMode = () => {
  if (body && toggleButton && toggleIcon) {
    body.classList.add('darkmode');
    toggleButton.title = 'Switch to light mode';
    toggleIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';

    localStorage.setItem('darkMode', 'enabled');
  }
};

const disableDarkMode = () => {
  body.classList.remove('darkmode');
  toggleButton.title = 'Switch to dark mode';
  toggleIcon.innerHTML = '<i class="fa-regular fa-sun"></i>';

  localStorage.setItem('darkMode', null);
};

export { enableDarkMode, disableDarkMode };
