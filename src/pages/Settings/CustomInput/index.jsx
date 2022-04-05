import React from 'react';
import { StyledInput, StyledLabel, StyledWrapper } from './style.js';
import { setNickname, setQuestionAmount } from '../../../redux/slices/settingsReducer';
import { useDispatch, useSelector } from 'react-redux';


export default function CustomInput({ width, type = "text", label }) {
  const dispatch = useDispatch();
  const value = useSelector(({settings}) => type === "text" ? settings.nickname : settings.questionAmount);
  
  // this is not on pair with open-closed principle but works for now
  const handleChange = {
    text: ({target}) => {
      dispatch(setNickname(target.value));
    },
    number: ({target}) => {
      if (target.value > 20) {
        dispatch(setQuestionAmount(20));
      } else {
        dispatch(setQuestionAmount(target.value));
      }
    }
  }

  return (
    <StyledWrapper
      width={width}
    >
      <StyledLabel>
        { label }
        <StyledInput
          value={value}
          onChange={ handleChange[type] }
          type={type}
          max="20"
        />
      </StyledLabel>
    </StyledWrapper>
  )

}
