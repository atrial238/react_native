import React from "react";
import { StyleSheet, FlatList } from "react-native";
import RecipeItem from "../components/RecipeItem";
import ScreenWrapper from "../components/ScreenWrapper";

const MealsList = ({ navigation, meals, navigateTo }) => {
  const recipeItem = ({ item }) => {
    const { title, duration, imageUrl, complexity, affordability, id } = item;

    const recipeProps = {
      title,
      duration,
      imageUrl,
      complexity,
      affordability,
      id,
      navigation,
      navigateTo,
    };

    return <RecipeItem {...recipeProps} />;
  };

  return (
    <ScreenWrapper>
      <FlatList data={meals} renderItem={recipeItem} style={styles.root} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
  },
});

export default MealsList;
