import { useState } from "react";


export const useMyHook = (initValue) => {
  const [count, setCount] = useState(initValue);

  return [count, setCount];
};