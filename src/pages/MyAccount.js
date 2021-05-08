import { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { db } from '../firebase';
// import { UserFunctions } from '../userFunctions';
import { useAuth } from '../contexts/AuthContext';
import pennimage from '../Assets/upennImage.jpeg';
import UserNavbar from '../components/UserNavbar';

const MyAccount = (props) => {
    const [userInfo, setUserInfo] = useState();
    let history = useHistory();

    function handleEdit(e) {
        e.preventDefault();
        history.push('/editaccount')
    }

    useEffect(async()=>{
        const uid = window.localStorage.getItem("uid");
        const userRef = await db.collection("users").doc(uid).get();
        const data = {
            name: userRef.data().firstName + " " + userRef.data().lastName,
            year: userRef.data().year,
            major: userRef.data().major,
            email: userRef.data().email,
            description: userRef.data().description,
            isAnonymous: userRef.data().isAnonymous,
            school: userRef.data().school
        }
        setUserInfo(data)
    }, [])

  return (
    <div className="w-screen h-screen flex flex-col items-center space-y-4 overflow-x-hidden">
        <UserNavbar />
        
      <div className='z-50 bg-white p-8 flex w-2/3 rounded-3xl  border '>
        <div className='flex flex-col w-1/2'>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-4">My Account</h1>
            </div>
            <div className="flex flex-col py-3">
                <div className="pl-4">name</div>
                <p className='font-semibold text-xl pb-2'>{userInfo ? userInfo.name : "loading name"}</p>
            </div>
            <hr />
            <div className="flex flex-col py-3">
                <div className="pl-4">email</div>
                <p className='font-semibold text-xl pb-2'>{userInfo ? userInfo.email : "loading email"}</p>
            </div>
            <hr />
            <div className="flex flex-col py-3">
                <div className="pl-4">class year</div>
                <p className='font-semibold text-xl pb-2'>{userInfo ? userInfo.year : "loading year"}</p>
            </div>
            <hr  />
            <div className="flex flex-col py-3">
                <div className="pl-4">major</div>
                <p className='font-semibold text-xl pb-2'>{userInfo ? userInfo.major : "loading major"}</p>
            </div>
            <hr />
            <div className="flex flex-col py-3">
                <button onClick={handleEdit} className="bg-blue-700 text-white font-bold text-base rounded-full px-12 py-3 pb-2 transition hover:bg-blue-400">edit info</button>
            </div>
        </div>
        <div className='flex flex-col w-1/2 pl-4'>
            <div className="flex flex-col py-3">
                <div className="pl-4">anonymous</div>
                <p className='font-semibold text-xl pb-2'>{userInfo ? (userInfo.isAnonymous ? "yes" : "no") : "loading anonymous"}</p>
            </div>
            <hr />
            <div className="flex flex-col py-3">
                <div className="pl-4">description</div>
                <p className='font-semibold text-xl pb-2'>{userInfo ? (userInfo.description ? userInfo.description : "You haven't written a bio yet!") : "loading description"}</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};
export default MyAccount;
