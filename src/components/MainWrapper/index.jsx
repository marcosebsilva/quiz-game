import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './style';

export default function MainWrapper({ children }) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
}

MainWrapper.propTypes = {
  children: PropTypes.node,
}.isRequired;
