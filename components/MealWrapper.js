import React from "react";
import { Item } from "react-navigation-header-buttons";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

import ScreenWrapper from "../components/ScreenWrapper";
import { AntDesignHeaderButtons } from "../components/AntDesignHeaderButtons";
import { ScrollView } from "react-native-gesture-handler";

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

  const { duration, complexity, affordability, ingredients, imageUrl, steps } =
    meal;
  console.log(steps);
  return (
    <ScreenWrapper>
      <ScrollView>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.wrapperDescription}>
          <Text style={styles.duration}>{duration}</Text>
          <Text style={styles.complexity}>{complexity}</Text>
          <Text style={styles.affordability}>{affordability}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        <View style={styles.wrapperItems}>
          {ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.wrapperItem}>
              <Text>{ingredient}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.title}>Steps</Text>
        <View style={styles.wrapperItems}>
          {steps.map((step) => {
            return (
              <View key={step} style={styles.wrapperItem}>
                <Text>{step}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: Dimensions.get("window").width * 0.5,
  },
  title: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 20,
  },
  wrapperDescription: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ccc",
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  wrapperItems: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  wrapperItem: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    width: "90%",
  },
});

export default MealWrapper;
