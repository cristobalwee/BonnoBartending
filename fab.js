export default function InitFab() {
  const primaryBtn = document.querySelector('.btn-primary-large');
  const fabThreshold = document.querySelector('#fab-threshold');
  const fab = document.querySelector('#fab');

  const fabObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        fab.classList.remove('hidden');
      } else {
        fab.classList.add('hidden');
      }
    });
  });

  fabObserver.observe(primaryBtn);
  fabObserver.observe(fabThreshold);
}