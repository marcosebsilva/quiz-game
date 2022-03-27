import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsReducer';
import questionsReducer from './slices/questionsReducer';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    questions: questionsReducer,
  },
})