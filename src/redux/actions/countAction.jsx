import {createAsyncThunk} from '@reduxjs/toolkit';
import {axios} from '../../utils/axios';

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    try {
      const res = await axios.get('category/viewCategory');
      const data = res.data;

      return data;
    } catch (error) {
      console.error('Error fetching content:', error);
      throw error;
    }
  },
);
export const findContent = createAsyncThunk(
  'content/findContent/',
  async () => {
    try {
      const res = await axios.get('product/searchProduct/c');
      const data = res.data;

      return data;
    } catch (error) {
      console.error('Error fetching content:', error);
      throw error;
    }
  },
);
