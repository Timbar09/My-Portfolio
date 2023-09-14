const projectCards = document.querySelectorAll('.project__card');
const aboutDescrition = document.querySelector('.about__flexbox');
const aboutCards = document.querySelectorAll('.about__card');

const options = {
  root: null,
  threshold: 0.25,
  rootMargin: '0px',
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, options);

const observe = () => {
  projectCards.forEach((card) => {
    observer.observe(card);
  });

  observer.observe(aboutDescrition);
  aboutCards.forEach((card) => {
    observer.observe(card);
  });
};

export default observe;
