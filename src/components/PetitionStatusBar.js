import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';

import PetitionDisplayCard from './PetitionDisplayCard'

const PetitionStatusBar = (props) => {
    const { userId } = useAuth();

    const [created, setCreated] = useState();
    const [signed, setSigned] = useState();
    const [loading, setLoading] = useState(true);

    let history = useHistory();

    useEffect(()=>{
        const tempCreated = new Map();
        const tempSigned = new Map();
        if (userId !== "") {
            const userRef = db.collection("users").doc(userId);
            userRef.collection("createdPetitions").get().then((querySnapshot) => {
                setCreated(querySnapshot.docs)
                // querySnapshot.forEach((doc) => {
                //     // doc.data() is never undefined for query doc snapshots
                //     console.log(doc.id, " => ", doc.data());
                //     const currPetRef = db.collection("petitions").doc(doc.id)
                //     tempCreated.set(doc.id, currPetRef.data());
                // });
            });
            userRef.collection("signedPetitions").get().then((querySnapshot) => {
                // querySnapshot.forEach((doc) => {
                //     // doc.data() is never undefined for query doc snapshots
                //     console.log(doc.id, " => ", doc.data());
                //     const currPetRef = db.collection("petitions").doc(doc.id)
                //     tempSigned.set(doc.id, currPetRef);
                // });
                setSigned(querySnapshot.docs)
            });
            setCreated(tempCreated);
            setSigned(tempSigned);
            setLoading(false); 
        }
               
    }, [])
    function handleCreate(e) {
        e.preventDefault();
        history.push('/createpetition')
    }

    if (loading) {
        return <div className='w-1/3 flex flex-col shadow-right'>
                    <h3 className='font-bold text-2xl shadow-below px-4 py-2 w-100 text-center mb-4'>Status</h3>
                    <div className='flex justify-between px-4 py-2 mb-4'>
                        <h3 className='font-bold text-2xl  w-100'>My petitions</h3>
                        <h6 className='self-end'>supporters</h6>
                    </div>
                    <div>Loading!</div>
                <button onClick={handleCreate}className='rounded-full bg-blue-200 text-blue-700  font-bold py-1 w-1/2 text-center mx-4 focus:outline-none transition hover:bg-blue-100 mt-4'>+ CREATE NEW</button>
                <hr className='w-5/6 self-center border-.5 my-4'/>
                    <div className='flex justify-between px-4 py-2 mb-4'>
                        <h3 className='font-bold text-2xl  w-100'>Signed petitions</h3>
                    </div>
                </div>
    }

    return <div className='w-1/3 flex flex-col shadow-right'>
        <h3 className='font-bold text-2xl shadow-below px-4 py-2 w-100 text-center mb-4'>Status</h3>
        <div className='flex justify-between px-4 py-2 mb-4'>
            <h3 className='font-bold text-2xl  w-100'>My petitions</h3>
            <h6 className='self-end'>supporters</h6>
        </div>
       {created.forEach((value)=>{
           return <PetitionDisplayCard title={value}/>
       })}
       <button onClick={handleCreate}className='rounded-full bg-blue-200 text-blue-700  font-bold py-1 w-1/2 text-center mx-4 focus:outline-none transition hover:bg-blue-100 mt-4'>+ CREATE NEW</button>
       <hr className='w-5/6 self-center border-.5 my-4'/>
        <div className='flex justify-between px-4 py-2 mb-4'>
            <h3 className='font-bold text-2xl  w-100'>Signed petitions</h3>
        </div>
        {signed.forEach(( value)=>{
           return <PetitionDisplayCard title={value}/>
       })}
    </div>;
  };
  export default PetitionStatusBar;