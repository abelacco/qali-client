import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './features/client/clientSlice';

export const store = configureStore({
  reducer:{
    client: clientReducer
  }
})