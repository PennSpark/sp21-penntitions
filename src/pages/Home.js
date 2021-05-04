import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Card from '../components/Card';

import UserNavbar from '../components/UserNavbar';

const Home = (props) => {
  const { currentUser, userData } = useAuth();

  // useEffect(async ()=>{
  //   // gets user info
    

  // }, []);

  return (<div className="w-screen h-screen">
      <UserNavbar />
      <div className="flex w-full">
        <div className='w-1/3 bg-blue-100 h-screen'>filler</div>
        <div className='w-screen pl-8 pt-4'>
          <h1 className="text-3xl font-bold mb-4">Latest</h1>
          <Card 
          className="m-0"
            title="Petition title ex"
            isActive="true"
            author="filler author"
            dateCreated="date"
            numSupporters="100"
            description="this is an example description of the petition. put something compelling here!"
            tags=""
            linkedPetitionId="abcd"
          />
        </div>
      </div>
    </div>);
};
export default Home;
