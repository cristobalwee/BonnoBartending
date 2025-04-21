import SplitType from 'split-type';
import { HideFab, ShowFab } from './fab';
import { addDelay, cancelCursorAnim, setCursorData } from './utils';
import { toggleDrawer } from './drawer';
import { drawerData } from './constants';

function preloadService(card) {
  const cardIdx = card.getAttribute('data-index');
  const title = document.querySelector('#drawer-title');
  const body = document.querySelector('#drawer-body');
  const tags = document.querySelector('.tag-row');
  const images = document.querySelector('.drawer-images');

  const { title: titleData, body: bodyData, tags: tagData, data: imageData, entryClass } = drawerData[cardIdx];
  let tagGroup = '';
  let imageGroup = '';

  if (title.innerHTML === titleData) return;

  tagData.forEach(tag => {
    tagGroup += `<div class='tag'>${tag}</div>`;
  });
  imageData.forEach(image => {
    const { name, img } = image;
    imageGroup += `
      <div class='${entryClass}'>
        <img src=${img} />
        <p>${name}</p>
      </div>
    `;
  });

  title.innerHTML = titleData;
  body.innerHTML = bodyData;
  tags.innerHTML = tagGroup;
  images.innerHTML = imageGroup;
};

export function InitServiceCards(lenis, isHovering) {
  const servicesGrid = document.querySelector('.services-grid');
  const servicesCards = Array.from(document.getElementsByClassName('services-card'));
  const cursorTitle = document.querySelector('.hover-cursor-content');
  const cursorBackground = document.querySelector('.hover-cursor-background');

  servicesCards.forEach((card, i) => {
    const plusBtn = card.querySelector('.float-action-btn');
  
    card.addEventListener('mouseenter', () => {
      setCursorData(card);
      servicesGrid.setAttribute('data-hovered', i);
  
      isHovering = true;
      setTimeout(() => {
        if (isHovering) ShowFab(cursorBackground, cursorTitle);
      }, 100);
  
      preloadService(card);
    });
  
    card.addEventListener('mouseleave', () => {
      servicesGrid.removeAttribute('data-hovered');
      isHovering = false;
      cancelCursorAnim();
      HideFab(cursorBackground, cursorTitle);
    });
  
    plusBtn.addEventListener('focus', () => {
      servicesGrid.setAttribute('data-hovered', i);
      preloadService(card)
    });
  
    plusBtn.addEventListener('blur', () => {
      servicesGrid.removeAttribute('data-hovered');
    });
  
    card.addEventListener('click', () => {
      SplitType.create('#drawer-title', { types: 'words,lines' });
      SplitType.create('#drawer-body', { types: 'words,lines' });
      addDelay('.drawer');
      toggleDrawer(true, lenis);
    });
  });
}