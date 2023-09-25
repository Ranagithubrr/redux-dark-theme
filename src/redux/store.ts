import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './theme-slice';


export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
