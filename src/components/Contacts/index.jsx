/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import {
  StyledButton,
  StyledWrapper,
  StyledIconWrapper,
  StyledOpacityController,
} from './style';
import { emailIcon, githubIcon, linkedinIcon } from '../../assets/icons';

export default function Contacts() {
  const [showContacts, setShowContacts] = useState(false);

  const toggleNav = () => {
    setShowContacts((prevState) => !prevState);
  };

  return (
    <StyledOpacityController
      showContacts={showContacts}
    >
      <StyledButton
        onClick={toggleNav}
      />
      <StyledWrapper
        show={showContacts}
      >
        <a href="//google.com" target="_blank" rel="noreferrer"><StyledIconWrapper src={emailIcon} /></a>
        <a href="//google.com" target="_blank" rel="noreferrer"><StyledIconWrapper src={linkedinIcon} /></a>
        <a href="//google.com" target="_blank" rel="noreferrer"><StyledIconWrapper src={githubIcon} /></a>
      </StyledWrapper>
    </StyledOpacityController>
  );
}
