import { createSlice } from "@reduxjs/toolkit";

const checkBoxSlice = createSlice({
  name: "checkBox",
  initialState: {
    selectedColorCheckBox: [],
    selectedGenderCheckBox: [],
    selectedPriceCheckBox: [],
  },
  reducers: {
    setSelectedColorCheckbox: (state, action) => {
      state.selectedColorCheckBox = action.payload;
    },
    setSelectedGenderCheckbox: (state, action) => {
      state.selectedGenderCheckBox = action.payload;
    },
    setSelectedPriceCheckbox: (state, action) => {
      state.selectedPriceCheckBox = action.payload;
    },
  },
});

export const {
  setSelectedColorCheckbox,
  setSelectedGenderCheckbox,
  setSelectedPriceCheckbox,
} = checkBoxSlice.actions;

export default checkBoxSlice.reducer;
