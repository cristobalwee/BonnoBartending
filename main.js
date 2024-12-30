import Logo from './assets/logo-dark.svg';
import Mail from './assets/mail.svg';
import Instagram from './assets/instagram.svg';
import Hero from './assets/hero.jpg';
import MixologyImg from './assets/mixology.png';
import MenuImg from './assets/menu.png';
import BeerImg from './assets/beer.png';
import PlusIcon from './assets/plus.svg';
import CloseIcon from './assets/close.svg';
import EyeIcon from './assets/eye.svg';
import OldFashioned from './assets/old_fashioned.png';
import French from './assets/french_75.png';
import Negroni from './assets/negroni.png';
import FloatAction from './components/floatAction';
import Lenis from 'lenis';
import SplitType from 'split-type'
import { gsap } from 'gsap';
import { Flip } from "gsap/Flip";

import './styles/style.scss';
import 'lenis/dist/lenis.css';
import addDelay from './addDelay';
import InitSectionObservers from './sectionObservers';
import InitCursor from './cursor';
import InitLoader from './loader';
import { drawerData, cursorData, CAROUSEL_STEP } from './constants';
import LandingTimeline from './landingTimeline';
import { ShowFab, HideFab } from './fab';
import backgroundCard from './components/backgroundCard';

// https://github.com/lukePeavey/SplitType
// https://codepen.io/rassohilber/pen/vYomWOp
// https://easings.co/
// https://codepen.io/collection/nqvwmG?cursor=eyJwYWdlIjoyfQ==
// https://codepen.io/GreenSock/pen/ExLqENR
// https://www.emailjs.com/docs/
// https://wwilsman.github.io/Datepicker.js/
// https://thehelpfultipper.com/build-an-amazing-custom-datepicker/
// https://github.com/gdkraus/accessible-modal-dialog/blob/master/modal-window.js
// https://github.com/medialize/ally.js/blob/master/src/maintain/tab-focus.js

gsap.registerPlugin(Flip);
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

