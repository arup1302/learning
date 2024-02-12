import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {findContent} from '../actions/countAction';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const initialState = {
  entities: [],
  loading: false,
  error: null,
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(findContent.pending, state => {
      state.loading = true;
    });
    builder.addCase(findContent.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
    builder.addCase(findContent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default productReducer = productSlice.reducer;
