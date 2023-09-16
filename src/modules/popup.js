const activatePopup = () => {
  const body = document.querySelector('.body');
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.overlay');

  popup.classList.remove('close');
  popup.classList.add('open');
  overlay.classList.add('open');
  overlay.classList.remove('close');
  body.classList.add('noscroll');

  overlay.style.zIndex = 1001;
};

const deactivatePopup = () => {
  const body = document.querySelector('.body');
  const popup = document.querySelector('.popup');
  const popupTechList = document.querySelector('.popup__languages');
  const overlay = document.querySelector('.overlay');

  popup.classList.remove('open');
  popup.classList.add('close');
  body.classList.remove('noscroll');
  overlay.classList.remove('open');
  overlay.classList.add('close');
  overlay.style.zIndex = 999;
  popupTechList.innerHTML = '';
};

const fillInPopupText = (projectsArr, button) => {
  projectsArr.forEach((project) => {
    const popup = document.querySelector('.popup');
    const popupTitle = document.querySelector('.popup__title');
    const popupDescrption = document.querySelector('.popup__description');
    const popupImage = document.querySelector('.popup__image img');
    const popupTechList = document.querySelector('.popup__languages');
    const popupSource = document.querySelector('.popup__cta-source');
    const popupLive = document.querySelector('.popup__cta-live');

    if (project.ctaId === button.id) {
      popup.style.top = `${window.scrollY}px`;

      popupTitle.textContent = project.name;

      project.description.forEach((paragraph) => {
        const popupDescriptionParagraph = document.createElement('p');
        popupDescriptionParagraph.innerHTML = paragraph;
        popupDescrption.appendChild(popupDescriptionParagraph);
      });
      // popupDescrption.textContent = project.description;
      popupSource.href = project.source;
      popupLive.href = project.live;
      project.technologies.forEach((tech) => {
        // Create an 'li' element containg an 'a' element with classes and name of technology.
        const techList = document.createElement('li');
        const techListLink = document.createElement('a');

        // Add classes and text(technology name) to 'a' element
        techListLink.className = 'popup__language section__card-btn';
        techListLink.href = project.source;
        techListLink.target = '_blank';
        techListLink.textContent = tech;

        // Add the 'li' into the 'ul' element
        techList.appendChild(techListLink);
        popupTechList.appendChild(techList);
      });

      popupImage.src = project.image;
    }
  });
};

const clearPopupText = () => {
  document.querySelector('.popup__title').textContent = '';
  document.querySelector('.popup__description').textContent = '';
  document.querySelector('.popup__image img').src = '';
  document.querySelector('.popup__languages').innerHTML = '';
  document.querySelector('.popup__cta-source').href = '';
  document.querySelector('.popup__cta-live').href = '';
};

// eslint-disable-next-line object-curly-newline
export { activatePopup, deactivatePopup, fillInPopupText, clearPopupText };
