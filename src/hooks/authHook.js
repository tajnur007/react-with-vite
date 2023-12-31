import { useState } from "react";
import { setUserDetials } from '../utils/Helpers'

const myUser = {
  name: 'Tajnur',
  email: 'abc@gmail.com',
  phone: '123456',
};

export const useAuthSession = () => {
  const [status, setStaus] = useState('loading');
  const [user, setUser] = useState(null);

  setTimeout(() => {
    const value = Math.floor(Math.random() * 50);
    if (value % 2 === 1) {
      setStaus('unauthorized');
      setUser(null);
    } else {
      setStaus('authorized');
      setUserDetials(myUser);
      setUser(myUser);
    }
  }, 3000);

  return {
    status: status,
    user: user,
  };
}