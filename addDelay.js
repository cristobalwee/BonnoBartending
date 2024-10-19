export default function addDelay(query) {
  const container = document.querySelector(query);
  const lines = container.querySelectorAll('.line');

  lines.forEach((child, i) => {
    child.classList.add(`delay-${i}`);
  });
}