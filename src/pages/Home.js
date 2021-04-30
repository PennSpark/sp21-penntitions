import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '../firebase';

import UserNavbar from '../components/UserNavbar';

const Home = (props) => {
  const { currentUser, userData } = useAuth();

  // useEffect(async ()=>{
  //   // gets user info
    

  // }, []);

  return <div>
    <UserNavbar />
    Home {userData ? userData.firstName : "loading"}
    </div>;
};
export default Home;
