import Logo from './assets/logo-dark.svg';
import Mail from './assets/mail.svg';
import CheckmarkLarge from './assets/checkmark-large.svg';
import Hero from './assets/hero.jpg';
import MixologyImg from './assets/mixology.png';
import MenuImg from './assets/menu.png';
import BeerImg from './assets/beer.png';
import PlusIcon from './assets/plus.svg';
import EyeIcon from './assets/eye.svg';
import PauseIcon from './assets/pause.svg';
import ArrowExt from './assets/arrow-ext.svg';
import OldFashioned from './assets/old_fashioned.png';
import French from './assets/french_75.png';
import Negroni from './assets/negroni.png';
import Lenis from 'lenis';
import { gsap } from 'gsap';

import './styles/style.scss';
import 'lenis/dist/lenis.css';
import { cancelCursorAnim, loadImage, setCursorData, splitAndAnimate } from './utils';
import InitSectionObservers from './sectionObservers';
import InitCursor from './cursor';
import InitLoader from './loader';
import LandingTimeline from './landingTimeline';
import { ShowFab, HideFab } from './fab';
import backgroundCard from './components/backgroundCard';
import { toggleModal } from './modal';
import { toggleDrawer } from './drawer';
import { InitServiceCards } from './services';
import { InitLogo } from './logo';
import { moveCarousel } from './carousel';
import { pauseContent, playContent } from './constants';

