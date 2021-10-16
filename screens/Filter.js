import React from "react";
import { Text, StyleSheet } from "react-native";
import { Item } from "react-navigation-header-buttons";
import { AntDesignHeaderButtons } from "../components/AntDesignHeaderButtons";
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
  return (
    <ScreenWrapper>
      <Text>Filter</Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});

export default Filter;
