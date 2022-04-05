import React from 'react';
import { StyledSelect, StyledLabel, StyledWrapper } from './style.js';
import { useDispatch, useSelector } from 'react-redux';

export default function CustomSelect({ children, action, label, width }) {
  const dispatch = useDispatch();

  const handleChange = ({target}) => {
    dispatch(action(target.value.toLowerCase()));
  }

  return (
    <StyledWrapper
      width={ width }
    >
      <StyledLabel>
        { label }
        <StyledSelect
          onChange={ handleChange }
        >
          { children }
        </StyledSelect>
      </StyledLabel>
    </StyledWrapper>
  )
}
