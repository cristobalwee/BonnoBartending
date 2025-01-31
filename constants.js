import EyeIcon from './assets/eye.svg';
import ArrowDownIcon from './assets/arrow-down.svg';
import ArrowUpIcon from './assets/arrow-up.svg';
import PearMule from './assets/pear_mule.jpg';
import Equilibrium from './assets/equilibrium.webp';
import Rye from './assets/rye_on_rye.webp';
import Bernardus from './assets/st_bernardus.jpg';
import Smoothie from './assets/triple_smoothie.webp';
import Esses from './assets/tiny_esses.webp';
import Jacobs from './assets/uncle_jacobs.png';

export const drawerData = [
  { 
    title: 'Mixology',
    body: 'Mixing a variety of traditional and modern drinks – from AMF\'s to pisco sours. See some of our signature drinks below:',
    tags: ['Tequila', 'Mezcal', 'Bourbon'],
    data: [
      { name: 'Pear Moscow Mule', img: PearMule },
      { name: 'Pisco Sour', img: PearMule },
      { name: 'Pennicilin', img: PearMule }
    ]
  },
  { 
    title: 'Menu creation',
    body: 'Curating specialty cocktails for any occasion, catered specifically to your liquor and flavor preferences. Our menus can be themed to particular holidays, celebrations, or seasons.',
    tags: ['Holidays', 'Birthdays', 'Seasonal'],
    data: [
      { name: 'Pear Moscow Mule', img: PearMule },
      { name: 'Pisco Sour', img: PearMule },
      { name: 'Pennicilin', img: PearMule }
    ]
  },
  { 
    title: 'Beer sommelier',
    body: 'Level 1 Cicerone certified beer server, bringing a wealth of beer tasting experience. See some of our favorites below:',
    tags: ['Belgian Ales', 'IPAs', 'Sours'],
    data: [
      { name: 'St. Bernardus – Abt 12', img: Bernardus },
      { name: 'Boulevard – Rye on Rye on Rye', img: Rye },
      { name: 'Equilibrium – Space Station Dream Lab', img: Equilibrium },
      { name: 'Praire – Tiny Esses', img: Esses },
      { name: 'Energy City – Triple Berry Smoothie', img: Smoothie },
      { name: 'Avery – Uncle Jacob\'s Stout', img: Jacobs }
    ]
  }
];

export const cursorData = {
  see_more: {
    title: 'See more',
    icon: EyeIcon
  },
  view: {
    title: 'View',
    external: true
  },
  top: {
    title: 'Back to top',
    icon: ArrowUpIcon
  },
  click: {
    title: 'See next',
    icon: ArrowDownIcon
  },
  scroll: {
    title: 'Scroll down',
    icon: ArrowDownIcon
  }
};

export const LOAD_TIME = 4500;
export const elasticEase = 'elastic(1, 0.9)';
export const CAROUSEL_STEP = window.innerWidth < 1200 ? 264 : 420;