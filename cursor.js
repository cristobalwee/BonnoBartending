import { gsap } from 'gsap';

export default function InitCursor() {
  gsap.set('.floating-cursor',{ width: 0, height: 0, x: 0, y: 0 });
  const buttons = document.querySelectorAll('.btn-primary');

  buttons.forEach(button => {
    const rect = button.getBoundingClientRect();
    const cursor = button.querySelector('.floating-cursor');
    if (!cursor) return;

    button.addEventListener('mousemove', (e) => {
      const scrollDiff = button.classList.contains('btn-primary-large') ? window.scrollY : 0;
      gsap.to(cursor, {
        duration: 0.7,
        x: e.clientX - rect.x - (rect.width / 2),
        y: e.clientY - rect.y - (rect.height / 2) + scrollDiff
      });
    });

    button.addEventListener('mouseover', (e) => {
      gsap.set('.floating-cursor',{ x: 0, y: 0 });
      gsap.to(cursor, {
        duration: 0.4,
        width: rect.width / 2,
        height: rect.height / 2
      });
    });

    button.addEventListener('mouseout', (e) => {
      gsap.to(cursor, {
        duration: 0.4,
        height: 0,
        width: 0
      });
    });
  });
}
