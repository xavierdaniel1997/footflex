import React from "react";
import {AiOutlineHeart} from "react-icons/ai";
import shoes1 from "../assets/images/shoes1.png";

const ShoesCard = ({width, padding}) => {
  return (
    <div className="max-sm:mt-5">
      <div className={`lg:${width} ${padding} bg-slate-200  rounded-xl md:w-60 max-sm:w-44`}>
        <div className="flex justify-end ">
          <button className="bg-white p-2 text-xl rounded-full">
            <AiOutlineHeart />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={shoes1} alt="" />
        </div>
      </div>
      <div className="p-2">
        <h1 className="text-gray-600 font-semibold">Nike Air Max 1200s</h1>
        <p className="text-gray-600">Rs 14000</p>
      </div>
    </div>
  );
};

export default ShoesCard;
