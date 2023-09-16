const enableDarkMode = () => {
  document.querySelector('body').classList.add('darkmode');
  document.querySelector('.header__toggle').title = 'Switch to light mode';
  document.querySelector('.header__toggle span').innerHTML = '<i class="fa-regular fa-moon"></i>';

  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.querySelector('body').classList.remove('darkmode');
  document.querySelector('.header__toggle').title = 'Switch to dark mode';
  document.querySelector('.header__toggle span').innerHTML = '<i class="fa-regular fa-sun"></i>';

  localStorage.setItem('darkMode', null);
};

export { enableDarkMode, disableDarkMode };
