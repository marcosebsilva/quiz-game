import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import useLocalStorage from '../../hooks/useLocalStorage';
import { StyledScore, StyledTitle } from './style';

export default function MyScore() {
  const playerDetails = useSelector((state) => {
    if (state.questions.list.length) {
      return {
        nickname: state.settings.nickname,
        score: state.questions.total,
      };
    }

    return null;
  });
  const [ranking, setRanking] = useLocalStorage('ranking', null);
  const navigate = useNavigate();

  useEffect(() => {
    // stops user from coming directly to this page
    if (!playerDetails) return navigate('/');

    if (!ranking) return setRanking([playerDetails]);

    const alreadyInRanking = ranking
      .find((item) => item.nickname === playerDetails.nickname);

    if (!alreadyInRanking) return setRanking([...ranking, playerDetails]);

    if (playerDetails.score > alreadyInRanking.score) {
      const newRanking = ranking.map((item) => {
        if (item.nickname === playerDetails.nickname) {
          return {
            nickname: item.nickname,
            score: playerDetails.score,
          };
        }
        return item;
      });

      newRanking.sort((a, b) => b.score - a.score);
      setRanking(newRanking);
    }

    return () => console.log('redirected...');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!playerDetails) return <p>Redirecting...</p>;

  return (
    <MainWrapper>
      <StyledTitle>Total Score:</StyledTitle>
      <StyledScore>{playerDetails.score}</StyledScore>
      <FancyButton
        navigationLink="/ranking"
        extraStyle={{
          'font-size': '1.5rem',
          color: 'black',
          'background-color': 'white',
          border: '1px solid black',
        }}
      >
        Ranking
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
