import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    value: 0,
    nav: false,
    name: "",
    email: "",
    message: "",
    loading: false,
    sent: null as null | boolean,
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
    setName: (state, action)=> {
      state.name = action.payload;
    },
    setEmail: (state, action)=>{
      state.email= action.payload;
    },
    setMessage: (state, action)=>{
      state.message = action.payload;
    },
    setLoading: (state, action)=>{
      state.loading = action.payload;
    },
    setSent: (state, action)=>{
      state.sent = action.payload;
    }


  },
});
export const { increment, decrement, setNav, setName, setEmail, setMessage, setLoading, setSent } = appSlice.actions;

export default appSlice.reducer;