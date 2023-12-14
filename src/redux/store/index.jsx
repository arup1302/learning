import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk';
import counterReducer from '../slice/counterSlice';
export const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
  },
  // middleware: [thunk],
});
