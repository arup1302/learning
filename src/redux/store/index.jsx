// store.js
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import {setupMiddleware} from './middleware';

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
  },
});
setupMiddleware(store);
export default store;
