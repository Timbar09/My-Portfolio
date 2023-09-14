const sections = document.querySelectorAll('.section');

const options = {
  root: null,
  threshold: 0.2,
  rootMargin: '0px',
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add('section--active');
      observer.unobserve(entry.target);
    }
  });
}, options);

const observe = () => {
  sections.forEach((section) => {
    observer.observe(section);
  });
};

export default observe;
