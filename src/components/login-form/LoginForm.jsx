import { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {

  const [value, setValue] = useState(0);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event, fieldName) => {
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value
    });
  }

  const togglePassVisibility = () => {
    setIsShowPassword(!isShowPassword);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setValue(value + 5);
  }

  return (
    <div className='form-container'>
      {/* Value: {value} */}
      <form onSubmit={handleFormSubmit}>
        {/* Username Input  */}
        <div>
          <span>Username:</span>
          <input className='form-input' type="text" onChange={(e) => handleInputChange(e, 'username')} />
        </div>

        {/* Password Input  */}
        <div>
          <span>Password:</span>
          <input className='form-input' type={isShowPassword ? 'text' : 'password'} onChange={(e) => handleInputChange(e, 'password')} />
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