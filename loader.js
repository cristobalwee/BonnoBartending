import { gsap } from 'gsap';

export default function initLoader(ease) {
  const loaderCards = Array.from(document.getElementsByClassName('loader-card'));
  const loaderTl = gsap.timeline();
  loaderTl.to(loaderCards[0], {
    duration: 1.2,
    ease: ease,
    y: 0,
    z: 1,
    delay: 0.5
  });
  loaderTl.to(loaderCards[0], {
    duration: 0.2,
    opacity: 1
  }, '<');

  loaderTl.to(loaderCards[1], {
    duration: 1.2,
    ease: ease,
    y: 0,
    delay: 0.1
  });
  loaderTl.to(loaderCards[1], {
    duration: 0.2,
    opacity: 1
  }, '<');
  loaderTl.to(loaderCards[0], {
    ease: ease,
    scale: 0.91,
    duration: 1,
    y: -20,
    z: -1,
    backgroundColor: '#413c4e'
  }, '<');

  loaderTl.to(loaderCards[2], {
    duration: 1.2,
    ease: ease,
    y: 0,
    delay: 0.1
  });
  loaderTl.to(loaderCards[2], {
    duration: 0.2,
    opacity: 1
  }, '<');
  loaderTl.to(loaderCards[0], {
    ease: ease,
    scale: 0.8,
    duration: 1,
    y: -36,
    z: -2,
    backgroundColor: '#3c3748'
  }, '<');
  loaderTl.to(loaderCards[1], {
    ease: ease,
    scale: 0.91,
    duration: 1,
    y: -20,
    z: -1,
    backgroundColor: '#413c4e'
  }, '<');
};