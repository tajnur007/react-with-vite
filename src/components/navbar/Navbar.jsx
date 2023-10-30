import { useState } from 'react';
import LoginLogout from './LoginLogout';
import './Navbar.css';

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };

  return (
    <nav>
      <div className="">K.T.I Lab</div>
      <LoginLogout
        isUserLoggedIn={isUserLoggedIn}
        handleClick={handleLoginLogout}
      />
    </nav>
  )
}

export default Navbar;