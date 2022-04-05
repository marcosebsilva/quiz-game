import { createSlice } from '@reduxjs/toolkit'

export const settings = createSlice({
  name: 'settings',
  initialState: {
    nickname: '',
    questionAmount: 5,
    difficulty: 'medium',
    theme: '',
  },
  reducers: {
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setQuestionAmount: (state, action) => {
      state.questionAmount = parseInt(action.payload);
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = parseInt(action.payload);
    },
},
})

export const { setNickname, setQuestionAmount, setDifficulty, setTheme } = settings.actions;

export default settings.reducer;