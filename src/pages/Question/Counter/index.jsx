import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer, setPoints } from '../../../redux/slices/questionsReducer';
import { StyledInnerBar, StyledOuterBar } from './style';

export default function Counter({ questionIndex }) {
  const INITIAL_TIMER_IN_SECONDS = 5;
  const dispatch = useDispatch();
  const isLocked = useSelector((state) => state.questions.list[questionIndex].isLocked);
  const [timer, setTimer] = useState(INITIAL_TIMER_IN_SECONDS);
  const intervalRef = useRef(null);

  // resets interval
  useEffect(() => {
    clearInterval(intervalRef.current);
    setTimer(INITIAL_TIMER_IN_SECONDS);

    const ONE_SECOND = 1000;
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, ONE_SECOND);

    // cleanup
    return () => clearInterval(intervalRef.current);
  }, [questionIndex]);

  // clear interval if is locked or timer goes to 0
  useEffect(() => {
    if (isLocked || timer === 0) {
      clearInterval(intervalRef.current);
    }

    if (isLocked) {
      dispatch(setPoints({
        remainingSeconds: timer,
        questionIndex,
      }));
      setTimer(INITIAL_TIMER_IN_SECONDS);
    }

    if (timer === 0) {
      intervalRef.current = null;
      const answer = {
        questionIndex,
        chosenAnswer: 'skipped',
      };
      dispatch(setAnswer(answer));
    }
  }, [isLocked, timer, dispatch, questionIndex]);

  // key is reseted to force React to mount a new dom node, so the animation can restart
  return (
    <StyledOuterBar key={questionIndex}>
      <StyledInnerBar
        stopCounter={isLocked}
        duration={INITIAL_TIMER_IN_SECONDS}
      />
    </StyledOuterBar>
  );
}

Counter.propTypes = {
  questionIndex: PropTypes.string,
}.isRequired;
