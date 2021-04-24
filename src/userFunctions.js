import { useEffect } from 'react';
import { auth, db } from './firebase';

export function UserFunctions() {
  function signup(email, password, firstName, lastName, year, school, major) {
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(registeredUser => {
      return db.collection("users")
      .doc(registeredUser.user.uid).set({
        firstName: firstName,
        lastName: lastName,
        year: year,
        school: school,
        major: major
      })
    })
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
        console.log('successfully signed in user', user.uid);
      }
    });
    return cleanup;
  }, []);
}
