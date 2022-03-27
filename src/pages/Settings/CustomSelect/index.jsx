import React from 'react';
import { StyledSelect } from './style.js';
import { setDifficulty } from '../../../redux/slices/settingsReducer.js';
import { useDispatch, useSelector } from 'react-redux';

export default function CustomSelect() {
  const dispatch = useDispatch();
  const selectedDifficulty = useSelector(({ settings }) => settings.difficulty);

  const handleChange = ({target}) => {
    dispatch(setDifficulty(target.value))
  }

  return (
    <StyledSelect
      value={ selectedDifficulty }
      onChange={ handleChange }
    >
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </StyledSelect>
  )
}
