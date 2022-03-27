import { createSlice } from '@reduxjs/toolkit'

export const settings = createSlice({
  name: 'settings',
  initialState: {
      nickname: '',
      questionAmount: 5,
      difficulty: 'medium',
      themes: [],
      expertise: '',
      sessionToken: '',
  },
  reducers: {
      setNickname: (state, action) => {
        state.nickname = action.payload;
      },
      setQuestionAmount: (state, action) => {
        state.questionAmount = action.payload;
      },
      setDifficulty: (state, action) => {
        state.difficulty = action.payload;
      },
      toggleTheme: (state, action) => {
        const themeIsChecked = state.themes.some((theme) => theme === action.payload);

        if (themeIsChecked) {
          const themeIndex = state.themes.indexOf(action.payload);
          state.themes.splice(themeIndex, 1);
        } else {
          state.themes.push(action.payload);
        }
      },
      setExpertise: (state, action) => {
        state.expertise = action.payload;
      },
  },
})

export const { setNickname, setQuestionAmount, setDifficulty, toggleTheme, setExpertise } = settings.actions

export default settings.reducer