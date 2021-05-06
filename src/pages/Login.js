import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();
  let history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    // gets user inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const status = await login(email, password)      
    .then(() => {
      // Signed in successfully
      console.log("logged in user! (login level) ")
      history.push('home');
    })
    .catch((error) => {
      console.log("error: (login)", error)
      if (error.code === "auth/wrong-password") {
        setErrorMessage("Wrong password, try again!")
      }
      if (error.code === "auth/invalid-email" || error.code === "auth/user-not-found") {
        setErrorMessage("That account doesn't exist!")
      }
      if (error.code === "auth/too-many-requests") {
        setErrorMessage("Too many attempts! Come back in a bit and try again.")
      }
    })
  }
  

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className='z-50 bg-white p-8 flex flex-col w-1/3 rounded-3xl border'>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        {/* <button onClick={removeOverlay}
        className="text-3xl font-thin mb-4">x</button> */}
      </div>
      <form className="flex flex-col justify-center align-center space-y-2">
        <div className="flex flex-col">
          <label for='email' className="pl-4">email</label>
          <input
            id='email'
            type='email'
            className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
          ></input>
        </div>
        <div className="flex flex-col pb-4">
          <label for='password' className="pl-4 ">password</label>
          <input id='password' type='password' className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"></input>
        </div>
        
        <div className="flex w-100 justify-between pb-4">
          <button onClick={handleLogin} className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 transition hover:bg-blue-400 focus:outline-none">login</button>
          <button className="bg-blue-200 text-blue-700 font-bold text-base rounded-full px-12 py-3 transition hover:bg-blue-400 hover:text-white focus:outline-none">sign up</button>
        </div>
        {errorMessage !== '' && 
            <div  className="bg-red-100 border border-red-600 text-red-600 p-4 rounded-md">
              {errorMessage}
            </div>
          }
      </form>
      </div>
    </div>
    
  );
};
export default Login;