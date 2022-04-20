import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../../../redux/slices/questionsReducer';
import { Text } from './style';

export default function Option({
  option, isRight, isLocked, questionIndex,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const answer = {
      questionIndex,
      chosenAnswer: option,
    };

    dispatch(setAnswer(answer));
  };

  return (
    <Text
      isLocked={isLocked}
      isRight={isRight}
      onClick={handleClick}
    >
      {option}
    </Text>
  );
}

Option.propTypes = {
  option: PropTypes.string,
  isRight: PropTypes.bool,
  isLocked: PropTypes.bool,
  questionIndex: PropTypes.string,
}.isRequired;
