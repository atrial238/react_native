import React from "react";

import { MEALS } from "../data/dummy-data";
import MealWrapper from "../components/MealWrapper";

const Meal = ({ navigation, route }) => {
  const meal = MEALS.find((item) => {
    return item.id === route.params.mealId;
  });
  return <MealWrapper navigation={navigation} meal={meal} />;
};

export default Meal;
