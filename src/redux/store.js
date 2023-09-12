import { configureStore } from "@reduxjs/toolkit";
import filterToggleSlice from "./filterToggleSlice";

const store = configureStore({
    reducer: {
        toggleFilterSideBar: filterToggleSlice,
    }
})
export default store;