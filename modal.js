import { gsap } from 'gsap';
import { Flip } from "gsap/Flip";
import { HideFab } from './fab';

gsap.registerPlugin(Flip);

export function toggleModal(triggerElem, open, onToggleEnd) {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-body');
  const cursorTitle = document.querySelector('.hover-cursor-content');
  const cursorBackground = document.querySelector('.hover-cursor-background');

  let focusTrapCleanup = null;
  let triggerElement = triggerElem; // Store the triggering element

  function triggerModal() {
    Flip.fit(modalContent, triggerElem, {scale: true, props: 'borderRadius'});
    triggerElem.classList.add('active');

    const state = Flip.getState(modalContent, { props: 'borderRadius' });

    gsap.set(modalContent, { clearProps: true });
    gsap.set(modalContent, { visibility: "visible", opacity: 1 });
    modal.classList.add("active");

    Flip.from(state, {
      duration: 1,
      ease: 'expo.out',
      scale: true
    });

    // Trap focus inside the modal
    focusTrapCleanup = trapFocus(modal);
  }

  function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleKeyDown(event) {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    modal.addEventListener('keydown', handleKeyDown);
    
    // Focus the first focusable element if it exists
    if (firstElement) {
      firstElement.focus();
    }

    return () => {
      modal.removeEventListener('keydown', handleKeyDown);
    };
  }

  function closeModalAnimation() {
    modal.classList.remove("active");
    triggerElem.classList.remove('active');
    // gsap.to(modalContent, {
    //   opacity: 0,
    //   duration: 0.6,
    //   ease: 'expo.out'
    // });
    const state = Flip.getState(modalContent, { props: 'borderRadius' });
    Flip.fit(modalContent, triggerElem, { scale: true, props: 'borderRadius' });

    Flip.from(state, {
      duration: 1,
      ease: 'expo.out',
      scale: true,
      delay: 0.1
    });

    // Remove focus trap when modal closes
    if (focusTrapCleanup) {
      focusTrapCleanup();
    }
  }

  if (open) {
    modal.classList.add('open');
    triggerModal();
    HideFab(cursorBackground, cursorTitle);
    return onToggleEnd();
  }

  modal.classList.remove('open');
  closeModalAnimation();

  // Restore focus only if the trigger element is still in the DOM
  if (triggerElement && document.body.contains(triggerElement)) {
    triggerElement.focus();
  }

  onToggleEnd();
}

