import gsap from 'gsap';
import { CAROUSEL_STEP, CAROUSEL_STEP_MOBILE } from './constants';

let carouselIdx = 0;

export function moveCarousel() {
  const carousel = document.querySelector('.background-details-inner');
  const resetCarousel = (horizontal=false) => {
    if (carouselIdx === 2) {
      if (horizontal) {
        gsap.set(carousel, { x: `+=${Math.floor(CAROUSEL_STEP_MOBILE * 4)}`});
      } else {
        gsap.set(carousel, { y: `+=${Math.floor(CAROUSEL_STEP * 4)}` });
      }
    }
  }

  switch (carouselIdx) {
    case -1:
      document.querySelector(`.background-details-card[data-index='2'`).classList.remove('focused');
      carouselIdx = carouselIdx + 1;
      break;
    case 1:
      document.querySelector(`.background-details-card[data-index='-2'`).classList.add('focused');
      carouselIdx = carouselIdx + 1;
      break;
    case 2:
      carouselIdx = -1;
      break;
    default:
      carouselIdx = carouselIdx + 1;
      break;
  }

  let currCard = document.querySelector(`.background-details-card[data-index='${carouselIdx - 1}'`);
  let nextCard = document.querySelector(`.background-details-card[data-index='${carouselIdx}'`);


  currCard.classList.remove('focused');
  nextCard.classList.add('focused');

  if (window.innerWidth < 1200) {
    gsap.to(carousel, {
      x: `-=${CAROUSEL_STEP_MOBILE}`,
      ease: 'expo.inOut',
      duration: 1.4,
      onComplete: resetCarousel,
      onCompleteParams: [true]
    });
  } else {
    gsap.to(carousel, {
      y: `-=${CAROUSEL_STEP}`,
      ease: 'expo.inOut',
      duration: 1.4,
      onComplete: resetCarousel
    });
  }
};