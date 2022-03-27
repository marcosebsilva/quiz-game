import React from 'react';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { StyledSettingsWrapper, StyledThemesWrapper, StyledHintWrapper } from './style.js';
import ThemeButton from './ThemeButton';

export default function Settings() {
  const themeOptions = ["Mathematics", "Mythology", "Sports", "History", "Music", "Books", "General", "Geography", "Art"];

  return (
    <MainWrapper>
      <PageTitle
        normalText="Quiz"
        highlightedText="Game"
      />
      <StyledSettingsWrapper>
        <CustomInput
          placeholder="Nickname"
        />
        <CustomInput
          width="48%"
          type="number"
          placeholder="Nº of questions"
        />
        <CustomSelect
          placeholder="Difficulty"
          width="48%"
        />
        <StyledHintWrapper>
          <h2>Themes</h2>
          <p>Single click to include a option</p>
          <p>Double click to select a area of expertise</p>
        </StyledHintWrapper>
        <StyledThemesWrapper>
          {themeOptions.map((theme, index) => <ThemeButton key={index} theme={theme}/>)}
        </StyledThemesWrapper>
        <FancyButton
          title="Start game"
          width="60vw"
          maxWidth="250px"
          fontSize="1.5rem"
          height="70px"
        />
      </StyledSettingsWrapper>
    </MainWrapper>
  )
}
