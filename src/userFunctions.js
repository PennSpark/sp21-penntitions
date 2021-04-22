import { useEffect } from 'react';
import { auth, db } from './firebase';

export function userFunctions() {
  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
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
