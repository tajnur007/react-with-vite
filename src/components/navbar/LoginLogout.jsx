import { useDispatch } from "react-redux";
import { clearUserInfo } from "../../store/slice/userSlice";


const LoginLogout = (props) => {
  const { isUserLoggedIn, handleClick } = props;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUserInfo());
  }

  return (
    <div className="">
      {isUserLoggedIn ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="user-icon" onClick={() => handleClick()}></div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => handleClick()}>Login</button>
      )}
    </div>
  )
}

export default LoginLogout;