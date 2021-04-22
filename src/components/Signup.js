import { useState } from 'react';

const Login = (props) => {
  const [emailInput, setEmailInput] = useState('');

  function handleEmailChange(e) {
    setEmailInput(e.target.value);
    console.log('this is the email input', emailInput);
  }

  function removeOverlay(){
    const overlay = document.getElementById('tempOverlay');
    overlay.remove();
  }

  return (
    <div className='z-50 bg-white p-8 flex flex-col w-2/3 rounded-3xl h-5/6'>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Sign up</h1>
        <button onClick={removeOverlay}
        className="text-3xl font-thin mb-4">x</button>
      </div>
      <div className="flex">
        <form className="flex flex-col flex-wrap justify-center align-center space-y-2">
          <div className="flex flex-col">
            <label for='email' className="pl-4">email</label>
            <input
              id='email'
              type='email'
              onChange={(e) => handleEmailChange(e)}
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex flex-col">
            <label for='password' className="pl-4 ">password</label>
            <input id='password' type='password' className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"></input>
          </div>
          <div className="flex flex-col">
            <label for='email' className="pl-4">email</label>
            <input
              id='email'
              type='email'
              onChange={(e) => handleEmailChange(e)}
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex flex-col pb-4">
            <label for='password' className="pl-4 ">password</label>
            <input id='password' type='password' className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"></input>
          </div>
          <div className="flex w-100 justify-between ">
            <button className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 transition hover:bg-blue-400">login</button>
            <button className="bg-blue-200 text-blue-700 font-bold text-base rounded-full px-12 py-3 transition hover:bg-blue-400 hover:text-white">sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
