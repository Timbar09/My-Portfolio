const sections = document.querySelectorAll('.section');

const options = {};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
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
