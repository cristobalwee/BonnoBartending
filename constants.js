import EyeIcon from './assets/eye.svg';
import ArrowIcon from './assets/arrow-down.svg';

export const drawerData = [
  { 
    title: 'Mixology',
    body: 'Mixing a variety of traditional and modern drinks – from AMF\'s to pisco sours. See some of our signature drinks below:',
    tags: ['Tequila', 'Mezcal', 'Bourbon']
  },
  { 
    title: 'Menu creation',
    body: 'Curating specialty cocktails for any occasion, catered specifically to your liquor and flavor preferences. Our menus can be themed to particular holidays, celebrations, or seasons.',
    tags: ['Holidays', 'Birthdays', 'Seasonal']
  },
  { 
    title: 'Beer sommelier',
    body: 'Level 1 Cicerone certified beer server, bringing a wealth of beer tasting experience. See some of our favorites below:',
    tags: ['Belgian Ales', 'IPAs', 'Sours']
  }
];

export const cursorData = {
  see_more: {
    title: 'See more',
    icon: EyeIcon
  },
  view: {
    title: 'View',
    icon: EyeIcon
  },
  top: {
    title: 'Back to top',
    icon: ArrowIcon
  },
  click: {
    title: 'See next',
    icon: ArrowIcon
  },
  scroll: {
    title: 'Scroll down',
    icon: ArrowIcon
  }
};

export const LOAD_TIME = 4500;
export const elasticEase = 'elastic(1, 0.9)';
export const CAROUSEL_STEP = window.innerWidth < 1200 ? 254 : 420;