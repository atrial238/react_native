import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { MEALS } from "../data/dummy-data";

const Meal = ({navigation, route}) => {
   const meal = MEALS.find(meal => meal.id = route.params.mealId)
   console.log(meal)
  return (
    <ScreenWrapper>
      <Text>{meal.title}</Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});

export default Meal;
