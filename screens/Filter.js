import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import { AntDesignHeaderButtons } from "../components/AntDesignHeaderButtons";
import FilterSwitch from "../components/FilterSwitch";
import ScreenWrapper from "../components/ScreenWrapper";
import { filteredMealsAction } from "../store/Store";

const Filter = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [stateFilter, setStateFilter] = useState({
    withoutFilter: true,
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
            onPress={() => {
              dispatch(filteredMealsAction(stateFilter));
            }}
          />
        </AntDesignHeaderButtons>
      ),
    });
  }, [navigation, stateFilter]);

  const { isGlutenFree, isLactoseFree, isVegan, isVegetarian, withoutFilter } =
    stateFilter;

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
        lable="Without filter"
        value={withoutFilter}
        onchange={(newValue) => setFilter(newValue, "withoutFilter")}
      />
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
