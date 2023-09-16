import data from './projectData.js';

const renderProjects = () => {
  const projects = data.slice(0, 4);
  const projectCards = document.querySelectorAll('.project__card');

  projectCards.forEach((card, index) => {
    // Create a new image element and its conainer
    const imageWrap = document.createElement('div');
    imageWrap.className = 'project__card-image';

    const image = document.createElement('img');
    image.src = projects[index].image;
    image.alt = projects[index].name;
    imageWrap.appendChild(image);

    // Create a new content container
    const content = document.createElement('div');
    content.className = 'project__card-content';

    // Create content elements
    const title = document.createElement('h3');
    title.className = 'project__card-title section__card-title';
    title.textContent = projects[index].name;

    const techList = document.createElement('ul');
    techList.className = 'project__card-tech section__card-btns';

    projects[index].technologies.slice(0, 3).forEach((tech) => {
      const techItem = document.createElement('li');
      techItem.className = 'project__tech-item section__card-btn';
      techItem.textContent = tech;
      techList.appendChild(techItem);
    });

    const ctaWrap = document.createElement('div');
    ctaWrap.className = 'project__card-cta-wrap';

    const cta = document.createElement('button');
    cta.id = projects[index].ctaId;
    cta.className = 'project__cta section__cta';

    const ctaText = document.createElement('span');
    ctaText.textContent = 'View project';

    const ctaIcon = document.createElement('i');
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

export default renderProjects;
