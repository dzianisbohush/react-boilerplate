import { handleActions } from 'redux-actions';
import { increaseCounter, decreaseCounter } from '../actions/counter';

const initialState = {
  value: 10
};

// REDUCERS
export default handleActions(
  {
    [increaseCounter](state) {
      return {
        ...state,
        value: state.value + 1
      };
    },
    [decreaseCounter](state) {
      return {
        ...state,
        value: state.value - 1
      };
    }
  },
  initialState
);
