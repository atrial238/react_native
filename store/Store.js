import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../data/dummy-data";

const counterSlice = createSlice({
  name: "mealsState",
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    filterSettings: [],
  },
  reducers: {
    filteredMealsAction: (state, action) => {
      state.filteredMeals = action.payload;
    },
    filterSettingsAction: (state, action) => {
      state.filterSettings = action.payload;
    },
  },
});

export const { filteredMealsAction, filterSettingsAction } =
  counterSlice.actions;

export default configureStore({
  reducer: {
    mealsState: counterSlice.reducer,
  },
});
