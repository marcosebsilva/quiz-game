import React from 'react';
import { StyledInput } from './style.js';
import { setNickname, setQuestionAmount } from '../../../redux/slices/settingsReducer';
import { useDispatch, useSelector } from 'react-redux';


export default function CustomInput({ width, placeholder, type = "text" }) {
  const dispatch = useDispatch();
  const value = useSelector(({settings}) => type === "text" ? settings.nickname : settings.questionAmount);

  // this is not on pair with open-closed principle but works for now
  const handleChange = {
    text: ({target}) => {
      dispatch(setNickname(target.value))
    },
    number: ({target}) => {
      if (target.value > 20) {
        dispatch(setQuestionAmount(20))
      } else {
        dispatch(setQuestionAmount(parseInt(target.value)))
      }
    }
  }


  return (
    <StyledInput
      onChange={ handleChange[type] }
      width={width}
      type={type}
      max="20"
      placeholder={ placeholder }
    />
  )

}
