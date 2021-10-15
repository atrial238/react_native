import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import RecipeItem from "../components/RecipeItem";
import ScreenWrapper from "../components/ScreenWrapper";
import { MEALS } from "../data/dummy-data";

const DetailsMeals = ({navigation, route}) => {
  const recipes = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.categoryId)
  );

  const recipeItem = ({ item }) => {
    const { title, duration, imageUrl, complexity, affordability, id } = item;
    const recipeProps = {
      title,
      duration,
      imageUrl,
      complexity,
      affordability,
      id,
      navigation
    };
    return <RecipeItem {...recipeProps} />;
  };

  return (
    <ScreenWrapper>
      <FlatList data={recipes} renderItem={recipeItem} style={styles.root} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
  },
});

export default DetailsMeals;
