import EyeIcon from './assets/eye.svg';
import ArrowDownIcon from './assets/arrow-down.svg';
import ArrowUpIcon from './assets/arrow-up.svg';
import PauseIcon from './assets/pause.svg';
import PlayIcon from './assets/play.svg';
import OldFashioned from './assets/old-fashioned.jpg';
import Manhattan from './assets/manhattan.jpg';
import Negroni from './assets/mezcal-negroni.jpg';
import Penicillin from './assets/penicillin.jpg';
import Pisco from './assets/pisco-sour.jpg';
import Equilibrium from './assets/equilibrium.webp';
import Rye from './assets/rye_on_rye.webp';
import Bernardus from './assets/st_bernardus.jpg';
import Smoothie from './assets/triple_smoothie.webp';
import Esses from './assets/tiny_esses.webp';
import Jacobs from './assets/uncle_jacobs.png';
import ClassicMenu from './assets/classics-menu.png';
import FavoriteMenu from './assets/favorites-menu.png';
import SweetMenu from './assets/sweet-menu.png';
import ShotMenu from './assets/shots-menu.png';

export const drawerData = [
  { 
    title: 'Mixology',
    body: 'Mixing a variety of traditional and modern drinks – from AMF\'s to pisco sours. See some of our signature drinks below:',
    tags: ['Tequila', 'Mezcal', 'Bourbon'],
    data: [
      { name: 'Mezcal Negroni', img: Negroni },
      { name: 'Pisco Sour', img: Pisco },
      { name: 'Classic Manhattan', img: Manhattan },
      { name: 'Pennicilin', img: Penicillin },
      { name: 'Old Fashioned', img: OldFashioned }
    ],
    entryClass: 'drawer-images-entry'
  },
  { 
    title: 'Menu creation',
    body: 'Curating specialty cocktails for any occasion, catered specifically to your liquor and flavor preferences. Our menus can be themed to particular holidays, celebrations, or seasons.',
    tags: ['Holidays', 'Birthdays', 'Seasonal'],
    data: [
      { name: 'Speakeasy Classics', img: ClassicMenu },
      { name: 'Bonno Favorites', img: FavoriteMenu },
      { name: 'Sweet Creations', img: SweetMenu },
      { name: 'Shots Menu', img: ShotMenu }
    ],
    entryClass: 'drawer-images-entry menus'
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
    ],
    entryClass: 'drawer-images-entry'
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
  pause: {
    title: 'Pause',
    icon: PauseIcon
  },
  play: {
    title: 'Play',
    icon: PlayIcon
  },
  scroll: {
    title: 'Scroll down',
    icon: ArrowDownIcon
  }
};

export const LOAD_TIME = 4500;
export const elasticEase = 'elastic(1, 0.9)';
export const CAROUSEL_STEP = 420;
export const CAROUSEL_STEP_MOBILE = 274;
export const playContent = `<img src="${PlayIcon}" alt='Play card carousel' /> Play`;
export const pauseContent = `<img src="${PauseIcon}" alt='Pause card carousel' /> Pause`;