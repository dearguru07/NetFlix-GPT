import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { user_AVATHAR } from "../utils/constants";

const LogIn = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {

    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_AVATHAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      // const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          src="https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"
          className="w-full"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-40 mx-auto right-0 left-0 text-white box-border p-8 bg-black/70 rounded-lg "
      >
        <h1 className="text-2xl font-bold text-white mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="px-4 py-3 mb-4 outline-none w-full text-white  border-2 transition-colors duration-100 border-solid focus:border-[#5582f7] border-[#5e6065]"
            name="text"
            placeholder="Full Name"
            type="text"
          />
        )}
        {!isSignInForm && (
          <input
            className=" px-4 py-3 mb-4 outline-none w-full text-white  border-2 transition-colors duration-100 border-solid focus:border-[#6b95ff] border-[#5e6065]"
            name="text"
            placeholder="Mobile Number"
            type="text"
          />
        )}
        <input
          className=" px-4 py-3 mb-4 outline-none w-full text-white  border-2 transition-colors duration-100 border-solid focus:border-[#5283fd] border-[#5e6065]"
          name="text"
          ref={email}
          placeholder="Email or username"
          type="text"
        />
        <input
          className=" px-4 py-3 mb-4 outline-none w-full text-white  border-2 transition-colors duration-100 border-solid focus:border-[#5484ff] border-[#5e6065]"
          name="text"
          ref={password}
          placeholder="Enter Password"
          type="password"
        />
        <p className="text-red-600 p-3 text-lg">{ErrorMessage}</p>
        <button
          className="w-full font-bold py-3 bg-red-600 text-white rounded-md cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 mt-4 mx-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to StreamX ? Create an account."
            : "Already a user LogIn Now !"}
        </p>
      </form>
      <p
        style={{
          fontSize: "12px",
          color: "#999",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Disclaimer: This project is for educational purposes only and is not
        affiliated with Netflix.
      </p>
    </div>
  );
};

export default LogIn;
