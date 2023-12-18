import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// counterReducer.js
import axios from 'axios';
import {fetchContent} from '../actions/countAction';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const initialState = {
  entities: [],
  loading: false,
  error: null,
};
// export const fetchContent = createAsyncThunk(
//   'content/fetchContent',
//   async () => {
//     const res = await axios(BASE_URL);
//     const data = await res.data;
//     console.log(data, 'data....');
//     return data;
//   },
// );
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment: state => {
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value = state.value > 0 ? state.value - 1 : state.value;
    // },
    // reset: state => {
    //   state.value = 0;
    // },
  },
  extraReducers: builder => {
    builder.addCase(fetchContent.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default counterReducer = counterSlice.reducer;
