import gsap from "gsap";
import { elasticEase } from "./constants";

export function ShowFab(fabBackground, fabTitle) {
  gsap.to(fabBackground, {
    duration: 1,
    ease: elasticEase,
    opacity: 1,
    scale: 1, 
    y: 0,
  });
  gsap.to(fabTitle, {
    duration: 1,
    ease: elasticEase,
    opacity: 1,
    scale: 1, 
    y: 0,
    delay: 0.05,
  });
}

export function HideFab(fabBackground, fabTitle) {
  gsap.to(fabBackground, {
    duration: 0.8,
    ease: elasticEase,
    opacity: 0,
    scale: 0.6, 
    y: '40%'
  });
  gsap.to(fabTitle, {
    duration: 0.6,
    ease: elasticEase,
    opacity: 0,
    scale: 0.8, 
    y: '60%'
  });
}
