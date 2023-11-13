import { useEffect, useReducer, useState } from "react";
import { signUpFormReducer } from "../../reducers/AuthReducers";
import { initUserValue } from "../../utils/Constants";


const ReducerSolution = () => {
  const [user, userDispatch] = useReducer(signUpFormReducer, initUserValue);

  // useEffect(() => {
  //   console.log('State::', state);
  // }, [state]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('User value:', user);
  };

  const commonHandler = (event) => {
    const { name, value } = event.target;
    userDispatch({
      key: name,
      value: value,
    });
  }

  return (
    <div style={{ height: '90vh', padding: '50px 100px' }}>
      <form onSubmit={handleFormSubmit}>
        <p>
          Name: <input name="name" onChange={commonHandler} type="text" />
        </p>
        <p>
          Email: <input name="email" onChange={commonHandler} type="email" />
        </p>
        <p>
          Mobile: <input name="mobile" onChange={commonHandler} type="text" />
        </p>
        <p>
          Country: <input name="country" onChange={commonHandler} type="text" />
        </p>
        <p>
          Age: <input name="age" onChange={commonHandler} type="number" />
        </p>
        <p>
          Profession: <input name="profession" onChange={commonHandler} type="text" />
        </p>
        <div>
          <button type="submit"> Submit Form </button>
        </div>
      </form>
    </div>
  )
}

export default ReducerSolution;