app.innerHTML = `
  <div class='intro'>
    <p class='line'><span class='word' style='display: block'>Serving Phoenix, AZ</span></p>
    <h1 id='intro-title'>You provide the liquor, we’ll mix it – <span class='strong word'>pro bono</span>.</h1>
    <button class='btn-primary btn-primary-large modal-btn line' type="button">
      <div class='floating-cursor'></div>
      <div class='btn-primary-background word'></div>
      <span class='word'>Book us</span>
    </button>
    <img src='${Hero}' class='hero-image fast-scroll line has-overflow' />
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
          ${FloatAction(PlusIcon)}
          Mixing a variety of traditional and modern drinks – from AMF's to pisco sours.
        </p>
        <img src='${MixologyImg}' class='services-card-img' alt='A classic highball cocktail' />
        <h4 class='strong'>Mixology</h4>
      </div>
      <div class='services-card' data-index='1' data-cursor='see_more'>
        <p>
          ${FloatAction(PlusIcon)}
          Curating specialty cocktails for any occasion, catered specifically to your liquor and flavor preferences.
        </p>
        <img src='${MenuImg}' class='services-card-img' alt='A group of classic cocktails standing side-to-side' />
        <h4 class='strong'>Menu creation</h4>
      </div>
      <div class='services-card' data-index='2' data-cursor='see_more'>
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
      <div class='certs-detail-pivot' data-cursor='view'>
        <h4 class='strong'>Arizona Title 4 Liquor License</h4>
        <p>2023</p>
      </div>
      <div class='certs-detail-pivot' data-cursor='view'>
        <h4 class='strong'>ANSI Food Handler's License</h4>
        <p>2023</p>
      </div>
      <div class='certs-detail-pivot' data-cursor='view'>
        <h4 class='strong'>ABC Bartending and Mixology Certification</h4>
        <p>2023</p>
      </div>
      <div class='certs-detail-pivot' data-cursor='view'>
        <h4 class='strong'>Fine Art Bartending Certificate</h4>
        <p>2022</p>
      </div>
    </div>
  </div>
  <div class='background section'>
    <div class='background-title'>
      <h3 id='background-headline'>A little more about us</h3>
      <span class='line'></span><span class='line'></span>
      <p id='background-body'>No catch, you’re just helping us get started. We provide professional mixology services free of charge. No catch, you’re just helping us get started. We provide professional mixology services free of charge.No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
    </div>
    <div class='background-details'>
      <div class='background-details-inner' data-selected='1'>
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
  </div>
  <div class='section'></div>
  <nav id='nav-bar' class='hidden'>
    <img src="${Logo}" id='logo' class='logo' alt='Bonno bartending logo' data-cursor='top' />
    <div class='btn-container'>
      <button class='btn-primary mobile-hide'>
        <div class='floating-cursor'></div>
        <div class='btn-primary-background'></div>
        <span>hello@bonno.bar</span>
      </button>
      <button class='btn-primary btn-primary-circle desktop-hide'>
        <div class='btn-primary-background'></div>
        <img src="${Mail}" class='logo' alt='Bonno bartending logo' />
      </button>
      <button class='btn-primary btn-primary-circle'>
        <div class='floating-cursor'></div>
        <div class='btn-primary-background'></div>
        <img src="${Instagram}" alt='Bonno bartending logo' />
      </button>
    </div>
  </nav>
  <div id='fab'>
    <button class='btn-primary btn-primary-fab modal-btn'>
      <div class='floating-cursor'></div>
      <div class='btn-primary-background'></div>
      <span>Book Us</span>
    </button>
  </div>
  <div class='hover-cursor'>
    <div class='hover-cursor-background'></div>
    <div class='hover-cursor-content'>
      <img id='hover-cursor-icon' src='${EyeIcon}' alt='See more' />
      <p id='hover-cursor-title'>See more</p>
    </div>
  </div>
  <div class='drawer-container'>
    <div class='overlay'></div>
    <div class='drawer' data-lenis-prevent="true" tabindex='-1' role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      <h3 class='strong' name='drawer-title'>
        <span id='drawer-title'></span>
        ${FloatAction(CloseIcon, window.innerWidth > 992)}
      </h3>
      <p id='drawer-body'></p>
      <div class='tag-row'></div>
      <div class='drawer-images'>
        <div class='rect'></div>
      </div>
    </div>
  </div>
  <div class='modal'>
    <div class='overlay modal-overlay'></div>
    <div class='modal-body' data-lenis-prevent="true" tabindex='-1' role="dialog" aria-modal="true" aria-labelledby="book-title">
      <h3 class='strong' name='book-title'>
        <span id='drawer-title'>Book Us</span>
        ${FloatAction(CloseIcon, window.innerWidth > 992)}
      </h3>
      <p id='modal-description'>Tell us a bit more about yourself and the event you're hosting. Note: our availability is limited and we grant our services on a first come first served basis, so we cannot always guarantee a reservation.</p>
      <form class='event-form'>
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
            <label for='event-date'>Event date <span class='required'>*</span></label>
            <input type='date' id="datePicker" name='event-date' required/>
          </div>
        </div>
        <button class='btn-primary btn-primary-fab'>
          <div class='btn-primary-background'></div>
          <span>Request</span>
        </button>
      </form>
    </div>
  </div>
  <div class='loader'>
    <div class='loader-inner'>
      <div class='loader-card'>
        <img draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
        <img draggable='false' src="${Negroni}" class='loader-card-drink' alt='Negroni' />
        <h4 class='strong'>Negroni</h4>
        <img draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
      </div>
      <div class='loader-card'>
        <img draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
        <img draggable='false' src="${OldFashioned}" class='loader-card-drink' alt='Old fashioned' />
        <h4 class='strong'>Old Fashioned</h4>
        <img draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
      </div>
      <div class='loader-card'>
        <img draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
        <img draggable='false' src="${French}" class='loader-card-drink' alt='French 75' />
        <h4 class='strong'>French 75</h4>
        <img draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
      </div>
    </div>
  </div>
`

function splitAndAnimate() {
  SplitType.revert('#intro-title');
  SplitType.revert('#about-text');
  SplitType.revert('#background-headline');
  SplitType.revert('#background-body');

  SplitType.create('#intro-title', { types: 'words,lines' });
  SplitType.create('#about-text', { types: 'words,lines' });
  SplitType.create('#background-headline', { types: 'words,lines' });
  SplitType.create('#background-body', { types: 'words,lines' });

  addDelay('.intro');
  addDelay('.about');
  addDelay('.background');
}

