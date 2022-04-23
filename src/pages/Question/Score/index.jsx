import React from 'react';
import { useSelector } from 'react-redux';
import { StyledWrapper } from './style';

export default function Score() {
  const score = useSelector((state) => state.questions.total);
  return (
    <StyledWrapper>
      Current score:
      {` ${score}` }
    </StyledWrapper>
  );
}
