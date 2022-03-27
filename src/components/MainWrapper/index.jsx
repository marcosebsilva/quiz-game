import React from 'react';
import { StyledWrapper } from './style';

export default function MainWrapper({children}) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}
