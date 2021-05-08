import React, { useState, useEffect, useContext } from 'react';
import { auth, db } from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [userData, setUserData] = useState();
    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(true)

    function signup(email, password, firstName, lastName, year, school, major) {
        console.log("in signup");
        return auth.createUserWithEmailAndPassword(email, password)
        .then(registeredUser => {
          console.log("registerd user uid: (should match )", registeredUser.user.uid);
          // Add a new doc in users collection
          db.collection("users").doc(registeredUser.user.uid).set({
            firstName: firstName,
            lastName: lastName,
            year: year,
            school: school,
            major: major,
            emailVerified: false,
            isAnonymous: false,
            email: email,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
      }
  
    
    function sendEmailVerification(hostname) {
      var user = auth.currentUser;
      console.log("redirect url: ", hostname)
      var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: hostname,
        // This must be true.
        handleCodeInApp: true,
      };

      user.sendEmailVerification(actionCodeSettings).then(function() {
        // Email sent.
         // Clear email from storage.
         window.localStorage.removeItem('emailForSignIn');
         // sets user's emailVerified field to true
         db.collection('users').doc(user.uid).set({
           emailVerified: true,
         }, { merge: true })

         return user;
      }).catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    }

    function emailVerification(email, location) {
      console.log("in email verification")
      var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: location,
        // This must be true.
        handleCodeInApp: true,
      };

      return auth.sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        console.log("successfully sent email")
        window.localStorage.setItem('emailForSignIn', email);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
      });
    }

    function login(email, password) {
      // verify user has also signed in via email at least once
      return auth.signInWithEmailAndPassword(email, password);
    }
  
    function logout() {
      window.localStorage.removeItem('uid');
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
          
          // gets user data
          db.collection('users').doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                window.localStorage.setItem('uid', user.uid)
                setUserData({
                  ...doc.data(),
                  userId: user.uid
                })
                setUserId(user.uid)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        })

          console.log('successfully signed in user', user.uid);
        }
        else {
          setCurrentUser(undefined)
        }
      });
      setLoading(false);
      return cleanup;
    }, []);

    const value = {
        currentUser,
        userData,
        userId,
        signup,
        sendEmailVerification,
        emailVerification,
        // checkLoginWithEmail,
        login,
        logout
    }

    return (<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>)
}