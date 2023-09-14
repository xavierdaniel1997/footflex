import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkBoxFilter } from "../redux/checkBoxFilterSlice";


const FilterItems = ({filterData, title}) => {
  

  const dispatch = useDispatch();
  const selectedCheckboxes = useSelector((store) => store.checkboxFilter.selectedCheckboxes)

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

  const handleCheckBox = (checkboxName) => {
    // Dispatch the toggleCheckbox action to update Redux state
    dispatch(checkBoxFilter(checkboxName));
  };

  return (
    <div className="w-48">
      <div className="mt-2">
        <h1 className="font-semibold text-gray-600">{title}</h1>
        {visibleBrands.map((data) => (
          <div key={data.id} className="flex items-center gap-3 mt-2">
            <input
              type="checkbox"
              onChange={() => handleCheckBox(data.name)}
              checked={selectedCheckboxes.includes(data.name)}
            />
            {title === "Color" ? (
              <div
                className={`w-5 h-5 rounded-full border-2 ${data.className}`}
              ></div>
            ) : null}
            <p>{data.name}</p>
          </div>
        ))}
        {!showAllFilter ? (
          <button onClick={ShowMoreFilter} className="text-green-600">
            more
          </button>
        ) : (
          <button onClick={ShowLessFilter} className="text-green-600">
            less
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterItems;
