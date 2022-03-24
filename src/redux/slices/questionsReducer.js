import { createSlice } from '@reduxjs/toolkit'

export const questions = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
      setQuestions: (state, payload) => {
        state = [...payload];
      },
  },
})

export const { setQuestions } = questions.actions

export default questions.reducer