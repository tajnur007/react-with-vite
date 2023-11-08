import { useContext, useState } from 'react';
import LoginLogout from './LoginLogout';
import './Navbar.css';
import { ThemeContext } from '../../App';

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleLoginLogout = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <nav>
      <div className="">K.T.I Lab</div>
      <button onClick={changeTheme}>{theme}</button>
      <LoginLogout
        isUserLoggedIn={isUserLoggedIn}
        handleClick={handleLoginLogout}
      />
    </nav>
  )
}

export default Navbar;