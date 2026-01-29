import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";

const LogIn = () => {
  const [isSignInForm, setisSingIn] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setisSingIn(!isSignInForm);
  };
  const handleButtonClick = () => {
    // validations here...
    console.log(email.current.value);
    console.log(password.current.value);

    const msg = Validate(email.current.value, password.current.value);
    setErrorMessage(msg);
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
