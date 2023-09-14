const projectCards = document.querySelectorAll('.project__card');

const options = {
  root: null,
  threshold: 0.25,
  rootMargin: '0px',
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('project__card--active');
      observer.unobserve(entry.target);
    }
  });
}, options);

const observe = () => {
  // Observe project cards
  projectCards.forEach((card) => {
    observer.observe(card);
  });
};

export default observe;
