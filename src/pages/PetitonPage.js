import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import PetitionStatusBar from '../components/PetitionStatusBar';

import UserNavbar from '../components/UserNavbar';

const PetitionPage = ({ match, history }) => {
  const { userId } = useAuth();
  const [petition, setPetition] = useState();
  const [loading, setLoading] = useState(true);
  
  let { petitionId } = useParams();

  function renderSignButton() {
      if (petition !== undefined) {

      }
  }
  function handleSign(e) {
      e.preventDefault();
      const petitionRef = db.collection("petitions").doc(petitionId);
      const userRef = db.collection("users").doc(userId);

      // adds user to petition's signers array
      let oldSigners = []
      petitionRef.get()
      .then((doc) => {
        oldSigners = doc.data().signers
        if (!oldSigners.includes(userId)) {
            oldSigners.push(userId)
        }
        petitionRef.set({
            signers: oldSigners,
            currentSign: oldSigners.length,
        }, { merge: true });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
        })
        
      // adds petition to user's signedPetitions collection
      let petitionData = {};
      if (!loading) {
          petitionData = {
              title: petition.title,
            //   id: petition.id,
            //   supporters: petition.currentSign,
            //   author: petition.author
          }
      }
      userRef.collection("signedPetitions").doc(petitionId).set(petitionData)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
  }

  useEffect(() => {
    db.collection("petitions").doc(petitionId).get()
    .then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          setPetition(doc.data())
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }

      setLoading(false)
  }, [])
  .catch((error) => {
    console.log("Error getting document:", error);
    })
}, [])

  return (<div className="w-screen h-screen">
      <UserNavbar />
      <div className="flex w-full">
        <PetitionStatusBar />
        <div className='w-screen px-8 pt-4 '>
            <div className='flex justify-between'>
                <div className='flex flex-col items-start'>
                    <h1 className="text-3xl font-bold mb-4">{petition ? petition.title : "Title"}</h1>
                    <h2 className=''>{petition ? "created by " + petition.author : "unknown"}</h2>
                    {petition ? (
                        petition.link ? <a className='text-blue-700 'href={petition.link}>See more here</a> :
                        ""
                    ) : (<div></div>)}
                    
                </div>
                <div className='flex flex-col items-end'>
                    <div className={(petition ? (
                        petition.currentSign >= petition.signGoal ? 
                        "bg-green-700 text-white " :
                        "bg-gray-200 "
                    ) : ("bg-gray-200 "))
                        + 'px-4 py-2 mr-4 rounded-md font-bold'}>
                         Goal: {petition ? petition.currentSign : "0"}/{petition ? petition.signGoal : "0"}
                    </div>
                    { petition ? (
                        petition.authorId === userId ? 
                        <button className='rounded-full bg-gray-200  font-bold py-1 px-4 text-center mx-4 focus:outline-none transition  mt-4 hover:cursor-default'>created by you</button> :
                        (petition.signers.includes(userId) ? 
                            <button className="rounded-full bg-gray-200  font-bold py-1 px-4 text-center mx-4 focus:outline-none transition  mt-4 hover:cursor-default">You've signed this</button> :
                            <button onClick={handleSign}className='rounded-full bg-blue-200 text-blue-700  font-bold py-1 px-4 text-center mx-4 focus:outline-none transition hover:bg-blue-100 mt-4'>Sign this petition</button>)
                        ) :
                        <div></div>
                    }
                    
                </div>
            </div>
          
            <p className='mt-4'>{petition ? petition.description : "petition description"}</p>
            <ul>

            </ul>
        </div>
      </div>
    </div>);
};
export default PetitionPage;
