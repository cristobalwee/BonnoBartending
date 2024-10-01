import Logo from './assets/logo-dark.svg';
import Phone from './assets/phone.svg';
import Instagram from './assets/instagram.svg';
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
  <nav>
    <img src="${Logo}" class='logo' alt='Bonno bartending logo' />
    <div class='btn-container'>
      <button class='btn-primary'>
        <img src="${Phone}" class='logo' alt='Bonno bartending logo' />
        +1 (480) 707-3769
      </button>
      <button class='btn-primary btn-primary-circle'>
        <img src="${Instagram}" class='logo' alt='Bonno bartending logo' />
      </button>
    </div>
  </nav>
  <div class='intro'>
    <p>Serving Phoenix, AZ</p>
    <h1>You provide the liquor, we’ll mix it – <span class='strong'>pro bono</span>.</h1>
    <button class='btn-primary btn-primary-large' type="button">Book us</button>
    <div class='image fast-scroll'></div>
  </div>
`

const fastScrollElement = document.querySelector('.fast-scroll');
const speedMultiplier = 1.3;

lenis.on('scroll', ({ scroll }) => {
  console.log(fastScrollElement);
  const offset = scroll * speedMultiplier;

  if (fastScrollElement) fastScrollElement.style.transform = `translateY(-${offset}px)`;
});

lenis.start();