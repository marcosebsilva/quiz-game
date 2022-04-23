import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import MainWrapper from '../../components/MainWrapper';
import Score from './Score';
import Option from './Option';
import Counter from './Counter';
import NextQuestion from './NextQuestion';

export default function Question() {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionList = useSelector((state) => state.questions.list);
  const QUESTION_INDEX = id - 1;
  const currentQuestion = questionList[QUESTION_INDEX];

  useEffect(() => {
    if (questionList.length && id > questionList.length) {
      navigate('/my-score');
    }
  }, [id, questionList, navigate]);

  if (!currentQuestion) return <Loading />;

  const {
    question,
    category,
    scrambled_answers: options,
    correct_answer: correctAnswer,
    isLocked,
  } = currentQuestion;

  return (
    <MainWrapper>
      <Score />
      <h1>{category}</h1>
      <Counter questionIndex={QUESTION_INDEX} />
      <h2>{question}</h2>
      {options.map((option, index) => (
        <Option
          // eslint-disable-next-line react/no-array-index-key
          key={`question-${index}`}
          questionIndex={QUESTION_INDEX}
          isLocked={isLocked}
          option={option}
          isRight={option === correctAnswer}
        />
      ))}
      <NextQuestion
        handleClick={() => navigate(`/question/${parseInt(id, 10) + 1}`)}
        isLocked={isLocked}
        type="button"
      >
        Next
      </NextQuestion>
    </MainWrapper>
  );
}