const lenis = new Lenis({
  direction: 'vertical',
  smooth: true,
  smoothTouch: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);
lenis.scrollTo(0);
requestAnimationFrame(raf);

const app = document.querySelector('#app');
const CloseIconURL = new URL('./assets/close.svg', import.meta.url).href;

app.innerHTML = `
  <div class='intro'>
    <p class='line'><span class='word' style='display: block'>Serving Phoenix, AZ</span></p>
    <h1 id='intro-title'>You provide the liquor, we’ll mix it – <span class='strong word'>pro bono</span>.</h1>
    <button class='btn-primary btn-primary-large modal-btn line' type="button">
      <div class='floating-cursor'></div>
      <div class='modal-trigger'></div>
      <div class='btn-primary-background word'></div>
      <span class='word'>Book us</span>
    </button>
    <img src='${Hero}' height='866' width='1425' class='hero-image fast-scroll line has-overflow' alt='Hero image; a well-dressed bartender mixing a cocktail' />
  </div>
  <div class='about section'>
    <p class='line'><span class='word' style='display: block'>For free? What’s the catch?</span></p>
    <h2 id='about-text'>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</h2>
  </div>
  <div class='services section'>
    <h3 class='line'><span class='word' style='display: block'>Our services</span></h3>
    <div class='services-grid'>
      <div class='services-card' data-index='0' data-cursor='see_more'>
        <p>
          <span class='float-action' tabindex='-1'>
            <button class='float-action-btn' aria-label='See more'>
              <img src='${PlusIcon}' alt='Plus icon' />
            </button>
          </span>
          Mixing a variety of traditional and modern drinks – from AMF's to pisco sours.
        </p>
        <img height='346' width='484' src='${MixologyImg}' class='services-card-img' alt='A classic highball cocktail' />
        <h4 class='strong'>Mixology</h4>
      </div>
      <div class='services-card' data-index='1' data-cursor='see_more'>
        <p>
          <span class='float-action' tabindex='-1'>
            <button class='float-action-btn' aria-label='See more'>
              <img src='${PlusIcon}' alt='Plus icon' />
            </button>
          </span>
          Curating specialty cocktails for any occasion, catered specifically to your liquor and flavor preferences.
        </p>
        <img height='346' width='484' src='${MenuImg}' class='services-card-img' alt='A group of classic cocktails standing side-to-side' />
        <h4 class='strong'>Menu creation</h4>
      </div>
      <div class='services-card' data-index='2' data-cursor='see_more'>
        <p>
          <span class='float-action' tabindex='-1'>
            <button class='float-action-btn' aria-label='See more'>
              <img src='${PlusIcon}' alt='Plus icon' />
            </button>
          </span>
          Level 1 Cicerone beer server certification, bringing a wealth of beer tasting experience.
        </p>
        <img height='346' width='484' src='${BeerImg}' class='services-card-img' alt='A crisp lager in a tall glass' />
        <h4 class='strong'>Beer sommelier</h4>
      </div>
    </div>
  </div>
  <div class='certs section'>
    <p>Certifications</p>
    <div class='certs-detail'>
      <a href='https://www.dropbox.com/scl/fi/0idtzorox8nn9nt4zh0o3/title4.pdf?rlkey=3ht75c4v7wt01ejv4wazvhzbg&st=tf70ucnl&dl=0' target='_blank rel='noopener noreferrer'>
        <div class='certs-detail-pivot' data-cursor='view'>
          <h4 class='strong'>Arizona Title 4 Liquor License</h4>
          <p>2023</p>
        </div>
      </a>
      <a href='https://www.dropbox.com/scl/fi/env8s6traikbzhejjp8xo/fhc-cert-814701.png?rlkey=vvto5xu1a5p1c3wq59alcl8d9&st=y4hjfyq6&dl=0' target='_blank rel='noopener noreferrer'>
        <div class='certs-detail-pivot' data-cursor='view'>
          <h4 class='strong'>ANSI Food Handler's License</h4>
          <p>2023</p>
        </div>
      </a>
      <a href='https://www.dropbox.com/scl/fi/56ys5pwxpx27qsmp48p1w/ABC-Official-Bar-Certificate.pdf?rlkey=w41urdszxeq0vg1l3daeu4xm2&st=6m1oeq7l&dl=0' target='_blank rel='noopener noreferrer'>
        <div class='certs-detail-pivot' data-cursor='view'>
          <h4 class='strong'>ABC Bartending and Mixology Certification</h4>
          <p>2023</p>
        </div>
      </a>
      <a href='https://www.dropbox.com/scl/fi/56ys5pwxpx27qsmp48p1w/ABC-Official-Bar-Certificate.pdf?rlkey=w41urdszxeq0vg1l3daeu4xm2&st=6m1oeq7l&dl=0' target='_blank rel='noopener noreferrer'>
        <div class='certs-detail-pivot' data-cursor='view'>
          <h4 class='strong'>Fine Art Bartending Certificate</h4>
          <p>2022</p>
        </div>
      </a>
    </div>
  </div>
  <div class='background section'>
    <div class='background-title'>
      <h3 id='background-headline'>A little more about us</h3>
      <p id='background-body'>
        Bonno Bartending was founded by Cris Grana in 2024, primarily as a means to get some exercise and experience in mixology, and secondarily for a bit of good fun.
        Though we do not have decades of industry experience, we strive to provide as professional and enjoyable a service as you can get, free of charge. Our main service
        area is about a 30 mile radius from midtown Phoenix.
      </p>
    </div>
    <div class='background-details' tabindex='0' data-cursor='pause'>
      <div class='background-details-inner'>
        ${backgroundCard('1 year', 'Of bartending experience.', -4)}
        ${backgroundCard('80 hours', 'Of mixology and bartending training.', -3)}
        ${backgroundCard('500+ drinks', 'Served across different trainings.', -2)}
        ${backgroundCard('200+ beers', 'Tasted and logged.', -1)}
        ${backgroundCard('1 year', 'Of bartending experience.', 0)}
        ${backgroundCard('80 hours', 'Of mixology and bartending training.', 1)}
        ${backgroundCard('500+ drinks', 'Served across different trainings.', 2)}
        ${backgroundCard('200+ beers', 'Tasted and logged.', 3)}
        ${backgroundCard('1 year', 'Of bartending experience.', 4)}
      </div>
    </div>
    <button id='pause-carousel'><img src="${PauseIcon}" alt='Pause card carousel' /> Pause</button>
    <span style='display: none;' id='carousel-play' data-cursor='play'></span>
  </div>
  <div class='section'></div>
  <nav id='nav-bar' class='hidden'>
    <img width='84' height='84' src="${Logo}" id='logo' class='logo' alt='Bonno bartending logo' data-cursor='top' />
    <div class='btn-container'>
      <a href='mailto:hello@bonnobartending.com' target='_blank' rel='noopener noreferrer'>
        <button class='btn-primary mobile-hide'>
          <div class='floating-cursor'></div>
          <div class='btn-primary-background'></div>
          <span>hello@bonno.bar</span>
        </button>
      </a>
      <a href='mailto:hello@bonnobartending.com' target='_blank' rel='noopener noreferrer'>
        <button class='btn-primary btn-primary-circle desktop-hide'>
          <div class='btn-primary-background'></div>
          <img src="${Mail}" class='logo' alt='Email icon' />
        </button>
      </a>
    </div>
  </nav>
  <div id='fab'>
    <button class='btn-primary btn-primary-fab modal-btn'>
      <div class='floating-cursor'></div>
      <div class='modal-trigger'></div>
      <div class='btn-primary-background'></div>
      <span>Book Us</span>
    </button>
  </div>
  <div class='hover-cursor'>
    <div class='hover-cursor-background'></div>
    <div class='hover-cursor-content'>
      <img width='20' height='20' id='hover-cursor-icon' src='${EyeIcon}' alt='See more' />
      <p id='hover-cursor-title'>See more</p>
      <img width='20' height='20' id='hover-cursor-ext' src='${ArrowExt}' alt='View' />
    </div>
  </div>
  <div class='loader'>
    <div class='loader-inner'>
      <img width='118' height='118' draggable='false' src="${Logo}" class='loader-inner-logo' alt='Bonno bartending logo' />
      <div class='loader-card'>
        <img width='26' height='26' draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
        <img width='190' height='190' draggable='false' src="${Negroni}" class='loader-card-drink' alt='Negroni' />
        <h4 class='strong'>Negroni</h4>
        <img width='26' height='26' draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
      </div>
      <div class='loader-card'>
        <img width='26' height='26' draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
        <img width='190' height='190' draggable='false' src="${OldFashioned}" class='loader-card-drink' alt='Old fashioned' />
        <h4 class='strong'>Old Fashioned</h4>
        <img width='26' height='26' draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
      </div>
      <div class='loader-card'>
        <img width='26' height='26' draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
        <img width='190' height='190' draggable='false' src="${French}" class='loader-card-drink' alt='French 75' />
        <h4 class='strong'>French 75</h4>
        <img width='26' height='26' draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
      </div>
    </div>
  </div>
  <div class='drawer-container'>
    <div class='overlay'></div>
    <div class='drawer' data-lenis-prevent="true" tabindex='-1' role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      <div class='drawer-content'>
        <h3 class='strong' name='drawer-title'>
          <span id='drawer-title'>Default title</span>
          <span class='float-action${window.innerWidth > 992 ? ' large' : ''}' tabindex='-1'>
            <button class='float-action-btn' aria-label='Close'>
              <img src='${CloseIconURL}' alt='Close icon' />
            </button>
          </span>
        </h3>
        <p id='drawer-body'>Default description. We recommend Monty Python and the Holy Grail for some light-humoured dummy text. Get ready for plenty of religious references that fail to make sense – Monty Python fans know what we mean.</p>
        <div class='tag-row'></div>
      </div>
      <div class='drawer-images'>
        <div class='rect'></div>
        <div class='rect'></div>
        <div class='rect'></div>
      </div>
    </div>
  </div>
  <div class='modal'>
    <div class='overlay modal-overlay'></div>
    <div class='modal-body' data-lenis-prevent="true" tabindex='-1' role="dialog" aria-modal="true" aria-labelledby="book-title">
      <h3 class='strong' name='book-title'>
        <span id='modal-title'>Book Us</span>
        <span class='float-action${window.innerWidth > 992 ? ' large' : ''}' tabindex='-1'>
            <button class='float-action-btn' aria-label='Close'>
              <img src='${CloseIconURL}' alt='Close icon' />
            </button>
          </span>
      </h3>
      <p id='modal-description'>Tell us a bit more about yourself and the event you're hosting. Note: our availability is limited and we grant our services on a first come first served basis, so we cannot always guarantee a reservation.</p>
      <form id='booking-form' class='event-form'>
        <div class='event-form-row'>
          <div class='event-form-row-item'>
            <label for='name'>Your name <span class='required'>*</span></label>
            <input type='text' name='name' required/>
          </div>
          <div class='event-form-row-item'>
            <label for='email'>Your email <span class='required'>*</span></label>
            <input type='email' name='email' required/>
          </div>
        </div>
        <div class='event-form-row'>
          <div class='event-form-row-item'>
            <label for='quantity'>Number of guests (max 12) <span class='required'>*</span></label>
            <input type='number' name='quantity' min='1' max='12' required/>
          </div>
          <div class='event-form-row-item'>
            <label for='event-date'>Preferred event date <span class='required'>*</span></label>
            <input type='date' id="datePicker" name='event-date' required/>
          </div>
        </div>
        <button id='submit-booking' type='submit' class='btn-primary btn-primary-fab'>
          <div class='btn-primary-background'></div>
          <span>Request</span>
        </button>
      </form>
      <div class='modal-on-submit'>
        <img src='${CheckmarkLarge}' />
        <h3>Request submitted!</h3>
        <p>Your submission was successful, we'll try to get back to you as soon as we can. If you don't receive </p>
        <button id='modal-submit-confirm' class='btn-primary btn-primary-fab'>
          <div class='btn-primary-background'></div>
          <span>Got it</span>
        </button>
      </div>
    </div>
  </div>
`;

const fastScrollElement = document.querySelector('.fast-scroll');
const heroImage = document.querySelector('.hero-image');
const navBar = document.querySelector('#nav-bar');
const springEase = 'expo.out';

const footer = document.querySelector('footer');
const logoLoader = document.querySelector('.loader-inner-logo');

const drawerClose = document.querySelector('.drawer .float-action-btn');
const modalClose = document.querySelector('.modal .float-action-btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalForm = document.querySelector('#booking-form');
const modalSubmitConfirm = document.querySelector('#modal-submit-confirm');

const fabContainer = document.querySelector('#fab');
const fab = fabContainer.querySelector('.btn-primary-fab');
const fabBackground = fab.querySelector('.btn-primary-background');
const fabTitle = fab.querySelector('span');

const datePicker = document.getElementById("datePicker");
const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);
datePicker.value = formattedDate;

const cursorTitle = document.querySelector('.hover-cursor-content');
const cursorBackground = document.querySelector('.hover-cursor-background');

let isHovering = false;
let modalTrigger;

loadImage(Logo).then(() => {
  logoLoader.classList.add('visible');
});

document.fonts.ready.then(() => {
  setTimeout(() => {
    InitLoader(springEase);
    splitAndAnimate();
    LandingTimeline(lenis);
  }, 800);
});

const certsPivots = Array.from(document.getElementsByClassName('certs-detail-pivot'));
certsPivots.forEach(cert => {
  cert.addEventListener('mouseenter', () => {
    setCursorData(cert);
    isHovering = true;
    setTimeout(() => {
      if (isHovering) ShowFab(cursorBackground, cursorTitle);
    }, 100);
  });

  cert.addEventListener('mouseleave', () => {
    isHovering = false;
    cancelCursorAnim();
    HideFab(cursorBackground, cursorTitle);
  });
});

const backgroundDetails = document.querySelector('.background-details');
const carouselPause = document.querySelector('#pause-carousel');
const carousel = document.querySelector('.background-details-inner');

let carouselIsAnimating = false;
let hasSetCarousel = false;
let animationFrameId = null;
let lastTime = null;
const interval = 3000;

const animateCarousel = (time) => {
  if (!lastTime) lastTime = time;

  const delta = time - lastTime;

  if (delta >= interval) {
    moveCarousel();
    lastTime = time;
  }

  animationFrameId = requestAnimationFrame(animateCarousel);
};

const startCarousel = () => {
  carouselIsAnimating = true;
  lastTime = null;
  requestAnimationFrame(animateCarousel);
}

const setCarousel = () => {
  if (carouselIsAnimating) {
    carouselIsAnimating = false;
    cancelAnimationFrame(animationFrameId);
    lastTime = null;
    return;
  }

  startCarousel();
};

const InitCarousel = () => {
  if (carouselIsAnimating || hasSetCarousel) return;

  startCarousel();
}

const setHoverAndCarousel = (dir, dataElem) => {
  if (carouselIsAnimating) {
    dataElem.setAttribute('data-cursor', 'pause');
  } else {
    dataElem.setAttribute('data-cursor', 'play');
  }

  if (dir) {
    setCursorData(dataElem);
    isHovering = true;
    setTimeout(() => {
      if (isHovering) ShowFab(cursorBackground, cursorTitle);
    }, 100);
    return;
  }

  isHovering = false;
  cancelCursorAnim();
  HideFab(cursorBackground, cursorTitle);
}

backgroundDetails.addEventListener('click', () => {
  if (carouselIsAnimating) {
    backgroundDetails.setAttribute('data-cursor', 'play');
    carouselPause.innerHTML = playContent;
    setCursorData(document.querySelector('#carousel-play'));
  } else {
    backgroundDetails.setAttribute('data-cursor', 'pause');
    carouselPause.innerHTML = pauseContent;
    setCursorData(backgroundDetails);
  }

  setCarousel();
});

backgroundDetails.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') setCarousel();
});

