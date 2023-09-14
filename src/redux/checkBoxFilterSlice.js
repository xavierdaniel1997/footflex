import {createSlice} from "@reduxjs/toolkit";

const checkBoxFilterSlice = createSlice({
  name: "checkboxFilter",
  initialState: {
    selectedCheckboxes: [],
  },
  reducers: {
    checkBoxFilter: (state, action) => {
      const checkboxName = action.payload;

      if (state.selectedCheckboxes.includes(checkboxName)) {
        state.selectedCheckboxes = state.selectedCheckboxes.filter(
          (name) => name !== checkboxName
        );
      } else {
        state.selectedCheckboxes.push(checkboxName);
      }
    },
    removeCheckBoxFilter: (state, action) => {
      const checkboxName = action.payload;
      state.selectedCheckboxes = state.selectedCheckboxes.filter(
        (name) => name !== checkboxName
      );
    },
  },
});

export const {checkBoxFilter, removeCheckBoxFilter} = checkBoxFilterSlice.actions;
export default checkBoxFilterSlice.reducer;
