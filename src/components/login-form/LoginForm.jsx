import { useContext, useId, useState } from 'react';
import './LoginForm.css';
import { PropertyContext } from '../ContextSolution';

const LoginForm = (props) => {
  const { isComingFromProvider } = props;
  const pProps = useContext(PropertyContext);

  if (isComingFromProvider) {
    return (<>Provider Property: {'pProps'}</>);
  }

  const [value, setValue] = useState(0);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const usernameId = useId();
  const passwordId = useId();

  const handleInputChange = (key, value) => {
    console.log(key, value);
    setUserInfo({
      ...userInfo,
      [key]: value
    });
    // console.log(userInfo)
  }

  const togglePassVisibility = () => {
    setIsShowPassword(!isShowPassword);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('www.google.com', {
      method: 'POST',
      body: JSON.stringify(userInfo)
    });
    setValue(value + 5);
  }

  return (
    <div className='form-container'>
      {/* Value: {value} */}
      <form onSubmit={handleFormSubmit}>
        {/* Username Input  */}
        <div>
          <label htmlFor={usernameId}>Username:</label>
          <input id={usernameId} className='form-input' type="text" onBlur={(e) => handleInputChange('username', e.target.value)} />
        </div>

        {/* Password Input  */}
        <div>
          <label htmlFor={passwordId}>Password:</label>
          <input id={passwordId} className='form-input' type={isShowPassword ? 'text' : 'password'} onBlur={(e) => handleInputChange('password', e.target.value)} />
          <button className='' onClick={togglePassVisibility}>eye</button>
        </div>

        <button type='submit'>Login</button>
      </form>

      <div>
        Username: {userInfo.username} <br />
        Password: {userInfo.password}
      </div>
    </div>
  )
}

export default LoginForm