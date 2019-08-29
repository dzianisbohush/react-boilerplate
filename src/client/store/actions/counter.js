import { createAction } from 'redux-actions';

// CONSTANTS
export const COUNTER_INCREASE_COUNTER = 'COUNTER_INCREASE_COUNTER';
export const COUNTER_DECREASE_COUNTER = 'COUNTER_DECREASE_COUNTER';

// ACTION CREATORS
export const increaseCounter = createAction(COUNTER_INCREASE_COUNTER);
export const decreaseCounter = createAction(COUNTER_DECREASE_COUNTER);
