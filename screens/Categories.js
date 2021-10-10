import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import Category from "../components/Category";
import ScreenWrapper from "../components/ScreenWrapper";
import { CATEGORIES } from "../data/dummy-data";

const Categories = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <Category
            title={item.title}
            style={{ backgroundColor: item.color }}
            backgroundImage={item.background}
            navigation={navigation}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.wrapperList}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  wrapperList: {
    justifyContent: "space-around",
    paddingTop: 15,
  },
});

export default Categories;
