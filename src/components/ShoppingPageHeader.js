import React from "react";
import {BiFilterAlt} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import FilterItems from "./FilterItems";

import {shoeBrands} from "../dummyDatas/shoesFilter";
import {shoePrices} from "../dummyDatas/shoesFilter";
import {shoeColors} from "../dummyDatas/shoesFilter";
import {useDispatch, useSelector} from "react-redux";
import {toggleFilterSideBar} from "../redux/filterToggleSlice";
import ShoesCard from "./ShoesCard";
import {Link} from "react-router-dom";
import {checkBoxFilter, removeCheckBoxFilter} from "../redux/checkBoxFilterSlice";

const ShoppingPageHeader = ({pageTitle}) => {
  const toggleFilter = useSelector(
    (store) => store.toggleFilterSideBar.toggleSideBar
  );

  const selectedCheckboxes = useSelector(
    (store) => store.checkboxFilter.selectedCheckboxes
  );

  console.log(selectedCheckboxes);
  const dispatch = useDispatch();

  const handleToggleFilterSideBar = () => {
    dispatch(toggleFilterSideBar());
  };

  const handleRemoveCheckBox = (checkName) => {
    dispatch(removeCheckBoxFilter(checkName))
  }

  return (
    <div className=""> 
      <Link to="/">
        <p className="text-green-600 cursor-pointer">
          Home / {pageTitle} / Shoes
        </p>
      </Link>

      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-10">
          <button
            className="flex items-center gap-2 text-xl text-gray-600 font-bold"
            onClick={handleToggleFilterSideBar}
          >
            <span>
              <BiFilterAlt />
            </span>
            Filter
          </button>
          <div className="flex gap-2">
            {selectedCheckboxes.map((checkName) => (
              <button className="border-2 h-9 font-semibold text-sm px-5 rounded-full flex items-center gap-2">
                {checkName} <span className="pt-1 hover:text-red-500" onClick={() => handleRemoveCheckBox(checkName)}><AiOutlineClose/></span>
              </button>
            ))}
          </div>
        </div>
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
          <div className="border-r-2">
            <FilterItems filterData={shoeBrands} title="Brand" />
            <FilterItems filterData={shoePrices} title="Price" />
            <FilterItems filterData={shoeColors} title="Color" />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 mt-5 xl:grid-cols-4 h-auto">
          <Link to="/product/124">
            <ShoesCard />
          </Link>
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
        </div>
      </div>
    </div>
  );
};

export default ShoppingPageHeader;
