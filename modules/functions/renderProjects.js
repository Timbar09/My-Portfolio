import data from '../projectData.js';

const renderProjects = () => {
  const projects = data.slice(0, 4);
  const projectContainer = document.querySelector('.project__list');
  const projectsHTML = projects
    .map((project) => {
      return `
      <li class="project__card">
        <div class="project__card-image">
          <img src="${project.image}" alt="${project.title}" />
        </div>
        <div class="project__card-content">
          <h3 class="project__card-title section__card-title">${
            project.name
          }</h3>
          
          <ul class="project__card-tech section__card-btns">
            ${project.technologies
              .slice(0, 4)
              .map(
                (tech) =>
                  `<li class="project__tech-item section__card-btn">${tech}</li>`
              )
              .join('')}
          </ul>

          <div class="project__card-cta-wrap">
            <button id="${project.ctaId}" class="project__cta section__cta">
              <span>View Project</span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </li>
    `;
    })
    .join('');
  projectContainer.innerHTML = projectsHTML;
};

export default renderProjects;
