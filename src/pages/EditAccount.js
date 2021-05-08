import { useState } from 'react';
import {Link} from 'react-router-dom';
// import { UserFunctions } from '../userFunctions';
import { useAuth } from '../contexts/AuthContext';
import pennimage from '../Assets/upennImage.jpeg';
import UserNavbar from '../components/UserNavbar';

const Account = (props) => {
  const [emailInput, setEmailInput] = useState('');
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <div className="w-screen h-screen flex flex-col items-center space-y-4">
        <UserNavbar />
        
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
            <label for='year' className="pl-4">year</label>
            <input
              id='year'
              name="year"
              type='number'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex flex-col">
            <label for='major' className="pl-4">major</label>
            <input
              id='major'
              name="major"
              type='text'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          
          
        </div>
        <div className="flex flex-col flex-wrap justify-start items-stretch space-y-2 w-2/3">
          <div className="flex flex-col">
          <p className="pl-4">Anonymous?</p>
          <div className="flex">
            <div className="w-1/2 float-left pl-4">
                <input
                  id="yesAnon"
                  name="yesAnon"
                  type="radio"
                  value="yes"
                  className="rounded-full border border-grey-400">
                </input>
                <label for="yesAnon" className="pl-4">Yes</label>
                <p className="text-gray-400 text-sm">I want to remain anonymous</p>
            </div>
            <div className="w-1/2 float-left pl-4">
                <input
                  id="noAnon"
                  name="noAnon"
                  type="radio"
                  value="no"
                  className="rounded-full border border-grey-400">
                </input>
                <label for="noAnon" className="pl-4">No</label>
                <p className="text-gray-400 text-sm">I do not want to remain anonymous</p>
            </div>
          </div>
          </div>
          <div className="flex flex-col">
            <label for='description' className="pl-4">description</label>
            <textarea
              id='description'
              name="description"
              type='text'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></textarea>
          </div>
          <div className="flex flex-col py-3">
                <button onClick={handleSubmit} className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 pb-2 transition hover:bg-blue-400">edit info</button>
          </div>
        {/* <div className="flex flex-col">
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
          </div> */}
        </div>
      </form>
      </div>
    </div>
  );
};
export default Account;
