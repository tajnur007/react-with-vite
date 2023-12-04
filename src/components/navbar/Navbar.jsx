import { useContext, useEffect, useState } from 'react';
import LoginLogout from './LoginLogout';
import './Navbar.css';
import { ThemeContext } from '../../ThemeProvider';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../services/authService';
import { setUserInfo } from '../../store/slice/userSlice';

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const user = useSelector(store => store.userData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      setIsUserLoggedIn(false);
    } else {
      setIsUserLoggedIn(true);
    }
  }, [user])


  const handleLoginLogout = () => {
    getUserInfo(4).then(data => {
      dispatch(setUserInfo(data));
    });
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
        <NavLink to='/counter'><li>Counter</li></NavLink>
      </ul>
      <LoginLogout
        isUserLoggedIn={isUserLoggedIn}
        handleClick={handleLoginLogout}
      />
    </nav>
  )
}

export default Navbar;