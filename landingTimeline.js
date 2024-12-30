import gsap from "gsap";
import { LOAD_TIME } from "./constants";

export default function LandingTimeline(lenis) {
  const navBar = document.querySelector('#nav-bar');
  const intro = document.querySelector('.intro');
  lenis.stop();

  setTimeout(() => {
    document.body.classList.add('loaded');
  }, LOAD_TIME);

  setTimeout(() => {
    // const toAnim = Array.from(intro.querySelectorAll('.line'));
    // toAnim.forEach((line, i) => {
    //   let objToAnim = line;
    //   const words = Array.from(line.querySelectorAll('.word'));

    //   if (words.length) {
    //     objToAnim = words;
    //   }

    //   gsap.to(objToAnim, {
    //     duration: 1.2,
    //     ease: 'elastic(0.3, 1)',
    //     delay: 0.5 + (i * 0.1),
    //     opacity: 1,
    //     scale: 1, 
    //     y: 0
    //   });
    // });
  }, LOAD_TIME + 300);

  setTimeout(() => {
    navBar.classList.remove('hidden');
  }, LOAD_TIME + 1000);

  setTimeout(() => {
    const heroBtn = intro.querySelector('.btn-primary');
    const heroImg = intro.querySelector('.hero-image');
    gsap.to(heroBtn, {
      duration: 0.1,
      overflow: 'hidden'
    });

    heroImg.classList.add('unset');
    lenis.start();
  }, LOAD_TIME + 2200);
}