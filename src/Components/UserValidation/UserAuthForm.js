import React, { useState, useEffect } from "react";
import { Validate } from "../../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../utils/Firebase";
import LinearProgress from '@mui/material/LinearProgress';

const UserAuthForm = () => {
  const [showLoader,setShowLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [IsSignIn, setIsSignIn] = useState(true);

  const handleOnSignUpClick = () => {
    setIsSignIn(!IsSignIn);
  };
  const handleFormSubmitButton = (e) => {
    e.preventDefault();
    const message = Validate(email, password);
    setErrorMessage(message);
    if (message) return;

    if (IsSignIn) {
      // SignIn logic
      setShowLoader(true);
      console.log("Signing in");
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          console.log(userCredential);
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });

    } else {
      // SignUp logic
      setShowLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          console.log("user SignedUp");
         // alert("User Created Successfully !!!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="shadow-md shadow-slate-500 p-8 bg-gradient-to-t from-slate-900 absolute top-16 border ">
      <form className="flex flex-col w-96 ">
        <h1 className="text-white text-center text-3xl font-extrabold font-mono">
          {IsSignIn ? "LogIn" : "SignUp"}
        </h1>
        {/* Username input field */}
        {!IsSignIn && (
          <input
            className="my-2 bg-gray-800 pl-2 py-1 text-gray-400 w-auto"
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        {/* Email input field */}
        <input
          className="my-2 bg-gray-900 pl-2 py-1 text-gray-400 w-auto"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password input field */}
        <input
          className="my-2 bg-gray-900 pl-2 py-1 text-gray-400 w-auto"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Error message */}
        <p className="text-red-500 text-lg">{errorMessage}</p>

        {/* Submit button */}
        <button
          className="my-2 bg-red-600 pl-2 py-1 text-white w-auto"
          onClick={handleFormSubmitButton}
        >
          {IsSignIn ? "Login" : "Sign Up"}
        </button>
      </form>
      {/* Switch between login and signup */}
      <div className="flex flex-row justify-center ">
        <p className="text-white mr-1">
          {IsSignIn ? "New to Cineflix-GPT?" : "Already have an account?"}
        </p>
        <p
          className="text-white underline cursor-pointer"
          onClick={handleOnSignUpClick}
        >
          {IsSignIn ? "SignUp" : "LogIn"}
        </p>
      </div >

      {
        showLoader?<LinearProgress className="mt-6"/>:<></>
      }

      
    </div>
  );
};

export default UserAuthForm;
