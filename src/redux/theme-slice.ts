import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  mode: 'light' | 'dark';
}

const initialState: DarkModeState = {
  mode: 'light',
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