backgroundDetails.addEventListener('mouseenter', () => setHoverAndCarousel(1, backgroundDetails));

backgroundDetails.addEventListener('mouseleave', () => setHoverAndCarousel(0, backgroundDetails));

carouselPause.addEventListener('click', () => {
  if (carouselIsAnimating) {
    carouselPause.innerHTML = playContent;
  } else {
    carouselPause.innerHTML = pauseContent;
  }

  setCarousel();
});

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.classList.add('submit');
  emailjs.sendForm('service_qutbfzg', 'template_7dq07vi', '#booking-form').then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
})

drawerClose.addEventListener('click', () => {
  toggleDrawer(false, lenis);
});

modalClose.addEventListener('click', () => {
  toggleModal(modalTrigger.querySelector('.modal-trigger'), false, () => lenis.start());
});

modalSubmitConfirm.addEventListener('click', () => {
  toggleModal(modalTrigger.querySelector('.modal-trigger'), false, () => lenis.start());
});

overlay.addEventListener('click', () => {
  toggleDrawer(false, lenis);
});

modalOverlay.addEventListener('click', () => {
  toggleModal(modalTrigger.querySelector('.modal-trigger'), false, () => lenis.start());
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modal = document.querySelector('.modal');
    const drawer = document.querySelector('.drawer-container');

    if (modal && modal.classList.contains('open')) { 
      toggleModal(modalTrigger.querySelector('.modal-trigger'), false, () => lenis.start());
    }

    if (drawer && drawer.classList.contains('open')) { 
      toggleDrawer(false, lenis);
    }
  }
});

