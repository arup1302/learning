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

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
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
