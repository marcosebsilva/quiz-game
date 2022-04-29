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
        <a href="mailto: dusdoom.dev@gmail.com" target="_blank" rel="noreferrer">
          <StyledIconWrapper
            src={emailIcon}
            alt="Email"
          />
        </a>
        <a href="//https://www.linkedin.com/in/marcosestevaobs/" target="_blank" rel="noreferrer">
          <StyledIconWrapper
            src={linkedinIcon}
            alt="Linkedin profile"
          />
        </a>
        <a href="//https://github.com/marcosebsilva" target="_blank" rel="noreferrer">
          <StyledIconWrapper
            src={githubIcon}
            alt="Github profile"
          />
        </a>
      </StyledWrapper>
    </StyledOpacityController>
  );
}
