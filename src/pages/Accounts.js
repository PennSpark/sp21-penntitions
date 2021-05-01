import { useState } from 'react';
import {Link} from 'react-router-dom';
// import { UserFunctions } from '../userFunctions';
import { useAuth } from '../contexts/AuthContext';
import pennimage from '../Assests/upennImage.jpeg';

const Account = (props) => {
  const [emailInput, setEmailInput] = useState('');
  const { signup } = useAuth();

  async function handleAccount(e) {
    e.preventDefault();
    console.log("signing up a user! begin");
    const email = document.getElementById("email").value;
    // validate password
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const display = document.getElementById("classYear").value;
    const major = document.getElementById("major").value;
    try {
      await signup(email, password, firstName, lastName,display, major);
    } catch(error) {
      console.log('error', error)
    }
    
    console.log("signing up a user! end");
  }


  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className='z-50 bg-white p-8 flex flex-col w-2/3 rounded-3xl h-5/6 border'>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Account</h1>
        {/* <button 
        className="text-3xl font-thin mb-4">x</button> */}
      </div>
      <form className="flex justify-around max-width space-x-2">
        <div className="flex flex-col flex-wrap justify-start items-stretch space-y-2 w-2/3">
          <div className="flex flex-col">
            <label for='firstName' className="pl-4">first name</label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex flex-col">
            <label for='lastName' className="pl-4">last name</label>
            <input
              id='lastName'
              name='lastName'
              type='text'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex flex-col">
            <label for='email' className="pl-4">email</label>
            <input
              id='email'
              name="email"
              type='email'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex flex-col">
            <label for='username' className="pl-4">username</label>
            <input
              id='username'
              name="username"
              type='username'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex flex-col pb-4">
            <label for='password' className="pl-4 ">password</label>
            <input id='password' name="password" type='password' className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"></input>
          </div>
          <div className="flex flex-col pb-4">
            <label for='confPassword' className="pl-4 ">confirm password</label>
            <input id='confPassword' name="confPassword" type='password' className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"></input>
          </div>
          <div className="flex w-100 justify-items-stretch justify-between space-x-2 pt-4">
            <button onClick={handleAccount} className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 transition hover:bg-blue-400">Save</button>
          </div>
          
        </div>
        <div className="flex flex-col flex-wrap justify-start items-stretch space-y-2 w-2/3">
        <div className="flex flex-col">
            <label for='profile' className="pl-4">my profile picture</label>
            <img 
                src = {pennimage} 
                id = "profile" 
                name = "profile" 
                width = "350"
                className="rounded-full border border-grey-400 outline-none px-2 py-2 focus:border-blue-400 focus:shadow-input">    
            </img>
          </div>
          <div className="flex flex-col">
            <label for='display' className="pl-4">display name</label>
            <input
              id='display'
              name='display'
              type='text'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex flex-col">
            <label for='about' className="pl-4">about Me</label>
            <input
              id='about'
              name='about'
              type='text'
              className="rounded-full border border-grey-400 outline-none px-4 py-10 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};
export default Account;
