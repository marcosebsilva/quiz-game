import React from 'react';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';
import useLocalStorage from '../../hooks/useLocalStorage';
import Table from './Table';

export default function Ranking() {
  const [ranking] = useLocalStorage('ranking', null);

  if (!ranking) {
    return (
      <MainWrapper>
        <PageTitle
          highlightedText="Ranking"
        />
        <p>Your ranking is empty, go play some games!</p>
        <FancyButton
          extraStyle={{
            'font-size': '1.5rem',
          }}
          navigationLink="/"
        >
          Home
        </FancyButton>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <PageTitle
        highlightedText="Ranking"
      />
      <Table
        ranking={ranking}
      />
      <FancyButton
        extraStyle={{
          'font-size': '1.5rem',
        }}
        navigationLink="/"
      >
        Home
      </FancyButton>
    </MainWrapper>
  );
}
