import React, { useState } from 'react';
import { StyledButton, StyledWrapper, StyledIconWrapper } from './style.js';
import { email_icon, github_icon, linkedin_icon } from '../../assets/icons';

export default function Contacts() {
  const [showContacts, setShowContacts] = useState(false);
  
  const toggleNav = () => {
    setShowContacts((prevState) => !prevState)
  };

  return (
    <div>
      <StyledButton
        onClick={ toggleNav }
      />
      <StyledWrapper
        show={ showContacts }
      >
        <a href='google.com' target='_blank'><StyledIconWrapper src={email_icon}/></a>
        <a href='google.com' target='_blank'><StyledIconWrapper src={linkedin_icon}/></a>
        <a href='google.com' target='_blank'><StyledIconWrapper src={github_icon}/></a>
      </StyledWrapper>    
    </div>
  )
}
