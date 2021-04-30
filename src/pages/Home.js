import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
const Home = (props) => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(async ()=>{
    // gets user info
    db.collection('users').doc(currentUser.uid).get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          setUserData(doc.data())
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

  }, []);

  return <div>Home {userData ? userData.firstName : "loading"}</div>;
};
export default Home;
