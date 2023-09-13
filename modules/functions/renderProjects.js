import data from '../projectData.js';

const renderProjects = () => {
  const projects = data.slice(0, 4);
  const projectContainer = document.querySelector('.project__list');
  const projectsHTML = projects
    .map((project) => {
      return `
      <li class="project__card">
        <div class="project__image">
          <img src="${project.image}" alt="${
        project.title
      }" style="width: 100px; height:100px;" />
        </div>
        <div class="project__content">
          <h3 class="project__title">${project.title}</h3>
          
          <ul class="project__tech section__card-btns">
            ${project.technologies
              .slice(0, 4)
              .map(
                (tech) =>
                  `<li class="project__tech-item section__card-btn">${tech}</li>`
              )
              .join('')}
          </ul>

          <div class="project__cta-wrap">
            <button id="${project.ctaId}" class="project__cta section__cta">
              <span>View Project</span>
              <i class="fas fa-arrow-right"></i>
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
