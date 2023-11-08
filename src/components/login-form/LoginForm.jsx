import { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {

  const [value, setValue] = useState(0);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [userInfo, setUserInfo] = useState({});

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
          <span>Username:</span>
          <input className='form-input' type="text" onBlur={(e) => handleInputChange('username', e.target.value)} />
        </div>

        {/* Password Input  */}
        <div>
          <span>Password:</span>
          <input className='form-input' type={isShowPassword ? 'text' : 'password'} onBlur={(e) => handleInputChange('password', e.target.value)} />
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