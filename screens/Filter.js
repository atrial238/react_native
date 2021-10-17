import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Item } from "react-navigation-header-buttons";
import { AntDesignHeaderButtons } from "../components/AntDesignHeaderButtons";
import FilterSwitch from "../components/FilterSwitch";
import ScreenWrapper from "../components/ScreenWrapper";

const Filter = ({ navigation, route }) => {
  const [stateFilter, setStateFilter] = useState({
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  });

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
      headerRight: () => (
        <AntDesignHeaderButtons>
          <Item
            title="favorite"
            iconName="save"
            size={24}
            color="black"
            onPress={() => navigation.setParams({ save: stateFilter })}
          />
        </AntDesignHeaderButtons>
      ),
    });
  }, [navigation, stateFilter]);

  const { isGlutenFree, isLactoseFree, isVegan, isVegetarian } = stateFilter;

  const setFilter = (newValue, itemName) => {
    setStateFilter((state) => {
      return {
        ...state,
        [itemName]: newValue,
      };
    });
  };

  return (
    <ScreenWrapper>
      <FilterSwitch
        lable="Gluten-free"
        value={isGlutenFree}
        onchange={(newValue) => setFilter(newValue, "isGlutenFree")}
      />
      <FilterSwitch
        lable="Lactose-free"
        value={isLactoseFree}
        onchange={(newValue) => setFilter(newValue, "isLactoseFree")}
      />
      <FilterSwitch
        lable="Vegan"
        value={isVegan}
        onchange={(newValue) => setFilter(newValue, "isVegan")}
      />
      <FilterSwitch
        lable="Vegetearian"
        value={isVegetarian}
        onchange={(newValue) => setFilter(newValue, "isVegetarian")}
      />
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({});

export default Filter;
