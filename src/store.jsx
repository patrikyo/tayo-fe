import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './features/rootSlice';

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});

export default store;