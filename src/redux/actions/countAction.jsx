// import {COUNT_DECRESE, COUNT_INCRESE, COUNT_RESET} from '../Constant';

// import {decrement, increment, reset} from '../slice/counterSlice';

// import {decrement, increment, reset} from '../slice/counterSlice';
// import createAsyncThunk from '@reduxjs/toolkit';
// export const increment = () => {
//   return {
//     type: COUNT_INCRESE,
//   };
// };
// export const decrement = () => {
//   return {
//     type: COUNT_DECRESE,
//   };
// };
// export const reset = () => {
//   return {
//     type: COUNT_RESET,
//   };
// };

// import {increment, decrement,decrement} from '../reducers/counterSlice';

// counterActions.js

// export const incrementAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(increment());
//   }, 100);
// };

// export const decrementAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(decrement());
//   }, 100);
// };
// export const resetAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(reset());
//   }, 100);
// };
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'; // Replace this with your actual API endpoint

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    try {
      const res = await axios.get(BASE_URL);
      const data = res.data; // No need to await here, as res.data is already a promise
      console.log(data, 'data....');
      return data;
    } catch (error) {
      // Handle errors if necessary
      console.error('Error fetching content:', error);
      throw error; // Rethrow the error to mark the thunk as failed
    }
  },
);
