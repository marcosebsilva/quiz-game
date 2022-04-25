import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsReducer';
import questionsReducer from './slices/questionsReducer';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    questions: questionsReducer,
  },
});
