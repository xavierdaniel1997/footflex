import { configureStore } from "@reduxjs/toolkit";
import filterToggleReducer from "./filterToggleSlice";
import checkBoxFilterReducer from "./checkBoxFilterSlice";


const store = configureStore({
    reducer: {
        toggleFilterSideBar: filterToggleReducer,
        checkboxFilter: checkBoxFilterReducer
    }
})
export default store;