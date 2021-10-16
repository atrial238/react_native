import React from "react";
import { Item } from "react-navigation-header-buttons";

import { Text, StyleSheet } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { MEALS } from "../data/dummy-data";
import { AntDesignHeaderButtons } from "../components/AntDesignHeaderButtons";

const Meal = ({ navigation, route }) => {
  const meal = MEALS.find((meal) => (meal.id = route.params.mealId));

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesignHeaderButtons>
          <Item
            title="favorite"
            iconName="star"
            size={24}
            color="black"
            onPress={() => console.log("added to favorite!")}
          />
        </AntDesignHeaderButtons>
      ),
    });
  }, [navigation]);

  console.log(meal);
  return (
    <ScreenWrapper>
      <Text>{meal.title}</Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});

export default Meal;
