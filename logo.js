import { HideFab, ShowFab } from './fab';
import { cancelCursorAnim, setCursorData } from './utils';

export function InitLogo(lenis, isHovering) {
  const logo = document.querySelector('#logo');
  const cursorTitle = document.querySelector('.hover-cursor-content');
  const cursorBackground = document.querySelector('.hover-cursor-background');

  logo.addEventListener('click', () => {
    lenis.scrollTo(0);
    isHovering = false;
    cancelCursorAnim();
    HideFab(cursorBackground, cursorTitle);
  });
  
  logo.addEventListener('mouseenter', () => {
    if (!window.scrollY) return;
  
    setCursorData(logo);
    isHovering = true;
    setTimeout(() => {
      if (isHovering) ShowFab(cursorBackground, cursorTitle);
    }, 100);
  });
  
  logo.addEventListener('mouseleave', () => {
    isHovering = false;
    cancelCursorAnim();
    HideFab(cursorBackground, cursorTitle);
  });
}