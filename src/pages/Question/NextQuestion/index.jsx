import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100px;
    padding: 10px;
    border-radius: 2px;
    color: white;
    background-color: blue;
    transition: 200ms;
    &:disabled {
        opacity: 0.5;
        background-color: grey;
    }
`;

export default function NextQuestion({ children, handleClick, isLocked }) {
  return (
    <StyledButton
      onClick={handleClick}
      disabled={!isLocked}
    >
      {children}
    </StyledButton>
  );
}

NextQuestion.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func,
  isLocked: PropTypes.bool,
}.isRequired;
