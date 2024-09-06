import React, { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth, provider } from "../utils/Config"; // Import auth and provider from config
import { getAuth, signOut } from "firebase/auth";

function SignIn() {
  const [User, setUser] = useState(null);

  const handleClick = async () => {
    console.log("Clicked");

    try {
      // Set persistence to 'local', so the user stays signed in even after the page is closed or refreshed
      await setPersistence(auth, browserLocalPersistence);

      // Sign in with Google using a popup
      const userData = await signInWithPopup(auth, provider);

      console.log(userData.user); // Log user details
      setUser(userData.user); // Set user in state
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        setUser(null); // Clear user state after sign-out
      })
      .catch((error) => {
        console.log("Error occurred during sign-out:", error);
      });
  };

  return (
    <>
      {!User ? (
        <button onClick={handleClick}>Sign In with Google</button>
      ) : (
        <div>
          <img
            src={User.photoURL}
            alt={User.displayName}
            height={200}
            width={200}
          />
          <br />
          Email: {User.email}
          <br />
          Name: {User.displayName}
          <br />
          Email Verified: {User.emailVerified ? "🟩" : "🔴"}
          <br />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </>
  );
}
export default SignIn;
