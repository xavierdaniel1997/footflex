import React, {useState} from "react";
// import {shoeBrands} from "../dummyDatas/shoesFilter";

const FilterBrands = ({filterData, title}) => {
  const [showAllFilter, setShowAllFilter] = useState(false);

  const initialBrandCount = 5;

  const visibleBrands = showAllFilter
    ? filterData
    : filterData.slice(0, initialBrandCount);

  const ShowMoreFilter = () => {
    setShowAllFilter(true);
  };
  const ShowLessFilter = () => {
    setShowAllFilter(false);
  };

  return (
    <div className="">
      <div className="mt-2">
        <h1 className="font-semibold text-gray-600">{title}</h1>
        {visibleBrands.map((data) => (
          <div key={data.id} className="flex items-center gap-3 mt-2">
            <input type="checkbox" className="" />
            {title === 'Color' ? (
                <div className={`w-5 h-5 rounded-full border-2 ${data.className}`}> 
                </div>
            ) : null}
            <p>{data.name || data.priceRange}</p>
          </div>
        ))}
        {!showAllFilter ? (
          <button onClick={ShowMoreFilter} className="text-green-600">more</button>
        ) : (
          <button onClick={ShowLessFilter} className="text-green-600">less</button>
        )}
      </div>
    </div>
  );
};

export default FilterBrands;
