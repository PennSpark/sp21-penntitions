import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';

function verifyPennEmail(email) {
  let pattern = /upenn.edu/i
  let result = email.search(pattern);

  // returns false if email does not contain upenn.edu or it is not at the end of the email
  if (result === -1 || email.length - result !== 9) {
    return false;
  }

  return true;
}

const Signup = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [sentLink, setSentLink] = useState(false);
  const { signup, sendEmailVerification } = useAuth();
  // const { checkLoginWithEmail } = useAuth();
  let history = useHistory();
  
  async function handleSignup(e) {
    e.preventDefault();
    console.log("signing up a user! begin");

    // retrieve information from input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confPassword = document.getElementById("confPassword").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const year = document.getElementById("classYear").value;
    const school = document.getElementById("school").value;
    const major = document.getElementById("major").value;

    // validate password
    if (password != confPassword) {
      setErrorMessage("Passwords don't match!")
      return
    }

    if (!verifyPennEmail(email)) {
      setErrorMessage("Please use a valid Penn email address")
      return
    }

    try {
      await signup(email, password, firstName, lastName, year, school, major);
      const root = window.location.href.replace("signup", "login")
      await sendEmailVerification(root);
      setSentLink(true);
    } catch(error) {
      console.log('error', error)
    }
    
    console.log("signing up a user! end");
  }

  

  // useEffect(async ()=>{
  //   if (await checkLoginWithEmail(window.location.href)) {
  //     history.push('/home')
  //   }
  // }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {console.log("LOCATION: ", window.location.href)}
      <div className='z-50 bg-white p-8 flex flex-col w-2/3 rounded-3xl h-5/6 border'>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Sign up</h1>
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
          <div className="flex flex-col pb-4">
            <label for='password' className="pl-4 ">password</label>
            <input id='password' name="password" type='password' className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"></input>
          </div>
          <div className="flex flex-col pb-4">
            <label for='confPassword' className="pl-4 ">confirm password</label>
            <input id='confPassword' name="confPassword" type='password' className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"></input>
          </div>
          
        </div>
        <div className="flex flex-col flex-wrap justify-start items-stretch space-y-2 w-2/3">
          <div className="flex flex-col">
            <label for="classYear"  className="pl-4">class year</label>
            <select name="classYear" id="classYear" className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input">
              <option disabled selected value className="hidden">  </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label for="school"  className="pl-4">school</label>
            <select name="school" id="school" className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input">
            <option disabled selected value className="hidden"> </option>
              <option value="college">College</option>
              <option value="engineering">Engineering</option>
              <option value="nursing">Nursing</option>
              <option value="wharton">Wharton</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label for='major' className="pl-4">major</label>
            <input
              id='major'
              name='major'
              type='text'
              className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
            ></input>
          </div>
          <div className="flex w-100 justify-items-stretch justify-between space-x-2 py-6">
            <button onClick={handleSignup} className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 transition hover:bg-blue-400 focus:outline-none">sign up</button>
            <p className='w-1/2'>Already have an account? <Link className='text-blue-700 hover:text-blue-400'to='/login'>Login in!</Link></p>
          </div>
          {errorMessage !== '' && 
            <div  className="bg-red-100 border border-red-600 text-red-600 p-4 rounded-md">
              {errorMessage}
            </div>
          }
          {sentLink && 
            <div className="bg-green-100 border border-green-600 text-green-600 p-4 rounded-md"> 
              An email verification was sent!
            </div>
          }
          <div>

          </div>
        </div>
      </form>
      </div>
    </div>
  );
};
export default Signup;