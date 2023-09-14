import data from '../projectData.js';

const renderProjects = () => {
  const projects = data.slice(0, 4);
  const projectCards = document.querySelectorAll('.project__card');

  projectCards.forEach((card, index) => {
    card.innerHTML = `
            <div class="project__card-image">
          <img src="${projects[index].image}" alt="${projects[index].name}" />
        </div>
        <div class="project__card-content">
          <h3 class="project__card-title section__card-title">${
  projects[index].name
}</h3>
          
          <ul class="project__card-tech section__card-btns">
            ${projects[index].technologies
    .slice(0, 3)
    .map(
      (tech) => `<li class="project__tech-item section__card-btn">${tech}</li>`,
    )
    .join('')}
          </ul>

          <div class="project__card-cta-wrap">
            <button id="${
  projects[index].ctaId
}" class="project__cta section__cta">
              <span>View Project</span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
        `;
  });
};

export default renderProjects;
