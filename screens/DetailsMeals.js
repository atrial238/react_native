import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MealsList from "../components/MealsList";

const DetailsMeals = ({ navigation, route }) => {
  const filteredMeals = useSelector((state) => state.mealsState.filteredMeals);
  const meals = filteredMeals.filter((meal) => {
    return meal.categoryIds.includes(route.params.categoryId);
  });

  return <MealsList navigation={navigation} meals={meals} navigateTo="Meal" />;
};

export default DetailsMeals;