const fastScrollElement = document.querySelector('.fast-scroll');
const heroImage = document.querySelector('.hero-image');
const navBar = document.querySelector('#nav-bar');
const springEase = 'expo.out'; //"elastic(0.3, 1)";

const footer = document.querySelector('footer');
const logo = document.querySelector('#logo');

const drawerClose = document.querySelector('.drawer .float-action-btn');
const modalClose = document.querySelector('.modal .float-action-btn');
const overlay = document.querySelector('.overlay');
const modalOverlay = document.querySelector('.modal-overlay');

const fabContainer = document.querySelector('#fab');
const fab = fabContainer.querySelector('.btn-primary-fab');
const fabBackground = fab.querySelector('.btn-primary-background');
const fabTitle = fab.querySelector('span');

const datePicker = document.getElementById("datePicker");
const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);
datePicker.value = formattedDate;

const cursor = document.querySelector('.hover-cursor');
const cursorTitle = document.querySelector('.hover-cursor-content');
const cursorBackground = document.querySelector('.hover-cursor-background');
const cancelCursorAnim = () => {
  gsap.killTweensOf(".hover-cursor-content");
  gsap.killTweensOf(".hover-cursor-background");
};
const setCursorData = (elem) => {
  const attr = elem.getAttribute('data-cursor');
  const title = document.querySelector('#hover-cursor-title');
  const icon = document.querySelector('#hover-cursor-icon');
  const { title: titleData, icon: iconData } = cursorData[attr];

  title.innerHTML = titleData;
  icon.src = iconData;
};

let isHovering = false;
let mouseX = 0;
let mouseY = 0;

logo.addEventListener('click', () => {
  lenis.scrollTo(0);
});

logo.addEventListener('mouseenter', () => {
  const attr = logo.getAttribute('data-cursor');
  const title = document.querySelector('#hover-cursor-title');
  const icon = document.querySelector('#hover-cursor-icon');

  const { title: titleData, icon: iconData } = cursorData[attr];

  title.innerHTML = titleData;
  icon.src = iconData;

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

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  gsap.to(cursor, {
    x: mouseX - cursor.clientWidth/2,
    y: mouseY - cursor.clientHeight,
    duration: 0.5,
    ease: "power2.out"
  });
});

// InitLoader(springEase);
InitSectionObservers('.about');
InitSectionObservers('.services', window.innerWidth > 992 ? 0.6 : 0.2);
InitSectionObservers('.background', 0.1);
InitCursor();

document.fonts.ready.then(() => {
  InitLoader(springEase);
  splitAndAnimate();
  LandingTimeline(lenis);
});

let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
  if (window.innerWidth !== lastWidth) {
    splitAndAnimate();
  }
});

const toggleDrawer = (open) => {
  const drawer = document.querySelector('.drawer-container');
  const drawerInner = document.querySelector('.drawer');

  if (open) {
    drawer.classList.add('open');
    HideFab(cursorBackground, cursorTitle);
    gsap.to(drawerInner, {
      duration: 0.8,
      ease: springEase,
      y: 0
    });
    return lenis.stop();
  }

  drawer.classList.remove('open');
  gsap.to(drawerInner, {
    duration: 0.9,
    ease: springEase,
    y: '100%'
  });
  lenis.start();
  setTimeout(() => {
    SplitType.revert('#drawer-title');
    SplitType.revert('#drawer-body');
  }, 500);
}

const toggleModal = (open) => {
  const modal = document.querySelector('.modal');

  if (open) {
    modal.classList.add('open');
    HideFab(cursorBackground, cursorTitle);
    return lenis.stop();
  }

  modal.classList.remove('open');
  lenis.start();
}

const servicesGrid = document.querySelector('.services-grid');
const servicesCards = Array.from(document.getElementsByClassName('services-card'));
servicesCards.forEach((card, i) => {
  card.addEventListener('mouseenter', () => {
    servicesGrid.setAttribute('data-hovered', i);
    setCursorData(card);

    isHovering = true;
    setTimeout(() => {
      if (isHovering) ShowFab(cursorBackground, cursorTitle);
    }, 100);
    console.log(card.getAttribute('data-cursor'));
  });

  card.addEventListener('mouseleave', () => {
    servicesGrid.removeAttribute('data-hovered');
    isHovering = false;
    cancelCursorAnim();
    HideFab(cursorBackground, cursorTitle);
  });

  card.addEventListener('click', () => {
    const cardIdx = card.getAttribute('data-index');
    const title = document.querySelector('#drawer-title');
    const body = document.querySelector('#drawer-body');
    const tags = document.querySelector('.tag-row');

    const { title: titleData, body: bodyData, tags: tagData } = drawerData[cardIdx];
    let tagGroup = '';
    tagData.forEach(tag => {
      tagGroup += `<div class='tag'>${tag}</div>`;
    });

    title.innerHTML = titleData;
    body.innerHTML = bodyData;
    tags.innerHTML = tagGroup;
    SplitType.create('#drawer-title', { types: 'words,lines' });
    SplitType.create('#drawer-body', { types: 'words,lines' });

    addDelay('.drawer');
    toggleDrawer(true);
  });
});

