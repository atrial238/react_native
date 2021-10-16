import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Item } from "react-navigation-header-buttons";

import { AntDesignHeaderButtons } from "../components/AntDesignHeaderButtons";

import Category from "../components/Category";
import ScreenWrapper from "../components/ScreenWrapper";
import { CATEGORIES } from "../data/dummy-data";

const Categories = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <AntDesignHeaderButtons>
          <Item
            title="favorite"
            iconName="menuunfold"
            size={24}
            color="black"
            onPress={() => navigation.toggleDrawer()}
          />
        </AntDesignHeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <ScreenWrapper>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <Category
            title={item.title}
            categoryId={item.id}
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
