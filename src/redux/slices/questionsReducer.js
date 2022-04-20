/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';

export const questions = createSlice({
  name: 'questions',
  initialState: {
    list: [],
    total: 0,
  },
  reducers: {
    addQuestions: (state, action) => {
      state.list.push(...action.payload);
    },
    clearQuestions: (state) => {
      state.list = [];
      state.total = 0;
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
      const newQuestionsList = current(state.list).map((item, index) => {
        if (index !== action.payload.questionIndex) return item;

        const { remainingSeconds } = action.payload;
        const { chosen_answer: chosenAnswer, correct_answer: correctAnswer } = item;

        const newItem = {
          ...item,
          points: chosenAnswer === correctAnswer
            ? remainingSeconds * 15
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
  },
});

export const {
  addQuestions,
  setAnswerAndPoints,
  clearQuestions,
  setAnswer,
  setPoints,
} = questions.actions;

export default questions.reducer;
