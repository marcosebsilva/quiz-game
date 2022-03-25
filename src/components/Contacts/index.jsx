import React, { useState } from 'react';
import { ToggleButton, ContactWrapper, IconWrapper } from './style.js';
import { email_icon, github_icon, linkedin_icon } from '../../assets/icons';

export default function Contacts() {
  const [showContacts, setShowContacts] = useState(false);
  
  const toggleNav = () => {
    setShowContacts((prevState) => !prevState)
  };

  return (
    <div>
      <ToggleButton
        onClick={ toggleNav }
      />
      <ContactWrapper
        show={ showContacts }
      >
        <a href='google.com' target='_blank'><IconWrapper src={email_icon}/></a>
        <a href='google.com' target='_blank'><IconWrapper src={linkedin_icon}/></a>
        <a href='google.com' target='_blank'><IconWrapper src={github_icon}/></a>
      </ContactWrapper>    
    </div>
  )
}
