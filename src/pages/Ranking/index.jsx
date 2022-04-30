import React from 'react';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';
import useLocalStorage from '../../hooks/useLocalStorage';
import Table from './Table';

export default function Ranking() {
  const [ranking] = useLocalStorage('ranking', null);

  return (
    <MainWrapper>
      <PageTitle
        highlightedText="Ranking"
      />
      {ranking
        ? <Table ranking={ranking} />
        : <p>Your ranking is empty, go play some games!</p>}
      <FancyButton
        extraStyle={{
          'font-size': '1.5rem',
        }}
        navigationLink="/quiz-game"
      >
        Home
      </FancyButton>
    </MainWrapper>
  );
}
