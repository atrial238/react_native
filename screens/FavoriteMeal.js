import React from "react";

import { MEALS } from "../data/dummy-data";
import MealWrapper from "../components/MealWrapper";

const FavoriteMeal = ({ navigation, route }) => {
  const meal = MEALS.find((meal) => (meal.id = route.params.mealId));

  return <MealWrapper navigation={navigation} meal={meal} />;
};

export default FavoriteMeal;
