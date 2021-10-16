import React from "react";
import { Item } from "react-navigation-header-buttons";

import { Text, StyleSheet } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { AntDesignHeaderButtons } from "../components/AntDesignHeaderButtons";

const MealWrapper = ({ navigation, meal }) => {
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

  return (
    <ScreenWrapper>
      <Text>{meal.title}</Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});

export default MealWrapper;
