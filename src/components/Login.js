import { useState } from 'react';

const Login = (props) => {
  const [emailInput, setEmailInput] = useState('');

  function handleEmailChange(e) {
    setEmailInput(e.target.value);
    console.log('this is the email input', emailInput);
  }

  return (
    <div>
      <form>
        <label for='email'>email</label>
        <input
          id='email'
          type='email'
          onChange={(e) => handleEmailChange(e)}
        ></input>
        <label for='password'>password</label>
        <input id='password' type='password'></input>
        <button>log in!</button>
        <button>sign up</button>
      </form>
    </div>
  );
};
export default Login;
