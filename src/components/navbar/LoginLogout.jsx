

const LoginLogout = (props) => {
  const { isUserLoggedIn, handleClick } = props;

  // if (isUserLoggedIn) {
  //   return (
  //     <div className="user-icon"></div>
  //   );
  // }

  // return (
  //   <button>Login</button>
  // );

  return (
    <div className="">
      {isUserLoggedIn ? (
        <div className="user-icon" onClick={() => handleClick()}></div>
      ) : (
        <button onClick={() => handleClick()}>Login</button>
      )}
    </div>
  )
}

export default LoginLogout;