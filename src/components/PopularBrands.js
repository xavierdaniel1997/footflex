import React, {useRef, useState} from "react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

import {dummyBrand} from "../dummyDatas/bannerBrandImages";
import bannerImg from "../assets/images/bannerImage.jpg";

const PopularBrands = () => {
  const [currentBtnIndex, setCurrentBtnIndex] = useState(0);

  const buttonContainerRef = useRef(null);

  const prev = () => {
    setCurrentBtnIndex((prevIndex) => prevIndex - 1);
    scrollToButton(currentBtnIndex - 1);
  };

  const next = () => {
    setCurrentBtnIndex((prevIndex) => prevIndex + 1);
    scrollToButton(currentBtnIndex + 1);
  };

  const scrollToButton = (index) => {
    if (buttonContainerRef.current) {
      const buttonWidth = buttonContainerRef.current.children[0].offsetWidth;
      buttonContainerRef.current.scrollLeft = index * buttonWidth;
    }
  };

  return (
    <div className="mt-28 mx-20 max-sm:mx-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button
            className="bg-slate-100 rounded-full p-2 hover:bg-slate-50"
            onClick={prev}
          >
            <AiOutlineLeft />
          </button>
          <h1>Popular Brands</h1>
        </div>
        <div>
          <button
            className="bg-slate-100 rounded-full p-2 hover:bg-slate-50"
            onClick={next}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto" ref={buttonContainerRef}>
        <div className="mt-8 flex gap-4 w-[1700px]">
          {dummyBrand.map((brands) => (
            <div
              key={brands.id}
              className="bg-slate-100 p-3 h-20 w-20 rounded-full flex items-center "
            >
              <img src={brands.imageUrl} alt="brandImage" className="w-20" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-auto sm:w-auto">
        <img
          src={bannerImg}
          alt=""
          className=" object-cover rounded-2xl  lg:w-full lg:h-[500] lm:h-44 lm:w-fit"
        />
      </div>
    </div>
  );
};

export default PopularBrands;
