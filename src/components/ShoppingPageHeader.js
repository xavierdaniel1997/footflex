import React from "react";
import {BiFilterAlt} from "react-icons/bi";
import FilterItems from "./FilterItems";

import {shoeBrands} from "../dummyDatas/shoesFilter";
import {shoePrices} from "../dummyDatas/shoesFilter";
import {shoeColors} from "../dummyDatas/shoesFilter";
import {useDispatch, useSelector} from "react-redux";
import {toggleFilterSideBar} from "../redux/filterToggleSlice";
import ShoesCard from "./ShoesCard";
import {Link} from "react-router-dom";

const ShoppingPageHeader = ({pageTitle}) => {

  const toggleFilter = useSelector(
    (store) => store.toggleFilterSideBar.toggleSideBar
  );
  const dispatch = useDispatch();

  const handleToggleFilterSideBar = () => {
    dispatch(toggleFilterSideBar());
  };

  return (
    <div className="">
      <Link to="/">
        <p className="text-green-600 cursor-pointer">
          Home / {pageTitle} / Shoes
        </p>
      </Link>

      <div className="flex justify-between mt-5">
        <button
          className="flex items-center gap-2 text-xl text-gray-600 font-bold"
          onClick={handleToggleFilterSideBar}
        >
          <span>
            <BiFilterAlt />
          </span>
          Filter
        </button>
        <div className="border-2 p-2 lg:w-auto max-sm:w-28">
          <span className="text-gray-600 text-lg font-semibold max-sm:text-sm">
            Sort by :
          </span>
          <select className="text-gray-600 text-lg outline-none max-sm:text-sm max-sm:w-24">
            <option>Recommended</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
      </div>
      <div className="mt-3">
        <hr />
      </div>
      <div className="flex gap-5">
        {toggleFilter && (
          <div className="w-48 border-r-2 static">
            <FilterItems filterData={shoeBrands} title="Brand" />
            <FilterItems filterData={shoePrices} title="Price" />
            <FilterItems filterData={shoeColors} title="Color" />
          </div>
        )}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-7 mt-5 ${
            toggleFilter ? "xl:grid-cols-3" : "xl:grid-cols-4"
          }`}
        >
          <Link to="/product/124">
            <ShoesCard width={toggleFilter ? "w-96" : "w-80"} padding="p-8" />
          </Link>

          <ShoesCard width={toggleFilter ? "w-96" : "w-80"} padding="p-8" />
          <ShoesCard width={toggleFilter ? "w-96" : "w-80"} padding="p-8" />
          <ShoesCard width={toggleFilter ? "w-96" : "w-80"} padding="p-8" />
          <ShoesCard width={toggleFilter ? "w-96" : "w-80"} padding="p-8" />
          <ShoesCard width={toggleFilter ? "w-96" : "w-80"} padding="p-8" />
          <ShoesCard width={toggleFilter ? "w-96" : "w-80"} padding="p-8" />
          <ShoesCard width={toggleFilter ? "w-96" : "w-80"} padding="p-8" />
        </div>
      </div>
    </div>
  );
};

export default ShoppingPageHeader;
