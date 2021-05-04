import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
// import { UserFunctions } from '../userFunctions';
import { useAuth } from '../contexts/AuthContext';
import pennimage from '../Assets/upennImage.jpeg';

const MyAccount = (props) => {
    let history = useHistory();
    function handleEdit(e) {
        e.preventDefault();
        history.push('/editaccount')
    }
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className='z-50 bg-white p-8 flex w-2/3 rounded-3xl  border'>
        <div className='flex flex-col w-1/2'>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-4">My Account</h1>
            </div>
            <div className="flex flex-col py-3">
                <div className="pl-4">name</div>
                <p className='font-semibold text-xl pb-2'>name filler</p>
            </div>
            <hr />
            <div className="flex flex-col py-3">
                <div className="pl-4">email</div>
                <p className='font-semibold text-xl pb-2'>email filler</p>
            </div>
            <hr />
            <div className="flex flex-col py-3">
                <div className="pl-4">class year</div>
                <p className='font-semibold text-xl pb-2'>year filler</p>
            </div>
            <hr  />
            <div className="flex flex-col py-3">
                <div className="pl-4">major</div>
                <p className='font-semibold text-xl pb-2'>major filler</p>
            </div>
            <hr />
            <div className="flex flex-col py-3">
                <button onClick={handleEdit} className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 pb-2 transition hover:bg-blue-400">edit info</button>
            </div>
        </div>
        <div className='flex flex-col w-1/2 pl-4'>
            <div className="flex flex-col py-3">
                <div className="pl-4">anonymous</div>
                <p className='font-semibold text-xl pb-2'>anonymous filler</p>
            </div>
            <hr />
            <div className="flex flex-col py-3">
                <div className="pl-4">description</div>
                <p className='font-semibold text-xl pb-2'>description filler</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};
export default MyAccount;
