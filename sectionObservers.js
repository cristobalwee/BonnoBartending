export default function InitSectionObservers(sectionQuery, threshold=1.0) {
  const section = document.querySelector(sectionQuery);
  let isInitialLoad = true;

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (isInitialLoad) {
        isInitialLoad = false;
        return;
      }

      if (entry.isIntersecting) {
        section.classList.add('animate');

        if (sectionQuery === '.background') document.querySelector('footer').classList.add('animate');
      }
    });
  }, { threshold, root: null });

  section.classList.remove('animate');
  sectionObserver.observe(section);
}