import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

const Category = (props) => {
  const { title, style, navigation, ...rest } = props;
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("Details", { title: `${title} meals` })
      }
    >
      <View style={{ ...styles.root, ...style }} {...rest}>
        <Text>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "35%",
    height: 120,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#ccc",
  },
});

export default Category;
