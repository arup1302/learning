const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT_INCRESE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'COUNT_DECRESE':
      return {
        ...state,
        // count:state.count-1,
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    case 'COUNT_RESET':
      return {
        ...state,
        // count:state.count=0,
        count: 0,
      };
    default:
      return state;
  }
};
