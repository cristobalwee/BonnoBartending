import Logo from '../assets/logo-dark.svg';

const backgroundCard = (title, subtitle, index) => `
  <div class='background-details-card${index === 0 ? ' focused': ''}' data-index='${index}'>
    <img draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
    <h4 class='strong'>${title}</h4>
    <p>${subtitle}</p>
    <img draggable='false' src="${Logo}" class='logo' alt='Bonno bartending logo' />
  </div>
`;

export default backgroundCard;