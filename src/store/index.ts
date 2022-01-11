import { configureStore } from '@reduxjs/toolkit';
import counter from '../slices/counterSlice';

export const store = configureStore({
  reducer: {
      counter: counter
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;