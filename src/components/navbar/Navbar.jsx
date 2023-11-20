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
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/memo'><li>Memo</li></NavLink>
        <NavLink to='/reducer'><li>Reducer</li></NavLink>
        <NavLink to='/context'><li>Context</li></NavLink>
        <NavLink to='/hook'><li>Hook</li></NavLink>
        <NavLink to='/todos'><li>Todos</li></NavLink>
      </ul>
      <LoginLogout
        isUserLoggedIn={isUserLoggedIn}
        handleClick={handleLoginLogout}
      />
    </nav>
  )
}

export default Navbar;