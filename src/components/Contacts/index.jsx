/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { StyledButton, StyledWrapper, StyledIconWrapper } from './style';
import { emailIcon, githubIcon, linkedinIcon } from '../../assets/icons';

export default function Contacts() {
  const [showContacts, setShowContacts] = useState(false);

  const toggleNav = () => {
    setShowContacts((prevState) => !prevState);
  };

  return (
    <div>
      <StyledButton
        onClick={toggleNav}
      />
      <StyledWrapper
        show={showContacts}
      >
        <a href="google.com" target="_blank"><StyledIconWrapper src={emailIcon} /></a>
        <a href="google.com" target="_blank"><StyledIconWrapper src={linkedinIcon} /></a>
        <a href="google.com" target="_blank"><StyledIconWrapper src={githubIcon} /></a>
      </StyledWrapper>
    </div>
  );
}
