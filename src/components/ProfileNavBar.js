import React from "react";
import {BsTruck, BsBag, BsPerson, BsTelephone} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {FiLogOut} from "react-icons/fi";
import {Link} from "react-router-dom";

const ProfileNavBar = () => {
  return (
    <div className="w-64 bg-white flex flex-col p-6 items-center border-2">
      <h1 className="font-bold text-2xl text-gray-600">My Account</h1>
      <div className="mt-6 flex flex-col justify-between h-96 items-start">
        <div className="flex flex-col justify-start gap-5">

          <div className="flex items-center gap-2 font-semibold text-xl text-gray-500 cursor-pointer hover:text-green-600">
          <AiOutlineHeart /> <p>Wishlist</p>
          </div>

          <div className="flex items-center gap-2 font-semibold text-xl text-gray-500 cursor-pointer hover:text-green-600">
            <BsTruck /> <p>Orders</p>
          </div>

          <div className="flex items-center gap-2 font-semibold text-xl text-gray-500 cursor-pointer hover:text-green-600">
            <BsBag /> <p>Cart</p>
          </div>

          <div className="flex items-center gap-2 font-semibold text-xl text-gray-500 cursor-pointer hover:text-green-600">
            <BsTelephone /> <p>Contact Us</p>
          </div>

        </div>
        <div className="flex flex-col items-center gap-2 font-semibold text-xl text-gray-500 ">
          <div className="p-2 border-2 rounded-full">
            <BsPerson className="text-2xl" />
          </div>
          <p className="hover:text-green-600 cursor-pointer">Edit Profile</p>
          <Link to="/login">
            <button className=" flex items-center gap-2 cursor-pointer hover:text-green-600">
              <FiLogOut className="text-xl text-green-600" />{" "}
              <span>Sign-In</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavBar;
