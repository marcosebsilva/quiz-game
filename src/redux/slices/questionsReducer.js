import { createSlice } from '@reduxjs/toolkit'

export const questions = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    addQuestions: (state, action) => {
      state.push(...action.payload)
    },
  },
})

export const { addQuestions } = questions.actions

export default questions.reducer