import {createSlice} from '@reduxjs/toolkit';
// counterReducer.js

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value = state.value > 0 ? state.value - 1 : state.value;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;
