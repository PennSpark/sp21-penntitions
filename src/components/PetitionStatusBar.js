import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';

import PetitionDisplayCard from './PetitionDisplayCard'

const PetitionStatusBar = (props) => {
    const { userData } = useAuth();

    const [created, setCreated] = useState();
    const [signed, setSigned] = useState();
    const [foundId, setFoundId] = useState("");
    const [loading, setLoading] = useState(true);

    let history = useHistory();

    useEffect(async()=>{
        // const tempCreated = new Map();
        // const tempSigned = new Map();
        
        // let createdPets =  userRef.collection("createdPetitions").get()
        // Promise.all(createdPets.docs.map(async(currPet) =>{
        //     console.log(db.collection("petitions").doc(currPet.petitionId).data())
        //     return  db.collection("petitions").doc(currPet.petitionId).data()
        // }))
        // .then((petsList) => {
        //     setCreated(petsList)
        // })
        await userData;
        const uid = window.localStorage.getItem("uid");
        const userRef = await db.collection("users").doc(uid);

        let createdPets = await userRef.collection("createdPetitions").get()
        
        Promise.all(createdPets.docs.map(async (currPet) => {
            const petId = currPet.id
            let foundPet = await db.collection("petitions").doc(petId).get()
            const data = {
              authorId: foundPet.data().authorId,
              author: foundPet.data().author,
              currentSign: foundPet.data().currentSign,
              isActive: foundPet.data().isActive,
              description: foundPet.data().description,
              link: foundPet.data().link,
              signGoal: foundPet.data().signGoal,
              signers: foundPet.data().signers,
              title: foundPet.data().title,
              dateCreatedSeconds: foundPet.data().dateCreated
            }
            return data;
          }))
          .then((createdList)=>{
              setCreated(createdList)
          })

        let signedPets = await userRef.collection("signedPetitions").get()
        
        Promise.all(signedPets.docs.map(async (currPet) => {
            const petId = currPet.id
            let foundPet = await db.collection("petitions").doc(petId).get()
            const data = {
              authorId: foundPet.data().authorId,
              author: foundPet.data().author,
              currentSign: foundPet.data().currentSign,
              isActive: foundPet.data().isActive,
              description: foundPet.data().description,
              link: foundPet.data().link,
              signGoal: foundPet.data().signGoal,
              signers: foundPet.data().signers,
              title: foundPet.data().title,
              dateCreatedSeconds: foundPet.data().dateCreated
            }
            return data;
          }))
          .then((signedList)=>{
              console.log("signed list: ", signedList)
              setSigned(signedList)
          })
        setLoading(false); 
        
        
        
               
    }, [])
    function handleCreate(e) {
        e.preventDefault();
        history.push('/createpetition')
    }

    if (created === undefined || signed === undefined) {
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
       {created.map((value)=>{
           return <PetitionDisplayCard title={value.title} date={value.dateCreatedSeconds} currentSign={value.currentSign}/>
       })}
       <button onClick={handleCreate}className='rounded-full bg-blue-200 text-blue-700  font-bold py-1 w-1/2 text-center mx-4 focus:outline-none transition hover:bg-blue-100 mt-4'>+ CREATE NEW</button>
       <hr className='w-5/6 self-center border-.5 my-4'/>
        <div className='flex justify-between px-4 py-2 mb-4'>
            <h3 className='font-bold text-2xl  w-100'>Signed petitions</h3>
        </div>
        {signed.map(( value)=>{
           return <PetitionDisplayCard title={value.title} date={value.dateCreatedSeconds} currentSign={value.currentSign}/>
       })}
    </div>;
  };
  export default PetitionStatusBar;