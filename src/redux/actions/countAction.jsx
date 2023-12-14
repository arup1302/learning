// import {COUNT_DECRESE, COUNT_INCRESE, COUNT_RESET} from '../Constant';

import {decrement, increment, reset} from '../slice/counterSlice';

// import {decrement, increment, reset} from '../slice/counterSlice';

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

export const incrementAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 100);
};

export const decrementAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrement());
  }, 100);
};
export const resetAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(reset());
  }, 100);
};
