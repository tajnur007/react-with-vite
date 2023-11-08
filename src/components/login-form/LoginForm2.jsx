import { useRef, useState } from 'react';
import './LoginForm.css';

const LoginForm2 = () => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const togglePassVisibility = () => {
    setIsShowPassword(!isShowPassword);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };

    // console.log('Username: ', usernameRef.current.value);
    // console.log('Password: ', passwordRef.current.value);
    console.log('Payload:', payload);
    fetch('www.google.com', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }

  return (
    <div className='form-container'>
      {/* Value: {value} */}
      <form onSubmit={handleFormSubmit}>
        {/* Username Input  */}
        <div>
          <span>Username:</span>
          <input ref={usernameRef} className='form-input' type="text" />
        </div>

        {/* Password Input  */}
        <div>
          <span>Password:</span>
          <input ref={passwordRef} className='form-input' type={isShowPassword ? 'text' : 'password'} />
          <button className='' onClick={togglePassVisibility}>eye</button>
        </div>

        <button type='submit'>Login</button>
      </form>

    </div>
  )
}

export default LoginForm2;