const certsPivots = Array.from(document.getElementsByClassName('certs-detail-pivot'));
certsPivots.forEach(cert => {
  cert.addEventListener('mouseenter', () => {
    const attr = cert.getAttribute('data-cursor');
    const title = document.querySelector('#hover-cursor-title');
    const icon = document.querySelector('#hover-cursor-icon');

    const { title: titleData, icon: iconData } = cursorData[attr];

    title.innerHTML = titleData;
    icon.src = iconData;

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

let carouselIdx = 0;
const backgroundDetails = document.querySelector('.background-details');
const carousel = document.querySelector('.background-details-inner');
backgroundDetails.addEventListener('click', () => {
  const resetCarousel = (horizontal=false) => {
    if (carouselIdx === 2) {
      if (horizontal) {
        gsap.to(carousel, { x: `+=${Math.floor(CAROUSEL_STEP * 4)}`, duration: 0.01 });
      } else {
        gsap.to(carousel, { y: `+=${Math.floor(CAROUSEL_STEP * 4)}`, duration: 0.01 });
      }
    }
  }

  if (carouselIdx === -1) {
    document.querySelector(`.background-details-card[data-index='2'`).classList.remove('focused');
  }

  if (carouselIdx === 1) {
    document.querySelector(`.background-details-card[data-index='-2'`).classList.add('focused');
  }

  carouselIdx = carouselIdx === 2 ? -1 : carouselIdx + 1;

  const currCard = document.querySelector(`.background-details-card[data-index='${carouselIdx - 1}'`);
  const nextCard = document.querySelector(`.background-details-card[data-index='${carouselIdx}'`);
  currCard.classList.remove('focused');
  nextCard.classList.add('focused');

  if (window.innerWidth < 1200) {
    gsap.to(carousel, {
      x: CAROUSEL_STEP * carouselIdx * -1,
      ease: springEase,
      duration: 1,
      onComplete: resetCarousel,
      onCompleteParams: [true]
    });
  } else {
    gsap.to(carousel, {
      y: CAROUSEL_STEP * carouselIdx * -1,
      ease: springEase,
      duration: 1,
      onComplete: resetCarousel
    });
  }

  if (isHovering) {
    isHovering = false;
    cancelCursorAnim();
    HideFab(cursorBackground, cursorTitle);
  }
});

backgroundDetails.addEventListener('mouseenter', () => {
  const title = document.querySelector('#hover-cursor-title');
  const icon = document.querySelector('#hover-cursor-icon');

  const { title: titleData, icon: iconData } = cursorData['click'];

  title.innerHTML = titleData;
  icon.src = iconData;

  isHovering = true;
  setTimeout(() => {
    if (isHovering) ShowFab(cursorBackground, cursorTitle);
  }, 100);
});

backgroundDetails.addEventListener('mouseleave', () => {
  isHovering = false;
  cancelCursorAnim();
  HideFab(cursorBackground, cursorTitle);
});

drawerClose.addEventListener('click', () => {
  toggleDrawer(false);
});

modalClose.addEventListener('click', () => {
  toggleModal(false);
});

overlay.addEventListener('click', () => {
  toggleDrawer(false);
});

modalOverlay.addEventListener('click', () => {
  toggleModal(false);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modal = document.querySelector('.modal');
    const drawer = document.querySelector('.drawer-container');

    if (modal && modal.classList.contains('open')) { 
      toggleModal(false);
    }

    if (drawer && drawer.classList.contains('open')) { 
      toggleDrawer(false);
    }
  }
});

const primaryBtns = Array.from(document.getElementsByClassName('modal-btn'));
primaryBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    toggleModal(true);
  });
});

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