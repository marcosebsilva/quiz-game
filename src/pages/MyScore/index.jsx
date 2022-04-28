import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import useLocalStorage from '../../hooks/useLocalStorage';
import { StyledScore, StyledTitle, StyledDescription } from './style';

export default function MyScore() {
  const { nickname } = useSelector((state) => state.settings);
  const playerDetails = useSelector((state) => {
    if (state.questions.list.length) {
      return {
        nickname: state.settings.nickname,
        score: state.questions.total,
      };
    }

    return null;
  });
  const [leaderboard, setLeaderboard] = useLocalStorage('leaderboard', null);
  const navigate = useNavigate();

  useEffect(() => {
    // stops uses from coming directly to this page
    if (!playerDetails) return navigate('/');

    if (!leaderboard) return setLeaderboard([playerDetails]);

    const alreadyInLeaderboard = leaderboard
      .find((item) => item.nickname === playerDetails.nickname);

    if (!alreadyInLeaderboard) return setLeaderboard([...leaderboard, playerDetails]);

    if (playerDetails.score > alreadyInLeaderboard.score) {
      const newLeaderboard = leaderboard.map((item) => {
        if (item.nickname === playerDetails.nickname) {
          return {
            nickname: item.nickname,
            score: playerDetails.score,
          };
        }
        return item;
      });

      newLeaderboard.sort((a, b) => b.score - a.score);
      setLeaderboard(newLeaderboard);
    }

    return () => console.log('redirected...');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!playerDetails) return <p>Redirecting...</p>;

  return (
    <MainWrapper>
      <StyledTitle>Total Score:</StyledTitle>
      <StyledScore>{playerDetails.score}</StyledScore>
      <StyledDescription>
        {`Well done ${nickname}! That puts you in`}
        <i>{leaderboard ? leaderboard.indexOf(playerDetails) : '1'}</i>
        on the leaderboard!
      </StyledDescription>
      <FancyButton
        navigationLink="/leaderboard"
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
