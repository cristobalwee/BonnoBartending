const floatAction = (icon, isLarge=false) => `
  <span class='float-action${isLarge ? ' large' : ''}'>
    <button class='float-action-btn'>
      <img src='${icon}' alt='${icon} icon' />
    </button>
  </span>
`;

export default floatAction;