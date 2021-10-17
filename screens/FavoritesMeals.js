import React from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesMeals = ({ navigation, route }) => {
  const favoriteMeals = useSelector((state) => state.mealsState.favoriteMeals);

  return (
    <MealsList
      navigation={navigation}
      meals={favoriteMeals}
      navigateTo="FavoriteMeal"
    />
  );
};

export default FavoritesMeals;
