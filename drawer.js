import gsap from 'gsap';
import SplitType from 'split-type';
import { HideFab } from './fab';

export function toggleDrawer(open, lenis) {
  const drawer = document.querySelector('.drawer-container');
  const drawerInner = document.querySelector('.drawer');
  const drawerImgs = document.querySelector('.drawer-images');
  const cursorTitle = document.querySelector('.hover-cursor-content');
  const cursorBackground = document.querySelector('.hover-cursor-background');

  if (open) {
    drawerImgs.scrollTo(0, 0);
    drawer.classList.add('open');
    HideFab(cursorBackground, cursorTitle);
    gsap.to(drawerInner, {
      duration: 0.8,
      ease: 'expo.out',
      y: 0
    });
    gsap.to(drawerImgs, {
      duration: 0.8,
      delay: 0.9,
      ease: 'expo.out',
      opacity: 1,
      y: 0
    });
    return lenis.stop();
  }

  drawer.classList.remove('open');
  gsap.to(drawerInner, {
    duration: 0.9,
    ease: 'expo.out',
    y: '100%'
  });
  gsap.to(drawerImgs, {
    duration: 0.5,
    ease: 'expo.out',
    opacity: 0,
    y: '2%'
  });
  lenis.start();
  setTimeout(() => {
    SplitType.revert('#drawer-title');
    SplitType.revert('#drawer-body');
  }, 500);
}