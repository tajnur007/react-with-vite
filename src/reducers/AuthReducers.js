export const signUpFormReducer = (curState, action) => {
  // console.log('Action:::', action);
  const { key, value } = action;

  return ({
    ...curState,
    [key]: value,
  });
}