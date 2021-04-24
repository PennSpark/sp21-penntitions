import React, { useState, useEffect, useContext } from 'react';
import { auth, db } from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function signup(email, password, firstName, lastName, year, school, major) {
        console.log("in signup");
        return auth.createUserWithEmailAndPassword(email, password)
        .then(registeredUser => {
          console.log(registeredUser);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
      }
    
      function login(email, password) {
        auth.signInWithEmailAndPassword(email, password);
      }
    
      function logout() {
        return auth.signOut();
      }
    
      function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
      }

      useEffect(() => {
        const cleanup = auth.onAuthStateChanged(function (user) {
          if (user) {
            // User is signed in.
            setCurrentUser(user);
            
            console.log('successfully signed in user', user.uid);
          }
        });
        setLoading(false);
        return cleanup;
      }, []);

    const value = {
        currentUser,
        signup,
        login
    }

    return (<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>)
}

