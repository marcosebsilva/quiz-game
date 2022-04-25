import React from 'react';
import { useSelector } from 'react-redux';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import { StyledScore, StyledTitle, StyledDescription } from './style';

export default function MyScore() {
  const { nickname } = useSelector((state) => state.settings);
  const totalScore = useSelector((state) => state.questions.total);

  return (
    <MainWrapper>
      <StyledTitle>Total Score:</StyledTitle>
      <StyledScore>{totalScore}</StyledScore>
      <StyledDescription>
        {`Well done ${nickname}! That puts you in`}
        <i>Leaderboard position</i>
        on the leaderboard!
      </StyledDescription>
      <FancyButton
        extraStyle={{
          'font-size': '1.5rem',
          color: 'black',
          'background-color': 'white',
          border: '1px solid black',
        }}
      >
        Leaderboard
      </FancyButton>
      <FancyButton
        extraStyle={{
          'font-size': '1.5rem',
        }}
        navigationLink="/settings"
      >
        Play again
      </FancyButton>
    </MainWrapper>
  );
}
