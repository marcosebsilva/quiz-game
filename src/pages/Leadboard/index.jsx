import React from 'react';
import MainWrapper from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Leaderboard() {
  const [leaderboard] = useLocalStorage('leaderboard', null);

  if (!leaderboard) {
    return (
      <MainWrapper>
        <PageTitle
          normalText="Leader"
          highlightedText="Board"
        />
        <p>Your leaderboard is empty, go play some games!</p>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <PageTitle
        normalText="Leader"
        highlightedText="Board"
      />
      <table>
        <tbody>
          <tr>
            <th>Position</th>
            <th>Nickname</th>
            <th>Score</th>
          </tr>
          {leaderboard.map((player, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={`player-${index}`}>
              <td>{index + 1}</td>
              <td>{player.nickname}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainWrapper>
  );
}
