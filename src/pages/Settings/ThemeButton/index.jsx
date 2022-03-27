import React from 'react';
import { StyledTheme } from './style.js';
import { useDispatch, useSelector } from 'react-redux';
import { setExpertise, toggleTheme } from '../../../redux/slices/settingsReducer.js';

export default function ThemeButton({theme}) {
  const isExpertise = useSelector(({settings}) => settings.expertise == theme);
  const isChecked = useSelector(({settings}) => settings.themes.some((item) => item === theme));
  const dispatch = useDispatch();

  const handleClicks = ({ detail: numberOfClicks }) => {
    // this is firing every time, should find a better alternative
    if (numberOfClicks === 1){
      console.log('1')
      dispatch(toggleTheme(theme));
      if (isExpertise) dispatch(setExpertise(''));
    } else {
      dispatch(setExpertise(theme));
      console.log("mais")
    }
  };

  return (
    <StyledTheme
      onClick={handleClicks}
      borderChecked={ isChecked }
      expertise = { isExpertise }
    >
      { theme }
    </StyledTheme>
  )
}
