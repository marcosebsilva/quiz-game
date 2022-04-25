/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  total: 0,
};

export const questions = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      state.list.push(...action.payload);
    },
    setAnswer: (state, action) => {
      const newQuestionsList = current(state.list).map((item, index) => {
        if (index !== action.payload.questionIndex) return item;

        const newItem = {
          ...item,
          chosen_answer: action.payload.chosenAnswer || '',
          isLocked: true,
        };
        return newItem;
      });
      state.list = newQuestionsList;
    },
    setPoints: (state, action) => {
      const difficulty = {
        easy: 8,
        medium: 10,
        hard: 15,
      };

      const newQuestionsList = current(state.list).map((item, index) => {
        if (index !== action.payload.questionIndex) return item;

        const { remainingSeconds } = action.payload;
        const { chosen_answer: chosenAnswer, correct_answer: correctAnswer } = item;

        const newItem = {
          ...item,
          points: chosenAnswer === correctAnswer
            ? remainingSeconds * difficulty[item.difficulty]
            : 0,
        };

        return newItem;
      });

      state.list = newQuestionsList;
      state.total = state.list.reduce((total, currQuestion) => {
        const newTotal = total + currQuestion.points;
        return newTotal;
      }, 0);
    },
    resetQuestions: () => initialState,
  },
});

export const {
  addQuestions,
  setAnswerAndPoints,
  resetQuestions,
  setAnswer,
  setPoints,
} = questions.actions;

export default questions.reducer;
