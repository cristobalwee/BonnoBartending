const floatAction = (icon, isLarge=false) => `
  <span class='float-action${isLarge ? ' large' : ''}'>
    <span class='float-action-btn'>
      <img src='${icon}' alt='${icon} icon' />
    </span>
  </span>
`;

export default floatAction;