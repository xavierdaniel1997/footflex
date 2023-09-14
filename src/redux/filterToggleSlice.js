import { createSlice } from "@reduxjs/toolkit";

const filterToggleSlice = createSlice({
    name: 'toggleFilterSideBar',
    initialState: {
        toggleSideBar: true,
    },
    reducers:{
        toggleFilterSideBar: (state) => {
            state.toggleSideBar = !state.toggleSideBar
        }
    }
})

export const {toggleFilterSideBar} = filterToggleSlice.actions;
export default filterToggleSlice.reducer;