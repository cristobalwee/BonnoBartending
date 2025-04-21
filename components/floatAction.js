const floatAction = (icon, isLarge=false, ariaLabel='Close') => `
  <span class='float-action${isLarge ? ' large' : ''}' tabindex='-1'>
    <button class='float-action-btn' aria-label='${ariaLabel}'>
      <img src='${icon}' alt='${icon} icon' />
    </button>
  </span>
`;

export default floatAction;