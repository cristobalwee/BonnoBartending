import Logo from './assets/logo-dark.svg';
import Mail from './assets/mail.svg';
import Instagram from './assets/instagram.svg';
import Hero from './assets/hero.jpg';
import Lenis from 'lenis';
import { gsap } from 'gsap';

import './styles/style.scss';
import 'lenis/dist/lenis.css';

// https://github.com/lukePeavey/SplitType

const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelector('#app').innerHTML = `
  <div class='intro'>
    <p>Serving Phoenix, AZ</p>
    <h1>You provide the liquor, we’ll mix it – <span class='strong'>pro bono</span>.</h1>
    <button class='btn-primary btn-primary-large' type="button">Book us</button>
    <img src='${Hero}' class='hero-image fast-scroll' />
  </div>
  <div class='about section'>
    <p>For free? What’s the catch?</p>
    <h2>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</h2>
  </div>
  <div class='services section'>
    <h3>Our services</h3>
    <div class='services-grid'>
      <div class='services-card'>
        <p>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
        <h4 class='strong'>Mixology</h4>
      </div>
      <div class='services-card'>
        <p>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
        <h4 class='strong'>Menu creation</h4>
      </div>
      <div class='services-card'>
        <p>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
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
      </div>
      <div class='certs-detail-pivot'>
        <h4 class='strong'>ANSI Food Handler's License</h4>
        <p>2023</p>
      </div>
      <div class='certs-detail-pivot'>
        <h4 class='strong'>ABC Bartending and Mixology Certification</h4>
        <p>2023</p>
      </div>
      <div class='certs-detail-pivot'>
        <h4 class='strong'>Fine Art Bartending Certificate</h4>
        <p>2022</p>
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
        <h4 class='strong'>80 hours</h4>
        <p>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
      </div>
      <div class='background-details-card'>
        <h4 class='strong'>80 hours</h4>
        <p>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
      </div>
      <div class='background-details-card'>
        <h4 class='strong'>80 hours</h4>
        <p>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
      </div>
      <div class='background-details-card'>
        <h4 class='strong'>80 hours</h4>
        <p>No catch, you’re just helping us get started. We provide professional mixology services free of charge.</p>
      </div>
    </div>
    </div>
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
  <div id='fab' class='hidden'>
    <button class='btn-primary btn-primary-fab'>
      Book Us
    </button>
  </div>
`

const fastScrollElement = document.querySelector('.fast-scroll');
const heroImage = document.querySelector('.hero-image');
const navBar = document.querySelector('#nav-bar');
const primaryBtn = document.querySelector('.btn-primary-large');
const fab = document.querySelector('#fab');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      fab.classList.remove('hidden');
    } else {
      fab.classList.add('hidden');
    }
  });
});

observer.observe(primaryBtn);

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