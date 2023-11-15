import { useContext, useState } from 'react';
import LoginLogout from './LoginLogout';
import './Navbar.css';
import { ThemeContext } from '../../ThemeProvider';
import { NavLink } from 'react-router-dom';

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
      {/* <button onClick={changeTheme}>{theme}</button> */}
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/memo'>Memo</NavLink></li>
        <li><NavLink to='/reducer'>Reducer</NavLink></li>
        <li><NavLink to='/context'>Context</NavLink></li>
        <li><NavLink to='/hook'>Hook</NavLink></li>
      </ul>
      <LoginLogout
        isUserLoggedIn={isUserLoggedIn}
        handleClick={handleLoginLogout}
      />
    </nav>
  )
}

export default Navbar;