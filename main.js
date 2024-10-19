import Logo from './assets/logo-dark.svg';
import Mail from './assets/mail.svg';
import Instagram from './assets/instagram.svg';
import Hero from './assets/hero.jpg';
import MixologyImg from './assets/mixology.png';
import MenuImg from './assets/menu.png';
import BeerImg from './assets/beer.png';
import PlusIcon from './assets/plus.svg';
import CloseIcon from './assets/close.svg';
import FloatAction from './components/floatAction';
import InitFab from './fab';
import Lenis from 'lenis';
import SplitType from 'split-type'
import { gsap } from 'gsap';

import './styles/style.scss';
import 'lenis/dist/lenis.css';
import addDelay from './addDelay';

// https://github.com/lukePeavey/SplitType

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const app = document.querySelector('#app');

app.innerHTML = `
  <div class='intro'>
    <p class='line'><span style='display: block'>Serving Phoenix, AZ</span></p>
    <h1 id='intro-title'>You provide the liquor, we’ll mix it – <span class='strong'>pro bono</span>.</h1>
    <button class='btn-primary btn-primary-large' type="button">Book us</button>
    <img src='${Hero}' class='hero-image fast-scroll' />
  </div>
  <div class='about section'>
    <p>For free? What’s the catch?</p>
    <h2 id='about-text'>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</h2>
  </div>
  <div class='services section'>
    <h3>Our services</h3>
    <div class='services-grid'>
      <div class='services-card'  data-index='0'>
        <p>
          ${FloatAction(PlusIcon)}
          Mixing a variety of traditional and modern drinks – from AMF's to pisco sours.
        </p>
        <img src='${MixologyImg}' class='services-card-img' alt='A classic highball cocktail' />
        <h4 class='strong'>Mixology</h4>
      </div>
      <div class='services-card' data-index='1'>
        <p>
          ${FloatAction(PlusIcon)}
          Curating specialty cocktails for any occasion, catered specifically to your liquor and flavor preferences.
        </p>
        <img src='${MenuImg}' class='services-card-img' alt='A group of classic cocktails standing side-to-side' />
        <h4 class='strong'>Menu creation</h4>
      </div>
      <div class='services-card' data-index='2'>
        <p>
          ${FloatAction(PlusIcon)}
          Level 1 Cicerone beer server certification, bringing a wealth of beer tasting experience.
        </p>
        <img src='${BeerImg}' class='services-card-img' alt='A crisp lager in a tall glass' />
        <h4 class='strong'>Beer sommelier</h4>
      </div>
    </div>
  </div>
  <div class='certs section'>
    <p>Certifications</p>
    <div class='certs-detail'>
      <div class='certs-detail-pivot'>
        <h4 class='strong'>Arizona Title 4 Liquor License</h4>
        <p>2023</p>
        <div class='certs-detail-pivot reversed first'>
          <h4 class='strong'>Arizona Title 4 Liquor License</h4>
          <p>2023</p>
        </div>
      </div>
      <div class='certs-detail-pivot'>
        <h4 class='strong'>ANSI Food Handler's License</h4>
        <p>2023</p>
        <div class='certs-detail-pivot reversed'>
          <h4 class='strong'>ANSI Food Handler's License</h4>
          <p>2023</p>
        </div>
      </div>
      <div class='certs-detail-pivot'>
        <h4 class='strong'>ABC Bartending and Mixology Certification</h4>
        <p>2023</p>
        <div class='certs-detail-pivot reversed'>
          <h4 class='strong'>ABC Bartending and Mixology Certification</h4>
          <p>2023</p>
        </div>
      </div>
      <div class='certs-detail-pivot'>
        <h4 class='strong'>Fine Art Bartending Certificate</h4>
        <p>2022</p>
        <div class='certs-detail-pivot reversed'>
          <h4 class='strong'>Fine Art Bartending Certificate</h4>
          <p>2022</p>
        </div>
      </div>
    </div>
  </div>
  <div class='background section'>
    <div class='background-title'>
      <h3>A little more about us</h3>
      <p>No catch, you’re just helping us get started. We provide professional mixology services free of charge. No catch, you’re just helping us get started. We provide professional mixology services free of charge.No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
    </div>
    <div class='background-details'>
      <div class='background-details-card'>
        <h4 class='strong'>1 year</h4>
        <p>Of bartending experience.</p>
      </div>
      <div class='background-details-card'>
        <h4 class='strong'>80 hours</h4>
        <p>Of mixology and bartending training.</p>
      </div>
      <div class='background-details-card'>
        <h4 class='strong'>500+ drinks</h4>
        <p>Served across different trainings.</p>
      </div>
      <div class='background-details-card'>
        <h4 class='strong'>200+ beers</h4>
        <p>Tasted and logged.</p>
      </div>
    </div>
  </div>
  <div class='section'></div>
  <div id='fab-threshold'></div>
  <nav id='nav-bar'>
    <img src="${Logo}" class='logo' alt='Bonno bartending logo' />
    <div class='btn-container'>
      <button class='btn-primary'>
        <img src="${Mail}" class='logo' alt='Bonno bartending logo' />
        hello@bonno.bar
      </button>
      <button class='btn-primary btn-primary-circle'>
        <img src="${Instagram}" class='logo' alt='Bonno bartending logo' />
      </button>
    </div>
  </nav>
  <h6 id='text-carousel'>Let's mix things up Let's mix things up Let's mix things up</h6>
  <div id='fab' class='hidden'>
    <button class='btn-primary btn-primary-fab'>
      Book Us
    </button>
  </div>
  <div class='drawer-container'>
    <div class='overlay'></div>
    <div class='drawer'>
      <h3 class='strong'>
        ${FloatAction(CloseIcon, true)}
        <span id='drawer-title'></span>
      </h3>
      <p id='drawer-body'></p>
      <div class='rect'></div>
    </div>
  </div>
`

