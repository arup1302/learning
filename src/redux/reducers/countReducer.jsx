// reducers/index.js
import {combineReducers} from '@reduxjs/toolkit';
import usersReducer from '../slice/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  // Add other reducers here if any
});

export default rootReducer;
