export const counterReducers = {
  increment: (counter) => {
    counter.value = counter.value + 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
  incrementByAmount: (state, action) => {
    state.value += action.payload;
  }
};