import React from "react";
import {shoesImage} from "../dummyDatas/bannerBrandImages";
import {AiFillStar} from "react-icons/ai";

const size = [6, 7, 8, 9, 10, 11];

const ProductDetials = () => {
  return (
    <div>
      <h1>Home / Casual Shoes / Product Name</h1>
      <div className="flex gap-20">
        <div className="w-2/3 mt-5 mb-10">
          <div className="grid grid-cols-2 grid-rows-3 gap-4 items-center">
            {shoesImage.map((images) => (
              <div className="bg-slate-200 w-[420px] h-80 p-4 flex items-center">
                <img src={images} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/3 mt-5 flex flex-col gap-6 text-gray-600">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-3xl">Nike</h1>
            <p className=" text-xl">Men Air Jordan 1 Mid Sneakers</p>{" "}
          </div>

          <div className="flex flex-col gap-3 ">
            <h1 className="font-bold text-3xl ">Rs 8999</h1>
            <p>Inc all tax</p>
            <p>(Also free delivery)</p>
            <div className="flex justify-between items-center ">
              <h1 className="text-2xl font-semibold">Review</h1>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold">Select Size</p>
            <div className="flex gap-4">
              {size.map((size) => (
                <div className="w-10 h-10 border-2 border-gray-600 rounded-full flex justify-center items-center">
                  <button className="p-2 text-xl">{size}</button>
                </div>
              ))}
            </div>
            <button className="font-semibold text-white text-lg bg-green-500 p-2 w-auto rounded-full hover:bg-green-400">Add to Cart</button>
            <button className="font-semibold text-lg border-2 border-green-400 text-green-400 p-2 w-auto rounded-full hover:border-none hover:bg-green-400 hover:text-white">Add to Wishlist</button>
            <h1 className="font-semibold text-lg">Product Details</h1>
            <p>Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity</p>
            <p><span className="font-semibold"> Product Code: </span>23314972</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetials;
