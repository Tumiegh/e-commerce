import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

function SignOut() {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      alert('Signed out successfully!');
    }).catch((error) => {
      alert(error.message);
    });
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOut;
