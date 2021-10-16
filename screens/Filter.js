import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Item } from "react-navigation-header-buttons";
import { AntDesignHeaderButtons } from "../components/AntDesignHeaderButtons";
import FilterSwitch from "../components/FilterSwitch";
import ScreenWrapper from "../components/ScreenWrapper";

const Filter = ({ navigation }) => {
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

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <ScreenWrapper>
      <FilterSwitch
        lable="Gluten-free"
        value={isGlutenFree}
        onchange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        lable="Lactose-free"
        value={isLactoseFree}
        onchange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        lable="Vegan"
        value={isVegan}
        onchange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        lable="Vegetearian"
        value={isVegetarian}
        onchange={(newValue) => setIsVegetarian(newValue)}
      />
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({});

export default Filter;