const primaryBtns = Array.from(document.getElementsByClassName('modal-btn'));
primaryBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modalTrigger = btn;
    toggleModal(btn, true, () => lenis.stop());
  });
});

let lastWidth = window.innerWidth;
let resizeTimeout;
window.addEventListener('resize', () => {
  if (window.innerWidth !== lastWidth) {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      splitAndAnimate();
    }, 300);

    gsap.set('.floating-cursor', { x: 0, y: 0 });

    if (
      (window.innerWidth < 1200 && lastWidth >= 1200) || 
      (window.innerWidth >= 1200 && lastWidth < 1200)
    ) {
      gsap.set(carousel, { x: 0, y: 0 });
    }
  }
});

InitSectionObservers('.about', window.innerWidth > 992 ? 0.6 : 0.2);
InitSectionObservers('.services', window.innerWidth > 992 ? 0.6 : 0.2);
InitSectionObservers('.background', 0.4, InitCarousel);
InitServiceCards(lenis, isHovering);
InitLogo(lenis, isHovering);
InitCursor();

app.style.marginBottom = footer.offsetHeight + 'px';

lenis.on('scroll', ({ scroll, direction, limit}) => {
  const maxScroll = window.innerHeight;
  const scrollToHide = 50;
  const opacity = Math.max(0, 1 - (scroll * 0.5) / maxScroll);
  const offset = scroll * .1;

  if (scroll > (maxScroll / 2) && scroll < limit - footer.offsetHeight) {
    gsap.to(fab, { pointerEvents: 'auto', duration: 0.1, delay: 0 });
    ShowFab(fabBackground, fabTitle);
  } else {
    HideFab(fabBackground, fabTitle);
    gsap.to(fab, { pointerEvents: 'none', duration: 0.1, delay: 0.6 });
  }

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