// store.js
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
// import {setupMiddleware} from './middleware';
import productReducer from '../slice/productSlice';
const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    productReducer: productReducer,
  },
});

export default store;
