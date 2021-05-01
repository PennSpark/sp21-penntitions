import { Link, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import '../App.css';


// as a group: add transition, different hover color with transition hover:bg-blue-200

const Contact = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    function handleEmail(e) {
        e.preventDefault();
        // informs user if the email address isn't valid
        const email = document.getElementById("email");
        email.addEventListener("input", function (event) {
            if (email.validity.typeMismatch) {
                setErrorMessage("That's not a valid email address!")
            } else {
                setErrorMessage("")
            }
        });
    }

  return (
    <div className="flex flex-col overflow-x-hidden ">
      <Navbar className='flex' />
      <div className="w-screen flex justify-around items-center my-8 mb-36">
        <div className="flex flex-col justify-center items-start w-1/3 space-y-6">
          <h1 className="font-bold text-7xl">Contact us!</h1>
          <h2 className="text-4xl">Have a question? Complaint? Compliment? Let us know here.</h2>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 space-y-6 text-2xl pt-12">
            <form className="flex flex-col justify-center align-center space-y-2 w-full">
                <div className="flex flex-col">
                    <label for='email' className="pl-4">your email</label>
                    <input
                        id='email'
                        type='email'
                        className="rounded-full border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"
                    ></input>
                </div>
                <div className="flex flex-col pb-4">
                    <label for='message' className="pl-4 ">message</label>
                    <textarea id='message' type='message' className="rounded-xl border border-grey-400 outline-none px-4 py-2 focus:border-blue-400 focus:shadow-input"></textarea>
                </div>
                <div className="flex w-100 justify-between pb-4">
                    <button onClick={handleEmail} className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 transition hover:bg-blue-400 focus:outline-none">Send</button>
                </div>
                {errorMessage !== '' && 
                    <div  className="bg-red-100 border border-red-600 text-red-600 p-4 rounded-md">
                    {errorMessage}
                    </div>
                }
            </form>
        </div>
        
      </div>
      <div className='flex flex-col bg-blue-900 text-white '>
          <h2 className='font-bold text-4xl self-center p-6 pt-10'>The team!</h2>
        <div className='grid grid-cols-3 gap-6 p-10 justify-center content-center'>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Name</h3>
                <h3>Role</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci diam, ornare ut suscipit eget, sodales quis ante. Morbi elementum ac dolor ut efficitur. Sed vitae odio metus. Sed id elit nulla. Duis dictum aliquet justo sed accumsan. Phasellus vestibulum scelerisque varius. Vestibulum vel libero vel urn</p>
            </div>

        </div>
      </div>

    
    </div>
  );
};
export default Contact;
