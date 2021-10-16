import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesMeals = ({ navigation, route }) => {
  const meals = MEALS.filter((meal) => ["m1", "m2"].includes(meal.id));

  return <MealsList navigation={navigation} meals={meals} navigateTo="FavoriteMeal"/>;
};

export default FavoritesMeals;
