import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/FormValidation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function handleButtonClick() {
    const message = formValidation(email.current.value, password.current.value);
    setErrMessage(message);
    // once email and password validated then i can proceed for signin and signup i wish to
    if (message) return;

    // signup logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error.message);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }
    // Sign in logic
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }
  }

  function handleSignIn() {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={LOGIN_BG_IMG}
        alt="Netflix Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Header Component */}
      <Header />

      {/* Login Form */}
      <div className="relative flex justify-center items-center h-screen">
        <form
          className="bg-black bg-opacity-80 p-10 rounded-lg w-full max-w-md text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {/* Email Input */}
          {isSignInForm ? null : (
            <input
              ref={name}
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 mb-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-gray-500"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email or mobile number"
            className="w-full p-3 mb-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-gray-500"
          />

          {/* Password Input */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-gray-500"
          />

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full p-3 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-600 font-bold mt-1">{errMessage} </p>

          {/* Extra Options */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          {/* Sign Up & More Links */}
          <div className="mt-6 text-sm text-gray-400 ">
            <p>{isSignInForm ? "New to Netflix?" : "Already registered"}</p>
            <p
              className="text-white hover:underline cursor-pointer"
              onClick={handleSignIn}
            >
              {isSignInForm ? "Sign Up now." : "Sign In now."}
            </p>
            <p className="text-xs mt-2">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <p className="text-blue-500 hover:underline cursor-pointer">
              Learn more
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
