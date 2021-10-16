import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const DetailsMeals = ({ navigation, route }) => {
  const meals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.categoryId)
  );

  return <MealsList navigation={navigation} meals={meals} navigateTo="Meal" />;
};

export default DetailsMeals;
