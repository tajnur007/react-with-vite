import { createSlice } from '@reduxjs/toolkit';
import { counterState } from '../states/counterState';
import { counterReducers } from '../reducers/counterReducers';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: counterReducers,
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const CounterActions = counterSlice.actions;

export default counterSlice.reducer;