const introTitle = new SplitType('#intro-title', { types: 'words,lines' });
const aboutText = new SplitType('#about-text', { types: 'lines' });

const fastScrollElement = document.querySelector('.fast-scroll');
const heroImage = document.querySelector('.hero-image');
const navBar = document.querySelector('#nav-bar');

const footer = document.querySelector('footer');

const drawerClose = document.querySelector('.drawer .float-action-btn');
const overlay = document.querySelector('.overlay');

InitFab();

const drawerData = [
  { 
    title: 'Mixology',
    body: 'Mixing a variety of traditional and modern drinks – from AMF\'s to pisco sours. See some of our signature drinks below:'
  },
  { 
    title: 'Menu creation',
    body: 'Curating specialty cocktails for any occasion, catered specifically to your liquor and flavor preferences. Our menus can be themed to particular holidays, celebrations, or seasons.'
  },
  { 
    title: 'Beer sommelier',
    body: 'Level 1 Cicerone certified beer server, bringing a wealth of beer tasting experience. See some of our favorites below:'
  }
]

const toggleDrawer = (open) => {
  const drawer = document.querySelector('.drawer-container');

  if (open) {
    drawer.classList.add('open');
    return lenis.stop();
  }

  drawer.classList.remove('open');
  lenis.start();
  setTimeout(() => {
    SplitType.revert('#drawer-title');
    SplitType.revert('#drawer-body');
  }, 500);
}

const servicesGrid = document.querySelector('.services-grid');
const servicesCards = Array.from(document.getElementsByClassName('services-card'));
servicesCards.forEach((card, i) => {
  card.addEventListener('mouseenter', () => servicesGrid.setAttribute('data-hovered', i));
  card.addEventListener('mouseleave', () => servicesGrid.removeAttribute('data-hovered'));

  card.addEventListener('click', () => {
    const cardIdx = card.getAttribute('data-index');
    const title = document.querySelector('#drawer-title');
    const body = document.querySelector('#drawer-body');

    title.innerHTML = drawerData[cardIdx].title;
    body.innerHTML = drawerData[cardIdx].body;
    SplitType.create('#drawer-title', { types: 'words,lines' });
    SplitType.create('#drawer-body', { types: 'words,lines' });

    addDelay('.drawer');
    toggleDrawer(true);
  });
});

drawerClose.addEventListener('click', () => {
  toggleDrawer(false);
});

overlay.addEventListener('click', () => {
  toggleDrawer(false);
});

addDelay('.intro');

app.style.marginBottom = footer.offsetHeight + 'px';

lenis.on('scroll', ({ scroll, direction }) => {
  const maxScroll = window.innerHeight;
  const scrollToHide = 50;
  const opacity = Math.max(0, 1 - scroll / maxScroll);
  const offset = scroll * .1;

  if (direction === 1 && (scroll > scrollToHide || scroll >= maxScroll)) {
    setTimeout(() => {
      navBar.classList.add('hidden');
    }, 300);
  } else {
    navBar.classList.remove('hidden');
  }

  fastScrollElement.style.transform = `translateY(-${offset}px)`;
  heroImage.style.opacity = opacity;
});

lenis.start();