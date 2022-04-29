/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nickname: '',
  questionAmount: 5,
  difficulty: 'easy',
  theme: '',
};

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setQuestionAmount: (state, action) => {
      const newAmount = parseInt(action.payload, 10);
      state.questionAmount = newAmount > 20 ? 20 : newAmount;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = parseInt(action.payload, 10);
    },
    resetSettings: () => initialState,
  },
});

export const {
  setNickname,
  setQuestionAmount,
  setDifficulty,
  resetSettings,
  setTheme,
} = settings.actions;

export default settings.reducer;
