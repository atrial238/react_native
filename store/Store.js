import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../data/dummy-data";

const counterSlice = createSlice({
  name: "mealsState",
  initialState: {
    filteredMeals: MEALS,
    favoriteMeals: [],
  },
  reducers: {
    filteredMealsAction: (state, action) => {
      let meals;
      if (action.payload.withoutFilter) {
        meals = MEALS;
      } else {
        const filterSettings = action.payload;
        meals = MEALS.filter((meal) => {
          const filterKeys = Object.keys(filterSettings);
          return filterKeys.every((key) => {
            return key === "withoutFilter"
              ? true
              : filterSettings[key] === meal[key];
          });
        });
      }
      state.filteredMeals = meals;
    },
    favoriteMealsAction: (state, action) => {
      state.favoriteMeals = [...state.favoriteMeals, action.payload];
    },
    favoriteMealsDeleteAction: (state, action) => {
      state.favoriteMeals = state.favoriteMeals.filter(
        (meal) => meal.id !== action.payload
      );
    },
  },
});

export const {
  filteredMealsAction,
  favoriteMealsAction,
  favoriteMealsDeleteAction,
} = counterSlice.actions;

export default configureStore({
  reducer: {
    mealsState: counterSlice.reducer,
  },
});
