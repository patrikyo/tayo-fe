import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    
    value: 0,
    nav: false
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setNav: (state) => {
      state.nav = !state.nav;
    },
  },
});
export const { increment, decrement, setNav} = appSlice.actions;

export default appSlice.reducer;