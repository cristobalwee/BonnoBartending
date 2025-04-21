import { gsap } from 'gsap';
import SplitType from 'split-type'
import { cursorData } from './constants';

export function addDelay(query) {
  const container = document.querySelector(query);
  const lines = container.querySelectorAll('.line');

  lines.forEach((child, i) => {
    child.classList.add(`delay-${i}`);
  });
};

export function cancelCursorAnim() {
  gsap.killTweensOf('.hover-cursor-content');
  gsap.killTweensOf('.hover-cursor-background');
};

export function splitAndAnimate() {
  SplitType.revert('#intro-title');
  SplitType.revert('#about-text');

  SplitType.create('#intro-title', { types: 'words,lines' });
  SplitType.create('#about-text', { types: 'words,lines' });

  addDelay('.intro');
  addDelay('.about');

  gsap.set('.floating-cursor',{ x: 0, y: 0 });
};

export function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
  });
};

export function detectSwipe(el, callback) {
  let touchstartX = 0;
  let touchendX = 0;

  el.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
  });

  el.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    const xDiff = touchstartX - touchendX;

    if (xDiff < 0) {
      callback(1);
    } else {
      callback(-1);
    }
  });
};

export function setCursorData(elem) {
  const attr = elem.getAttribute('data-cursor');
  const title = document.querySelector('#hover-cursor-title');
  const icon = document.querySelector('#hover-cursor-icon');
  const ext = document.querySelector('#hover-cursor-ext');
  const { title: titleData, icon: iconData, external = false } = cursorData[attr];

  title.innerHTML = titleData;
  if (external) {
    ext.style.display = 'block';
    icon.style.display = 'none';
  } else {
    ext.style.display = 'none';
    icon.style.display = 'block';
    icon.src = iconData;
  }
};