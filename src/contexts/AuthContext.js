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
          console.log("registerd user uid: (should match )", registeredUser.user.uid);
          // Add a new doc in users collection
          db.collection("users").doc(registeredUser.user.uid).set({
            firstName: firstName,
            lastName: lastName,
            year: year,
            school: school,
            major: major,
            emailVerified: false,
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
      console.log("redirect url: ", hostname + '/login')
      var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: hostname + '/login',
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

    function checkLoginWithEmail(location) {
      // Confirm the link is a sign-in with email link.
      if (auth.isSignInWithEmailLink(location)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        var email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:
          email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        auth.signInWithEmailLink(email, location)
          .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');

            // sets user's emailVerified field to true
            db.collection('users').doc(result.user.uid).set({
              emailVerified: true,
            }, { merge: true })

            return result.user;
          })
          .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
            return (error);
          });
      } else {
        return false;
      }
    }

    function login(email, password) {
      // verify user has also signed in via email at least once
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
        sendEmailVerification,
        emailVerification,
        checkLoginWithEmail,
        login
    }

    return (<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>)
}

