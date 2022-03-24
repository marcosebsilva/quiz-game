import { createSlice } from '@reduxjs/toolkit'

export const settings = createSlice({
  name: 'settings',
  initialState: {
      nickname: '',
      questionAmount: 5,
      difficulty: 'medium',
      themes: [],
      expertiseTheme: ''
  },
  reducers: {
      setSettings: (state, payload) => {
        state.nickname = payload.nickname;
        state.questionAmount = payload.questionAmount;
        state.difficulty = payload.difficulty;
        state.themes = [...payload.themes];
        state.expertiseTheme = payload.expertiseTheme;
      },
  },
})

export const { setSettings } = settings.actions

export default settings.reducer