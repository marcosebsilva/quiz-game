import React from 'react';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';
import colors from '../../utils/dict/colors.json';

export default function Home() {
  return (
    <MainWrapper>
      <PageTitle
        normalText="Quiz"
        highlightedText="Game"
      />
      <FancyButton
        title="Play"
        navigationLink="settings"
      />
      <FancyButton
        extraStyle={{
          width: '60vw',
          'max-width': '300px',
          'font-size': '1.5rem',
          height: '50px',
          'background-color': colors['default-pink'],
        }}
        title="Leaderboard"
        navigationLink="leaderboard"
      />
    </MainWrapper>
  );
}
