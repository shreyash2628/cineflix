import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useValidate } from "../../utils/useValidate";
import Firebase from "../../utils/Firebase";

const UserAuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [toggleSignIn, setToggleSignIn] = useState(true);
  const handleOnSignUpClick = () => {
    setToggleSignIn(!toggleSignIn);
  };

  //custom hook useValidate
  const msg = useValidate(email, password, username);

  const handleFormSubmitButton = (e) => {
    e.preventDefault();
    setErrorMessage(msg);
    if (!toggleSignIn) {
      // console.log("dping authentication ");
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          // Signed up
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="hover:shadow-md hover:shadow-slate-500 opacity-50 hover:opacity-100 p-8 bg-gradient-to-t from-slate-900 absolute top-16">
      <form className="flex flex-col w-96 ">
        <h1 className="text-white text-center text-3xl font-extrabold font-mono">
          {toggleSignIn ? "LogIn" : "SignUp"}
        </h1>
        {toggleSignIn ? (
          ""
        ) : (
          <input
            className="my-2 bg-gray-800 pl-2 py-1 text-gray-400 w-auto"
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        )}
        <input
          className="my-2 bg-gray-900 pl-2 py-1 text-gray-400 w-auto"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="my-2 bg-gray-900 pl-2 py-1 text-gray-400 w-auto"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="text-red-500 text-lg">{errorMessage}</p>
        <button
          className="my-2 bg-red-600 pl-2 py-1 text-white w-auto"
          onClick={handleFormSubmitButton}
        >
          {toggleSignIn ? "Login" : "Sign Up"}
        </button>
      </form>
      <div className="flex flex-row justify-center">
        <p className="text-white mr-1">
          {toggleSignIn ? "New to Vdo-GPT?" : "Already have an account?"}
        </p>
        <p
          className="text-white underline cursor-pointer"
          onClick={handleOnSignUpClick}
        >
          {toggleSignIn ? "SignUp" : "LogIn"}
        </p>
      </div>
    </div>
  );
};

export default UserAuthForm;
