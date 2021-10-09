import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

const Categories = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Text>Categories</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Meals"
        onPress={() => navigation.navigate("Meals")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});

export default Categories;
