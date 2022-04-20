import React from 'react';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';

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
          'background-color': '#FD28C1',
        }}
        title="Leaderboard"
        navigationLink="leaderboard"
      />
    </MainWrapper>
  );
}
