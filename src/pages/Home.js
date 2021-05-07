import { useAuth } from '../contexts/AuthContext';
import React, { useState, useEffect, useDebugValue } from 'react';
import { db } from '../firebase';
import Card from '../components/Card';
import PetitionStatusBar from '../components/PetitionStatusBar';

import UserNavbar from '../components/UserNavbar';

const Home = (props) => {
  const { currentUser, userData } = useAuth();
  const [petitions, setPetitions] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchPetitionData () {
    return db.collection('petitions').get()
    .then(snap => {
        snap.docs.map(doc => {
            console.log(doc.data())
            return {
               ...doc.data(),
               id: doc.id
            };
        })
    });
  }

  useEffect(async ()=>{
    // // gets user info
    // let tempMap = new Map();
    // await db.collection("petitions").get().then((querySnapshot) => {
    //   return Promise.resolve(
    //     querySnapshot.docs.map(doc => {
    //       return {
    //         ...doc.data(),
    //         Id: doc.id,
    //         ref: doc.ref
    //       };
    //     }))
    //   querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //       tempMap.set(doc.id, doc.data())
    //   });
    // });

    //   setPetitions(tempMap)
    //   setLoading(false)
    (async () => {
      const foundPetitions = await fetchPetitionData();
      setPetitions(foundPetitions);
      setLoading(false);
    })();
  }, []);


  if (loading || petitions === undefined) {
    return <div className="w-screen h-screen">
    <UserNavbar />
    <div className="flex w-full">
      <PetitionStatusBar />
      <div className='w-screen pl-8 pt-4 space-y-4'>
        <h1 className="text-3xl font-bold mb-4">Latest</h1>
        Loading      
      </div>
    </div>
  </div>
  }

  return (<div className="w-screen h-screen">
      <UserNavbar />
      <div className="flex w-full">
        <PetitionStatusBar />
        <div className='w-screen pl-8 pt-4 space-y-4'>
          <h1 className="text-3xl font-bold mb-4">Latest</h1>
          {React.Children.toArray(
            petitions.map(curr=>{
                return  <Card 
                className="m-0"
                title={curr.title}
                isActive={curr.isActive}
                author={curr.author}
                dateCreated={curr.dateCreated}
                numSupporters={curr.currentSign}
                description={curr.description}
                tags=""
                linkedPetitionId={""}/>
            })
            )}

          
        </div>
      </div>
    </div>);
};
export default Home;
