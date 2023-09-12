import React, {useState} from "react";
import {FcGoogle} from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginSignin = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <>
    <Link to="/"><span className="m-10 text-green-600 cursor-pointer">/ Home</span></Link>
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col gap-8 p-10  shadow-2xl border-2">
        <div className="flex flex-col gap-3 justify-center items-center">
          {/* <h1 className="font-semibold ">Enjoy the offers</h1> */}
          <span className="font-bold text-2xl text-green-600 ">
            {!showSignIn
              ? "WELCOME TO THE SHOES SHOPE"
              : "ENJOY THE OFFERS + FREE SHIPPING"}
          </span>
          <p className="font-semibold text-xl">
            {!showSignIn ? "LOG-IN" : "SIGN-IN"}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {showSignIn && (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="text-lg text-gray-500 w-full outline-none border-2 p-3 rounded-md"
              />
              <input
                type="number"
                placeholder="+ 91 "
                className="text-lg text-gray-500 w-full outline-none border-2 p-3 rounded-md"
              />
            </div>
          )}
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-lg text-gray-500 w-full outline-none border-2 p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Enter Your Password"
            className="text-lg text-gray-500 w-full outline-none border-2 p-3 rounded-md"
          />
          <p className="cursor-pointer" onClick={handleShowSignIn}>
            {!showSignIn
              ? "Dont have an accout? Sign In"
              : "Already have an account? Log In"}
          </p>
          <button className="w-full bg-green-500 p-3 font-semibold text-lx text-white hover:bg-green-600 rounded-md">
            {!showSignIn ? "CONTINUE" : "REGISTER"}
          </button>
          <button className="w-full border-2 p-3 font-semibold text-lx flex justify-center items-center gap-4 rounded-md">
            <FcGoogle className="text-2xl" />
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginSignin;
