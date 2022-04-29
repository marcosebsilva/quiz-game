import React from 'react';
import PropTypes from 'prop-types';
import StyledTable from './style';

export default function Table({ ranking }) {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th>Position</th>
          <th>Nickname</th>
          <th>Score</th>
        </tr>
        {ranking.map((player, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={`player-${index}`}>
            <td>{index + 1}</td>
            <td>{player.nickname}</td>
            <td>{player.score}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

Table.propTypes = {
  ranking: PropTypes.arrayOf(Object).isRequired,
};
